import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import styles from "./Header.module.css";

import React from "react";
import { useRouter } from "next/router";
import { FiMoreVertical } from "react-icons/fi";
import { useTranslation } from "next-i18next";
import Link from "../../components/Link";

function Header() {
  const router = useRouter();
  const matches = useMediaQuery("(min-width:600px)");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { t, i18n } = useTranslation("common");

  return (
    <AppBar component="nav" position="fixed" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <Typography className={styles.title}>DIGITALIZE</Typography>
        {matches ? (
          <Box className={styles.buttons}>
            <Link href={`/#Product`} skipLocaleHandling={false}>
              <Button className={styles.button}>{t("product")}</Button>
            </Link>
            <Link
              style={{ display: "flex", alignItems: "center" }}
              href={`/#Features`}
              skipLocaleHandling={false}
            >
              <Button className={styles.button}>{t("features")}</Button>
            </Link>
            <Link href={`/#Pricing`} skipLocaleHandling={false}>
              <Button className={styles.button}>{t("pricing")}</Button>
            </Link>
            <Link href={`/#FAQ`} skipLocaleHandling={false}>
              <Button className={styles.button}>{t("FAQ")}</Button>
            </Link>

            <a href={"/contacts"} className={styles.downloadButton}>
              {t("download")}
            </a>
          </Box>
        ) : (
          <div>
            <IconButton
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <FiMoreVertical />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PopoverClasses={{
                paper: styles.popover,
              }}
            >
              {/* {header.map((item: any) => (
                <MenuItem
                  onClick={() => {
                    router.push(`/#${item["en"]}`), handleClose();
                  }} // take id of section from dictionary
                  className={styles.button}
                  key={item[g11nLocale]}
                >
                  {item[g11nLocale]}
                </MenuItem>
              ))} */}
              <MenuItem>
                <a
                  style={{
                    backgroundColor: "#21bf73",
                    border: "none",
                    color: "white",
                  }}
                  href={"/contacts"}
                  className={styles.downloadButton}
                >
                  {t("download")}
                </a>
              </MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
