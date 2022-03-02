const db = require('./conn')
const { STRING, UUID, UUIDV4, TEXT, INTEGER } = db.Sequelize;

const Pet = db.define('pet', {
        id: {
            type: UUID,
            defaultValue: UUIDV4,
            primaryKey: true
        },
        pet_name: {
            type: STRING(20),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        breed: {
            type: STRING(50),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        age: {
            type: INTEGER
        },
        imgUrl: {
            type: STRING(30)
        }
    }
);

module.exports = Pet;