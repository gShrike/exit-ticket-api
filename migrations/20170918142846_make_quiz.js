
exports.up = function(knex, Promise) {
  return knex.schema.createTable('quiz', (table) => {
    table.increments();
    table.integer('instructor_id')
      .references('instructor.id')
      .onDelete('CASCADE')
    table.timestamps()
    table.text('questions')
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('quiz')
};
