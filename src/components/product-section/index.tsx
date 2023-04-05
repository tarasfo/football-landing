import { Box } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Product.module.css";

function ProductSection() {
  return (
    <Box
      style={{
        height: "500px",
        width: "100%",
        backgroundColor: "#F0F5F9",
        display: "flex",
        justifyContent: "center",
        gap: "50px",
        alignItems: "center",
        padding: "0 20% 0 20%",
      }}
    >
      <Box>
        <Box style={{ textAlign: "left" }}>
          <h4>Launch your product</h4>
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "800",
              color: "#3a3a47",
              lineHeight: "1.2",
              marginTop: "20px",
            }}
          >
            Connect better with interactive stream.
          </h2>
          <Link
            style={{
              marginRight: "10px",
              backgroundColor: "transparent",
              color: "#3498db",
              border: "2px solid #3498db ",
              borderRadius: "5px",
              padding: "10px 20px 10px 20px",
              textTransform: "none",
              textDecoration: "none",
            }}
            href="#features"
          >
            See More
          </Link>
          <Link className={styles.downloadButton} href="#">
            Download
          </Link>
        </Box>
        <p className={styles.conditionsText}>
          Free unrestricted usage for 14 days.<br></br> No credit card required*
        </p>
      </Box>
      <Image alt="" src="/head.png" width={600} height={400} />
    </Box>
  );
}

export default ProductSection;
