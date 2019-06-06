
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe_ingredients', function(tbl){
    tbl.increments();
    tbl.integer('recipe_id')
    tbl.integer('ingredients_id')
    tbl.foreign('recipe_id').references('recipe.id')
    tbl.foreign('ingredients_id').references('ingredients.id')
    tbl.float('quantity')
})
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe_ingredients')
};
