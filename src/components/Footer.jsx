import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Heart } from 'lucide-react';
import { restaurantInfo, footerLabels } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-white">MM</span>
              </div>
              <h3 className="font-serif text-2xl font-bold">{restaurantInfo.name}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              {footerLabels.tagline[language]}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">{footerLabels.nav[language]}</h4>
            <ul className="space-y-3">
              {['accueil', 'a-propos', 'menu', 'galerie', 'avis', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                  >
                    {footerLabels.navLinks[id][language]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">{footerLabels.contact[language]}</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">{restaurantInfo.address}</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <a href={`tel:${restaurantInfo.phone}`} className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm">
                  {restaurantInfo.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">contact@madamemonsieur.hu</span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="font-bold text-lg mb-6">{footerLabels.hours[language]}</h4>
            <div className="space-y-2 text-sm text-gray-400 mb-6">
              <p>{restaurantInfo.hours.weekday[language]}</p>
              <p>{restaurantInfo.hours.weekend[language]}</p>
              <p className="text-red-400">{restaurantInfo.hours.closed[language]}</p>
            </div>
            
            <h4 className="font-bold text-lg mb-4">{footerLabels.social[language]}</h4>
            <div className="flex space-x-3">
              <a href={restaurantInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={restaurantInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} {restaurantInfo.name}. {footerLabels.rights[language]}
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              {footerLabels.madeWith[language]} <Heart className="w-4 h-4 text-red-500 mx-1" /> Budapest
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                {footerLabels.legal[language]}
              </button>
              <button className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                {footerLabels.privacy[language]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};