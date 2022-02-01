exports.seed = function(knex) {
    return knex('users').insert([

        { username: 'PlantDaddy', password: 'bigRoses123', phoneNumber: '5558423654' },
        { username: 'FunGuy82', password: 'shroomin356', phoneNumber: '5552203654' },
        { username: 'WeDontTalkAboutBruno', password: 'nonono1', phoneNumber: '7589665321' }
        
      ])}