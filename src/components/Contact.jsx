import React from 'react';
import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { restaurantInfo, contactLabels } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export const Contact = () => {
  const { language } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 font-medium text-sm tracking-widest uppercase mb-4">
            {contactLabels.badge[language]}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {contactLabels.title[language]}
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Reservation CTA */}
            <div className="space-y-8">
              

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {/* Address */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{contactLabels.address[language]}</h4>
                      <p className="text-gray-600">{restaurantInfo.address}</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{contactLabels.phoneLabel[language]}</h4>
                      <a
                        href={`tel:${restaurantInfo.phone}`}
                        className="text-amber-600 hover:text-amber-700 transition-colors duration-300"
                      >
                        {restaurantInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{contactLabels.hours[language]}</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>{restaurantInfo.hours.weekday[language]}</p>
                        <p>{restaurantInfo.hours.weekend[language]}</p>
                        <p className="text-red-600 font-medium">{restaurantInfo.hours.closed[language]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Map */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-[385px]">
                <iframe
                  src="https://maps.google.com/maps?q=Madame%20Monsieur%20Budapest%20Hajós%20u.%2027&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Madame Monsieur Location"
                ></iframe>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};