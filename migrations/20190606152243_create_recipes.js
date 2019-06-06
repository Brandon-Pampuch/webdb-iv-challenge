
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', function(tbl){
    tbl.increments();
    tbl.string('name', 128).notNullable().unique()
    tbl.integer('dish_id')
    tbl.foreign('dish_id').references('dishes.id')
    tbl.string('instructions')
});
}
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes')
};
