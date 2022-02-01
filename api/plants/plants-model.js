const db = require('../../data/db-config')

async function get() {
    return await db('plants')
}

async function getById(id) {
    return await db('plants').where('user_id', id)
}

async function create(newPlant) {
    const [user_id] = await db('plants').insert(newPlant)
    return getById(user_id)
}

module.exports = {
    get,
    getById,
    create
}