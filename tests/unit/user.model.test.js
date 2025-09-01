import { describe, it, expect } from "vitest";
import User from "../../models/User.js";

describe("User Model", () => {
  it("should require username, email, and password", async () => {
    const user = new User({});
    let err;
    try {
      await user.validate();
    } catch (error) {
      err = error;
    }
    expect(err.errors.username).toBeDefined();
    expect(err.errors.email).toBeDefined();
    expect(err.errors.password).toBeDefined();
  });

  it("should set created_at automatically", async () => {
    const user = new User({
      username: "john",
      email: "john@example.com",
      password: "secret123",
    });
    await user.validate();
    expect(user.created_at).toBeDefined();
  });
});