import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Faq = () => {
  const faqs = [
    {
      question: "What is silica gel and how does it work?",
      para1:
        "Silica gel is a porous, granular form of silicon dioxide that absorbs moisture from the surrounding environment. It can hold a significant amount of water without changing shape or size.",
      para2:
        "By trapping moisture within its pores, silica gel prevents damage such as mold, corrosion, and spoilage, making it ideal for protecting goods during storage and transport.",
    },
    {
      question: "Is silica gel safe to use with food and pharmaceuticals?",
      para1:
        "Yes, food-grade silica gel is non-toxic, chemically inert, and approved for use in food and pharmaceutical packaging to maintain freshness and product stability.",
      para2:
        "KHH ensures all food and pharmaceutical-grade products meet strict safety regulations and industry standards.",
    },
    {
      question: "How should silica gel be stored?",
      para1:
        "Silica gel should be stored in an airtight container or moisture-proof packaging to maintain its absorption capacity.",
      para2:
        "Once exposed to air for extended periods, it can be reactivated by heating to remove absorbed moisture.",
    },
    {
      question: "Can silica gel be reused?",
      para1:
        "Yes, silica gel can be reused after reactivation. The process involves heating it at the recommended temperature to remove trapped moisture.",
      para2:
        "KHH offers reusable options for both industrial and consumer applications, reducing waste and cost.",
    },
    {
      question: "What industries use KHH desiccants?",
      para1:
        "KHH desiccants are widely used in electronics, pharmaceuticals, textiles, food packaging, logistics, and machinery storage.",
      para2:
        "They provide reliable moisture protection, ensuring products remain in excellent condition during storage, shipping, and long-term preservation.",
    },
  ];
  return (
    <div className="bg-surface mt-20 pb-10 border border-gray-100">
      <div className="flex flex-col justify-center items-center gap-5 text-center py-10">
        <h2 className="text-3xl w-2/3 text-royal">
          Frequently Asked Questions
        </h2>
        <p className="max-md:w-3/4 w-1/2 text-gray-800/80 ">
          If you have any other questions, please feel free to reach out to us —
          our team is always happy to assist you.
        </p>
      </div>
      <div className="w-[95%] md:w-2/3 mx-auto">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          {faqs.map((faq) => (
            <AccordionItem value={`item-${faq.question}`} key={faq.question}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p>{faq.para1}</p>
                <p>{faq.para2}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
