import assert from "node:assert/strict";
import { test } from "node:test";
import { project, summarizeProject } from "../src/index.js";

test("Stellar QR Payment exposes project metadata", () => {
  assert.equal(project.slug, "stellar-qr-payment");
  assert.ok(project.features.length >= 3);
  assert.match(summarizeProject(), /planned features/);
});
