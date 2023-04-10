import { Box } from "@material-ui/core";
import React from "react";
import Image from "next/image";
import styles from "./Features.module.css";
import { useRouter } from "next/router";
import { getLocale } from "next-g11n";

function FeaturesSection({
  featuresSectionKeys,
}: {
  featuresSectionKeys: any;
}) {
  const router = useRouter();
  const g11nLocale = getLocale(router) || "en";

  return (
    <Box id="Features" className={styles.outerBox}>
      <Box className={styles.innerBox}>
        <div className={styles.row}>
          <Image
            className={styles.image}
            src="/support.png"
            alt="Feature"
            height={240}
            width={350}
          />

          <div className={styles.textContainer}>
            <h2 className={styles.title}>
              {featuresSectionKeys.data[g11nLocale]}
            </h2>
            <p className={styles.paragraph}>
              {featuresSectionKeys.dataDescription[g11nLocale]}
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Image
                  src="/tick.svg"
                  alt="Tick"
                  height={24}
                  width={24}
                  className={styles.tickIcon}
                />
                {featuresSectionKeys.broadcasts[g11nLocale]}
              </li>
              <li className={styles.listItem}>
                <Image
                  src="/tick.svg"
                  alt="Tick"
                  height={24}
                  width={24}
                  className={styles.tickIcon}
                />
                {featuresSectionKeys.upload[g11nLocale]}
              </li>
              <li className={styles.listItem}>
                <Image
                  src="/tick.svg"
                  alt="Tick"
                  height={24}
                  width={24}
                  className={styles.tickIcon}
                />
                {featuresSectionKeys.stats[g11nLocale]}
              </li>
            </ul>
          </div>
        </div>

        <div className={`${styles.row} ${styles.rowReverse}`}>
          <Image
            className={styles.image}
            src="/write.png"
            alt="Feature"
            height={240}
            width={350}
          />

          <div className={styles.textContainer}>
            <h2 className={styles.title}>
              {featuresSectionKeys.definition[g11nLocale]}
            </h2>
            <p className={styles.paragraph}>
              {featuresSectionKeys.definitionDescription[g11nLocale]}
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Image
                  src="/tick.svg"
                  alt="Tick"
                  height={24}
                  width={24}
                  className={styles.tickIcon}
                />
                {featuresSectionKeys.broadcasts[g11nLocale]}
              </li>
              <li className={styles.listItem}>
                <Image
                  src="/tick.svg"
                  alt="Tick"
                  height={24}
                  width={24}
                  className={styles.tickIcon}
                />
                {featuresSectionKeys.upload[g11nLocale]}
              </li>
              <li className={styles.listItem}>
                <Image
                  src="/tick.svg"
                  alt="Tick"
                  height={24}
                  width={24}
                  className={styles.tickIcon}
                />
                {featuresSectionKeys.stats[g11nLocale]}
              </li>
            </ul>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default FeaturesSection;
