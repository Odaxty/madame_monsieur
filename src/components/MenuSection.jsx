import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useLanguage } from '../context/LanguageContext';
import { menuLabels } from '../data/mockData';
import { useEffect, useRef } from 'react';

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="bg-white shadow-xl overflow-hidden" ref={ref}>
      <img 
        src={props.image} 
        alt={`Page ${props.number}`} 
        className="w-full h-full object-cover"
        draggable="false" 
      />
    </div>
  );
});

export const MenuSection = () => {
  const { language } = useLanguage();

  const bookRef = useRef(null);

  useEffect(() => {
    const handleTurnPage = (event) => {
      if (bookRef.current && bookRef.current.pageFlip()) {
        bookRef.current.pageFlip().flip(event.detail.page);
      }
    };

    window.addEventListener('turnMenuPage', handleTurnPage);
    return () => window.removeEventListener('turnMenuPage', handleTurnPage);
  }, []);

  // Remplace ces chemins par les chemins réels de tes images générées depuis le PDF
  const menuPages = [
    '/images/menu/page-1.jpg',  // Couverture (Page 1)
    '/images/menu/page-2.jpg',  // Előételek / Appetizers
    '/images/menu/page-3.jpg',  // Főételek / Main Courses
    '/images/menu/page-4.jpg',  // Galettes / Salads
    '/images/menu/page-5.jpg',  // Desserts / Sweet Crêpes
    '/images/menu/page-6.jpg',  // Coupes de Glaces
    '/images/menu/page-7.jpg',  // Itallap / Drinks
    '/images/menu/page-8.jpg',  // Cafés / Thés
    '/images/menu/page-9.jpg',  // Softs / Cocktails sans alcool
    '/images/menu/page-10.jpg', // Bières / Digestifs
    '/images/menu/page-11.jpg', // Vins
    '/images/menu/page-12.jpg', // Dos de couverture (Budapest, Hajós utca 27)
  ];

  return (
    <section id="menu" className="py-24 bg-[#fdfbf7]">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* En-tête de la section */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 font-medium text-sm tracking-widest uppercase mb-4">
            {menuLabels?.badge?.[language] || "Notre Carte"}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {menuLabels?.title?.[language] || "Découvrez le Menu"}
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
        </div>

        {/* Conteneur du Flipbook */}
<div id="book-container" className="flex justify-center items-center w-full max-w-5xl mx-auto py-8">          <HTMLFlipBook
            ref={bookRef}
            width={450}          // Largeur de base d'une seule page
            height={636}         // Hauteur de base (ratio typique A4/Menu)
            size="stretch"       // Permet au livre de s'adapter au conteneur
            minWidth={300}
            maxWidth={600}
            minHeight={424}
            maxHeight={800}
            maxShadowOpacity={0.5} // Opacité de l'ombre au centre du livre
            showCover={true}       // LA PROPRIÉTÉ MAGIQUE : Couverture fermée au début et à la fin !
            mobileScrollSupport={true}
            className="flipbook-menu"
          >
            {menuPages.map((imgUrl, index) => (
              <Page key={index} image={imgUrl} number={index + 1} />
            ))}
          </HTMLFlipBook>
        </div>

        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>{menuLabels.flipInstruction[language]}</p>        
        </div>

      </div>
    </section>
  );
};