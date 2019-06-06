
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'sugar' },
        {name: 'flour' },
        {name: 'salt' }
      ]);
    });
};
