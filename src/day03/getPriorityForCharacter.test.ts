import { getPriorityForCharacter } from "./getPriorityForCharacter";

describe("getPriorityForCharacter", () => {
  it("should return 1 for a", () => {
    expect(getPriorityForCharacter("a")).toBe(1);
  });
  it("should return 2 for b", () => {
    expect(getPriorityForCharacter("b")).toBe(2);
  });
  it("should return 26 for z", () => {
    expect(getPriorityForCharacter("z")).toBe(26);
  });
  it("should return 27 for A", () => {
    expect(getPriorityForCharacter("A")).toBe(27);
  });
});
