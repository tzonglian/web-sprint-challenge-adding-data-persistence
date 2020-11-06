exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        { project_name: "Clean House", project_desc: "Clean all the things!" },
        { project_name: "Practice Art", project_desc: "Art all the things!" },
      ]);
    });
};
