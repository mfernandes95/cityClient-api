import mongoose from "mongoose";

const CitySchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
    },
    uf: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Client", CitySchema);
