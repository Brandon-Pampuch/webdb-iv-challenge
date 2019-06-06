
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'double stuff taco', dish_id:1},
        {name: 'meat lover pizza', dish_id:2},
        {name: 'avacodo taco', dish_id:1}
      ]);
    });
};
