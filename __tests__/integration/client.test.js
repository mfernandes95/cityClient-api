import request from "supertest";
import app from "../../src/app";

import mongoose from "mongoose";
import Client from "../../src/app/schemas/Client";

const clientPayload = {
  full_name: "Matheus Fernandes Pinheiroassa",
  gender: "M",
  year_of_birth: "1995/05/05",
  age: 25,
  city_where_live: "Paulínia",
};

describe("Client", () => {
  beforeAll(async () => {
    if (!process.env.MONGO_URL)
      throw new Error("MongoDB server not initialized");

    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: true,
      useCreateIndex: true,
      // useNewUrlParser: true,
      // useFindAndModify: true,
      // useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await Client.deleteMany({});
  });

  it("Should create a client", async () => {
    const response = await request(app).post("/clients").send(clientPayload);

    expect(response.status).toBe(201);
  });

  it("Should get client by ID", async () => {
    const client = await Client.create(clientPayload);

    const response = await request(app).get(`/clients/${client.id}`);

    expect(response.status).toBe(200);
  });

  it("Should return error 400 when get client by ID nonexistent", async () => {
    const response = await request(app).get("/clients/123");

    expect(response.status).toBe(400);
  });

  it("Should get client by NAME", async () => {
    const client = await Client.create(clientPayload);

    const response = await request(app).get(
      `/name-clients/${client.full_name}`
    );

    expect(response.status).toBe(200);
  });

  it("Should return error 400 when get client by NAME nonexistent", async () => {
    const response = await request(app).get("/name-clients/joaoa");

    expect(response.status).toBe(400);
  });

  it("Should delete client by ID", async () => {
    const client = await Client.create(clientPayload);

    const response = await request(app).delete(`/clients/${client.id}`);

    expect(response.status).toBe(200);
  });

  it("Should return error 400 when delete client by ID nonexistent", async () => {
    const response = await request(app).delete("/clients/123");

    expect(response.status).toBe(400);
  });

  it("Should update client NAME by ID", async () => {
    const client = await Client.create(clientPayload);

    const response = await request(app)
      .put(`/clients/${client.id}`)
      .send({ name: "Joao Paulo Silva" });

    expect(response.status).toBe(200);
  });

  it("Should return error 400 when update client NAME by ID nonexistent", async () => {
    const response = await request(app)
      .put("/clients/123")
      .send({ name: "Joao Paulo Silva" });

    expect(response.status).toBe(400);
  });
});
