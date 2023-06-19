import { Box, IconButton, Menu, useMediaQuery } from "@material-ui/core";
import { Typography } from "@mui/material";
import React from "react";
import { FaInstagram, FaTwitch } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";
import { AiOutlineLinkedin } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Footer.module.css";

import { IoLanguageOutline } from "react-icons/io5";
import { FiMoreVertical } from "react-icons/fi";
import { getLocale } from "next-g11n";

function Footer({ footerSectionKeys }: { footerSectionKeys: any }) {
  const router = useRouter();
  const g11nLocale = getLocale(router) || "en";

  const matches = useMediaQuery("(min-width:600px)");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <Box
          className={
            g11nLocale === "en"
              ? styles.textContainerEN
              : styles.textContainerUA
          }
        >
          <Typography style={{ textAlign: "center" }}>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              href="/privacy"
            >
              {footerSectionKeys.privacy[g11nLocale]}
            </Link>
          </Typography>
          <Typography style={{ textAlign: "center" }}>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              href="/terms"
            >
              {footerSectionKeys.terms[g11nLocale]}
            </Link>
          </Typography>
          <Typography style={{ textAlign: "center" }}>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              href="/contacts"
            >
              {footerSectionKeys.contact[g11nLocale]}
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
