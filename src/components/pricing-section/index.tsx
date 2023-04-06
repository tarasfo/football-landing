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

function PricingSection() {
  return (
    <Box id="Pricing" className={style.pricingSection}>
      <Box className={style.pricingSectionHeader}>
        <Typography variant="h2" className={style.pricingSectionTitle}>
          Simple & Affordable Pricing.
        </Typography>
        <p className={style.pricingSectionDescription}>
          Our plans are designed to meet the requirements of both beginners and
          players. Get the right plan that suits you.
        </p>
      </Box>
      <Box className={style.pricingSectionCards}>
        <Card className={style.pricingCard}>
          <CardContent>
            <Typography className={style.cardTitle}>Basic Free</Typography>
            <Typography
              className={style.cardSubtitle}
              variant="h5"
              component="div"
            >
              Limited features
            </Typography>
            <Image src="/f1.png" width={120} height={120} alt="icon" />
            <Typography className={style.cardPriseDetails} gutterBottom>
              Free
            </Typography>
            <Typography
              className={style.cardPricingPeriod}
              variant="h5"
              component="div"
            >
              One year
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={style.cardBasicButton} size="small">
              DOWNLOAD
            </Button>
          </CardActions>
        </Card>

        <Card className={style.pricingCard}>
          <CardContent>
            <Typography className={style.cardTitle} gutterBottom>
              Premium
            </Typography>
            <Typography
              className={style.cardSubtitle}
              variant="h5"
              component="div"
            >
              Unlimited Lifetime
            </Typography>
            <Image src="/f3.png" width={120} height={120} alt="icon" />
            <Typography className={style.cardPriseDetails} gutterBottom>
              $99.99
            </Typography>
            <Typography
              className={style.cardPricingPeriod}
              variant="h5"
              component="div"
            >
              Lifetime
            </Typography>
          </CardContent>
          <CardActions>
            <Button className={style.cardPremiumButton} size="small">
              subscribe
            </Button>
          </CardActions>
        </Card>
      </Box>
      <p className={style.refundText}>
        * Refund requests can be accepted with in 10 days of the purchase.
      </p>
    </Box>
  );
}

export default PricingSection;
