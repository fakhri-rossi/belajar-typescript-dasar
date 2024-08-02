import { Seller } from "../src/seller";

describe("Interface", function () {
  it("should support interface typescript", function () {
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

  it("should support function interface", function () {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    // const add: AddFunction = (value1: number, value2: number): number => { // boleh secara eksplisit, boleh engga
    const add: AddFunction = (value1, value2) => {
      return value1 + value2;
    };

    expect(add(2, 2)).toBe(4);
  });

  it("should support indexable interface", function () {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["fakhri", "rossi", "stark"];

    console.info(names);
  });

  it("should support indexable interface for non number index", function () {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Rossi",
      address: "Indonesia",
    };

    expect(dictionary["name"]).toBe("Rossi");
    expect(dictionary["address"]).toBe("Indonesia");
  });
});
