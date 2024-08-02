describe("Array", function () {
  it("should same with javascript", function () {
    const names: string[] = ["rossi", "stark", "musk"];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });

  it("should support readonly array", function () {
    const hobbies: ReadonlyArray<string> = ["membaca", "menulis"];
    console.info(hobbies);
    console.info(hobbies[0]);
    console.info(hobbies[1]);

    // hobbies[0] = "lari";
  });

  it("should support tuple", function () {
    const person: readonly [string, string, number] = ["fakhri", "rossi", 40];

    console.info(person[0]);
    console.info(person[1]);
    console.info(person[2]);
  });
});
