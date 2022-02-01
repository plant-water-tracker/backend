// Imports 
const router = require('express').Router()
const Plants = require('./plants-model')
// Routes

router.get('/:id', async (req, res, next) => {
    try {
        const plants = await Plants.getById(req.params.id)
        res.json(plants)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newPlant = await Plants.create(req.body)
        res.json(newPlant)
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const updated = await Plants.update(req.params.id, req.body)
        res.json(updated)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        await Plants.remove(req.params.id)
        res.json({ message: 'Plant deleted'})

    } catch (err) {
        next(err)
    }
})