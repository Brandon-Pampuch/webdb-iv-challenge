
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cook_books', function(tbl){
        tbl.increments("id");
        tbl.string('name', 128).notNullable().unique()
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cook_books')
};
