import { describe, expect, test, mock } from "bun:test";
import run from "../src/index.ts";

describe("index", () => {
  test("outages response OK", async () => {
    mock.module("../src/get-outages.ts", () => {
      return {
        getOutages: async () => [
          {
            id: "0098ceea-b4f4-49b9-9c31-752be89e0873",
            begin: "2022-01-06T11:45:00.009Z",
            end: "2022-11-23T06:58:46.524Z",
          },
        ],
      };
    });

    const outages = await run();

    expect(outages).toEqual([
      {
        id: "0098ceea-b4f4-49b9-9c31-752be89e0873",
        begin: "2022-01-06T11:45:00.009Z",
        end: "2022-11-23T06:58:46.524Z",
      },
    ]);
  });

  test.todo("outages response not OK", async () => {
    mock.module("../src/get-outages.ts", () => {
      return {
        getOutages: async () => {
          throw new Error("Fetch failed");
        },
      };
    });

    const outages = await run();

    expect(outages).toEqual("something"); // TODO
  });
});
