describe("Optional Parameter", function () {
  it("should support null and undefined in TypeScript", function () {
    function sayHello(name?: string | null) {
      if (name) {
        console.info(`Hello, ${name}`);
      } else {
        console.info(`Hello`);
      }
    }

    sayHello("rossi");
    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(null); // if name? doesnt union null, this will be error
  });
});
