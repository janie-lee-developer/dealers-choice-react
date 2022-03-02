// db
const { syncAndSeed, models: { User, Pet, Match }} = require('./db/index_db');

// express
const express = require('express');
const { static } = express;
const app = express();

// middleware : body-parser
// analyze incoming req with JSON payloads.
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

//path for static files
const path = require('path');

//webpack static files route
// app.use('/dist', static(path.join(__dirname, '../dist')));
// automatically made public folder/ bundle.js by adding output prop in webpack.config.js file.
// remove the dist/main.js folder.
// update static path for webpack to be /public instead of /dist
app.use('/public', static(path.join(__dirname, '../public')));

// react
// app.use('/client', express.static(path.join(__dirname, 'client')));
// css, picture assets
app.use('/assets', express.static(path.join(__dirname, '../assets')));

// routes
// app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '../index.html')));
app.use('/api/users', require('./routes/users_routes'));
app.use('/api/pets', require('./routes/pets_routes'));
app.use('/api/matches', require('./routes/matches_routes'));

// init
const init = async() => {
    try {
        await syncAndSeed();

        // More modification on db after asynAndSeed(); 
        const users = await User.findAll({});
        const pets = await Pet.findAll({});

        // assigning 8 pets to random 5 users. a user can have more than 1 pet. pet cannot be assigned to more than 1 user.
        let userCount = 0;
        await Promise.all(
            pets.slice(0,5).map(pet => {
                pet.userId = users[userCount].id;
                pet.save();
                console.log(pet.userId);
                userCount++;
            }),
            pets.slice(5).map(pet => {
                pet.userId = users[Math.floor(Math.random() * users.length)].id;
                pet.save();
                console.log(pet.userId);
            })
        )

        // dummy array for 10 matches
        const numsOfMatch = Array(10).fill('_');

        // create 10 unique matches
        await Promise.all(
            numsOfMatch.map( match => {
                let count = 0;
                const key = users[Math.floor(Math.random() * users.length)].id;
                const lock = users[Math.floor(Math.random() * users.length)].id;
                if (key !== lock && count < 11) {
                    Match.create({
                        keyId : key,
                        lockId : lock
                    });
                    count++;
                }
            })
        )
        
        await pets.map( pet => {
            pet.imgUrl = `${pet.breed}.png`;
            pet.save()
        })

        // port
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`******************* Listening on port ${port} *******************`));
    }
    catch(ex){
        console.log(ex);
    }
}
init();