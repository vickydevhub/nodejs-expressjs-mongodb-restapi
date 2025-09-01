import { beforeAll, afterAll, afterEach } from "vitest";
import { connectTestDB, closeTestDB, clearTestDB } from "./setup.js";

beforeAll(async () => {
  await connectTestDB();
});

afterEach(async () => {
  await clearTestDB();
});

afterAll(async () => {
  await closeTestDB();
});
