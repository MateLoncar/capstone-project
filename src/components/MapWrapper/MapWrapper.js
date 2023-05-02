import { MapContainer } from "react-leaflet";
import Map from "../Map/Map";
export default function MapWrapper({ isAddingMarker, searchResult }) {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "500px" }}
    >
      <Map isAddingMarker={isAddingMarker} searchResult={searchResult} />
    </MapContainer>
  );
}
