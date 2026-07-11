import { whyChoose } from '@/constants/whyChoose';
import { Card, CardContent } from '@heroui/react';

const WhyChooseUs = () => {
  return (
   <section className="py-16 bg-default-50 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        
        {/* header */}
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Why Choose BookVerse
          </h2>
          <p className="text-default-500 text-lg max-w-xl">
            Discover why thousands of readers trust BookVerse to explore and manage their favorite books.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyChoose.map((item) => (
            <Card 
              key={item.id} 
              className="border-none bg-background shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-300 cursor-pointer group"
            >
              <CardContent className="flex flex-col items-center text-center p-8">
                {/* icon */}
                <div className="text-4xl mb-4 w-16 h-16 bg-primary-50 text-primary rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>

                {/* title */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>

                {/* description*/}
                <p className="text-default-500 text-sm md:text-base max-w-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;