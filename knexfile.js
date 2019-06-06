// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './Data/development.sqlite'
    },
      useNullAsDefault: true,  // required only for sqlite 3
      debug:true,
    
  },
};
