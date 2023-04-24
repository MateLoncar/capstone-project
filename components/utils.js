export async function getCoords(placeName) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${placeName}&format=json`
  );
  const data = await response.json();

  if (data.length === 0) {
    throw new Error("Place not found");
  }

  return {
    lat: parseFloat(data[0].lat),
    lng: parseFloat(data[0].lon),
  };
}
