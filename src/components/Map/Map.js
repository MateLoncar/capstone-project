import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { useMapEvents } from "react-leaflet";
import { useState, useEffect } from "react";
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
  if (marker.isVisited) {
    return greenIcon;
  }
  return blueIcon;
}

function LocationMarker({ coords }) {
  const map = useMap();
  map.flyTo([coords.geometry.lat, coords.geometry.lng], 13);
  return null;
}

async function createMarker(marker) {
  const response = await fetch("/api/places", {
    method: "POST",
    body: JSON.stringify(marker),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}

async function updateMarker(id, marker) {
  const response = await fetch(`/api/places/${id}`, {
    method: "PUT",
    body: JSON.stringify(marker),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
}

function Map({ searchResult, isAddingMarker }) {
  const map = useMapEvents({
    click: (e) => {
      if (!isAddingMarker) {
        return;
      }

      handleAddMarker({
        //   _id: crypto.randomUUID(),
        lat: e.latlng.lat,
        lng: e.latlng.lng,
        isVisited: false,
        stars: 0,
        image: "",
        expirience: "",
      });
    },
  });
  const [markers, setMarkers] = useState(initialMarkers);

  useEffect(() => {
    async function getPlaces() {
      const response = await fetch("/api/places");
      const data = await response.json();
      setMarkers(data);
    }
    getPlaces();
  }, []);

  async function handleAddMarker(data) {
    const marker = await createMarker(data);
    setMarkers([...markers, marker]);
  }

  function handleDeleteMarker(markerId) {
    setMarkers(markers.filter((marker) => marker._id !== markerId));
  }

  async function handleUpdateMarker(markerId, data) {
    await updateMarker(markerId, data);
    const updatedMarkers = markers.map((marker) => {
      if (marker._id === markerId) {
        return { ...marker, ...data };
      }
      return marker;
    });
    setMarkers(updatedMarkers);
  }

  function MarkerLayer({ markers }) {
    return (
      <>
        {markers.map((marker) => {
          const icon = getIcon(marker);

          return (
            <Marker
              icon={icon}
              key={marker._id}
              position={[marker.lat, marker.lng]}
            >
              <CustomPopup
                onUpdate={(data) => handleUpdateMarker(marker._id, data)}
                onDelete={() => handleDeleteMarker(marker._id)}
                isVisited={marker.isVisited}
              />
            </Marker>
          );
        })}
      </>
    );
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
      <MarkerLayer markers={markers} />
    </>
  );
}

export default Map;
