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

function AddMarker({ handleAddMarker, isAddingMarker }) {
  const map = useMapEvents({
    click: (e) => {
      console.log("clicked", e);
      if (isAddingMarker) {
        handleAddMarker({
          id: crypto.randomUUID(),
          lat: e.latlng.lat,
          long: e.latlng.lng,
        });
      }
    },
  });

  return null;
}

function Map({ searchResult }) {
  const [markers, setMarkers] = useState(initialMarkers);
  const [isAddingMarker, setIsAddingMarker] = useState(false);

  function handleAddMarker(marker) {
    setMarkers([...markers, marker]);
    setIsAddingMarker(false);
  }

  function handleDeleteMarker(markerId) {
    setMarkers(markers.filter((marker) => marker.id !== markerId));
  }

  function handleMarkerButtonClick() {
    setIsAddingMarker(!isAddingMarker);
  }

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
      <AddMarker
        handleAddMarker={handleAddMarker}
        isAddingMarker={isAddingMarker}
      />
      {markers.map((marker) => (
        <Marker key={marker.id} position={[marker.lat, marker.long]}>
          <CustomPopup onDelete={() => handleDeleteMarker(marker.id)} />
        </Marker>
      ))}
      <Tools
        isAddingMarker={isAddingMarker}
        toggleAddingMarker={() => setIsAddingMarker(!isAddingMarker)}
      />
    </MapContainer>
  );
}

export default Map;
