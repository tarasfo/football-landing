import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@material-ui/core";
import React from "react";
import style from "./Accordin.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function FAQAccordion({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  return (
    <Accordion
      className={style.accordin}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        style={{ borderColor: "transparent", padding: "0px" }}
        expandIcon={expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails style={{ borderColor: "transparent", padding: "0px" }}>
        <Typography>{description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default FAQAccordion;
