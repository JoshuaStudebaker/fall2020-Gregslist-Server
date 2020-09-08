import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
  {
    rooms: { type: Number, required: true },
    price: { type: Number, required: true, min: 0 },
    imgUrl: {
      type: String,
      required: true,
      default: "https://placehold.it/200x200",
    },
    description: { type: String },
    tags: [{ type: String }],
    bathrooms: { type: Number },
    yearBuilt: { type: Number },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default House;
