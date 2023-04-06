import { Box } from "@material-ui/core";
import React from "react";
import styles from "./Connect.module.css";

function ConnectSection() {
  return (
    <Box id="cta" className={styles.container}>
      <Box className={styles.innerContainer}>
        <h4 className={styles.startTrial}>start your trial</h4>
        <h2 className={styles.connectTitle}>
          Connect is made just for you. Ready to build your next project?
        </h2>
      </Box>

      <Box>
        <form id="chimp-form">
          <input
            className={styles.emailInput}
            type="email"
            name="email"
            placeholder="Enter email address"
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
