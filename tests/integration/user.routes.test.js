import request from "supertest";
import app from "../../app"; // your Express app
import User from "../../models/User";

describe("User API", () => {
  it("should create a user", async () => {
    const res = await request(app)
      .post("/user/add")
      .send({
        username: "alice",
        email: "alice@example.com",
        password: "secret",
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.username).toBe("alice");

    // confirm in DB
    const user = await User.findOne({ email: "alice@example.com" });
    expect(user).not.toBeNull();
  });
});
