import { Box } from "@material-ui/core";
import React from "react";
import styles from "./Connect.module.css";
import { getLocale } from "next-g11n";
import { useRouter } from "next/router";

function ConnectSection({ connectSectionKeys }: { connectSectionKeys: any }) {
  const router = useRouter();
  const g11nLocale = getLocale(router) || "en";

  return (
    <Box id="cta" className={styles.container}>
      <Box className={styles.innerContainer}>
        <div className={styles.startTrial}>
          {connectSectionKeys.startTrial[g11nLocale]}
        </div>
        <h2 className={styles.connectTitle}>
          {connectSectionKeys.contactTitle[g11nLocale]}
        </h2>
      </Box>

      <Box>
        <form id="chimp-form">
          <input
            className={styles.emailInput}
            type="email"
            name="email"
            placeholder={connectSectionKeys.email[g11nLocale]}
          />
          <input
            className={styles.submitButton}
            disabled={true}
            type="submit"
            value="Sign Up"
          />
        </form>
        <Box id="response"></Box>
      </Box>
    </Box>
  );
}

export default ConnectSection;
