// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/exit_tickets'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
