describe("Data Type", function () {
  it("should must declare", function () {
    let name: string = "Fakhri Rossi";
    let balance: number = 1000000000;
    let isVip: boolean = true;

    console.info(name);
    console.info(balance);
    console.info(isVip);

    // to run tsc continuously, run npx tsc --watch
    // name = 300;
    // balance = "rossi";
    // isVip = "wkwk";
  });
});
