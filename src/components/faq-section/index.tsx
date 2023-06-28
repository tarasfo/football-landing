import { Box } from "@material-ui/core";
import React from "react";

import style from "./FAQ.module.css";
import FAQAccordion from "./components";
import { useTranslation } from "next-i18next";
import Link from "next/link";

function FAQSection({ data }: { data: any }) {
  const { t, i18n } = useTranslation("common");

  return (
    <Box id="FAQ" className={style.faqContainer}>
      <Box className={style.headingContainer}>
        <h2 className={style.mainHeading}>{t("faq-title")}</h2>
        <div className={style.additionalInfo}>{t("questions")}</div>
        <Link className={style.contactLink} href="/contacts">
          {t("contact")}
        </Link>
      </Box>
      <Box className={style.accordionGrid}>
        {data.map((item: any, index: number) => {
          return (
            <FAQAccordion
              key={index}
              title={item.question}
              description={item.answer}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default FAQSection;
