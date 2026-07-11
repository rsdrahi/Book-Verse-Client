import { faqs } from '@/constants/faq';
import { Accordion } from '@heroui/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  return (
   <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        
        {/* header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-default-500 max-w-2xl mx-auto">
            Find answers to the most common questions about BookVerse.
          </p>
        </div>

        {/* accordion */}
        <div className="flex justify-center">
          <Accordion className="w-full max-w-3xl space-y-3" variant="surface">
            {faqs.map((faq) => (
              <Accordion.Item key={faq.id}>
                <Accordion.Heading>
                  <Accordion.Trigger className="group w-full flex items-center justify-between py-4 text-left font-semibold text-foreground text-base md:text-lg rounded-xl">
                    <div className="flex items-center">
                      {/* Left Side */}
                      <span className="mr-3 size-5 shrink-0 text-primary">
                        <HelpCircle size={20} />
                      </span>
                      <span
                      className="transition-colors hover:text-blue-600"
                      >{faq.question}</span>
                    </div>
                    
                    {/* right side indicator */}
                    <Accordion.Indicator>
                      <ChevronDown className="transition-transform duration-200" />
                    </Accordion.Indicator>
                  </Accordion.Trigger>
                </Accordion.Heading>
                
                <Accordion.Panel>
                  <Accordion.Body className="text-default-500 text-sm md:text-base pb-4 pl-8 pr-4 leading-relaxed">
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
};

export default FAQ;