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
          <h2 className={styles.productTitle}>
            {productSectionKeys.launch[g11nLocale]}
          </h2>
          <Link className={styles.seeMoreButton} href="#Features">
            {productSectionKeys.seeMore[g11nLocale]}
          </Link>
          <Box className={styles.downloadLinkContainer}>
            <Link
              className={styles.downloadButtonLink}
              href={productSectionKeys.links.appStore}
            >
              <Image
                className={styles.downloadApple}
                alt=""
                src="/apple_store.svg"
                width={130}
                height={50}
              />
            </Link>
            <Link
              className={styles.downloadButtonLink}
              href={productSectionKeys.links.googlePlay}
            >
              <Image
                className={styles.downloadGoogle}
                alt=""
                src="/Google_Play_Store_badge_EN.svg"
                width={150}
                height={50}
              />
            </Link>
          </Box>
        </Box>
      </Box>
      <Image
        className={styles.productImage}
        alt=""
        src="/iphone_svg.svg"
        width={280}
        height={600}
        priority={true}
      />
    </Box>
  );
}

export default ProductSection;
