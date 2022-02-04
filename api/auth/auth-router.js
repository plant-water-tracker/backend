// Imports
const { BCRYPT_ROUNDS } = require('./secret')
const router = require('express').Router();
const User = require('../users/user-model')

// Import bcrypts for hashing
const bcrypt = require('bcryptjs')

// Import Middleware 

// Import jsonwebtoken and secret
const tokenBuilder = require('./auth-token')

// Routes 
router.post('/register', async (req, res, next) => {
    try {
        const { username, password } = req.body
        const hash = bcrypt.hashSync(password, BCRYPT_ROUNDS)
        const newUser = { ...req.body, password: hash }
        await User.create(newUser)
        res.status(201).json(`Welcome, ${username}`)
    } catch (err) {
        next(err)
    }
})

router.post('/login', (req, res, next) => {
    const { username, password } = req.body;
    User.findBy({ username })
        .then(([user]) => {
            if (user && bcrypt.compareSync(password, user.password)) {
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
    updates.password = bcrypt.hashSync(updates.password, BCRYPT_ROUNDS);
    
    User.update(user_id, updates)
        .then( response => {
            res.status(200).json(response);
        })
        .catch( next );
})

module.exports = router;
