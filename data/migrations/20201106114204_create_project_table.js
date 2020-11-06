exports.up = function (knex) {
  return knex.schema.createTable("projects", (tbl) => {
    tbl.increments();
    tbl.string("project_name", 128).notNullable().unique();
    tbl.string("project_desc", 128);
    tbl.boolean("is_completed").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projects");
};
