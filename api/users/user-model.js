const db = require('../data/db-config')

async function get() {
    return await db('users')
}

async function getById(id) {
    return await db('users').where('user_id', id)
}

async function getPlantByUserId(id) {
    const userPlants = await db('users as u')
        .leftJoin('plants as p', 'u.user_id', 'p.user_id')
        .select('p.nickname', 'p.species', 'p.h2oFrequency', 'p.image')
        .where('p.user_id', id)
    const user = await getById(id)
    return {
        user,
        userPlants
    }
}

function update(id, changes) {
    return db("users")
      .where("user_id", id)
      .update(changes)
  }

async function create(newUser) {
    const { user_id } = await db('users').insert(newUser)
    return getById(user_id)
}

module.exports = {
    get,
    getById,
    getPlantByUserId,
    update,
    create
}