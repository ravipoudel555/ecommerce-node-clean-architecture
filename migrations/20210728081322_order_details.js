exports.up = async function (knex) {
  return await knex.schema.createTable("order_details", function (table) {
    table
      .string("order_id", 255)
      .notNullable()
      .references("id")
      .inTable("orders");
    table
      .string("product_id")
      .notNullable()
      .references("id")
      .inTable("products");
    table.integer("quantity").notNullable();
  });
};

exports.down = async function (knex) {
  return await knex.schema.dropTableIfExists("order_details");
};
