import React, { useState } from "react";
import {
  drinks,
  dishPhotos,
  interiorPhotos, 
  galleryLabels
} from "../data/mockData";
import { X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { language } = useLanguage();

  // 1. Formatage des photos d'intérieur
  const formattedInterior = interiorPhotos.slice(0, 4).map(photo => ({
    id: `interior-${photo.id}`,
    image: photo.src,
  }));

  // 2. Formatage des plats
  const formattedDishes = dishPhotos.map(dish => ({
    id: `dish-${dish.id}`,
    image: dish.src,
  }));

  // 3. Formatage des boissons
  const formattedDrinks = drinks.map(drink => ({
    id: `drink-${drink.id}`,
    image: drink.image,
  }));

  // 4. On fusionne tout : L'intérieur d'abord, puis les plats, puis les boissons
  const allGalleryItems = [ ...formattedDishes, ...formattedDrinks, ...formattedInterior];

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

        {/* Grille Unifiée */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {allGalleryItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt="Galerie Madame Monsieur" // Alt générique pour le SEO
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Petit effet de voile au survol sans aucun texte */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal (Fenêtre plein écran) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors duration-300"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div 
            className="max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt="Madame Monsieur"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg shadow-2xl mx-auto"
            />
            {/* Le texte qui était ici a été complètement supprimé ! */}
          </div>
        </div>
      )}
    </section>
  );
};