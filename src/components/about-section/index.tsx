import { Box } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./About.module.css";

function AboutSection() {
  return (
    <Box className={styles.box}>
      <div className={styles.aboutTextContainer}>
        <div className={styles.textContainer}>
          <h4 className={styles.aboutTitle}>{"What's inside"}</h4>
          <h2 className={styles.aboutSubtitle}>
            Connect can bring charm to your website.
          </h2>
          <p className={styles.aboutDescription}>
            Get staright to the point always, people find it attractive when
            they visit your website.
          </p>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.card1}>
          <Image src="/cat1.png" width="100" alt="Feature" height={100} />
          <div>
            <h3 className={styles.cardTitle}>Fluid Layout</h3>
            <p className={styles.cardDescription}>
              Deliver the best stories and ideas on the topics you care about
              most straight to you.
            </p>
          </div>
        </div>
        <div className={styles.card2}>
          <Image src="/cat2.png" width="100" alt="Feature" height={100} />
          <div>
            <h3 className={styles.cardTitle}>Fluid Layout</h3>
            <p className={styles.cardDescription}>
              Deliver the best stories and ideas on the topics you care about
              most straight to you.
            </p>
          </div>
        </div>
        <div className={styles.card3}>
          <Image src="/cat3.png" width="100" alt="Feature" height={100} />
          <div>
            <h3 className={styles.cardTitle}>Fluid Layout</h3>
            <p className={styles.cardDescription}>
              Deliver the best stories and ideas on the topics you care about
              most straight to you.
            </p>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default AboutSection;
