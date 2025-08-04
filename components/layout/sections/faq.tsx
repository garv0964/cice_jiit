import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}
const FAQList: FAQProps[] = [
  {
    question: "What is CICE Hub?",
    answer: "CICE Hub is the Creativity and Innovation Cell in Electronics, focused on teaching essential electronics components, PCB fabrication, and fostering innovative projects.",
    value: "item-1",
  },
  {
    question: "Who can join CICE Hub?",
    answer: "Any student interested in electronics and innovation can join. No prior experience is needed; all skill levels are welcome!",
    value: "item-2",
  },
  {
    question: "What skills will I learn at CICE Hub?",
    answer: "You will learn about electronics components, PCB fabrication, microcontroller boards like Arduino and AVR, and develop innovative project ideas.",
    value: "item-3",
  },
  {
    question: "Does CICE Hub provide any workshops or training sessions?",
    answer: "Yes, we regularly conduct workshops and training sessions on various electronics topics and skills.",
    value: "item-4",
  },
  {
    question: "How can I stay updated with CICE Hub activities?",
    answer: "Follow us on our social media channels and regularly check our website for updates on events and activities.",
    value: "item-5",
  },
  {
    question: "How often are events and competitions held?",
    answer: "We organize events, workshops, and competitions frequently throughout the academic year.",
    value: "item-6",
  },
  {
    question: "Can I get help with my personal electronics projects?",
    answer: "Absolutely! CICE Hub members and mentors are here to support and guide you through your projects.",
    value: "item-7",
  },
  {
    question: "What makes CICE Hub unique?",
    answer: "CICE Hub combines hands-on learning with real-world projects, fostering creativity and innovation in the field of electronics.",
    value: "item-8",
  },
  {
    question: "Are CICE Hub events open to all students?",
    answer: "Yes, our events are open to all students, though some advanced workshops may require prior knowledge or experience.",
    value: "item-9",
  },
  {
    question: "What are some success stories from CICE Hub?",
    answer: "Many of our members have developed successful projects, participated in competitions, and secured internships or job placements.",
    value: "item-10",
  },
];


export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS🤔
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions💭
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
