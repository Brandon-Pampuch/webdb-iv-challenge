const knex = require('knex')

//configure knex

const knexConfig = require('../knexfile') //has both tables
  
const db = knex(knexConfig.development);

module.exports ={

getAllDishes,

    
}

function getAllDishes() {
    return db('dishes')
}

