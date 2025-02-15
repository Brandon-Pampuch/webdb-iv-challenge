
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', function(tbl){
        tbl.increments("id");
        tbl.string('name', 128).notNullable().unique()
        tbl.integer('cookbook_id')
        tbl.foreign('cookbook_id').references("cook_books.id") 
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes')
};
