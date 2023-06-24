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
import PricingSection from "@/components/pricing-section";
import FAQSection from "@/components/faq-section";
import ConnectSection from "@/components/connect-section";

export default function Home({
  header,
  download,
  productSectionKeys,
  aboutSectionKeys,
  pricingSectionKeys,
  faqSectionKeys,
  connectSectionKeys,
  footerSectionKeys,
  data,
  calendly,
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
        <Header download={download} header={header} calendly={calendly} />
        <ProductSection productSectionKeys={productSectionKeys} />
        <AboutSection aboutSectionKeys={aboutSectionKeys} />
        <PricingSection pricingSectionKeys={pricingSectionKeys} />
        <FAQSection faqSectionKeys={faqSectionKeys} data={data} />
        <ConnectSection connectSectionKeys={connectSectionKeys} />
        <Footer footerSectionKeys={footerSectionKeys} />
      </main>
    </>
  );
}

import fs from "fs";
import path from "path";
import { log } from "console";

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "landing.config.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const CONFIG = JSON.parse(jsonData);

  const product = createStaticTerm<Keys, Locales>("product", dictionary);
  const features = createStaticTerm<Keys, Locales>("features", dictionary);
  const pricing = createStaticTerm<Keys, Locales>("pricing", dictionary);
  const faq = createStaticTerm<Keys, Locales>("FAQ", dictionary);
  const download = createStaticTerm<Keys, Locales>("download", dictionary);

  const header = [product, features, pricing, faq];

  // product section

  const launch = createStaticTerm<Keys, Locales>("launch", dictionary);
  const connect = createStaticTerm<Keys, Locales>("connect", dictionary);
  const seeMore = createStaticTerm<Keys, Locales>("see-more", dictionary);
  const trial = createStaticTerm<Keys, Locales>("trial", dictionary);
  const noCredit = createStaticTerm<Keys, Locales>(
    "no-credit-card",
    dictionary
  );

  const productSectionKeys = {
    launch,
    connect,
    seeMore,
    trial,
    noCredit,
    download,
    calendly: CONFIG.calendly,
  };

  // about section

  const inside = createStaticTerm<Keys, Locales>("inside", dictionary);
  const connectTitle = createStaticTerm<Keys, Locales>(
    "connect-title",
    dictionary
  );
  const connectDescription = createStaticTerm<Keys, Locales>(
    "connect-description",
    dictionary
  );
  const manageTitle = createStaticTerm<Keys, Locales>(
    "manage-title",
    dictionary
  );
  const manageDescription = createStaticTerm<Keys, Locales>(
    "manage-description",
    dictionary
  );
  const showTitle = createStaticTerm<Keys, Locales>("show-title", dictionary);
  const showDescription = createStaticTerm<Keys, Locales>(
    "show-description",
    dictionary
  );
  const eventsTitle = createStaticTerm<Keys, Locales>(
    "events-title",
    dictionary
  );
  const eventDescription = createStaticTerm<Keys, Locales>(
    "events-description",
    dictionary
  );
  const agreeTitle = createStaticTerm<Keys, Locales>("agree-title", dictionary);
  const agreeDescription = createStaticTerm<Keys, Locales>(
    "agree-description",
    dictionary
  );
  const footballTitle = createStaticTerm<Keys, Locales>(
    "football-title",
    dictionary
  );
  const footballDescription = createStaticTerm<Keys, Locales>(
    "football-description",
    dictionary
  );

  const aboutSectionKeys = {
    inside,
    connectTitle,
    connectDescription,
    manageTitle,
    manageDescription,
    showTitle,
    showDescription,
    eventsTitle,
    eventDescription,
    agreeTitle,
    agreeDescription,
    footballTitle,
    footballDescription,
  };

  // features section

  const data = createStaticTerm<Keys, Locales>("data", dictionary);
  const dataDescription = createStaticTerm<Keys, Locales>(
    "data-description",
    dictionary
  );
  const definition = createStaticTerm<Keys, Locales>("definition", dictionary);
  const definitionDescription = createStaticTerm<Keys, Locales>(
    "definition-description",
    dictionary
  );
  const broadcasts = createStaticTerm<Keys, Locales>("broadcasts", dictionary);
  const upload = createStaticTerm<Keys, Locales>("upload", dictionary);
  const stats = createStaticTerm<Keys, Locales>("stats", dictionary);

  const featuresSectionKeys = {
    data,
    dataDescription,
    definition,
    definitionDescription,
    broadcasts,
    upload,
    stats,
  };

  // reviews section

  const results = createStaticTerm<Keys, Locales>("results", dictionary);
  const resultsDescription = createStaticTerm<Keys, Locales>(
    "results-description",
    dictionary
  );
  const mobileUsers = createStaticTerm<Keys, Locales>(
    "mobile-users",
    dictionary
  );
  const dallyViews = createStaticTerm<Keys, Locales>("dally", dictionary);
  const annualGrow = createStaticTerm<Keys, Locales>("annual-grow", dictionary);
  const monthlyReturns = createStaticTerm<Keys, Locales>(
    "monthly-returns",
    dictionary
  );
  const reviewTitle = createStaticTerm<Keys, Locales>(
    "reviewTitle",
    dictionary
  );
  const reviewDescription = createStaticTerm<Keys, Locales>(
    "review-description",
    dictionary
  );
  const review1 = createStaticTerm<Keys, Locales>("review-1", dictionary);
  const review2 = createStaticTerm<Keys, Locales>("review-2", dictionary);
  const review3 = createStaticTerm<Keys, Locales>("review-3", dictionary);

  const reviewsSectionKeys = {
    results,
    resultsDescription,
    mobileUsers,
    dallyViews,
    annualGrow,
    monthlyReturns,
    reviewTitle,
    reviewDescription,
    review1,
    review2,
    review3,
  };

  // pricing section

  const pricingTitle = createStaticTerm<Keys, Locales>(
    "pricing-title",
    dictionary
  );
  const pricingDescription = createStaticTerm<Keys, Locales>(
    "pricing-description",
    dictionary
  );
  const pricingBasic = createStaticTerm<Keys, Locales>(
    "pricing-basic",
    dictionary
  );
  const pricingBasicDescription = createStaticTerm<Keys, Locales>(
    "pricing-basic-description",
    dictionary
  );
  const free = createStaticTerm<Keys, Locales>("free", dictionary);
  const pricingBasicPeriod = createStaticTerm<Keys, Locales>(
    "pricing-basic-period",
    dictionary
  );
  const pricingPremiumTitle = createStaticTerm<Keys, Locales>(
    "pricing-premium-title",
    dictionary
  );
  const pricingPremiumDescription = createStaticTerm<Keys, Locales>(
    "pricing-premium-description",
    dictionary
  );
  const pricingPremiumPeriod = createStaticTerm<Keys, Locales>(
    "pricing-premium-period",
    dictionary
  );
  const pricingPremium = createStaticTerm<Keys, Locales>(
    "pricing-premium",
    dictionary
  );
  const subscribe = createStaticTerm<Keys, Locales>("subscribe", dictionary);
  const refund = createStaticTerm<Keys, Locales>("refund", dictionary);

  const pricingSectionKeys = {
    pricingTitle,
    pricingDescription,
    pricingBasic,
    pricingBasicDescription,
    free,
    pricingBasicPeriod,
    pricingPremiumTitle,
    pricingPremiumDescription,
    pricingPremiumPeriod,
    pricingPremium,
    subscribe,
    refund,
    download,
    calendly: CONFIG.calendly,
  };

  // FAQ section

  const faqTitle = createStaticTerm<Keys, Locales>("faq-title", dictionary);
  const faqDescription = createStaticTerm<Keys, Locales>(
    "faq-description",
    dictionary
  );
  const questions = createStaticTerm<Keys, Locales>("questions", dictionary);
  const contactUs = createStaticTerm<Keys, Locales>("contact-us", dictionary);
  const faqQuestion1 = createStaticTerm<Keys, Locales>("faq-1", dictionary);
  const faqAnswer1 = createStaticTerm<Keys, Locales>(
    "faq-1-description",
    dictionary
  );
  const faqQuestion2 = createStaticTerm<Keys, Locales>("faq-2", dictionary);
  const faqAnswer2 = createStaticTerm<Keys, Locales>(
    "faq-2-description",
    dictionary
  );
  const faqQuestion3 = createStaticTerm<Keys, Locales>("faq-3", dictionary);
  const faqAnswer3 = createStaticTerm<Keys, Locales>(
    "faq-3-description",
    dictionary
  );
  const faqQuestion4 = createStaticTerm<Keys, Locales>("faq-4", dictionary);
  const faqAnswer4 = createStaticTerm<Keys, Locales>(
    "faq-4-description",
    dictionary
  );

  const faqSectionKeys = {
    faqTitle,
    faqDescription,
    questions,
    contactUs,
    faqQuestion1,
    faqAnswer1,
    faqQuestion2,
    faqAnswer2,
    faqQuestion3,
    faqAnswer3,
    faqQuestion4,
    faqAnswer4,
  };

  // contact section

  const startTrial = createStaticTerm<Keys, Locales>("start-trial", dictionary);
  const contactTitle = createStaticTerm<Keys, Locales>(
    "contact-title",
    dictionary
  );
  const email = createStaticTerm<Keys, Locales>("email", dictionary);

  const contactSectionKeys = {
    startTrial,
    contactTitle,
    email,
    calendly: CONFIG.calendly,
  };

  // footer section

  const about = createStaticTerm<Keys, Locales>("about", dictionary);
  const contact = createStaticTerm<Keys, Locales>("contact", dictionary);
  const terms = createStaticTerm<Keys, Locales>("terms", dictionary);
  const privacy = createStaticTerm<Keys, Locales>("privacy", dictionary);

  const footerSectionKeys = {
    about,
    contact,
    terms,
    privacy,
  };

  return {
    props: {
      header: header,
      download: download,
      calendly: CONFIG.calendly,
      productSectionKeys: productSectionKeys,
      aboutSectionKeys: aboutSectionKeys,
      featuresSectionKeys: featuresSectionKeys,
      reviewsSectionKeys: reviewsSectionKeys,
      pricingSectionKeys: pricingSectionKeys,
      faqSectionKeys: faqSectionKeys,
      connectSectionKeys: contactSectionKeys,
      footerSectionKeys: footerSectionKeys,
      data: CONFIG.faq,
    },
  };
};
