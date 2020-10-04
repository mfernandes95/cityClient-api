import City from "../../src/app/schemas/City";
// import City from "../../src/app/schemas/City";
// const { City } = require("../../src/app/schemas");
// const { City } = require("../../src/app/schemas");

describe("Sum", () => {
  it("sum two numbers", async () => {
    const x = 4;
    const y = 2;

    const sum = x + y;

    expect(sum).toBe(6);
  });

  it("Should sum two numbers", async () => {
    console.log("CITY", City);

    const city = await City.create({
      name: "Pinda",
      uf: "PO",
    });

    console.log("CITY", city);

    expect(city.name).toBe("Pinda");
  });
});
