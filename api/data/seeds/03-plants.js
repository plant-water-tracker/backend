exports.seed = function(knex, Promise) {
    return knex('plants').insert([

        { nickname: 'Bertha' , species: 'Sun Dew', h2oFrequency: 2, user_id: 3 },
        { nickname: 'Eddard' , species: 'Rosa Carolinae', h2oFrequency: 7, user_id: 2 },
        { nickname: 'Geraldo Plantworth V', species: 'Aloe', h2oFrequency: 5, user_id: 1 },
        { nickname: 'Geraldo Plantworth VI', species: 'Aloe', h2oFrequency: 5, user_id: 1 },
        { nickname: 'Geraldo Plantworth VII', species: 'Aloe', h2oFrequency: 5, user_id: 1, image: "https://images.pexels.com/photos/7663184/pexels-photo-7663184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
        { nickname: 'Geraldo Plantworth VIII', species: 'Aloe', h2oFrequency: 5, user_id: 1 , image: "https://images.pexels.com/photo/green-plant-in-white-pot-9824904/" }
        
     ])}