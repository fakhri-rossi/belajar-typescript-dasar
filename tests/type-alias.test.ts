import { Category, Product } from "../src/type-alias";

describe("Type Alias", function () {
  it("should support type alias in TypeScript", function () {
    const category: Category = {
      id: "1",
      name: "Handphone",
    };

    const product: Product = {
      id: "1",
      name: "Samsung S100",
      price: 20000000,
      category: category,
    };
    // product.description = "hape"; //will error

    console.info(category);
    console.info(product);
  });
});
