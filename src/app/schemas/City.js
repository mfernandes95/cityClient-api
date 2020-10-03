import mongoose from "mongoose";

const CitySchema = new mongoose.Schema(
  {
    name: {
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

export default mongoose.model("City", CitySchema);
