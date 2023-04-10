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
         {pricingSectionKeys.pricingTitle[g11nLocale]}
        </Typography>
        <p className={style.pricingSectionDescription}>
        {pricingSectionKeys.pricingDescription[g11nLocale]}
        </p>
      </Box>
      <Box className={style.pricingSectionCards}>
        <Card className={style.pricingCard}>
          <CardContent>
            <Typography className={style.cardTitle}>{pricingSectionKeys.pricingBasic[g11nLocale]}</Typography>
            <Typography
              className={style.cardSubtitle}
              variant="h5"
              component="div"
            >
              {pricingSectionKeys.pricingBasicDescription[g11nLocale]}
            </Typography>
            <Image src="/f1.png" width={120} height={120} alt="icon" />
            <Typography className={style.cardPriseDetails} gutterBottom>
              {pricingSectionKeys.free[g11nLocale]}
            </Typography>
            <Typography
              className={style.cardPricingPeriod}
              variant="h5"
              component="div"
            >
              {pricingSectionKeys.pricingBasicPeriod[g11nLocale]}
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={style.cardBasicButton} size="small">
              {pricingSectionKeys.download[g11nLocale]}
            </Button>
          </CardActions>
        </Card>

        <Card className={style.pricingCard}>
          <CardContent>
            <Typography className={style.cardTitle} gutterBottom>
              {pricingSectionKeys.pricingPremiumTitle[g11nLocale]}
            </Typography>
            <Typography
              className={style.cardSubtitle}
              variant="h5"
              component="div"
            >
              {pricingSectionKeys.pricingPremiumDescription[g11nLocale]}
            </Typography>
            <Image src="/f3.png" width={120} height={120} alt="icon" />
            <Typography className={style.cardPriseDetails} gutterBottom>
              {pricingSectionKeys.pricingPremium[g11nLocale]}
            </Typography>
            <Typography
              className={style.cardPricingPeriod}
              variant="h5"
              component="div"
            >
              {pricingSectionKeys.pricingPremiumPeriod[g11nLocale]}
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={style.cardPremiumButton} size="small">
              {pricingSectionKeys.subscribe[g11nLocale]}
            </Button>
          </CardActions>
        </Card>
      </Box>
      <p className={style.refundText}>
        {pricingSectionKeys.refund[g11nLocale]}
      </p>
    </Box>
  );
}

export default PricingSection;
