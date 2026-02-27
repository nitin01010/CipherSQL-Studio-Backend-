const express = require("express");
const router = express.Router();

const {
  getAssignments,
  getAssignmentById,
  createAssignment,
} = require("../controllers/assignmentController");


// GET all assignments
router.get("/assignments", getAssignments);

// GET single assignment
router.get("/assignments/:id", getAssignmentById);

// CREATE assignment
router.post("/assignments", createAssignment);

module.exports = router;