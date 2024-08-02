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

  it("should support default value", function () {
    function sayHello(name: string = "Guest"): string {
      return `Hello, ${name}`;
    }
    expect(sayHello()).toBe("Hello, Guest");
    expect(sayHello("Rossi")).toBe("Hello, Rossi");
  });

  it("should support rest parameter", function () {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should support optional parameter", function () {
    function sayHello(firstName: string, lastName?: string): string {
      return lastName
        ? `Hello, ${firstName} ${lastName}`
        : `Hello, ${firstName}`;
    }

    expect(sayHello("Rossi")).toBe("Hello, Rossi");
    expect(sayHello("Rossi", "Fakhri")).toBe("Hello, Rossi Fakhri");
  });

  it("should support function overloading", function () {
    function callMe(value: number): number;
    function callMe(value: string): string;
    function callMe(value: any): any {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 10;
      }
    }

    expect(callMe(10)).toBe(100);
    expect(callMe("Rossi")).toBe("ROSSI");
  });
});
