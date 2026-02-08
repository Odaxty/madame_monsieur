import React, { useState } from 'react';
import { menuCategories, menuLabels } from '../data/mockData';
import { Utensils, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const { language } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 font-medium text-sm tracking-widest uppercase mb-4">
            {menuLabels.badge[language]}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {menuLabels.title[language]}
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {menuLabels.description[language]}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {menuCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.category[language]}
              </button>
            ))}
          </div>

          {/* Menu Items Box */}
          <div className="bg-gradient-to-br from-amber-50/50 to-white rounded-2xl shadow-xl p-8 md:p-12">
            {/* Category Title within Box */}
            <div className="text-center mb-8">
              <h3 className="font-serif text-3xl font-bold text-gray-900 mb-2">
                {menuCategories[activeCategory].category[language]}
              </h3>
              {menuCategories[activeCategory].subtitle && (
                <p className="text-amber-600 font-medium text-sm tracking-wide uppercase">
                  {menuCategories[activeCategory].subtitle}
                </p>
              )}
            </div>

            <div className="grid gap-6">
              {menuCategories[activeCategory].items.map((item, index) => (
                <div
                  key={index}
                  className="group pb-6 border-b border-amber-200/50 last:border-0 last:pb-0 hover:pb-8 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <Utensils className="w-4 h-4 text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <h4 className="font-serif text-xl md:text-2xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors duration-300">
                          {item.name}
                        </h4>
                      </div>
                      {item.description && (
                        <p className="text-gray-600 leading-relaxed ml-0 group-hover:ml-7 transition-all duration-300">
                          {item.description[language]}
                        </p>
                      )}
                    </div>
                    {item.price && (
                      <div className="flex-shrink-0">
                        <span className="text-lg font-bold text-amber-600">{item.price}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Gluten Free Note (Spécifique aux Galettes - ID 3 dans ton mock) */}
            {menuCategories[activeCategory].id === 3 && (
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start space-x-3">
                <Info className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-green-800">
                  <strong>{menuLabels.glutenTitle[language]}</strong> {menuLabels.glutenText[language]}
                </p>
              </div>
            )}

            {/* Extras Note */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                <strong>{menuLabels.extrasTitle[language]}</strong>{' '}
                {menuCategories[activeCategory].id < 3 
                  ? menuLabels.extrasSweet[language] 
                  : menuLabels.extrasSavory[language]}
              </p>
            </div>
          </div>

          {/* Full Menu CTA */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              {menuLabels.galleryCTA[language]}
            </p>
            <button
              onClick={() => scrollToSection('galerie')}
              className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 hover:bg-amber-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {menuLabels.galleryBtn[language]}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};