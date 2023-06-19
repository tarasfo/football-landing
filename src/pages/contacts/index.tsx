import Footer from "@/components/footer";
import header from "@/components/header";
import Header from "@/components/header";
import { Keys, Locales, dictionary } from "@/dictionary";
import { Box, Typography } from "@mui/material";
import { InferGetStaticPropsType } from "next";
import { createStaticTerm } from "next-g11n";
import Image from "next/image";
import {
  AiOutlineCalendar,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { Button } from "@material-ui/core";
import { GoogleMap, Marker } from "react-google-maps";

// Import your CSS file at the top of the JS file
import styles from "./Contact.module.css";

export default function Privacy({
  header,
  download,
  footerSectionKeys,
  calendly,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <main className={styles.mainContainer}>
        yarn add react-google-maps
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
            <Typography className={styles.typographyNormal}>
              Не більше двох робочих днів на відповідь з моменту отримання
              вашого запиту
            </Typography>
            <Image src="/branding.png" width="423" alt="Feature" height={423} />
          </Box>
          <Box className={styles.flexColumn}>
            <Box className={styles.flexRowCenter}>
              <AiOutlinePhone className={styles.iconStyle} color="#21BF73" />
              <Typography className={styles.typographyMedium}>Phone</Typography>
            </Box>
            <Typography>+38 093 888 888</Typography>

            <Box className={styles.flexRowCenter}>
              <BsTelegram className={styles.iconStyle} color="#21BF73" />
              <Typography className={styles.typographyMedium}>
                Telegram
              </Typography>
            </Box>
            <Typography>@test</Typography>

            <Box className={styles.flexRowCenter}>
              <AiOutlineMail
                className={styles.iconStyle}
                width={30}
                color="#21BF73"
              />
              <Typography className={styles.typographyMedium}>Email</Typography>
            </Box>
            <a
              className={styles.emailButton}
              href="mailto:rudenko.albert.n@gmail.com"
            >
              Написати
            </a>

            <Box className={styles.flexRowCenter}>
              <AiOutlineCalendar className={styles.iconStyle} color="#21BF73" />
              <Typography className={styles.typographyMedium}>
                Calendly
              </Typography>
            </Box>
            <Button className={styles.calendlyButton}>
              Запланувати дзвінок
            </Button>
          </Box>
        </Box>
        <Box className={styles.whiteBg}>
          <Typography
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "32px",
              lineHeight: "39px",
              color: "#000000",
            }}
          >
            Де ми знаходимось?
          </Typography>

         
        </Box>
        <Footer footerSectionKeys={footerSectionKeys} />
      </main>
    </>
  );
}

import fs from "fs";
import path from "path";

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
      footerSectionKeys: footerSectionKeys,
    },
  };
};
