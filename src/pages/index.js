import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import "../../styles";
import Header from "@/src/components/Header/Header";
import { getCoords } from "../services/utils";
import Tools from "@/src/components/Tools/Tools";

const MapWrapper = dynamic(
  () => import("../components/MapWrapper/MapWrapper"),
  { ssr: false }
);

export default function Home() {
  const [searchResult, setSearchResult] = useState(null);
  const [coords, setCoords] = useState({ lat: 51.505, lng: -0.09 });
  const [isAddingMarker, setIsAddingMarker] = useState(false);
  const handleSearch = async (searchTerm) => {
    try {
      const coords = await getCoords(searchTerm);
      setSearchResult(coords);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <Head>
        <title>Word Travel Map App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header onSearch={handleSearch} />

        <MapWrapper
          isAddingMarker={isAddingMarker}
          searchResult={searchResult}
        />

        <Tools
          isAddingMarker={isAddingMarker}
          toggleAddingMarker={() => setIsAddingMarker(!isAddingMarker)}
        />
      </main>
    </div>
  );
}
