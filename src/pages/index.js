import { getSession } from "next-auth/react";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <Header />

      <main className="max-w-screen-2xl mx-auto lg:px-1">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const session = await getSession(context);
    const res = await fetch("https://fakestoreapi.com/products/");
    const products = await res.json();

    return {
      props: {
        products,
        session,
      },
    };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
}
