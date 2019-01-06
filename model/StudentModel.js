'user strict';
var sql = require('./db.js');

//Student object constructor
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.created_at = new Date();
  }
}
Student.createStudent = function createStudent(newStudent, result) {
  sql.query("INSERT INTO students set ?", newStudent, function (err, res) {

    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};
Student.getStudentById = function getStudent(StudentId, result) {
  sql.query("Select name from students where id = ? ", StudentId, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);

    }
  });
};
Student.getAllStudents = function getAllStudents(result) {
  sql.query("Select * from students", function (err, res) {

    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Student.updateStudent = function (id, name, result) {
  sql.query("Update students SET name = ?  WHERE id = ?", [name,id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
Student.deleteStudent = function (id, result) {
  sql.query("DELETE FROM students WHERE id = ?", id, function (err, res) {

    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {

      result(null, res);
    }
  });
};
Student.clear = function () {
    sql.query("DELETE FROM students", function (err) {
        if (err) throw err;
      });
};

module.exports= Student; 
