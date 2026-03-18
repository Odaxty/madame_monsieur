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

  const handleNavigateToMenu = (index) => {
    // Index 0 = "Recettes traditionnelles" -> Page 2 (index 1)
    // Index 1 = "Carte des vins" -> Page 8 (index 7)
    const targetPage = index === 0 ? 1 : 7; 

    // 1. On cible directement le conteneur du livre (pas la section entière)
    const bookContainer = document.getElementById('book-container');
    
    if (bookContainer) {
      // block: 'center' permet de mettre le livre parfaitement au milieu de l'écran
      bookContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // 2. On attend 800ms (le temps que le défilement se termine) pour lancer l'animation !
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('turnMenuPage', { detail: { page: targetPage } }));
    }, 800);
  };

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
                  src="/images/plat/plat6.jpg"
                  alt="Madame Monsieur Budapest"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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
                      onClick={() => handleNavigateToMenu(index)}
                      className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-amber-100 hover:shadow-md transition-all duration-300 cursor-pointer hover:bg-amber-50 hover:-translate-y-1"
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