describe("If Statement", function () {
  it("should support if statement in typescript", function () {
    const examValue = 90;

    if (examValue > 80) {
      console.info("good");
    } else if (examValue > 60) {
      console.info("not bad");
    } else {
      console.info("Try Again");
    }
  });

  it("should support ternary operator in typescript", function () {
    const value = 90;
    const say = value >= 75 ? "Congratss" : "Nice Try";

    console.info(say);
  });

  it("should support switch statement", function () {
    function sayHello(name: string) {
      switch (name) {
        case "Rossi":
          return "Hello, sir!";

        case "Andi":
          return "Hello, Bro!";

        default:
          return "Hello, Buddy!";
      }
    }

    console.info(sayHello("Rossi"));
    console.info(sayHello("Andi"));
    console.info(sayHello("Hasan"));
  });
});
