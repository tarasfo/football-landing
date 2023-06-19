import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";
import style from "./PricingSection.module.css";
import Image from "next/image";
import { getLocale } from "next-g11n";
import { useRouter } from "next/router";

function PricingSection({ pricingSectionKeys }: { pricingSectionKeys: any }) {
  const router = useRouter();
  const g11nLocale = getLocale(router) || "en";

  return (
    <Box id="Pricing" className={style.pricingSection}>
      <Box className={style.pricingSectionHeader}>
        <Typography variant="h2" className={style.pricingSectionTitle}>
          Підписки
        </Typography>
      </Box>
      <Box className={style.pricingSectionCards}>
        <Card className={style.pricingCard}>
          <CardContent>
            <Typography className={style.cardTitle}>Благодійна</Typography>

            <Image src="/solidarity.png" width={120} height={120} alt="icon" />
            <Typography className={style.cardPriseDetails} gutterBottom>
              {pricingSectionKeys.free[g11nLocale]}
            </Typography>
            <Typography className={style.cardSubtitle}>
              для дитячих команд
            </Typography>
            <Typography
              style={{
                textAlign: "left",
                marginTop: "10px",
                fontSize: "12px",
                width: "100%",
              }}
            >
              - підтримка по email
            </Typography>
          </CardContent>
          <CardActions style={{ width: "100%", padding: "0px" }}>
            <Button className={style.cardBasicButton} size="small">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href={pricingSectionKeys.calendly}
              >
                {pricingSectionKeys.download[g11nLocale]}
              </a>
            </Button>
          </CardActions>
        </Card>

        <Card className={style.pricingCard}>
          <CardContent>
            <Typography className={style.cardTitle}>Стандартна</Typography>

            <Image src="/standard.png" width={120} height={120} alt="icon" />
            <Typography className={style.cardPriseDetails} gutterBottom>
              400$/міс
            </Typography>

            <Typography
              style={{
                textAlign: "left",
                marginTop: "25px",
                fontSize: "12px",
                width: "100%",
              }}
            >
              - підтримка по email протягом 48 годин
            </Typography>
          </CardContent>
          <CardActions style={{ width: "100%", padding: "0px" }}>
            <Button className={style.cardBasicButton} size="small">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href={pricingSectionKeys.calendly}
              >
                {pricingSectionKeys.download[g11nLocale]}
              </a>
            </Button>
          </CardActions>
        </Card>

        <Card className={style.pricingCard}>
          <CardContent>
            <Typography className={style.cardTitle}>Преміум</Typography>
            <Image src="/premium.png" width={120} height={120} alt="icon" />
            <Typography className={style.cardPriseDetails} gutterBottom>
              800$/міс
            </Typography>
            <Typography
              style={{
                textAlign: "left",
                marginTop: "25px",
                fontSize: "12px",
                width: "100%",
              }}
            >
              - можливість додати функціонал саме під ваші потреби
            </Typography>

            <Typography
              style={{
                textAlign: "left",

                fontSize: "12px",
                width: "100%",
              }}
            >
              - швидка підтримка в чаті/телефоном
            </Typography>
          </CardContent>
          <CardActions style={{ width: "100%", padding: "0px" }}>
            <Button className={style.cardBasicButton} size="small">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href={pricingSectionKeys.calendly}
              >
                {pricingSectionKeys.download[g11nLocale]}
              </a>
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}

export default PricingSection;
