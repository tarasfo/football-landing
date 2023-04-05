import { Box } from "@material-ui/core";
import React from "react";
import Image from "next/image";

function FeaturesSection() {
  return (
    <Box
      style={{
        paddingTop: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          width: "60%",
          padding: "70px",
          backgroundColor: "#F0F5F9",
          flexDirection: "column",
          gap: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "80px",
          }}
        >
          <Image src="/support.png" alt="Feature" height={240} width={350} />

          <div style={{ textAlign: "left" }}>
            <h2
              style={{
                fontSize: "34px",
                fontWeight: "800",
                color: "#383B61",
                lineHeight: "1.2",
                marginTop: "20px",
              }}
            >
              Data Sharing.
            </h2>

            <p
              style={{
                fontSize: "18px",
                fontWeight: "400",
                lineHeight: "1.6",
                letterSpacing: "0.01em",
                color: "#6A7076",
                marginTop: "15px",
                marginBottom: "25px",
              }}
            >
              When you get staright to the point the presentation looks
              attractive on your web pages.
            </p>
            <ul style={{ listStyle: "none", padding: "0" }}>
              <li  style={{
                    marginTop: "10px",
                    fontSize: "15px",
                    fontWeight: '600',
                    color: "#6A7076",
                  }}>
                <Image
                  src="/tick.svg"
                  alt="Tick"
                  height={24}
                  width={24}
                  style={{ marginRight: "15px", verticalAlign: "middle" }}
                />
                Realtime broadcasts
              </li>
              <li  style={{
                    marginTop: "10px",
                    fontSize: "15px",
                    fontWeight: '600',
                    color: "#6A7076",
                  }}>
                <Image
                  src="/tick.svg"
                  alt="Tick"
                  height={24}
                  width={24}
                  style={{ marginRight: "15px", verticalAlign: "middle" }}
                />
                Upload and sit tight
              </li>
              <li  style={{
                    marginTop: "10px",
                    fontSize: "15px",
                    fontWeight: '600',
                    color: "#6A7076",
                  }}>
                <Image
                  src="/tick.svg"
                  alt="Tick"
                  height={24}
                  width={24}
                  style={{ marginRight: "15px", verticalAlign: "middle" }}
                />
                View realtime stats
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "80px",
            flexDirection: "row-reverse",
          }}
        >
          <Image src="/write.png" alt="Feature" height={240} width={350} />

          <div>
            <div>
              <h2
                style={{
                  fontSize: "34px",
                  fontWeight: "800",
                  color: "#383B61",
                  lineHeight: "1.2",
                  marginTop: "20px",
                }}
              >
                High Definition
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "400",
                  lineHeight: "1.6",
                  letterSpacing: "0.01em",
                  color: "#6A7076",
                  marginTop: "15px",
                  marginBottom: "25px",
                }}
              >
                When you get staright to the point the presentation looks
                attractive on your web pages.
              </p>
              <ul style={{ listStyle: "none", padding: "0" }}>
                <li
                  style={{
                    marginTop: "10px",
                    fontSize: "15px",
                    fontWeight: '600',
                    color: "#6A7076",
                  }}
                >
                  <Image
                    src="/tick.svg"
                    alt="Tick"
                    height={24}
                    width={24}
                    style={{ marginRight: "15px", verticalAlign: "middle" }}
                  />
                  Realtime broadcasts
                </li>
                <li  style={{
                    marginTop: "10px",
                    fontSize: "15px",
                    fontWeight: '600',
                    color: "#6A7076",
                  }}>
                  <Image
                    src="/tick.svg"
                    alt="Tick"
                    height={24}
                    width={24}
                    style={{ marginRight: "15px", verticalAlign: "middle" }}
                  />
                  Upload and sit tight
                </li>
                <li  style={{
                    marginTop: "10px",
                    fontSize: "15px",
                    fontWeight: '600',
                    color: "#6A7076",
                  }}>
                  <Image
                    src="/tick.svg"
                    alt="Tick"
                    height={24}
                    width={24}
                    style={{ marginRight: "15px", verticalAlign: "middle" }}
                  />
                  View realtime stats
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default FeaturesSection;
