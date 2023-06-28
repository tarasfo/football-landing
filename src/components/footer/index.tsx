import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import React from "react";
import Link from "../Link";

import styles from "./Footer.module.css";
import { useTranslation } from "next-i18next";

function Footer() {
  const { t, i18n } = useTranslation("common");
  return (
    <Box
      style={{
        display: "flex",
        backgroundColor: "#f0f5f9",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box component={"footer"} className={styles.footerContainer}>
        <Typography className={styles.logo}>DIGITALIZE</Typography>
        <Box className={styles.textContainerUA}>
          <Typography style={{ textAlign: "center" }}>
            <Link skipLocaleHandling={false} href="/privacy">
              {t("privacy")}
            </Link>
          </Typography>
          <Typography style={{ textAlign: "center" }}>
            <Link skipLocaleHandling={false} href="/terms">
              {t("terms")}
            </Link>
          </Typography>
          <Typography style={{ textAlign: "center" }}>
            <Link skipLocaleHandling={false} href="/contacts">
              {t("contacts")}
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
