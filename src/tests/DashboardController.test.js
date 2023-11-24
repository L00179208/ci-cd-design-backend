const chai = require("chai");
const chaiHttp = require("chai-http");
const { dashboard } = require("../controllers/DashboardController"); // Replace 'your-module' with the actual module path

// Configure Chai to work with HTTP requests
chai.use(chaiHttp);

const expect = chai.expect;

describe("DashboardTest", function () {
  it("should respond with a 201 status code and the expected JSON response", function (done) {
    // Simulate an HTTP request to your dashboard function
    chai
      .request("http://localhost:3333/api/V1") // Replace 'your-port' with the actual port of your server
      .get("/") // Assuming this is the route that triggers your dashboard function
      .end(function (err, res) {
        // Check for errors
        expect(err).to.be.null;

        // Check the HTTP status code
        expect(res).to.have.status(201);

        // Check the JSON response
        expect(res.body).to.be.an("object");
        expect(res.body.success).to.be.true;
        expect(res.body.data).to.be.an("object");
        expect(res.body.data.data).to.equal("Welcome to the API Service");
        expect(res.body.message).to.equal("Data loaded successfully");

        done(); // Call done to indicate that the test is complete
      });
  });
});
