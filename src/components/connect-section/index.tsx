import { Box } from "@material-ui/core";
import React from "react";
import styles from "./Connect.module.css";
import { useRouter } from "next/router";

function ConnectSection({ connectSectionKeys }: { connectSectionKeys: any }) {
  const router = useRouter();
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
          href={connectSectionKeys.calendly}
        >
          {"Зв'язатись"}
        </a>
      </button>
    </Box>
  );
}

export default ConnectSection;
