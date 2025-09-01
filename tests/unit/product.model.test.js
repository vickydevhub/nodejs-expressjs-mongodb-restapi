import { describe, it, expect } from "vitest";
import Product from "../../models/Product.js";

describe("Product Model", () => {
  it("should require name and price", async () => {
    const product = new Product({});
    let err;
    try {
      await product.validate();
    } catch (error) {
      err = error;
    }
    expect(err.errors.name).toBeDefined();
    expect(err.errors.price).toBeDefined();
  });

  it("should create a product with valid fields", async () => {
    const product = new Product({ name: "Book", price: 10 });
    await product.validate();
    expect(product.name).toBe("Book");
    expect(product.price).toBe(10);
  });
});