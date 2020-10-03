import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    year_of_birth: {
      type: Date,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    city_where_live: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Client", ClientSchema);
