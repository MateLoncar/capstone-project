import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { useMapEvents } from "react-leaflet";
import { useState } from "react";
import CustomPopup from "../Popup/Popup";
import Tools from "../Tools/Tools";
import * as L from "leaflet";

const initialMarkers = [];

const LeafIcon = L.Icon.extend({
  options: {},
});
const blueIcon = new LeafIcon({
    iconUrl:
      "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|FFA500&chf=a,s,ee00FFFF",
  }),
  greenIcon = new LeafIcon({
    iconUrl:
      "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF",
  });

function getIcon(marker) {
  return greenIcon;
}
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

  function handleUpdateMarker(markerId, data) {
    console.log(markerId, data);
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
        <Marker
          icon={getIcon(marker)}
          key={marker.id}
          position={[marker.lat, marker.long]}
        >
          <CustomPopup
            onUpdate={(data) => handleUpdateMarker(marker.id, data)}
            onDelete={() => handleDeleteMarker(marker.id)}
          />
        </Marker>
      ))}
    </>
  );
}

export default Map;
