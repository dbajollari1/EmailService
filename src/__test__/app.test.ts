const request = require("supertest");
const app = require("../index");

describe("GET /test route testing", () => {
  test("should return success", async () => {
    const res = await request(app).get('/test');
    expect(res.statusCode).toBe(200);
    expect(res.text).toEqual("\"success\"");
  });
});

describe("POST /public/email", () => {
    it("should send an email", async () => {
      const res = await request(app).post("/public/email").send(
      {
        to: "dbajollari1@gmail.com", 
        subject:"tester", 
        html: "tester"   
      });
      expect(res.statusCode).toBe(200);
    });
  });