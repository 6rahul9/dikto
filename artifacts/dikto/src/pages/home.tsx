import React, { useState, useEffect } from 'react';
import { SmoothScroll } from '@/components/SmoothScroll';
import { TextReveal } from '@/components/TextReveal';
import { ParallaxImage } from '@/components/ParallaxImage';
import { MouseTilt } from '@/components/MouseTilt';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const amenities = [
    { title: "Infinity Pool", image: "/amenity-pool.png" },
    { title: "Rooftop Terrace", image: "/amenity-terrace.png" },
    { title: "Private Gym", image: "/amenity-gym.png" },
    { title: "Concierge Lounge", image: "/amenity-lounge.png" },
  ];

  const gallery = [
    "/gallery-1.png",
    "/gallery-2.png",
    "/gallery-3.png",
  ];

  return (
    <SmoothScroll>
      <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-primary-foreground">
        {/* Navigation */}
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${scrolled ? 'bg-background/80 backdrop-blur-md border-border py-4' : 'bg-transparent py-8'}`}>
          <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
            <div className="text-xl tracking-widest font-serif font-bold uppercase text-primary">Dikto</div>
            <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em]">
              <a href="#philosophy" className="hover:text-primary transition-colors">Philosophy</a>
              <a href="#amenities" className="hover:text-primary transition-colors">Amenities</a>
              <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
            <button className="text-xs uppercase tracking-[0.2em] border border-primary/30 px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors duration-500">
              Request Viewing
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <ParallaxImage src="/hero.png" alt="Dikto Exterior" className="w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/90" />
          </div>
          
          <div className="relative z-10 text-center px-6 mt-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <h1 className="text-primary mb-6 drop-shadow-2xl">Dikto</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              <p className="uppercase tracking-[0.3em] text-sm md:text-base max-w-xl mx-auto text-foreground/80">
                A Statement of Restrained Power.
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-xs tracking-widest text-foreground/50 uppercase"
          >
            <span>Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-foreground/50 to-transparent" />
          </motion.div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <TextReveal text="Architecture as an experience." className="mb-12" />
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-foreground/70 leading-relaxed max-w-md mb-8 text-sm md:text-base font-light"
              >
                Dikto was not designed to be seen. It was designed to be felt. 
                Every surface, every transition of light, every shadow is an intentional act of composition. 
                This is living elevated to an art form, where silence and space are the ultimate luxuries.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <a href="#amenities" className="inline-flex items-center gap-4 text-primary text-xs uppercase tracking-widest group">
                  <span className="relative">
                    Discover More
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full"></span>
                  </span>
                  <span className="w-8 h-[1px] bg-primary transition-all duration-500 group-hover:w-16"></span>
                </a>
              </motion.div>
            </div>
            
            <MouseTilt maxRotation={5} className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden">
              <motion.div
                initial={{ height: "100%" }}
                whileInView={{ height: "0%" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 bg-background z-10 origin-bottom"
              />
              <img src="/gallery-1.png" alt="Philosophy" className="w-full h-full object-cover filter brightness-75 contrast-125" />
            </MouseTilt>
          </div>
        </section>

        {/* Amenities Section */}
        <section id="amenities" className="py-24 bg-secondary">
          <div className="container mx-auto px-6 md:px-12">
            <div className="mb-20 text-center">
              <TextReveal text="Curated Amenities" elementType="h2" className="justify-center mb-6" />
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm tracking-widest uppercase text-primary"
              >
                Beyond Expectation
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {amenities.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-background">
                    <motion.img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-lg font-serif text-foreground/90 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-32 md:py-48 px-6 md:px-12">
          <div className="container mx-auto">
            <TextReveal text="Vistas & Interiors" className="mb-16" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
              <div className="md:col-span-8 relative aspect-video overflow-hidden cursor-none group" onClick={() => setLightboxImage(gallery[0])}>
                <div className="absolute inset-0 bg-primary/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="text-primary-foreground text-xs uppercase tracking-widest">View</span>
                </div>
                <ParallaxImage src={gallery[0]} alt="Gallery 1" className="w-full h-full" />
              </div>
              <div className="md:col-span-4 flex flex-col gap-6 md:gap-12 justify-center">
                {gallery.slice(1).map((img, i) => (
                  <div key={i} className="relative aspect-[4/3] overflow-hidden cursor-none group" onClick={() => setLightboxImage(img)}>
                    <div className="absolute inset-0 bg-primary/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="text-primary-foreground text-xs uppercase tracking-widest">View</span>
                    </div>
                    <img src={img} alt={`Gallery ${i+2}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-secondary border-t border-border/50">
          <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
            <TextReveal text="Inquire Privately" className="mb-8 justify-center" />
            <p className="text-foreground/70 mb-16 text-sm tracking-wide max-w-xl mx-auto">
              Residences are currently available for private viewing by appointment only. 
              Register your interest to receive comprehensive details.
            </p>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-foreground/50 block">First Name</label>
                <input type="text" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors rounded-none font-light" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-foreground/50 block">Last Name</label>
                <input type="text" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors rounded-none font-light" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-foreground/50 block">Email Address</label>
                <input type="email" className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors rounded-none font-light" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-foreground/50 block">Inquiry Type</label>
                <select className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-primary transition-colors rounded-none font-light text-foreground appearance-none">
                  <option value="penthouse" className="bg-secondary text-foreground">Penthouse Collection</option>
                  <option value="residence" className="bg-secondary text-foreground">Signature Residences</option>
                  <option value="general" className="bg-secondary text-foreground">General Inquiry</option>
                </select>
              </div>
              <div className="md:col-span-2 mt-8 text-center">
                <button className="px-12 py-4 bg-primary text-primary-foreground uppercase tracking-widest text-xs hover:bg-primary/90 transition-colors">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background py-12 border-t border-border">
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-serif font-bold text-primary tracking-widest uppercase">
              Dikto
            </div>
            <div className="flex gap-8 text-xs uppercase tracking-widest text-foreground/50">
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            </div>
            <div className="text-xs text-foreground/40 tracking-wide">
              &copy; {new Date().getFullYear()} Dikto Residences. All rights reserved.
            </div>
          </div>
        </footer>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-xl p-4 md:p-12 cursor-pointer"
              onClick={() => setLightboxImage(null)}
            >
              <button 
                className="absolute top-8 right-8 text-foreground/50 hover:text-foreground z-50 p-4"
                onClick={() => setLightboxImage(null)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={lightboxImage}
                alt="Enlarged"
                className="w-full h-full object-contain cursor-default shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </SmoothScroll>
  );
}
