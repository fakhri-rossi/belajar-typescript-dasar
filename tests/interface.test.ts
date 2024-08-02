import { Seller } from "../src/seller";

describe("Interface", function () {
  it("should support i typescript", function () {
    const seller: Seller = {
      id: 1,
      name: "Toko Rossi",
      nib: "172228",
      npwp: "17262399",
    };

    seller.name = "Toko Andi";
    // seller.nib = '24252626'; //bakal error

    console.info(seller);
  });
});
