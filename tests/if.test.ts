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
});
