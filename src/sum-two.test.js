import { sum } from "./sum-two";
describe("sum tests", () => {
  it("adds 2 numbers", () => {
    expect(sum(1, 0)).toEqual(1);
  });
});
