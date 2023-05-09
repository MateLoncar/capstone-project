import dbConnect from "../../../../lib/connect";
import Place from "../../../../lib/models/Place";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const places = await Place.find();
      response.status(200).json(places);
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "POST") {
    try {
      const placeData = request.body;
      const newPlace = await Place.create(placeData);
      response.status(201).json({ status: "Place created", ...newPlace._doc });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
