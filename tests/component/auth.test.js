// tests/component/auth.test.js
import { describe, it, expect } from "vitest";
import auth from "../../middleware/auth";

function mockReq(headers = {}) {
  return { headers };
}
function mockRes() {
  const res = {};
  res.status = (code) => {
    res.statusCode = code;
    return res;
  };
  res.json = (payload) => {
    res.payload = payload;
    return res;
  };
  return res;
}

describe("Auth Middleware", () => {
  it("should allow valid API key", () => {
    const req = mockReq({ "x-api-key": "secret" });
    const res = mockRes();
    let nextCalled = false;

    auth(req, res, () => {
      nextCalled = true;
    });

    expect(nextCalled).toBe(true);
  });

  it("should block invalid API key", () => {
    const req = mockReq({ "x-api-key": "wrong" });
    const res = mockRes();

    auth(req, res, () => {});

    expect(res.statusCode).toBe(401);
    expect(res.payload).toEqual({ message: "Unauthorized" });
  });
});
