exports.up = function (knex) {
  return knex.schema.createTable("tasks", (tbl) => {
    tbl.increments();
    tbl
      .integer("project_id")
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.string("task_desc", 128).notNullable();
    tbl.string("task_notes", 128);
    tbl.boolean("is_completed").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tasks");
};
