import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header Component */}
      <Header />
      {/* Nav Component */}
      {/* Results Component */}
    </div>
  );
}
