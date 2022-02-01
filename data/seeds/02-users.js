exports.seed = function(knex, Promise) {
    return knex('users').insert(
        { username: 'PlantDaddy', password: 'bigRoses123', phoneNumber: 5558423654 },
        { username: 'lilyRose', password: 'delicateFlower420', phoneNumber: 6789205520 },
        { username: 'FunGuy82', password: 'shroomin356', phoneNumber: 5552203654 }
      )}