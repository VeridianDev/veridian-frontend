"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/data";

// FAQ section with expandable accordion items
export default function Faq() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions? We've got answers. If you can't find what you're
            looking for, feel free to contact us.
          </p>
        </div>
        {/* Accordion - single item open at a time */}
        <div className="mx-auto mt-16 max-w-3xl">
          <AccordionPrimitive.Root
            type="single"
            collapsible
            className="w-full space-y-4"
          >
            {faqs.map((faq, i) => (
              <AccordionPrimitive.Item
                key={i}
                value={`item-${i}`}
                className="rounded-lg border bg-background shadow-sm"
              >
                <AccordionPrimitive.Header>
                  {/* Trigger with Plus/Minus icon toggle */}
                  <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between p-6 text-left font-medium">
                    <span className="text-lg">{faq.question}</span>
                    {/* Show Plus when closed */}
                    <Plus className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 group-data-[state=open]:hidden" />
                    {/* Show Minus when open */}
                    <Minus className="h-5 w-5 shrink-0 text-primary transition-transform duration-200 group-data-[state=closed]:hidden" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                {/* Answer content with slide animation */}
                <AccordionPrimitive.Content className="overflow-hidden text-muted-foreground data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="px-6 pb-6 pt-0 text-base">{faq.answer}</div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </div>
      </div>
    </section>
  );
}
