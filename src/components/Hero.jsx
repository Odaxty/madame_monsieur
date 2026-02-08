import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { restaurantInfo, heroLabels } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { language } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://customer-assets.emergentagent.com/job_budapest-bistrot/artifacts/ttlnjusw_boisson2.jpg"
          alt="Madame Monsieur Restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8 animate-fadeIn">
              <span className="text-white text-sm font-medium tracking-wide flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                {heroLabels.badge[language]}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fadeIn leading-tight">
              {restaurantInfo.name}
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-3xl text-amber-100 font-light mb-8 tracking-wide animate-fadeIn">
              {restaurantInfo.tagline[language]}
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed animate-fadeIn">
              {restaurantInfo.description[language]}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeIn">
              <a href={restaurantInfo.reservationLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-medium shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 group"
                >
                  {heroLabels.ctaBook[language]}
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('menu')}
                className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg font-medium transition-all duration-300"
              >
                {heroLabels.ctaMenu[language]}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};