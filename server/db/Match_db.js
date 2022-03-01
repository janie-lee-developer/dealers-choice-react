const db = require('./conn')
const { STRING, UUID, UUIDV4, TEXT, INTEGER } = db.Sequelize;

const Match = db.define('match', {
        id: {
            type: UUID,
            defaultValue: UUIDV4,
            primaryKey: true
        }
    }
);

module.exports = Match;