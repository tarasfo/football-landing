import Head from "next/head";
import { Button } from "@material-ui/core";
import { Box, Typography } from "@mui/material";
import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import {
  AiOutlineCalendar,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

import Footer from "@/components/footer";
import Header from "@/components/header";
import styles from "./Contact.module.css";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getStaticPaths } from "@/lib/getStatic";


export default function Privacy({
  contacts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Digitalize</title>
        <meta name="description" content="Lending page for football app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.mainContainer}>
        <Header />
        <Box className={styles.bgColor}>
          <Box className={styles.widthHalf}>
            <Box className={styles.flexRow}>
              <Box className={styles.line}></Box>
              <Typography className={styles.typographyUppercase}>
                Напишіть нашій команді, щоб дізнатись як ми можемо допомогти
              </Typography>
            </Box>
            <Typography className={styles.typographyNormal}>
              Нам треба всього пара годин!
            </Typography>

            <Image src="/branding.png" width="423" alt="Feature" height={423} />
          </Box>
          <Box className={styles.flexColumn}>
            <Box className={styles.flexRowCenter}>
              <AiOutlinePhone
                width={30}
                className={styles.iconStyle}
                color="#21BF73"
              />
              <Typography className={styles.typographyMedium}>
                Телефон
              </Typography>
            </Box>
            <Typography>
              <a
                style={{
                  textDecoration: "none",
                  fontSize: "1.5rem",
                }}
                href={`tel:${contacts.phone}`}
              >
                {contacts.phone}
              </a>
            </Typography>

            <Box className={styles.flexRowCenter}>
              <AiOutlineMail
                className={styles.iconStyle}
                width={30}
                color="#21BF73"
              />
              <Typography className={styles.typographyMedium}>Пошта</Typography>
            </Box>
            <a className={styles.emailButton} href={`mailto:${contacts.email}`}>
              Написати
            </a>

            <Box className={styles.flexRowCenter}>
              <AiOutlineCalendar
                width={30}
                className={styles.iconStyle}
                color="#21BF73"
              />
              <Typography className={styles.typographyMedium}>
                Calendly
              </Typography>
            </Box>
            <Button className={styles.calendlyButton}>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href={`${contacts.calendly}`}
                target="_blank"
              >
                Запланувати дзвінок
              </a>
            </Button>
          </Box>
        </Box>
        <Footer />
      </main>
    </>
  );
}

import fs from "fs";
import path from "path";

const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), "landing.config.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const CONFIG = JSON.parse(jsonData);

  return {
    props: {
      ...(await serverSideTranslations("ua", ["common"])),
      contacts: CONFIG.contacts,
    },
  };
};

export { getStaticPaths, getStaticProps };
