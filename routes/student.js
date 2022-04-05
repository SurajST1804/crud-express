// const { Router } = require("express");
// const { getAllPosts } = require("../controllers/post");
// const router = Router();
// router.route("").get(getAllPosts);

// module.exports = router;

const { Router } = require("express");
const {
  createStudent,
  getAllStudents,
  getStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/student");
const router = Router();

router.route("").get(getAllStudents).post(createStudent);
router.route("/:id").get(getStudent).put(updateStudent).delete(deleteStudent);
module.exports = router;
