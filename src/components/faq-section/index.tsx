import { Box } from "@material-ui/core";
import React from "react";

import style from "./FAQ.module.css";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import FAQAccordion from "./components";
import { useRouter } from "next/router";
import { getLocale } from "next-g11n";

function FAQSection({
  faqSectionKeys,
  data,
}: {
  faqSectionKeys: any;
  data: any;
}) {
  console.log("FAQ", data);
  const router = useRouter();
  const g11nLocale = getLocale(router) || "en";

  return (
    <Box id="FAQ" className={style.faqContainer}>
      <Box className={style.headingContainer}>
        <h2 className={style.mainHeading}>
          {faqSectionKeys.faqTitle[g11nLocale]}
        </h2>
        <div className={style.additionalInfo}>
          {faqSectionKeys.questions[g11nLocale]}
        </div>
        <a className={style.contactLink} href="#">
          {faqSectionKeys.contactUs[g11nLocale]}
        </a>
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
