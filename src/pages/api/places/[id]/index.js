import dbConnect from "../../../../../lib/connect";
import Place from "../../../../../lib/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const place = await Place.findById(id);

    if (!place) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(place);
  }

  if (request.method === "PUT") {
    try {
      const response = await Place.findByIdAndUpdate(id, {
        $set: request.body,
      });

      const updatedPlace = await Place.findById(id);
      response.status(200).json(updatedPlace);
    } catch (error) {
      console.log(error);
      response.status(500).json({ error: error.message });
    }
  }

  if (request.method === "DELETE") {
    try {
      await Place.findByIdAndDelete(id);
      response
        .status(200)
        .json({ status: `Place ${id} successfully deleted.` });
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  }
}
