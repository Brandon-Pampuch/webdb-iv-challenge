
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cook_books').del()
    .then(function () {
      // Inserts seed entries
      return knex('cook_books').insert([
        {name: 'Austin Eats'},
        {name: 'TexMex'},
        
      ]);
    });
};
