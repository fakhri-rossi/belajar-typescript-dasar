import { Customer, CustomerType } from "../src/enum";

describe("Enum", function () {
  it("should be support in TypeScript", function () {
    const customer: Customer = {
      id: 1,
      name: "Rossi",
      type: CustomerType.GOLD,
    };

    console.info(customer);
  });
});
