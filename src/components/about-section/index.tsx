import { Box } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./About.module.css";

function AboutSection() {
  return (
    <Box
      style={{
        height: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "150px",
        padding: "0 20%",
        marginTop: "50px",
      }}
    >
      <div className={styles.aboutTextContainer}>
        <div
          style={{
            flex: 0.4,
            textAlign: "left",
            height: "100px",
            width: "100%",
          }}
        >
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
      <div style={{ display: "flex", gap: "30px" }}>
        <div style={{ backgroundColor: "#fff2e5", padding: "50px" }}>
          <Image src="/cat1.png" width="100" alt="Feature" height={100} />
          <div>
            <h3 className={styles.cardTitle}>Fluid Layout</h3>
            <p className={styles.cardDescription}>
              Deliver the best stories and ideas on the topics you care about
              most straight to you.
            </p>
          </div>
        </div>
        <div style={{ backgroundColor: "#F8F9FA", padding: "50px" }}>
          <Image src="/cat2.png" width="100" alt="Feature" height={100} />
          <div>
            <h3 className={styles.cardTitle}>Fluid Layout</h3>
            <p className={styles.cardDescription}>
              Deliver the best stories and ideas on the topics you care about
              most straight to you.
            </p>
          </div>
        </div>
        <div style={{ backgroundColor: "#F0F5F9", padding: "50px" }}>
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
