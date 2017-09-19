
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('quiz').del()
    .then(function () {
      // Inserts seed entries
      return knex('quiz').insert([
        {instructor_id: 1},
        {instructor_id: 2},
        {instructor_id: 3}
      ]);
    });
};
