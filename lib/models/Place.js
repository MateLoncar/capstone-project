import mongoose from "mongoose";

const { Schema } = mongoose;

const placeSchema = new Schema({
  expirience: { type: String, required: true },
  image: { type: String, required: true },
  stars: { type: Number, required: true },
  iWasThere: { type: Boolean, required: true },
});

const Place = mongoose.models.Place || mongoose.model("Place", placeSchema);

export default Place;
