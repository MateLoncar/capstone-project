const API_KEY = "c47ef0f73d4f4521ae75cfe29143429b";

export async function getCoords(placeName) {
  console.log("place", placeName);
  const response = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      placeName
    )}&key=${API_KEY}`
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
  if (data.results.length === 0) {
    throw new Error("Place not found");
  }

  return data.results[0];
}
