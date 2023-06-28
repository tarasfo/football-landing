import { Box } from "@material-ui/core";
import React from "react";
import styles from "./Connect.module.css";

function ConnectSection() {
  return (
    <Box id="cta" className={styles.container}>
      <Box className={styles.innerContainer}>
        <div className={styles.startTrial}>
          Запустіть мобільний застосунок для свого футбольного клубу
        </div>
        <h2 className={styles.connectTitle}>
          Готові підняти рівень комунікації з фанами?
        </h2>
      </Box>

      <button className={styles.downloadButton}>
        <a
          style={{ color: "white", textDecoration: "none" }}
          href={"/contacts"}
        >
          {"Зв'язатись"}
        </a>
      </button>
    </Box>
  );
}

export default ConnectSection;
