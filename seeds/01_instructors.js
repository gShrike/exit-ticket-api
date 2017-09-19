
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructor').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructor').insert([
        {name: 'Kim Schlesinger'},
        {name: 'Peter Ostiguy'},
        {name: 'Chad Drummond'}
      ]);
    });
};
