import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import React from "react";
import { FaInstagram, FaTwitch } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";
import { AiOutlineLinkedin } from "react-icons/ai";
import { Select } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

function Footer() {
  const { locale } = useRouter();
  return (
    <Box
      component={"footer"}
      style={{
        width: "100%",
        backgroundColor: "#F0F5F9",
        height: "80px",
        marginTop: "50px",
        display: "flex",
        justifyContent: "space-around",
        padding: "0 50px 0 50px",
        alignItems: "center",
      }}
    >
      <Typography style={{ flexGrow: 1 }}>CONNECT.</Typography>
      <Box
        style={{
          flexDirection: "row",
          display: "flex",
          gap: "25px",
         
          justifyContent: "flex-end",
        }}
      >
        <Typography>About</Typography>
        <Typography>Privacy</Typography>
        <Typography>Terms</Typography>
        <Typography>Contact</Typography>
      </Box>
      <Box
        style={{
          flexDirection: "row",
          display: "flex",
          gap: "15px",
          alignItems: "center",
          flexGrow: 1,
          justifyContent: "flex-end",
        }}
      >
        <FaInstagram size={"24px"} color="#21bf73" />
        <RxTwitterLogo size={"24px"} color="#21bf73" />
        <AiOutlineLinkedin size={"24px"} color="#21bf73" />
        <FaTwitch size={"24px"} color="#21bf73" />
        <Link
          href="/"
          locale="en"
          style={{
            textDecoration: "none",
            border: "1px solid black",
            padding: " 5px 10px  5px 10px",
            borderRadius: "5px",
          }}
        >
          en
        </Link>
        <Link
          style={{
            textDecoration: "none",
            border: "1px solid black",
            padding: " 5px 10px  5px 10px",
            borderRadius: "5px",
          }}
          href="/"
          locale="ua"
        >
          ua
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
