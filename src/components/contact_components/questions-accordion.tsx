import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

const QuestionsAccordion = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1" className="my-4">
          <AccordionTrigger className="decoration-0 text-lg min-[470px]:text-xl sm:text-2xl md:text-4xl">
            Detailed Information
          </AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default QuestionsAccordion;
