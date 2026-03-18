import React, { useState, useEffect, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { Search, Download, X } from 'lucide-react'; 
import { useLanguage } from '../context/LanguageContext';
import { menuLabels } from '../data/mockData';

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
  
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  useEffect(() => {
    const handleTurnPage = (event) => {
      if (bookRef.current && bookRef.current.pageFlip()) {
        bookRef.current.pageFlip().flip(event.detail.page);
      }
    };

    window.addEventListener('turnMenuPage', handleTurnPage);
    return () => window.removeEventListener('turnMenuPage', handleTurnPage);
  }, []);

  const menuPages = [
    '/images/menu/page-1.jpg', 
    '/images/menu/page-2.jpg', 
    '/images/menu/page-3.jpg', 
    '/images/menu/page-4.jpg', 
    '/images/menu/page-5.jpg', 
    '/images/menu/page-6.jpg', 
    '/images/menu/page-7.jpg', 
    '/images/menu/page-8.jpg', 
    '/images/menu/page-9.jpg', 
    '/images/menu/page-10.jpg',
    '/images/menu/page-11.jpg',
    '/images/menu/page-12.jpg',
  ];

  const buttonsText = {
    zoom: { fr: "Lire en plein écran", en: "Read in full screen", hu: "Teljes képernyős olvasás" },
    download: { fr: "Télécharger (PDF)", en: "Download (PDF)", hu: "Letöltés (PDF)" }
  };

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
        <div id="book-container" className="flex justify-center items-center w-full max-w-5xl mx-auto py-8">
          <HTMLFlipBook
            ref={bookRef}
            width={450}          
            height={636}         
            size="stretch"       
            minWidth={300}
            maxWidth={600}
            minHeight={424}
            maxHeight={800}
            maxShadowOpacity={0.5} 
            showCover={true}       
            mobileScrollSupport={true}
            className="flipbook-menu shadow-2xl"
          >
            {menuPages.map((imgUrl, index) => (
              <Page key={index} image={imgUrl} number={index + 1} />
            ))}
          </HTMLFlipBook>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setIsFullscreenOpen(true)}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-amber-600 transition-colors duration-300 shadow-lg"
          >
            <Search className="w-5 h-5" />
            <span className="font-medium">{buttonsText.zoom[language]}</span>
          </button>

          <a
            href="/images/menu/menu_final.pdf" 
            download="Menu_Madame_Monsieur.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-800 rounded-full hover:border-amber-600 hover:text-amber-600 transition-colors duration-300 shadow-sm"
          >
            <Download className="w-5 h-5" />
            <span className="font-medium">{buttonsText.download[language]}</span>
          </a>
        </div>

        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>{menuLabels.flipInstruction[language]}</p>
        </div>

      </div>

      {isFullscreenOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 overflow-y-auto">
          {/* Bouton Fermer Fixe en haut à droite */}
          <div className="sticky top-0 z-[101] flex justify-end p-4 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
            <button
              onClick={() => setIsFullscreenOpen(false)}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors duration-300 pointer-events-auto"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Liste de toutes les pages à la verticale */}
          <div className="max-w-3xl mx-auto px-4 pb-24 -mt-16">
            <p className="text-white/50 text-center mb-8 text-sm">
              Faites défiler pour lire • Pincez pour zoomer
            </p>
            <div className="flex flex-col space-y-8">
              {menuPages.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`Menu Page ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};