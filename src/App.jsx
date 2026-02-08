import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { MenuSection } from "./components/MenuSection"; 
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Testimonials } from "./components/Testimonials";
import { LanguageProvider } from './context/LanguageContext';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        
        <main>
          <Hero />
          <About />
          <MenuSection />
          <Testimonials />
          <Gallery />
          <Contact />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;