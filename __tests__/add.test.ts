import add from "@/shared/lib/add";

describe("Test [add] function", () => {
  it("Should must be equal", () => {
    expect(add(1, 2)).toEqual(3);
  });

  it("Should must be not equal", () => {
    expect(add(1, 3)).not.toEqual(3);
  });
});
