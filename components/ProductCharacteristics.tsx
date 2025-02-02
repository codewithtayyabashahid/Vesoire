import { Product } from "@/sanity.types";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const ProductCharacteristics = ({ product }: { product: Product }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="text-white">
        <AccordionTrigger className="text-white">{product?.name}: Characteristics</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-1">
          <p className="flex items-center justify-between">
            Brand: <span className="font-semibold tracking-wide text-white">Unknown</span>
          </p>
          <p className="text-white flex items-center justify-between">
            Collection:{" "}
            <span className="font-semibold tracking-wide text-white">2025</span>
          </p>
          <p className="flex items-center justify-between text-white">
            Type:{" "}
            <span className="font-semibold tracking-wide text-white">
              {product?.variant}
            </span>
          </p>
          <p className="text-white flex items-center justify-between">
            Stock:{" "}
            <span className="font-semibold tracking-wide text-white">
              {product?.stock ? "Available" : "Out of Stock"}
            </span>
          </p>
          <p className="text-white flex items-center justify-between">
            Intro:{" "}
            <span className="font-semibold tracking-wide text-white">
              {product?.intro}
            </span>
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductCharacteristics;