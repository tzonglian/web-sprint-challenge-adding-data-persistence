const router = require("express").Router();
const Projects = require("../models/project-model");

const currentTime = new Date().toDateString();

// Test endpoint is working - WORKS
router.get("/test", (req, res) => {
  res.status(200).json({ message: "Server running! " + currentTime });
});

// ENDPOINTS
// Get all projects - WORKS
router.get("/projects", (req, res) => {
  Projects.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Get all resources - WORKS
router.get("/resources", (req, res) => {
  Projects.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Get all tasks - WORKS
router.get("/tasks", (req, res) => {
  Projects.getTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// Add new project - WORKS
router.post("/projects", (req, res) => {
  Projects.addProject(req.body)
    .then((newProject) => {
      res.status(201).json(newProject);
    })
    .catch((err) => {
      res.status(500).json({ error: error.message });
    });
});

// Add new resource - WORKS
router.post("/resources", (req, res) => {
  Projects.addResource(req.body)
    .then((newResource) => {
      res.status(201).json(newResource);
    })
    .catch((err) => {
      res.status(500).json({ error: error.message });
    });
});

// Add new task
router.post("/tasks", (req, res) => {
  Projects.addTask(req.body)
    .then((newTask) => {
      res.status(201).json(newTask);
    })
    .catch((err) => {
      res.status(500).json({ error: error.message });
    });
});

// @desc			Update a name by id
// @route			PUT /:id
//router.put("/:id", (req, res) => {});

// @desc			Remove a name by id
// @route			DELETE /:id
//router.delete("/:id", (req, res) => {});

module.exports = router;
