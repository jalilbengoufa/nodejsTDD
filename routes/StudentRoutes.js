"use strict";


var controller = require("../controller/StudentController")
module.exports = function(app) {

  // student Routes
  app.route('/students')
    .get(controller.get_all_students)
    .post(controller.create_a_student);

  app.route('/student/:id')
    .get(controller.get_a_student)
    .put(controller.update_a_student)
    .delete(controller.delete_a_student);
}
