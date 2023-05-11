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
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png",
  }),
  greenIcon = new LeafIcon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  });

function getIcon(marker) {
  if (marker.isVisited) {
    return greenIcon;
  }
  return blueIcon;
}

function LocationMarker({ coords, isAddingMarker }) {
  const map = useMap();
  if (isAddingMarker) return;
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
        lat: e.latlng.lat,
        lng: e.latlng.lng,
        isVisited: false,
        stars: 0,
        image: "",
        experience: "",
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

  async function handleDeleteMarker(markerId) {
    const response = await fetch(`/api/places/${markerId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (data.status === 400 || updateMarker.error) {
      setError("Error updating marker");
      return;
    }
    setMarkers(markers.filter((marker) => marker._id !== markerId));
  }

  async function handleUpdateMarker(markerId, data) {
    console.log(data);
    const response = await updateMarker(markerId, data);
    if (response.status === 400 || updateMarker.error) {
      setError("Error updating marker");
      return;
    }

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
                marker={marker}
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
          <LocationMarker
            coords={searchResult}
            isAddingMarker={isAddingMarker}
          />
        </>
      )}
      <MarkerLayer markers={markers} />
    </>
  );
}

export default Map;
