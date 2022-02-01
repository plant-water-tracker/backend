exports.seed = function(knex, Promise) {
    return knex('plants').insert([

        { nickname: 'Bertha' , species: 'Sun Dew', h2oFrequency: 2, user_id: 3 },
        { nickname: 'Eddard' , species: 'Rosa Carolinae', h2oFrequency: 7, user_id: 2 },
        { nickname: 'Geraldo Plantworth V', species: 'Aloe', h2oFrequency: 5, user_id: 1 },
        { nickname: 'Geraldo Plantworth VI', species: 'Aloe', h2oFrequency: 5, user_id: 1 },
        { nickname: 'Geraldo Plantworth VII', species: 'Aloe', h2oFrequency: 5, user_id: 1 },
        { nickname: 'Geraldo Plantworth VIII', species: 'Aloe', h2oFrequency: 5, user_id: 1 }
        
     ])}