import { Box } from "@material-ui/core";
import React from "react";
import Image from "next/image";
import styles from "./Features.module.css";

function FeaturesSection() {
  return (
    <Box id="Features" className={styles.outerBox}>
      <Box className={styles.innerBox}>
        <div className={styles.row}>
          <Image src="/support.png" alt="Feature" height={240} width={350} />

          <div className={styles.textContainer}>
            <h2 className={styles.title}>Data Sharing.</h2>

            <p className={styles.paragraph}>
              When you get staright to the point the presentation looks
              attractive on your web pages.
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
                Realtime broadcasts
              </li>
              <li className={styles.listItem}>
                <Image
                  src="/tick.svg"
                  alt="Tick"
                  height={24}
                  width={24}
                  className={styles.tickIcon}
                />
                Upload and sit tight
              </li>
              <li className={styles.listItem}>
                <Image
                  src="/tick.svg"
                  alt="Tick"
                  height={24}
                  width={24}
                  className={styles.tickIcon}
                />
                View realtime stats
              </li>
            </ul>
          </div>
        </div>

        <div className={`${styles.row} ${styles.rowReverse}`}>
          <Image src="/write.png" alt="Feature" height={240} width={350} />

          <div className={styles.textContainer}>
            <h2 className={styles.title}>High Definition</h2>
            <p className={styles.paragraph}>
              When you get staright to the point the presentation looks
              attractive on your web pages.
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
                Realtime broadcasts
              </li>
              <li className={styles.listItem}>
                <Image
                  src="/tick.svg"
                  alt="Tick"
                  height={24}
                  width={24}
                  className={styles.tickIcon}
                />
                Upload and sit tight
              </li>
              <li className={styles.listItem}>
                <Image
                  src="/tick.svg"
                  alt="Tick"
                  height={24}
                  width={24}
                  className={styles.tickIcon}
                />
                View realtime stats
              </li>
            </ul>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default FeaturesSection;
