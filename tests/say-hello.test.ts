import { sayHello } from "../src/say-hello";

describe("sayHello", function (): void {
  it("should return hello Rossi", function (): void {
    expect(sayHello("Rossi")).toBe("Hello Rossi");
  });
});
