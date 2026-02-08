import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials, testimonialLabels } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export const Testimonials = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;

  const nextTestimonials = () => {
    if (currentIndex + testimonialsPerPage < testimonials.length) {
      setCurrentIndex(currentIndex + testimonialsPerPage);
    }
  };

  const prevTestimonials = () => {
    if (currentIndex - testimonialsPerPage >= 0) {
      setCurrentIndex(currentIndex - testimonialsPerPage);
    }
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerPage);

  return (
    <section id="avis" className="py-24 bg-gradient-to-b from-amber-50/30 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 font-medium text-sm tracking-widest uppercase mb-4">
            {testimonialLabels.badge[language]}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {testimonialLabels.title[language]}
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {testimonialLabels.description[language]}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
              >
                <div className="absolute top-6 right-6 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center opacity-50">
                  <Quote className="w-6 h-6 text-amber-600" />
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.comment[language]}"
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                    <p className="text-xs text-gray-400">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {testimonials.length > testimonialsPerPage && (
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={prevTestimonials}
                disabled={currentIndex === 0}
                className={`p-3 rounded-full transition-all duration-300 ${
                  currentIndex === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-amber-600 text-white hover:bg-amber-700 shadow-lg'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2">
                {Array.from({ length: Math.ceil(testimonials.length / testimonialsPerPage) }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i * testimonialsPerPage)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      Math.floor(currentIndex / testimonialsPerPage) === i
                        ? 'bg-amber-600 w-8'
                        : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonials}
                disabled={currentIndex + testimonialsPerPage >= testimonials.length}
                className={`p-3 rounded-full transition-all duration-300 ${
                  currentIndex + testimonialsPerPage >= testimonials.length
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-amber-600 text-white hover:bg-amber-700 shadow-lg'
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Overall Rating Summary */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-br from-amber-50 to-amber-100 px-8 py-4 rounded-full shadow-md">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="h-6 w-px bg-amber-300"></div>
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-900">5.0</p>
                <p className="text-xs text-gray-600">{testimonialLabels.averageNote[language]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};