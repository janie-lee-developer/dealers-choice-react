const db = require('./conn');
const User = require('./User_db');
const Pet = require('./Pet_db');
const Match = require('./Match_db');

// const faker = require('faker');
// const Sequelize = require('sequelize');
// const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/pets_dating');
// const { STRING, UUID, UUIDV4, TEXT, INTEGER } = Sequelize;

// const User = db.define('user', {
//     id: {
//         type: UUID,
//         defaultValue: UUIDV4,
//         primaryKey: true
//     },
//     name: {
//         type: STRING(20),
//         allowNull: false,
//         unique: true,
//         validate: {
//             notEmpty: true  
//         }
//     },
//     bio: {
//         type: TEXT
//     }
// }, {
//     hooks: {
//         beforeCreate: function (user) {
//             if (!user.bio) {
//                 user.bio = `${user.name}. ${faker.lorem.paragraphs(3)}. ${user.name}`
//             }
//         }
//     }
// }
// )

// const Pet = db.define('pet', {
//     id: {
//         type: UUID,
//         defaultValue: UUIDV4,
//         primaryKey: true
//     },
//     pet_name: {
//         type: STRING(20),
//         allowNull: false,
//         unique: true,
//         validate: {
//             notEmpty: true
//         }
//     },
//     breed: {
//         type: STRING(50),
//         allowNull: false,
//         validate: {
//             notEmpty: true
//         }
//     },
//     age: {
//         type: INTEGER
//     }
// }
// )

// const Match = db.define('match', {
//     id: {
//         type: UUID,
//         defaultValue: UUIDV4,
//         primaryKey: true
//     }
// })

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