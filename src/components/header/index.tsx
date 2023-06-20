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
  useMediaQuery,
} from "@material-ui/core";
import styles from "./Header.module.css";

import React from "react";
import { useRouter } from "next/router";
import { getLocale } from "next-g11n";
import { FiMoreVertical } from "react-icons/fi";

function Header({
  header,
  download,
  calendly,
}: {
  header: any;
  download: any;
  calendly: any;
}) {
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
    <AppBar component="nav" position="fixed" className={styles.appBar}>
      <Toolbar className={styles.toolbar}>
        <Typography className={styles.title}>Digitalize</Typography>
        {matches ? (
          <Box className={styles.buttons}>
            {header.map((item: any) => (
              <Button
                onClick={() => router.push(`/#${item["en"]}`)} // take id of section from dictionary
                className={styles.button}
                key={item[g11nLocale]}
              >
                {item[g11nLocale]}
              </Button>
            ))}
            <a href={calendly} className={styles.downloadButton}>
              {download[g11nLocale]}
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
              style={{
                padding: "20px",
              }}
            >
              {header.map((item: any) => (
                <MenuItem
                  onClick={() => {
                    router.push(`#${item["en"]}`), handleClose();
                  }} // take id of section from dictionary
                  className={styles.button}
                  key={item[g11nLocale]}
                >
                  {item[g11nLocale]}
                </MenuItem>
              ))}
              <a
                style={{
                  margin: "10px",
                  backgroundColor: "#21bf73",
                  border: "none",
                  color: "white",
                }}
                href={calendly}
                className={styles.downloadButton}
              >
                {download[g11nLocale]}
              </a>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
