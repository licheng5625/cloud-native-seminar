const request = require("supertest");
const app = require("./app");

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});



describe("Test the root path, response", () => {
  test("It should response with version", async () => {
    const response = await request(app).get("/");
    expect(response.text).toContain("Current version is");
  });
});



describe("Test the user, response", () => {
  test("It should return all users", async () => {
    const response = await request(app).get("/user");
    expect(JSON.parse(response.text).length).not.toBe(0);
  });
});