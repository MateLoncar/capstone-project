import { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import "../styles";
import Header from "@/components/Header";
import { getCoords } from "../components/utils";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  const [searchResult, setSearchResult] = useState(null);
  const [coords, setCoords] = useState({ lat: 51.505, lng: -0.09 });
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
        <Map searchResult={searchResult} />
      </main>
    </div>
  );
}
