import { Box } from "@material-ui/core";
import Image from "next/image";
import React from "react";
import styles from "./About.module.css";
import { useRouter } from "next/router";
import { getLocale } from "next-g11n";
import { useTranslation } from "next-i18next";

function AboutSection({ aboutSectionKeys }: any) {
  const { t, i18n } = useTranslation("common");

  return (
    <Box id="Features" className={styles.box}>
      <div className={styles.aboutTextContainer}>
        <div className={styles.textContainer}>
          <div className={styles.aboutTitle}>{t("inside")}</div>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.card1}>
          <Image src="/link.png" width="72" alt="Feature" height={72} />
          <div>
            <h3 className={styles.cardTitle}>{t("connect-title")}</h3>
            <p className={styles.cardDescription}>{t("connect-description")}</p>
          </div>
        </div>
        <div className={styles.card2}>
          <Image src="/analytics.png" width="72" alt="Feature" height={72} />
          <div>
            <h3 className={styles.cardTitle}>{t("manage-title")}</h3>
            <p className={styles.cardDescription}>{t("manage-description")}</p>
          </div>
        </div>
        <div className={styles.card3}>
          <Image src="/team.png" width="72" alt="Feature" height={72} />
          <div>
            <h3 className={styles.cardTitle}>{t("show-title")}</h3>
            <p className={styles.cardDescription}>{t("show-description")}</p>
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
            <h3 className={styles.cardTitle}>{t("events-title")}</h3>
            <p className={styles.cardDescription}>{t("events-description")}</p>
          </div>
        </div>
        <div className={styles.card2}>
          <Image src="/disagree.png" width="72" alt="Feature" height={72} />
          <div>
            <h3 className={styles.cardTitle}>{t("agree-title")}</h3>
            <p className={styles.cardDescription}>{t("agree-description")}</p>
          </div>
        </div>
        <div className={styles.card1}>
          <Image src="/football.png" width="72" alt="Feature" height={72} />
          <div>
            <h3 className={styles.cardTitle}>{t("football-title")}</h3>
            <p className={styles.cardDescription}>
              {t("football-description")}
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default AboutSection;
