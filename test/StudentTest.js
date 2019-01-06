//During the test the env variable is set to test
process.env.NODE_ENV = 'test';


var Student = require("../model/StudentModel")
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
describe('Students', () => {

  beforeEach(function (done) {
    Student.clear(function (err) {
      console.log(err)
    });
    done();
  });
  after(function (done) {
    process.exit()
    done();
  });

  /*
   * Test the /GET route
   */
  describe('/GET student', () => {
    it('it should GET all the students', (done) => {
      chai.request(server)
        .get('/students')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  /*
   * Test the /POST route
   */
  describe('/POST students', () => {
    it('it should  POST a student', (done) => {
      var name = "testname";
      var age = 33;

      chai.request(server)
        .post('/students' + "?name=" + name + "&age=" + age)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('number');
          done();
        });
    });
  });

});
