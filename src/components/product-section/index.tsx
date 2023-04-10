import { Box } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Product.module.css";
import { useRouter } from "next/router";
import { getLocale } from "next-g11n";

function ProductSection({ productSectionKeys }: { productSectionKeys: any }) {
  const router = useRouter();
  const g11nLocale = getLocale(router) || "en";
  return (
    <Box id="Product" className={styles.productSection}>
      <Box className={styles.productContent}>
        <Box className={styles.productText}>
          <h4>{productSectionKeys.launch[g11nLocale]}</h4>
          <h2 className={styles.productTitle}>
            {productSectionKeys.connect[g11nLocale]}
          </h2>
          <Link className={styles.productLink} href="#features">
            {productSectionKeys.seeMore[g11nLocale]}
          </Link>
          <Link className={styles.downloadButton} href="#">
            {productSectionKeys.download[g11nLocale]}
          </Link>
        </Box>
        <p className={styles.conditionsText}>
          {productSectionKeys.trial[g11nLocale]}
          <br /> {productSectionKeys.noCredit[g11nLocale]}
        </p>
      </Box>
      <Image
        className={styles.productImage}
        alt=""
        src="/head.png"
        width={600}
        height={400}
      />
    </Box>
  );
}

export default ProductSection;
