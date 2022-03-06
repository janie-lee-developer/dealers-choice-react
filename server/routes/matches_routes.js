//db
const { models: { User, Pet, Match } } = require('../db/index_db');

//router
const router = require('express').Router();
module.exports = router;

router.post('/', async (req, res, next) => {
    try {
        console.log('******************************', req.body)
        // find existing user or create a new match
        const matches = await User.findAll();
        let match;
        matches.length === 0 ?
            match = await User.create({ name: "Kevin", bio: "I love walking dogs in the morning!" }) :
            match = matches[Math.floor(Math.random() * matches.length)];

        // find existing pet or create a new pet
        const pets = await Pet.findAll();
        let animal;
        pets.length === 0 ?
            animal = await Pet.create({ pet_name: 'Ruby', breed: 'Poodle', age: 4, imgUrl: 'Poodle.png' }) :
            animal = pets[Math.floor(Math.random() * pets.length)];

        // associating existing or new match to their pet
        animal.userId = match.id;
        animal.save();

        // new user
        const data = req.body;
        const user = await User.create({ name: data.userName, bio: data.userBio });
        const pet = await Pet.create({ pet_name: data.petName, breed: data.petBreed, age: data.petAge, imgUrl: data.petImgUrl });
        pet.userId = user.id;
        pet.save();

        // create a match instance
        const couple = await Match.create({ keyId: user.id, lockId: match.id });

        res.json(couple)
    }
    catch (ex) {
        next(ex);
    }
})

//routes
router.get('/', async (req, res, next) => {
    try {
        const matches = await Match.findAll({
            include : [
                { model: User, as: 'key', include : [ { model: Pet, as : 'pets' }]},
                { model: User, as: 'lock', include: [{ model: Pet, as: 'pets' }]}
            ]
        });
        res.json(matches);
    }
    catch(ex){
        next(ex)
    }
});



router.delete('/:id', async(req, res, next) => {
    try {
        const match = await Match.findByPk(req.params.id);
        await match.destroy();
        res.sendStatus(204);
    }
    catch(ex){
        next(ex)
    }
});

