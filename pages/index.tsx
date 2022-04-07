import Head from "next/head";
import Homepage from "components/Homepage";

export default function Home() {
  return (
    <>
      <Head>
        <title>TS ALPHA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <br />
      <Homepage />
    </>
  );
}
