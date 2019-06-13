exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users.increments();
    // username
    users
      .string("username", 128)
      .notNullable()
      .unique();
    // password
    users.string("password", 128).notNullable();
    // department
    users.string("department", 128);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
