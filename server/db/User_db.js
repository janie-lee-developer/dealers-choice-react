const db = require('./conn')
const { STRING, UUID, UUIDV4, TEXT, INTEGER } = db.Sequelize;
const faker = require('faker');

const User = db.define('user', {
        id: {
            type: UUID,
            defaultValue: UUIDV4,
            primaryKey: true
        },
        name: {
            type: STRING(20),
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
            }
        },
        bio: {
            type: TEXT
        }
    }, {
        hooks: {
            beforeCreate: function (user) {
                if (!user.bio) {
                    user.bio = `${user.name}. ${faker.lorem.paragraphs(3)}. ${user.name}`
                }
            }
        }
    }
);

module.exports = User;