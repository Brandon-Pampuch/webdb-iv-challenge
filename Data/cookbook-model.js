const knex = require('knex')

//configure knex

const knexConfig = require('../knexfile') //has both tables
  
const db = knex(knexConfig.development);

module.exports ={

getAllDishes,
addDish,
findDishById,
getAllRecipes,
addRecipe
    
}

function getAllDishes() {
    return db('dishes')
}

function addDish(dish) {
    return db('dishes')
        .insert(dish,'id') 
}

function findDishById(id) {
    return db('dishes')
    .where({id:id})
    .first() //takes first thing out of an array  
}

function addRecipe(recipe) {
    return db('recipes')
        .insert(recipe,'id') 
}


function getAllRecipes() {
    return db('recipes')
}

