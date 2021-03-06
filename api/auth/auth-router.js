// Imports
const { BCRYPT_ROUNDS, RUTTER_SECRET, RUTTER_CLIENT_ID } = require('./secret')
const axios = require('axios')
const router = require('express').Router()
const User = require('../users/user-model')
const { validateUniqueUsername, validateInfo, validateChangePhone, validatePhone, validateChangePassword } = require('./auth-middleware')

// Import bcrypts for hashing
const bcrypt = require('bcryptjs')

// Import Middleware 

// Import jsonwebtoken and secret
const { tokenBuilder } = require('./auth-token')

// Routes 
router.post('/register', validateUniqueUsername, validateInfo, validatePhone, async (req, res, next) => {
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

router.get('/exchange', async (req, res, next) => {
  axios.get("https://sandbox.rutterapi.com/orders", {
 params: {
   access_token: "c05ea37a-f3b3-4e77-aed9-5944f78a076e", 
   limit: 10
 },
 auth: {
   username: RUTTER_CLIENT_ID,
   password: RUTTER_SECRET,
 }
})
 .then(res => console.table(res.data))
 .catch(err => console.log( "Err", err.response))
})



router.post('/login', validateInfo, async (req, res, next) => {
    try {
      const { username, password } = req.body
      const [user] = await User.getBy({ username })
      if(user && bcrypt.compareSync(password, user.password)){
        const token = tokenBuilder(user)
        res.json({ message: `Welcome, ${user.username}`, token, user_id: user.user_id })
      } else {
        next({ status: 401, message: 'Invalid credentials' })
      }
    } catch (err) {
      next(err)
    }
  });

// user can update phone number and password, need to add restricted access, and middlesware to make sure phone number is unique 
router.put('/update', validateChangePhone, validateChangePassword, async (req, res, next) => {
    const user = req.body
    const { user_id, password } = user
    if (!password) {
      User.update(user_id, req.body)
      .then( () => {
          res.status(200).json("Changes successful")
      })
      .catch(next)
    } else {
      const updates = {password: user.password, phoneNumber: user.phoneNumber}

      updates.password = bcrypt.hashSync(updates.password, BCRYPT_ROUNDS)
      
      User.update(user_id, updates)
          .then( () => {
              res.status(200).json("Changes successful")
          })
          .catch(next)
    }
})


module.exports = router;
