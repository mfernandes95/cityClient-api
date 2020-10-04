import mongoose from "mongoose";

class Mongo {
  async mongoConnect(mongoUrl) {
    return await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  }

  async mongoCloseConnect() {
    await mongoose.connection.close();
  }
}

export default new Mongo();
