//db
const { models: { User, Pet, Match } } = require('../db/index_db');

//router
const router = require('express').Router();
module.exports = router;

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
})