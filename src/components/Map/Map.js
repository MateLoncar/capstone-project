import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { useMapEvents } from "react-leaflet";
import { useState } from "react";
import CustomPopup from "../Popup/Popup";
import Tools from "../Tools/Tools";

const initialMarkers = [];

function LocationMarker({ coords }) {
  const map = useMap();
  map.flyTo([coords.geometry.lat, coords.geometry.lng], 13);
  return null;
}

function Map({ searchResult, isAddingMarker }) {
  const map = useMapEvents({
    click: (e) => {
      if (!isAddingMarker) {
        return;
      }
      console.log("clicked", e);
      handleAddMarker({
        id: crypto.randomUUID(),
        lat: e.latlng.lat,
        long: e.latlng.lng,
      });
    },
  });
  const [markers, setMarkers] = useState(initialMarkers);
  function handleAddMarker(marker) {
    setMarkers([...markers, marker]);
  }

  function handleDeleteMarker(markerId) {
    setMarkers(markers.filter((marker) => marker.id !== markerId));
  }

  return (
    <>
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

      {markers.map((marker) => (
        <Marker key={marker.id} position={[marker.lat, marker.long]}>
          <CustomPopup onDelete={() => handleDeleteMarker(marker.id)} />
        </Marker>
      ))}
    </>
  );
}

export default Map;
