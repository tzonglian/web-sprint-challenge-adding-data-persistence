exports.up = function (knex) {
  return knex.schema.createTable("resources", (tbl) => {
    tbl.increments();
    tbl.string("resource_name", 128).notNullable().unique();
    tbl.string("resource_desc", 128);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("resources");
};
