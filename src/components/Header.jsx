import React, { useState, useEffect } from "react";
import { Menu, X, Globe, Facebook, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { restaurantInfo, headerLabels } from "../data/mockData";
import { useLanguage } from "../context/LanguageContext";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 1. Petite fonction pour rediriger vers les bons IDs
  const getSectionId = (key) => {
    if (key === 'about') return 'a-propos';
    if (key === 'menu') return 'book-container'; // Pointe directement sur le livre !
    return key;
  };

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        // 2. Si c'est le livre, on le centre parfaitement à l'écran
        block: targetId === 'book-container' ? 'center' : 'start'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* GAUCHE : Logo & Titre */}
          <div 
            className="flex items-center space-x-3 cursor-pointer lg:w-1/4"
            onClick={() => scrollToSection('hero')}
          >
            <div>
              <img src="/images/logo.jpg" className="w-10 h-10 rounded-full" alt="Madame Monsieur" />
            </div>
            <h1 className={`font-serif text-2xl font-bold tracking-tighter transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              {restaurantInfo.name}
            </h1>
          </div>

          {/* MILIEU : Navigation + Réservation */}
          <nav className="hidden lg:flex items-center justify-center space-x-6 flex-1">
            {Object.entries(headerLabels.navLinks).map(([id, translations]) => (
              <button
                key={id}
                onClick={() => scrollToSection(getSectionId(id))} // 3. Utilisation de la nouvelle fonction
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                  isScrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {translations[language]}
              </button>
            ))}
            
            <a href={restaurantInfo.reservationLink} target="_blank" rel="noopener noreferrer">
              <Button variant={isScrolled ? "default" : "white"} size="sm">
                {headerLabels.reservation[language]}
              </Button>
            </a>
          </nav>

          {/* DROITE : Langues & Réseaux Sociaux */}
          <div className="flex items-center justify-end space-x-4 lg:w-1/4">
            
            {/* Sélecteur de Langue */}
            <div className="hidden lg:flex items-center space-x-2">
              {['HU', 'EN', 'FR'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLanguage(l.toLowerCase())}
                  className={`text-xs font-bold px-2 py-1 rounded transition-all ${
                    language === l.toLowerCase()
                      ? "bg-amber-600 text-white"
                      : isScrolled ? "text-gray-400 hover:text-gray-900" : "text-white/50 hover:text-white"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Réseaux Sociaux */}
            <div className="hidden lg:flex items-center space-x-3 border-l border-gray-300 pl-4 ml-2">
              <a 
                href={restaurantInfo.socialMedia?.facebook || "#"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 bg-blue-600 hover:scale-110 transition-transform rounded-full flex items-center justify-center text-white shadow-sm"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={restaurantInfo.socialMedia?.instagram || "#"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 hover:scale-110 transition-transform rounded-full flex items-center justify-center text-white shadow-sm"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={isScrolled ? "text-gray-900" : "text-white"} />
              ) : (
                <Menu className={isScrolled ? "text-gray-900" : "text-white"} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 space-y-4">
            {Object.entries(headerLabels.navLinks).map(([id, translations]) => (
              <button
                key={id}
                onClick={() => scrollToSection(getSectionId(id))} // 4. Utilisation ici aussi (mobile)
                className="text-left text-lg font-medium text-gray-800 border-b border-gray-100 pb-2"
              >
                {translations[language]}
              </button>
            ))}

            <div className="py-2">
              <a href={restaurantInfo.reservationLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                  {headerLabels.reservation[language]}
                </Button>
              </a>
            </div>
            
            {/* Réseaux sociaux & Langue dans le menu mobile */}
            <div className="flex flex-col space-y-4 pt-2 border-t border-gray-100">
              <div className="flex items-center space-x-4">
                <a href={restaurantInfo.socialMedia?.facebook || "#"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href={restaurantInfo.socialMedia?.instagram || "#"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <Globe className="w-5 h-5 text-amber-600" />
                <div className="flex space-x-4">
                  {['HU', 'EN', 'FR'].map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        setLanguage(l.toLowerCase());
                        setIsMobileMenuOpen(false);
                      }}
                      className={`font-bold ${language === l.toLowerCase() ? "text-amber-600 underline" : "text-gray-400"}`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};