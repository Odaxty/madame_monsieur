import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <div >
              <img src="/images/logo.jpg" className="w-10 h-10 rounded-full "alt="" />
            </div>
            <h1 className={`font-serif text-2xl font-bold tracking-tighter ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              {restaurantInfo.name}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {Object.entries(headerLabels.navLinks).map(([id, translations]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id === 'about' ? 'a-propos' : id)}
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                  isScrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {translations[language]}
              </button>
            ))}

            {/* Language Selector */}
            <div className="flex items-center space-x-2 border-l border-gray-300 pl-6 ml-2">
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

            <a href={restaurantInfo.reservationLink} target="_blank" rel="noopener noreferrer">
              <Button variant={isScrolled ? "default" : "white"} size="sm">
                {headerLabels.reservation[language]}
              </Button>
            </a>
          </nav>

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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 space-y-4">
            {Object.entries(headerLabels.navLinks).map(([id, translations]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id === 'about' ? 'a-propos' : id)}
                className="text-left text-lg font-medium text-gray-800 border-b border-gray-100 pb-2"
              >
                {translations[language]}
              </button>
            ))}
            
            <div className="flex items-center space-x-4 py-2">
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
          </nav>
        </div>
      )}
    </header>
  );
};