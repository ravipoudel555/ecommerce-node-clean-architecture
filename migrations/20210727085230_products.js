exports.up = async function (knex) {
  return await knex.schema.createTable("products", function (table) {
    table.string("id", 255).unique("id").notNullable().primary();
    table.string("name", 255).notNullable();
    table.text("description").notNullable();
    table.string("image_url", 255).notNullable();
    table.integer("price").notNullable();
    table.integer("quantity").notNullable();
    table.timestamps(true, true);
  });
};

exports.down = async function (knex) {
  return await knex.schema.dropTableIfExists("products");
};
