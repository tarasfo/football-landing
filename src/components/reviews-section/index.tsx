import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import styles from "./Reviews.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useRouter } from "next/router";
import { getLocale } from "next-g11n";

function ReviewsSection({ reviewsSectionKeys }: { reviewsSectionKeys: any }) {
  const router = useRouter();
  const g11nLocale = getLocale(router) || "en";

  return (
    <Box id="Reviews" className={styles.container}>
      <div>
        <div className={styles.subTitle}>
          {reviewsSectionKeys.results[g11nLocale]}
        </div>
        <h2 className={styles.title}>
          {reviewsSectionKeys.resultsDescription[g11nLocale]}
        </h2>
      </div>

      <Box className={styles.flexContainer}>
        <div className={styles.flexColumnCenter}>
          <Image
            className={styles.icon}
            src="/f1.png"
            alt="Icon"
            width={100}
            height={100}
          />
          <h3 className={styles.resultPercentage}>
            <span>47</span>%
          </h3>
          <h2 className={styles.resultDescription}>
            {reviewsSectionKeys.mobileUsers[g11nLocale]}
          </h2>
        </div>
        <div className={styles.flexColumnCenter}>
          <Image
            className={styles.icon}
            src="/f2.png"
            alt="Icon"
            width={100}
            height={100}
          />
          <h3 className={styles.resultPercentage}>
            <span>33</span>%
          </h3>
          <h2 className={styles.resultDescription}>
            {reviewsSectionKeys.dallyViews[g11nLocale]}
          </h2>
        </div>
        <div className={styles.flexColumnCenter}>
          <Image
            className={styles.icon}
            src="/f3.png"
            alt="Icon"
            width={100}
            height={100}
          />
          <h3 className={styles.resultPercentage}>
            <span>28</span>%
          </h3>
          <h2 className={styles.resultDescription}>
            {reviewsSectionKeys.monthlyReturns[g11nLocale]}
          </h2>
        </div>
        <div className={styles.flexColumnCenter}>
          <Image
            className={styles.icon}
            src="/f4.png"
            alt="Icon"
            width={100}
            height={100}
          />
          <h3 className={styles.resultPercentage}>
            <span>349</span>%
          </h3>
          <h2 className={styles.resultDescription}>
            {reviewsSectionKeys.annualGrow[g11nLocale]}
          </h2>
        </div>
      </Box>

      <div id="reviews" className={styles.reviewsContainer}>
        <div
          style={{
            textAlign: "left",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            padding: "50px",
          }}
        >
          <h2 className={styles.reviewsTitle}>
            {reviewsSectionKeys.reviewTitle[g11nLocale]}
          </h2>
          <p
            style={{
              margin: "0",
              padding: "0",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: 1.6,
              letterSpacing: "0.01em",
              color: "#6A7076",
              marginTop: "15px",
            }}
          >
            {reviewsSectionKeys.reviewDescription[g11nLocale]}
          </p>
        </div>
        <div className={styles.carouselContainer}>
          <Carousel
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            swipeable={true}
            emulateTouch={true}
          >
            <div className={styles.reviewCardCOntainer}>
              <div style={{ display: "flex", textAlign: "left", gap: "5px" }}>
                <Image
                  className={styles.quoteIcon}
                  src="quote.svg"
                  alt="Quote"
                  width={32}
                  height={32}
                />
                <span className={styles.reviewText}>
                  {reviewsSectionKeys.review1[g11nLocale]}
                </span>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <Image
                  src="/rev.png"
                  alt="Feature"
                  width={60}
                  height={60}
                  style={{ maxWidth: "60px", borderRadius: "50%" }}
                />

                <div style={{ textAlign: "left" }}>
                  <h3
                    style={{
                      margin: "0",
                      padding: "0",
                      color: "#161851",
                      fontWeight: 600,
                      lineHeight: 1.2,
                      marginBottom: "5px",
                    }}
                  >
                    Marty McFly
                  </h3>
                  <p
                    style={{
                      margin: "0",
                      padding: "0",
                      fontSize: "15px",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      color: "#5e687c",
                    }}
                  >
                    Head of OP,
                    <a
                      style={{ color: "#3498db", textDecoration: "none" }}
                      href="#"
                    >
                      Future LLC
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.reviewCardCOntainer}>
              <div style={{ display: "flex", textAlign: "left", gap: "5px" }}>
                <Image
                  className={styles.quoteIcon}
                  src="quote.svg"
                  alt="Quote"
                  width={32}
                  height={32}
                />
                <span className={styles.reviewText}>
                  {reviewsSectionKeys.review2[g11nLocale]}
                </span>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <Image
                  src="/rev2.png"
                  alt="Feature"
                  width={60}
                  height={60}
                  style={{ maxWidth: "60px", borderRadius: "50%" }}
                />

                <div style={{ textAlign: "left" }}>
                  <h3
                    style={{
                      margin: "0",
                      padding: "0",
                      color: "#161851",
                      fontWeight: 600,
                      lineHeight: 1.2,
                      marginBottom: "5px",
                    }}
                  >
                    Dr. Strange
                  </h3>
                  <p
                    style={{
                      margin: "0",
                      padding: "0",
                      fontSize: "15px",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      color: "#5e687c",
                    }}
                  >
                    CTO,{" "}
                    <a
                      style={{ color: "#3498db", textDecoration: "none" }}
                      href="#"
                    >
                      Arma Systems
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.reviewCardCOntainer}>
              <div style={{ display: "flex", textAlign: "left", gap: "5px" }}>
                <Image
                  className={styles.quoteIcon}
                  src="quote.svg"
                  alt="Quote"
                  width={32}
                  height={32}
                />
                <span className={styles.reviewText}>
                  {reviewsSectionKeys.review3[g11nLocale]}
                </span>
              </div>

              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                <Image
                  src="/rev3.png"
                  alt="Feature"
                  width={60}
                  height={60}
                  style={{ maxWidth: "60px", borderRadius: "50%" }}
                />

                <div style={{ textAlign: "left" }}>
                  <h3
                    style={{
                      margin: "0",
                      padding: "0",
                      color: "#161851",
                      fontWeight: 600,
                      lineHeight: 1.2,
                      marginBottom: "5px",
                    }}
                  >
                    John Kennedy
                  </h3>
                  <p
                    style={{
                      margin: "0",
                      padding: "0",
                      fontSize: "15px",
                      fontWeight: 500,
                      lineHeight: 1.6,
                      color: "#5e687c",
                    }}
                  >
                    CTO,{" "}
                    <a
                      style={{ color: "#3498db", textDecoration: "none" }}
                      href="#"
                    >
                      Optima Corp
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </Box>
  );
}

export default ReviewsSection;
