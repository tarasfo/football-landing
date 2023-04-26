import { Box } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import styles from "./About.module.css";
import { useRouter } from "next/router";
import { getLocale } from "next-g11n";

function AboutSection({ aboutSectionKeys }: any) {
  const router = useRouter();
  const g11nLocale = getLocale(router) || "en";

  return (
    <Box className={styles.box}>
      <div className={styles.aboutTextContainer}>
        <div className={styles.textContainer}>
          <div className={styles.aboutTitle}>
            {aboutSectionKeys.inside[g11nLocale]}
          </div>
          <h2 className={styles.aboutSubtitle}>
            {aboutSectionKeys.aboutTitle[g11nLocale]}
          </h2>
          <p className={styles.aboutDescription}>
            {aboutSectionKeys.aboutDescription[g11nLocale]}
          </p>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.card1}>
          <Image src="/cat1.png" width="100" alt="Feature" height={100} />
          <div>
            <h3 className={styles.cardTitle}>
              {aboutSectionKeys.layout[g11nLocale]}
            </h3>
            <p className={styles.cardDescription}>
              {aboutSectionKeys.layoutDescription[g11nLocale]}
            </p>
          </div>
        </div>
        <div className={styles.card2}>
          <Image src="/cat2.png" width="100" alt="Feature" height={100} />
          <div>
            <h3 className={styles.cardTitle}>
              {aboutSectionKeys.layout[g11nLocale]}
            </h3>
            <p className={styles.cardDescription}>
              {aboutSectionKeys.layoutDescription[g11nLocale]}
            </p>
          </div>
        </div>
        <div className={styles.card3}>
          <Image src="/cat3.png" width="100" alt="Feature" height={100} />
          <div>
            <h3 className={styles.cardTitle}>
              {aboutSectionKeys.layout[g11nLocale]}
            </h3>
            <p className={styles.cardDescription}>
              {aboutSectionKeys.layoutDescription[g11nLocale]}
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default AboutSection;
