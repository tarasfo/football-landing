import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import styles from "./Reviews.module.css";

function ReviewsSection() {
  return (
    <Box
      style={{
        width: "100%",
        marginTop: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <div style={{ textAlign: "center" }}>
          <h4>OUR RESULTS</h4>
          <h2>Our awesome results worth displaying</h2>
        </div>

        <Box style={{ display: "flex", alignItems: "center", gap: "80px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src="/f1.png" alt="Icon" width={100} height={100} />

            <h3
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#383B61",
                margin: "0",
              }}
            >
              <span>47</span>%
            </h3>

            <h2
              style={{
                margin: "0",
                fontSize: "15px",
                fontWeight: 500,
                padding: "0.5em",
                color: "#ABAFB3",
              }}
            >
              Mobile Users
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src="/f2.png" alt="Icon" width={100} height={100} />

            <h3
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#383B61",
                margin: "0",
              }}
            >
              <span>33</span>%
            </h3>

            <h2
              style={{
                fontSize: "15px",
                fontWeight: 500,
                padding: "0.5em",
                color: "#ABAFB3",
                margin: "0",
              }}
            >
              Daily Views
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src="/f3.png" alt="Icon" width={100} height={100} />

            <h3
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#383B61",
                margin: "0",
              }}
            >
              <span>28</span>%
            </h3>

            <h2
              style={{
                fontSize: "15px",
                fontWeight: 500,
                padding: "0.5em",
                color: "#ABAFB3",
                margin: "0",
              }}
            >
              Monthly Returns
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image src="/f4.png" alt="Icon" width={100} height={100} />

            <h3
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "#383B61",
                margin: "0",
              }}
            >
              <span>349</span>%
            </h3>

            <h2
              style={{
                fontSize: "15px",
                fontWeight: 500,
                padding: "0.5em",
                color: "#ABAFB3",
                margin: "0",
              }}
            >
              Annual Growth
            </h2>
          </div>
        </Box>
      </div>

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
        }}
      >
        <div style={{ textAlign: "left" }}>
          <h2>Stories from our customers</h2>
          <p>
            When you get staright to the point the presentation looks
            attractive.
          </p>
        </div>
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            width: "100%",
            maxHeight: "400px",
          }}
        >
          <div className={styles.wrapper}>
            <div style={{ width: "535px" }}>
              <Image src="quote.svg" alt="Quote" width={100} height={100} />
              <h2>
                Pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. We use Connect for key for easy and
                seamless weekly communication with our clients and .
              </h2>
              <div>
                <div>
                  <div>
                    <Image
                      src="/rev.png"
                      alt="Feature"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div>
                  <h3>Marty McFly</h3>
                  <p>
                    Head of OP, <a href="#">Future LLC</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <Image src="/quote.svg" width={100} height={100} alt="Quote" />
              <h2>
                {" "}
                Pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. We use Connect for key for easy and
                seamless weekly communication with our clients.
              </h2>
              <div>
                <div>
                  <div>
                    <Image
                      src="/rev2.png"
                      alt="Feature"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div>
                  <h3>Dr. Strange</h3>
                  <p>
                    CTO, <a href="#">Arma Systems</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image src="/quote.svg" alt="Quote" width={100} height={100} />
              <h2>
                We use Connect for key for easy and seamless weekly
                communication with our clients. Pariatur cliche reprehenderit,
                enim eiusmod high life accusamus terry richardson ad squid.
              </h2>
              <div>
                <div>
                  <div>
                    <Image
                      src="/rev3.png"
                      alt="Feature"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div>
                  <h3>John Kennedy</h3>
                  <p>
                    Manager Sales, <a href="#">Optima Corp</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default ReviewsSection;
