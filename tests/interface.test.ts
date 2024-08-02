import { Seller } from "../src/seller";

describe("Interface", function () {
  it("should support i typescript", function () {
    const seller: Seller = {
      id: 1,
      name: "Rossi",
    };

    console.info(seller);
  });
});
