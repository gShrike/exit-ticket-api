
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('question').del()
    .then(function () {
      // Inserts seed entries
      return knex('question').insert([
        {quiz_id: 1, question_text: "Describe agile velocity"},
        {quiz_id: 2, question_text: "Explain how you use git to create a feature branch workflow"},
        {quiz_id: 3, question_text: "What is one thing you learned today?"}
      ]);
    });
};
