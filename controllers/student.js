const { json } = require("express/lib/response");
const StudentSchema = require("../model/Student");
/*@HTTP GET REQ
@ACCESS public
@uRl /api/posts/allposts*/

// exports.getAllPosts = (req, res) => {
//   let data = [
//     {
//       id: 1,
//       title: "Node Js",
//       body: "welcome to node js",
//     },
//   ];
//   res.status(200).json(data);
// };

// 2nd time
// exports.getStudents = (req, res) => {
//   res.send("ok");
// };

// exports.createStudent = async (req, res) => {
//   let { name, std_id, email, courses } = req.body;
//   let payload = {
//     name,
//     std_id,
//     email,
//     courses,
//   };
//   let data = await StudentSchema.create(payload);
//   res.status(201).json({ message: "successfuly student created", data });
// };

// 3rd type
exports.getAllStudents = async (req, res) => {
  try {
    let payload = await StudentSchema.find();
    res.status(200).json({ message: "Fetched data", payload });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "Server Error" });
  }
};
exports.getStudent = async (req, res) => {
  try {
    let payload = await StudentSchema.findOne({ _id: req.params.id });
    res.status(200).json({ message: "fetched student", payload });
  } catch (error) {
    console.log(error);
    res.status(501), json({ message: "Server Error" });
  }
};
exports.createStudent = async (req, res) => {
  try {
    let { name, std_id, email, courses } = req.body;
    let payload = {
      name,
      std_id,
      email,
      courses,
    };
    // save payload to database
    let data = await StudentSchema.create(payload);
    res.status(201).json({ message: "Successfully student created", data });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "Server Error" });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    let { name, std_id, email, courses } = req.body;
    let payload = await StudentSchema.findByIdAndUpdate(
      req.params.id,
      {
        name,
        std_id,
        email,
        courses,
      },
      { new: true }
    );
    await payload.save();
    res.status(201).json({ message: "Successfully student updated", payload });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "Server Error" });
  }
};
exports.deleteStudent = async (req, res) => {
  try {
    await StudentSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Successfully student deleted" });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "Server Error" });
  }
};
