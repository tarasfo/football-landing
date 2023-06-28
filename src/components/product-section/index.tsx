import { Box } from "@material-ui/core";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Product.module.css";
import { useRouter } from "next/router";
import { getLocale } from "next-g11n";
import { useTranslation } from "next-i18next";

function ProductSection({ download }: { download: any }) {
  const { t, i18n } = useTranslation("common");

  return (
    <Box id="Product" className={styles.productSection}>
      <Box className={styles.productContent}>
        <Box className={styles.productText}>
          <h2 className={styles.productTitle}>{t("launch")}</h2>
          <Link className={styles.seeMoreButton} href="#Features">
            {t("see-more")}
          </Link>
          <Box className={styles.downloadLinkContainer}>
            <Link
              className={styles.downloadButtonLink}
              href={`/${download.appStore}`}
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
              href={`/${download.googlePlay}`}
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
