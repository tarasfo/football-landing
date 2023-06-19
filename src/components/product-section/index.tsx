import { Box } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Product.module.css";
import { useRouter } from "next/router";
import { getLocale } from "next-g11n";
import { AiFillApple } from "react-icons/ai";
import { BsGooglePlay } from "react-icons/bs";

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
            <Link className={styles.downloadButtonLink} href="">
              <Box className={styles.downloadButton}>
                <AiFillApple
                  className={styles.downloadButtonIcon}
                  size={"36px"}
                  color="black"
                />
                <Box>
                  <h6 className={styles.downloadButtonText}>Dowload on the</h6>
                  <h4 className={styles.downloadButtonTextBig}>App Store</h4>
                </Box>
              </Box>
            </Link>
            <Link className={styles.downloadButtonLink} href="">
              <Box className={styles.downloadButton}>
                <BsGooglePlay
                  className={styles.downloadButtonIcon}
                  size={"36px"}
                  color="black"
                />
                <Box>
                  <h6 className={styles.downloadButtonText}>GET IT ON</h6>
                  <h4 className={styles.downloadButtonTextBig}>Google Play</h4>
                </Box>
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>
      <Image
        className={styles.productImage}
        alt=""
        src="/iphone.png"
        width={270}
        height={520}
        priority={true}
      />
    </Box>
  );
}

export default ProductSection;
