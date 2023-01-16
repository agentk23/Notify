const express = require('express');
const db = require('../models/db');
const User = db.users;
const router = express.Router();
//create serverside routers for every entity
//maybe create controllers to handle routers?
//connect to sequelize ORM and postgres


//Getting all users
router.get('/', (req, res) => {


});
//Getting one user
router.get('/', (req, res) => {
    res.status(200).json(JSON.stringify({ username }));
});
//l,
router.post('/login', (req, res) => {
    let body = req.body;
    try {
        (async () => {
            const query = await User.findOne({
                where: { uuid: body.uid }
            });
            if (!query) {
                const newUser = {
                    uuid: body.uid,
                    email: body.email,
                    displayName: body.displayName ? body.displayName : null,
                    photoURL: body.photoURL ? body.photoURL : null
                }
                await db.users.create({
                    uuid: newUser.uuid,
                    email: newUser.email,
                    displayName: newUser.displayName,
                    photoURL: newUser.photoURL
                });
            }
        })()
            .then(() => {
                res.status(200).json({ message: "Login successful" });
            });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
//Updating one user
router.patch('/', (req, res) => {
    res.json(JSON.stringify({ caca: "dolores" }));

});
// Deleting one user
router.delete('/', (req, res) => {
    res.json(JSON.stringify({ caca: "dolores" }));

});
module.exports = router;