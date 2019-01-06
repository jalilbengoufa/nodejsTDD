'use strict';

var Student = require("../model/StudentModel")
exports.get_all_students = function (req, res) {
  Student.getAllStudents(function (err, student) {

    if (err)
      res.send(err);
    res.send(student);
  });
}



exports.create_a_student = function (req, res) {
  var newStudent = new Student(req.query.name, req.query.age);

  //handles null error 
  if (newStudent.name == "" || newStudent.age == "") {

    res.status(400).send({
      error: true,
      message: 'Please provide name and age'
    });
  } else {

    Student.createStudent(newStudent, function (err, student) {
      if (err)
        res.send(err);
      res.json(student);
    });
  }
}


exports.get_a_student = function (req, res) {
  Student.getStudentById(req.params.id, function (err, student) {
    if (err)
      res.send(err);
    res.json(student);
  });
}


exports.update_a_student = function (req, res) {

  //handles null error 
  if (req.query.name == "") {

    res.status(400).send({
      error: true,
      message: 'Please provide name '
    });
  } else {
    Student.updateStudent(req.params.id, req.query.name, function (err, student) {
      if (err)
        res.send(err);
      res.json(student);
    });
  }

}

exports.delete_a_student = function (req, res) {
  Student.deleteStudent(req.params.id, function (err) {
    if (err)
      res.send(err);
    res.json({
      message: 'Student successfully deleted'
    });
  });
}
