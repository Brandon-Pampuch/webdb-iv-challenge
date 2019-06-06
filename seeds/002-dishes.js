
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {name: 'tacos', cookbook_id: 1},
        {name: 'pizza', cookbook_id: 2},
        {name: 'hamburger', cookbook_id: 1}
      ]);
    });
};
