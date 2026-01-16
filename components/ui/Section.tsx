import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  darker?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "", darker = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 lg:py-28 relative overflow-hidden ${darker ? 'bg-buddha-red-dark/30' : 'bg-transparent'} ${className}`}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-buddha-gold mb-4 relative inline-block">
            <span className="relative z-10">{title}</span>
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-buddha-red rounded-full"></span>
          </h2>
          {subtitle && (
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto italic font-serif text-lg">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;