import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";

function LocationMarker({ coords }) {
  const map = useMap();
  map.flyTo([coords.geometry.lat, coords.geometry.lng], 13);
  return null;
}

function Map({ searchResult }) {
  console.log(searchResult);
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "500px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      {searchResult && (
        <>
          <Marker
            position={[searchResult.geometry.lat, searchResult.geometry.lng]}
          />
          <LocationMarker coords={searchResult} />
        </>
      )}
    </MapContainer>
  );
}

export default Map;
