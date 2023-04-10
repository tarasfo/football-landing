import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
} from "@material-ui/core";
import React from "react";

import style from "./FAQ.module.css";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import FAQAccordion from "./components";
import { useRouter } from "next/router";
import { getLocale } from "next-g11n";

function FAQSection({ faqSectionKeys }: { faqSectionKeys: any }) {
  const router = useRouter();
  const g11nLocale = getLocale(router) || "en";

  return (
    <Box id="FAQ" className={style.faqContainer}>
      <Box className={style.headingContainer}>
        <h2 className={style.mainHeading}>
          {faqSectionKeys.faqTitle[g11nLocale]}
        </h2>
        <p className={style.subHeading}>
          {faqSectionKeys.faqDescription[g11nLocale]}
        </p>
        <h5 className={style.additionalInfo}>
          {faqSectionKeys.questions[g11nLocale]}
        </h5>
        <a className={style.contactLink} href="#">
          {faqSectionKeys.contactUs[g11nLocale]}
        </a>
      </Box>
      <Box className={style.accordionGrid}>
        <FAQAccordion
          title={faqSectionKeys.faqQuestion1[g11nLocale]}
          description={faqSectionKeys.faqAnswer1[g11nLocale]}
        />
        <FAQAccordion
          title={faqSectionKeys.faqQuestion2[g11nLocale]}
          description={faqSectionKeys.faqAnswer2[g11nLocale]}
        />
        <FAQAccordion
          title={faqSectionKeys.faqQuestion3[g11nLocale]}
          description={faqSectionKeys.faqAnswer3[g11nLocale]}
        />
        <FAQAccordion
          title={faqSectionKeys.faqQuestion4[g11nLocale]}
          description={faqSectionKeys.faqAnswer4[g11nLocale]}
        />
      </Box>
    </Box>
  );
}

export default FAQSection;
