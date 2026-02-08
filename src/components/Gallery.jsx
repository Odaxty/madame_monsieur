import React, { useState } from "react";
import {
  drinks,
  interiorPhotos,
  dishPhotos,
  menuPhotos,
  galleryLabels // Importation des labels traduits
} from "../data/mockData";
import { Wine, Home, Utensils, BookOpen, X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { language } = useLanguage();

  return (
    <section
      id="galerie"
      className="py-24 bg-gradient-to-b from-white to-amber-50/30"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 font-medium text-sm tracking-widest uppercase mb-4">
            {galleryLabels.badge[language]}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {galleryLabels.title[language]}
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {galleryLabels.description[language]}
          </p>
        </div>

        {/* Drinks Showcase */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Wine className="w-5 h-5 text-amber-600" />
            <h3 className="font-serif text-2xl font-bold text-gray-900">
              {galleryLabels.drinks[language]}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {drinks.map((drink) => (
              <div
                key={drink.id}
                onClick={() => setSelectedImage(drink)}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={drink.image}
                  alt={drink.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium text-sm text-center">
                      {drink.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dishes Photos */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Utensils className="w-5 h-5 text-amber-600" />
            <h3 className="font-serif text-2xl font-bold text-gray-900">
              {galleryLabels.dishes[language]}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {dishPhotos.map((dish) => (
              <div
                key={dish.id}
                onClick={() =>
                  setSelectedImage({ ...dish, image: dish.src, name: dish.alt })
                }
                className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={dish.src}
                  alt={dish.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium text-sm text-center">
                      {dish.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Photos */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <BookOpen className="w-5 h-5 text-amber-600" />
            <h3 className="font-serif text-2xl font-bold text-gray-900">
              {galleryLabels.menu[language]}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {menuPhotos.map((menu) => (
              <div
                key={menu.id}
                onClick={() =>
                  setSelectedImage({ ...menu, image: menu.src, name: menu.alt })
                }
                className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={menu.src}
                  alt={menu.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-medium text-sm text-center">
                      {menu.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="max-w-2xl w-full">
            <img
              src={selectedImage.image}
              alt={selectedImage.name}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-4 text-lg font-medium">
              {selectedImage.name}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};