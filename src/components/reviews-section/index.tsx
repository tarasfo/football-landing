import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import styles from "./Reviews.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ReviewsSection() {
  return (
    <Box id="Reviews" className={styles.container}>
      <div >
        <h4 className={styles.subTitle}>OUR RESULTS</h4>
        <h2 className={styles.title}>Our awesome results worth displaying</h2>
      </div>

      <Box className={styles.flexContainer}>
        <div className={styles.flexColumnCenter}>
          <Image src="/f1.png" alt="Icon" width={100} height={100} />
          <h3 className={styles.resultPercentage}>
            <span>47</span>%
          </h3>
          <h2 className={styles.resultDescription}>Mobile Users</h2>
        </div>
        <div className={styles.flexColumnCenter}>
          <Image src="/f2.png" alt="Icon" width={100} height={100} />
          <h3 className={styles.resultPercentage}>
            <span>33</span>%
          </h3>
          <h2 className={styles.resultDescription}>Daily Views</h2>
        </div>
        <div className={styles.flexColumnCenter}>
          <Image src="/f3.png" alt="Icon" width={100} height={100} />
          <h3 className={styles.resultPercentage}>
            <span>28</span>%
          </h3>
          <h2 className={styles.resultDescription}>Monthly Returns</h2>
        </div>
        <div className={styles.flexColumnCenter}>
          <Image src="/f4.png" alt="Icon" width={100} height={100} />
          <h3 className={styles.resultPercentage}>
            <span>349</span>%
          </h3>
          <h2 className={styles.resultDescription}>Annual Growth</h2>
        </div>
      </Box>

      <div
        id="reviews"
        style={{
          marginTop: "80px",
          backgroundColor: "#F0F5F9",
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          width: "60%",
          justifyContent: "center",
          padding: "100px 50px 100px 50px",
          gap: "50px",
        }}
      >
        <div
          style={{
            textAlign: "left",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            padding: "50px",
          }}
        >
          <h2
            style={{
              fontSize: "34px",
              fontWeight: 800,
              color: "#383B61",
              lineHeight: 1.2,
              margin: "0",
              padding: "0",
              flex: "1 1 0%",
            }}
          >
            Stories from our customers
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
            When you get staright to the point the presentation looks
            attractive.
          </p>
        </div>
        <Box style={{ maxWidth: "535px" }}>
          <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
            swipeable={true}
            emulateTouch={true}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                maxWidth: "535px",
              }}
            >
              <div style={{ display: "flex", textAlign: "left", gap: "5px" }}>
                <Image
                  style={{
                    display: "inline",
                    padding: "0",
                    maxWidth: "32px",
                  }}
                  src="quote.svg"
                  alt="Quote"
                  width={32}
                  height={32}
                />
                <span
                  style={{
                    textAlign: "justify",
                    fontSize: "18px",
                    color: "#6A7076",
                    fontWeight: 500,
                    lineHeight: "1.6",
                  }}
                >
                  Pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. We use Connect for key
                  for easy and seamless weekly communication with our clients
                  and .
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                maxWidth: "535px",
              }}
            >
              <div style={{ display: "flex", textAlign: "left", gap: "5px" }}>
                <Image
                  style={{
                    display: "inline",
                    padding: "0",
                    maxWidth: "32px",
                  }}
                  src="quote.svg"
                  alt="Quote"
                  width={32}
                  height={32}
                />
                <span
                  style={{
                    textAlign: "justify",
                    fontSize: "18px",
                    color: "#6A7076",
                    fontWeight: 500,
                    lineHeight: "1.6",
                  }}
                >
                  Pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. We use Connect for key
                  for easy and seamless weekly communication with our clients
                  and .
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                maxWidth: "535px",
              }}
            >
              <div style={{ display: "flex", textAlign: "left", gap: "5px" }}>
                <Image
                  style={{
                    display: "inline",
                    padding: "0",
                    maxWidth: "32px",
                  }}
                  src="quote.svg"
                  alt="Quote"
                  width={32}
                  height={32}
                />
                <span
                  style={{
                    textAlign: "justify",
                    fontSize: "18px",
                    color: "#6A7076",
                    fontWeight: 500,
                    lineHeight: "1.6",
                  }}
                >
                  We use Connect for key for easy and seamless weekly
                  communication with our clients. Pariatur cliche reprehenderit,
                  enim eiusmod high life accusamus terry richardson ad squid.
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
        </Box>
      </div>
    </Box>
  );
}

export default ReviewsSection;
