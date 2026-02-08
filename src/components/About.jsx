import React from 'react';
import { ChefHat, Wine, Sparkles, Heart } from 'lucide-react';
import { aboutContent } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

const iconMap = {
  'chef-hat': ChefHat,
  'wine': Wine,
  'sparkles': Sparkles,
  'heart': Heart
};

export const About = () => {
  const { language } = useLanguage();

  return (
    <section id="a-propos" className="py-24 bg-gradient-to-b from-white to-amber-50/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-amber-600 font-medium text-sm tracking-widest uppercase mb-4">
              {aboutContent.title[language]}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {aboutContent.title[language]}
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://customer-assets.emergentagent.com/job_budapest-bistrot/artifacts/vdyvqj6v_boisson3.jpg"
                  alt="Madame Monsieur Budapest"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-2xl p-6 max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      {/* On garde Excellence/Kiválóság ici ou on peut l'ajouter au mock plus tard */}
                      {language === 'fr' ? 'Excellence' : language === 'hu' ? 'Kiválóság' : 'Excellence'}
                    </p>
                    <p className="text-sm text-gray-600">
                      {aboutContent.subtitle[language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
                {aboutContent.subtitle[language]}
              </h3>
              
              {/* Paragraphes traduits dynamiquement */}
              {aboutContent.paragraphs[language].map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Highlights (Cuisine raffinée, Borlap, etc.) */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {aboutContent.highlights.map((highlight, index) => {
                  const Icon = iconMap[highlight.icon];
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-amber-100 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-amber-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-800">
                        {highlight.text[language]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};