import Head from "next/head";
import dynamic from "next/dynamic";
import "../styles";
import Header from "@/components/Header";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Word Travel Map App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Map />
      </main>
    </div>
  );
}
