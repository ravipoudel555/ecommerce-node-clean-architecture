exports.up = async function (knex) {
  return await knex.schema.createTable("orders", function (table) {
    table.string("id", 255).unique("id").notNullable().primary();
    table
      .string("user_id", 255)
      .notNullable()
      .references("id")
      .inTable("users");
    table.string("order_date").notNullable();
  });
};

exports.down = async function (knex) {
  return await knex.schema.dropTableIfExists("orders");
};
