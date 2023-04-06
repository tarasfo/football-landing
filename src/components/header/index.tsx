import pages from "@/pages";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Tooltip,
  Avatar,
} from "@material-ui/core";
import styles from "./Header.module.css";

import React from "react";
import { useRouter } from "next/router";
import { getLocale } from "next-g11n";

function Header({ header, download }: { header: any; download: any }) {
  const router = useRouter();
  const g11nLocale = getLocale(router) || "en";

  return (
    <AppBar component="nav" position="fixed" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <Typography className={styles.title}>Connect.</Typography>
        <Box className={styles.buttons}>
          {header.map((item: any) => (
            <Button
              onClick={() => router.push(`#${item["en"]}`)} // take id of section from dictionary
              className={styles.button}
              key={item[g11nLocale]}
            >
              {item[g11nLocale]}
            </Button>
          ))}
          <button className={styles.downloadButton}>
            {download[g11nLocale]}
          </button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
