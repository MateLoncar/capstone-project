import Head from "next/head";
import dynamic from "next/dynamic";
import "../styles";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Word Travel Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Map />
      </main>
    </div>
  );
}
