const db = require('../../data/db-config')

async function get() {
    return await db('users')
}

async function getById(id) {
    return await db('users').where('user_id', id)
}

async function create(newUser) {
    const [user_id] = await db('users').insert(newUser)
    return getById(user_id)
}

module.exports = {
    get,
    getById,
    create
}