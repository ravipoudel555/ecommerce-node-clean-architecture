exports.up = async function (knex) {
  return await knex.schema.createTable("users", function (table) {
    table.string("id", 255).unique("id").notNullable().primary();
    table.string("citizenship_no", 255).unique("citizenshipNo").notNullable();
    table.string("first_name", 255).notNullable();
    table.string("last_name", 255).notNullable();
    table.string("email", 255).unique("email").notNullable();
    table.string("password", 255).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = async function (knex) {
  return await knex.schema.dropTableIfExists("users");
};
