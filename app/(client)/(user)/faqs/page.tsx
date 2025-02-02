import Container from "@/components/Container";
import Title from "@/components/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqsData } from "@/constants";
import React from "react";

const FaqsPage = () => {
  return (
    <Container className="max-w-4xl sm:px-6 lg:px-8 py-12">
      <Title className="text-3xl text-white">Frequently Asked Questions</Title>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-0"
      >
        {faqsData?.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="group">
            <AccordionTrigger className="text-left text-lg font-semibold text-white group-hover:text-gray-400 hover:no-underline hoverEffect">
              {faq?.question}
            </AccordionTrigger>
            <AccordionContent className="text-white">
              {faq?.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

export default FaqsPage;