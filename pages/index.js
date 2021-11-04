import Head from "next/head";
import firebase from "../utils/firebase";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Recipe App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="text-indigo-300 bg-red-100 sticky top-0 left-0 right-0 h-16 text-center  font-bold flex items-center justify-center">
        <h1 className="text-3xl">Firebase Recipe App</h1>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}
