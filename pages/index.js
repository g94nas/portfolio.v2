import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GNasini</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello</h1>
    </div>
  );
}
