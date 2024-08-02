describe("Object", function () {
  it("should support object type in TypeScript", function () {
    const person: { id: string; name: string } = {
      id: "1",
      name: "Rossi",
    };

    console.info(person);

    person.id = "2";
    person.name = "fakhri";
  });
});
