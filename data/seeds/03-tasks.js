exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        { project_id: 1, task_desc: "Vacuum bedroom" },
        { project_id: 1, task_desc: "Mop kitchen" },
        {
          project_id: 2,
          task_desc: "Paint",
          task_notes: "wash brushes afterwards",
          is_completed: true,
        },
        { project_id: 2, task_desc: "Sketch" },
        { project_id: 2, task_desc: "Play Clay" },
      ]);
    });
};
