import request from "supertest";
import app from "../../src/app";

import mongoose from "mongoose";
import City from "../../src/app/schemas/City";

const cityPayload = {
  name: "Paulńia",
  uf: "SP",
};

describe("Sum", () => {
  beforeAll(async () => {
    if (!process.env.MONGO_URL)
      throw new Error("MongoDB server not initialized");

    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: true,
      useCreateIndex: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await City.deleteMany({});
  });

  it("sum two numbers", async () => {
    const x = 4;
    const y = 2;

    const sum = x + y;

    expect(sum).toBe(6);
  });

  it("Should create a client", async () => {
    // const city = await City.create({
    //   name: "Paulínia",
    //   uf: "SP",
    // });
    const response = await request(app).post("/cities").send(cityPayload);

    expect(response.status).toBe(201);
  });
});
