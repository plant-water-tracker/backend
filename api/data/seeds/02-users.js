exports.seed = function(knex) {
    return knex('users').insert([

        { username: 'PlantDaddy', password: '$2a$08$.ffU.RMO4PYMs7a8QkqfR./yUS4GpKO9VO0SBQHD9MMA4cnC5FeWO', phoneNumber: '5558423654' },
        { username: 'FunGuy82', password: '$2a$08$ji.U47BI.b/gkUJ0hhr71ein7qmOvumgz2f8Djt.9EiZMuLN3QUEe', phoneNumber: '5552203654' },
        { username: 'WeDontTalkAboutBruno', password: '$2a$08$dCZMyZyqkNP0/R48RUORve3cpsdaY2BWR.kNBjj2qNtZOoyJFj.ZG', phoneNumber: '7589665321' }
        
      ])}