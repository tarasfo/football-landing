import Head from "next/head";
import { InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ProductSection from "@/components/product-section";
import AboutSection from "@/components/about-section";
import PricingSection from "@/components/pricing-section";
import FAQSection from "@/components/faq-section";
import ConnectSection from "@/components/connect-section";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic";

export default function Home({
  download,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Digitalize</title>
        <meta name="description" content="Lending page for football app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        <Header />
        {/*  <ProductSection productSectionKeys={productSectionKeys} />
        <AboutSection aboutSectionKeys={aboutSectionKeys} />
        <PricingSection pricingSectionKeys={pricingSectionKeys} />
        <FAQSection faqSectionKeys={faqSectionKeys} data={data} />
        <ConnectSection connectSectionKeys={connectSectionKeys} />
        <Footer footerSectionKeys={footerSectionKeys} /> */}
      </main>
    </>
  );
}

import fsPromises from "fs/promises";
import path from "path";

const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "landing.config.json");
  const jsonData = await fsPromises.readFile(filePath, "utf8");
  const CONFIG = JSON.parse(jsonData);

  return {
    props: {
      ...(await serverSideTranslations("ua", ["common"])),
      download: { googlePlay: CONFIG.googlePlay, appStore: CONFIG.appStore },
    },
  };
};

export { getStaticPaths, getStaticProps };
