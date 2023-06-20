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
    <Box id="Features" className={styles.box}>
      <div className={styles.aboutTextContainer}>
        <div className={styles.textContainer}>
          <div className={styles.aboutTitle}>
            {aboutSectionKeys.inside[g11nLocale]}
          </div>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.card1}>
          <Image src="/link.png" width="72" alt="Feature" height={72} />
          <div>
            <h3 className={styles.cardTitle}>
              {aboutSectionKeys.connectTitle[g11nLocale]}
            </h3>
            <p className={styles.cardDescription}>
              {aboutSectionKeys.connectDescription[g11nLocale]}
            </p>
          </div>
        </div>
        <div className={styles.card2}>
          <Image src="/analytics.png" width="72" alt="Feature" height={72} />
          <div>
            <h3 className={styles.cardTitle}>
              {aboutSectionKeys.manageTitle[g11nLocale]}
            </h3>
            <p className={styles.cardDescription}>
              {aboutSectionKeys.manageDescription[g11nLocale]}
            </p>
          </div>
        </div>
        <div className={styles.card3}>
          <Image src="/team.png" width="72" alt="Feature" height={72} />
          <div>
            <h3 className={styles.cardTitle}>
              {aboutSectionKeys.showTitle[g11nLocale]}
            </h3>
            <p className={styles.cardDescription}>
              {aboutSectionKeys.showDescription[g11nLocale]}
            </p>
          </div>
        </div>
        <div className={styles.card3}>
          <Image
            src="/time-management.png"
            width="72"
            alt="Feature"
            height={72}
          />
          <div>
            <h3 className={styles.cardTitle}>
              {aboutSectionKeys.eventsTitle[g11nLocale]}
            </h3>
            <p className={styles.cardDescription}>
              {aboutSectionKeys.eventDescription[g11nLocale]}
            </p>
          </div>
        </div>
        <div className={styles.card2}>
          <Image src="/disagree.png" width="72" alt="Feature" height={72} />
          <div>
            <h3 className={styles.cardTitle}>
              {aboutSectionKeys.agreeTitle[g11nLocale]}
            </h3>
            <p className={styles.cardDescription}>
              {aboutSectionKeys.agreeDescription[g11nLocale]}
            </p>
          </div>
        </div>
        <div className={styles.card1}>
          <Image src="/football.png" width="72" alt="Feature" height={72} />
          <div>
            <h3 className={styles.cardTitle}>
              {aboutSectionKeys.footballTitle[g11nLocale]}
            </h3>
            <p className={styles.cardDescription}>
              {aboutSectionKeys.footballDescription[g11nLocale]}
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default AboutSection;
