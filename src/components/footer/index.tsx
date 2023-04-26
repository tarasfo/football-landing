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
        <Typography className={styles.logo}>C O N N E C T.</Typography>
        <Box
          className={
            g11nLocale === "en"
              ? styles.textContainerEN
              : styles.textContainerUA
          }
        >
          <Typography style={{ textAlign: "center" }}>
            {footerSectionKeys.about[g11nLocale]}
          </Typography>
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
            {footerSectionKeys.contact[g11nLocale]}
          </Typography>
        </Box>
        <Box className={styles.iconContainer}>
          {matches ? (
            <>
              <FaInstagram size={"24px"} color="#21bf73" />
              <RxTwitterLogo size={"24px"} color="#21bf73" />
              <AiOutlineLinkedin size={"24px"} color="#21bf73" />
              <FaTwitch size={"24px"} color="#21bf73" />
              <Link className={styles.link} href="/" locale="en">
                en
              </Link>
              <Link className={styles.link} href="/" locale="ua">
                ua
              </Link>
            </>
          ) : (
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                paddingBottom: "20px",
              }}
            >
              <FaInstagram size={"24px"} color="#21bf73" />
              <RxTwitterLogo size={"24px"} color="#21bf73" />
              <AiOutlineLinkedin size={"24px"} color="#21bf73" />
              <FaTwitch size={"24px"} color="#21bf73" />
              <IconButton
                style={{ padding: 0 }}
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <IoLanguageOutline />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                style={{
                  padding: "20px",
                }}
              >
                <Link
                  onClick={handleClose}
                  className={styles.link}
                  href="/"
                  locale="en"
                >
                  en
                </Link>
                <Link
                  onClick={handleClose}
                  className={styles.link}
                  href="/"
                  locale="ua"
                >
                  ua
                </Link>
              </Menu>
            </div>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
