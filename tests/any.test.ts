describe("Any", function () {
  it("should support any in typescript", function () {
    const person: any = {
      id: 1,
      name: "Fakhri Rossi",
      age: 19,
    };

    person.age = 14;
    person.address = "Bandung";

    console.info(person);
  });
});
