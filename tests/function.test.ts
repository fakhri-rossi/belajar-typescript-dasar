describe("Function", function () {
  it("should support in typescript", function () {
    function sayHello(name: string): string {
      return `Hello, ${name}`;
    }

    expect(sayHello("Rossi")).toBe("Hello, Rossi");

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    printHello("Rossi");
  });
});
