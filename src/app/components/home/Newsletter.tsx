'use client'
import { newsLetter } from '@/constants/newsletter';
import { Button, Form, Input } from '@heroui/react';

const Newsletter = () => {

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    console.log(email);
  }

  return (
    <section className="py-20 bg-default-50 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-background border border-default-200/60 rounded-3xl p-8 md:p-16 shadow-sm flex flex-col items-center text-center relative overflow-hidden">
        
        {/* background */}
        <div className="absolute -top-24 -left-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        {/* header */}
        <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight max-w-xl">
          {newsLetter.title}
        </h2>
        <p className="text-default-500 text-base md:text-lg max-w-2xl mb-8 leading-relaxed">
          {newsLetter.description}
        </p>

        {/* form */}
        <Form 
          onSubmit={handleSubscribe}
          className="w-full max-w-md flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-center"
        >
         
          <Input
            required
            type="email"
            name="email"
            color="primary"
            placeholder={newsLetter.placeholder}
            className="w-full text-left h-12 bg-default-50 border-default-200 hover:border-primary/50 focus-within:!border-primary rounded-xl text-foreground placeholder:text-default-400 text-sm md:text-base"
          />
          <Button 
            type="submit" 
            className="h-12 px-8 font-bold text-sm md:text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200 shrink-0"
          >
            {newsLetter.buttonText}
          </Button>
        </Form>

      </div>
    </section>
  );
};

export default Newsletter;