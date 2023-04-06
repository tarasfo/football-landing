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

function FAQSection() {
  return (
    <Box id="FAQ" className={style.faqContainer}>
      <Box className={style.headingContainer}>
        <h2 className={style.mainHeading}>Frequently Asked Queries</h2>
        <p className={style.subHeading}>
          Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid.
        </p>
        <h5 className={style.additionalInfo}>Still have questions?</h5>
        <a className={style.contactLink} href="#">
          Contact us
        </a>
      </Box>
      <Box className={style.accordionGrid}>
        <FAQAccordion
          title="What is Connect?"
          description="Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
        />
        <FAQAccordion
          title="How much does template cost?"
          description="Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
        />
        <FAQAccordion
          title="How can updates be downloaded?"
          description="Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
        />
        <FAQAccordion
          title="Some other Support related queries."
          description="Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
        />
      </Box>
    </Box>
  );
}

export default FAQSection;
