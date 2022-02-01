// Imports
const router = require('express').Router();
const User = require('../users/user-model')

// Import bcrypts for hashing
const bcryptjs = require('bcryptjs')

// Import Middleware 

// Import jsonwebtoken and secret
const tokenBuilder = require('./auth-token')

// Routes 
router.post('/register', (req, res, next) => {
    const user = req.body;
    user.password = bcryptjs.hashSync(user.password, 8);
    User.create(user)
        .then( response => {
            res.status(201).json(response)
        })
        .catch(next);
})

router.post('/login', (req, res, next) => {
    const { username, password } = req.body;
    User.findBy({ username })
        .then(([user]) => {
            if (user && bcryptjs.compareSync(password, user.password)) {
                const token = tokenBuilder(user);
                res.json({
                message: `welcome, ${user.username}`,
                token: token,
            });
            } else {
                next({ status: 401, message: "invalid credentials" });
             }
        })
        .catch(next);
})
// user can update phone number and password, need to add restricted access, and middlesware to make sure phone number is unique 
router.put('/update', (req, res, next) => {
    const user = req.body
    const {user_id} = user;
    const updates = {password: user.password, phone_number: user.phone_number}
    updates.password = bcryptjs.hashSync(updates.password, 8);
    
    User.update(user_id, updates)
        .then( response => {
            res.status(200).json(response);
        })
        .catch( next );
})

module.exports = router;
