import { features, technologies } from "@/constants/about";
import { Card, CardContent, Chip } from "@heroui/react";

const AboutPage = () => {
  return (
    <section className="bg-default-50 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center relative overflow-hidden">
        {/* Animated Background Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-warning/10 rounded-full blur-3xl -z-10 animate-pulse duration-[6000ms]" />
        
        <Chip  
          className="font-bold uppercase tracking-widest animate-bounce"
        >
          Library Management System
        </Chip>
        
        <h1 className="text-5xl md:text-6xl font-extrabold mt-6 text-default-900 tracking-tight transition-all duration-700 hover:scale-[1.02]">
          About <span className="bg-gradient-to-r from-warning to-amber-500 bg-clip-text text-transparent">BookVerse</span>
        </h1>
        
        <p className="max-w-2xl mx-auto mt-6 text-default-500 text-lg leading-8 animate-fade-in">
          BookVerse is a modern library management system that allows users to browse, search, and borrow books easily through a clean and responsive interface.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <Card className="border border-default-200/50 shadow-sm hover:shadow-xl hover:-translate-y-1 bg-white dark:bg-default-50 transition-all duration-500 rounded-3xl overflow-hidden group">
          <CardContent className="p-12 text-center space-y-4 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-warning/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            <h2 className="text-3xl font-bold text-default-900 transition-colors group-hover:text-warning">Our Mission</h2>
            <p className="text-default-500 leading-relaxed max-w-xl mx-auto text-base">
              Our mission is to simplify library management through a fast, secure, and user-friendly web application designed for modern readers.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-default-900">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title} 
                className="border border-default-150 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group rounded-2xl bg-white dark:bg-default-50"
              >
                <CardContent className="text-center p-8 space-y-5">
                  <div className="w-16 h-16 rounded-2xl bg-warning/10 flex items-center justify-center mx-auto transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <Icon size={32} className="text-warning transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold text-default-900 group-hover:text-warning transition-colors">{feature.title}</h3>
                  <p className="text-default-500 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="max-w-6xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-3xl font-bold mb-10 text-default-900">Technologies Used</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <Chip
              key={tech.id}
              className="px-6 py-5 font-semibold text-default-700 bg-white dark:bg-default-50 border-default-200 hover:border-warning hover:text-warning hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 cursor-default rounded-xl"
            >
              {tech.name}
            </Chip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutPage;