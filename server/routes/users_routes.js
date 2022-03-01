//db
const { models: { User, Pet, Match } } = require('../db/index_db');

//router
const router = require('express').Router();
module.exports = router;

//routes
router.get('/', async(req, res, next) => {
    try {
        const users = await User.findAll({
            include: [
                { model: Pet, as: 'pets' }
            ]
        });
        res.json(users);
    }
    catch (ex) {
        next(ex)
    }
});

// I need to get the prime key in order to get details of the user.
// router.get('/:id', async (req, res, next) => {
//     try {
//         const user = await User.findByPk()
//         res.json(user);
//     }
//     catch (ex) {
//         next(ex)
//     }
// })