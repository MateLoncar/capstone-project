import mongoose from "mongoose";

const { Schema } = mongoose;

const placeSchema = new Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  experience: { type: String, required: false },
  image: { type: String, required: false },
  stars: { type: Number, required: false },
  isVisited: { type: Boolean, required: false },
});

const Place = mongoose.models.Place || mongoose.model("Place", placeSchema);

export default Place;
