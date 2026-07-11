import { testimonials } from '@/constants/testimonials';
import { Avatar, Card, CardContent } from '@heroui/react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            What Our Readers Say
          </h2>
          <p className="mt-3 text-slate-500 max-w-2xl mx-auto">
            Thousands of readers trust BookVerse to discover and enjoy their
            favorite books.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <CardContent className="p-6">
                {/* rating */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* review */}
                <p className="text-default-600 leading-7 mb-6">
                  {testimonial.review}
                </p>

                {/* user */}
                <div className="flex items-center gap-4">
                  <Avatar size="lg">
                  <Avatar.Image
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                    <Avatar.Fallback>
                       {testimonial.name.charAt(0)}
                    </Avatar.Fallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-default-500">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;