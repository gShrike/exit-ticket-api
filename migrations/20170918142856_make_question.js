
exports.up = function(knex, Promise) {
  return knex.schema.createTable('question', (table) => {
    table.increments();
    table.integer('quiz_id')
      .references('quiz.id')
      .onDelete('CASCADE')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('question');
};
