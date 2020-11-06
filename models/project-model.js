const db = require("../data/config");

// create functions for your endpoints

module.exports = {
  /// function names
  getProjects, // WORKS
  getResources, // WORKS
  getTasks, // WORKS
  addProject, // WORKS
  addResource, // WORKS
  addTask,
};

function getProjects() {
  return db("projects");
}

function getResources() {
  return db("resources");
}

function getTasks() {
  return db("tasks as t")
    .join("projects as p", "p.id", "t.project_id")
    .select(
      "t.id",
      "t.task_desc",
      "t.task_notes",
      "t.is_completed",
      "p.project_name",
      "p.project_desc"
    );
}

function addProject(project) {
  return db("projects")
    .insert(project)
    .then(() => {
      return getProjects();
    });
}

function addResource(resource) {
  return db("resources")
    .insert(resource)
    .then(() => {
      return getResources();
    });
}

function addTask(task) {
  return db("tasks")
    .insert(task)
    .then(() => {
      return getTasks();
    });
}
