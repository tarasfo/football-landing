import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { Box } from "@material-ui/core";
import Footer from "@/components/footer";
import { createStaticTerm, getLocale } from "next-g11n";
import { useRouter } from "next/router";
import { dictionary, Keys, Locales } from "../dictionary";
import { InferGetStaticPropsType } from "next";
import ProductSection from "@/components/product-section";
import AboutSection from "@/components/about-section";
import FeaturesSection from "@/components/features-section";
import ReviewsSection from "@/components/reviews-section";

export default function Home({
  header,
  download,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ display: "flex", flexDirection: "column" }}>
        <Header download={download} header={header} />
        <ProductSection />
        <AboutSection />
        <FeaturesSection />
        <ReviewsSection />
        <Footer />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const product = createStaticTerm<Keys, Locales>("product", dictionary);
  const features = createStaticTerm<Keys, Locales>("features", dictionary);
  const reviews = createStaticTerm<Keys, Locales>("reviews", dictionary);
  const pricing = createStaticTerm<Keys, Locales>("pricing", dictionary);
  const faq = createStaticTerm<Keys, Locales>("FAQ", dictionary);
  const download = createStaticTerm<Keys, Locales>("download", dictionary);

  const header = [product, features, reviews, pricing, faq];

  return {
    props: {
      header: header,
      download: download,
    },
  };
};
