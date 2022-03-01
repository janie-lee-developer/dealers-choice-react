//db
const { models: { User, Pet, Match } } = require('../db/index_db');

//router
const router = require('express').Router();
module.exports = router;

//routes
router.get('/', async (req, res, next) => {
    try {
        const pets = await Pet.findAll({
            include: [
                { model: User, as: 'user'}
            ]
        });
        res.json(pets);
    }
    catch (ex) {
        next(ex)
    }
})