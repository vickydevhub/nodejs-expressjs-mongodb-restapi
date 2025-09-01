// tests/integration/product.routes.test.js
import { describe, it, expect, beforeAll, afterAll } from "vitest";
import request from "supertest";
import app from "../../app"; // your Express app

describe("Product API", () => {
  it("should create a product", async () => {
    const res = await request(app)
      .post("/api/products")
      .send({ name: "Laptop", price: 1200 });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("_id");
    expect(res.body.name).toBe("Laptop");
  });

  it("should get all products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
