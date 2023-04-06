import { Box } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Product.module.css";

function ProductSection() {
  return (
    <Box id="Product" className={styles.productSection}>
      <Box className={styles.productContent}>
        <Box className={styles.productText}>
          <h4>Launch your product</h4>
          <h2 className={styles.productTitle}>
            Connect better with interactive stream.
          </h2>
          <Link className={styles.productLink} href="#features">
            See More
          </Link>
          <Link className={styles.downloadButton} href="#">
            Download
          </Link>
        </Box>
        <p className={styles.conditionsText}>
          Free unrestricted usage for 14 days.
          <br /> No credit card required*
        </p>
      </Box>
      <Image alt="" src="/head.png" width={600} height={400} />
    </Box>
  );
}

export default ProductSection;
