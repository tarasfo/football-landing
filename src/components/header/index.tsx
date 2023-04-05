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
const navItems = ["Product", "Features", "Reviews", "Pricing", "FAQ"];

function Header({ header, download }: { header: any; download: any }) {
  const router = useRouter();
  const g11nLocale = getLocale(router) || "en";

  return (
    <AppBar
      component="nav"
      position="fixed"
      style={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Toolbar style={{ justifyContent: "space-around" }}>
        <Typography style={{ color: "black" }}>Connect.</Typography>
        <Box style={{ display: "flex", gap: "5px" }}>
          {header.map((item: any) => (
            <Button style={{ textTransform: "none" }} key={item[g11nLocale]}>
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
