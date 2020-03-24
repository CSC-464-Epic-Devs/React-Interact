const execSync = require("child_process").execSync;
import { TestForPlagarism } from "../../../PlagarismChecker";

// get all changed files from develop
// meaning this branch should have originally spawned from develop

test("Plagarism", async () => {
  jest.setTimeout(30000);
  const regex = new RegExp(".*.mdx", "gm");
  const files = execSync("git diff --name-only develop")
    .toString()
    .match(regex);
  const test = await TestForPlagarism(files);
  expect(test.flaggedFiles).toStrictEqual([]);
});
