const router = require('express').Router()
const Users = require('./user-model')

router.get('/api/users', async (req, res, next) => {
    try {
        const users = await Users.get()
        res.json(users)
    }
    catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const users = await Users.getById(req.params.id)
        res.json(users)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newUser = await Users.create(req.body)
        res.status(201).json(newUser)
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params
        await Users.update(id, req.body)
        const updated = await Users.getById(id)
        res.json(updated)
    } catch (err) {
        next(err)
    }
})

module.exports = router