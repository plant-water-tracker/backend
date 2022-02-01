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

function update(id, changes) {
    return db("plants")
      .where("plant_id", id)
      .update(changes)
  }

function remove(id) {
    return db("plants")
      .where("plant_id", id)
      .del();
  }

module.exports = {
    get,
    getById,
    create,
    update,
    remove
}