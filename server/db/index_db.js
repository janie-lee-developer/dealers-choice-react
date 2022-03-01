const db = require('./conn');
const User = require('./User_db');
const Pet = require('./Pet_db');
const Match = require('./Match_db');

//Associations
Pet.belongsTo(User); //userId
User.hasMany(Pet, { foreignKey: 'userId', as: 'pets' });
Match.belongsTo(User, { as: 'key' });
Match.belongsTo(User, { as: 'lock' });

const syncAndSeed = async () => {
    await db.sync({ force: true });

    const users = await Promise.all(
        ['Janie', 'Jessica', 'Norman', 'Moe', 'Lucy'].map(name => User.create({ name }))
    )

    const breeds = ['Pomeranian', 'Siberian Husky', 'Bulldog', 'Poodle', 'GoldenRetriever'];
    const petNames = Array(8).fill().map((_, index) => `pet name ${index + 1}`);

    const pets = await Promise.all(
        petNames.map(pet => Pet.create({
            pet_name: pet,
            breed: breeds[Math.floor(Math.random() * breeds.length)],
            age: (Math.floor(Math.random() * 12))+1
        }))
    )  
}

module.exports = {
    db,
    syncAndSeed,
    models: {
        User,
        Pet,
        Match
    }
}