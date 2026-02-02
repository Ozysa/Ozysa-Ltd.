
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  ctaText: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Smart Gram",
    subtitle: "Integrated Rural Tech",
    description: "A comprehensive digital helpdesk, agricultural services, and e-commerce platform designed for rural empowerment across Bangladesh. Bridging the digital divide through innovative technology.",
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&q=80&w=1200",
    link: "#contact",
    ctaText: "View Case Study"
  },
  {
    id: 2,
    title: "Smart Fleet & Battery Management",
    subtitle: "IoT & Industrial Automation",
    description: "Advanced real-time fleet tracking and battery health monitoring system developed for Syntex Motors. Optimizing operations through intelligent data visualization and predictive analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda540d3b9?auto=format&fit=crop&q=80&w=1200",
    link: "#contact",
    ctaText: "View Case Study"
  },
  {
    id: 3,
    title: "Ozysa.com Ecosystem",
    subtitle: "Scalable E-commerce Platform",
    description: "A robust, feature-rich B2B and B2C marketplace platform for clothing, electronics, and lifestyle products. Built for seamless shopping experiences and enterprise-grade performance.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    link: "https://ozysa.com",
    ctaText: "Explore Platform"
  }
];

interface ProjectSliderProps {
  onCaseStudyClick?: (projectId: number) => void;
}

export const ProjectSlider: React.FC<ProjectSliderProps> = ({ onCaseStudyClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  const imageVariants = {
    enter: { scale: 1.1, opacity: 0 },
    center: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
    exit: { scale: 0.95, opacity: 0 }
  };

  const contentVariants = {
    enter: { y: 40, opacity: 0 },
    center: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.6 }
    }),
    exit: { y: -40, opacity: 0 }
  };

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const goToSlide = useCallback((idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  }, [currentIndex]);

  // Auto-play carousel when not hovering
  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(nextSlide, 5500);
    return () => clearInterval(timer);
  }, [nextSlide, isHovering]);

  return (
    <div 
      className="relative w-full h-[450px] md:h-[600px] overflow-hidden rounded-[2.5rem] shadow-2xl group"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950" />
      
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            const swipeThreshold = 50;
            if (info.offset.x > swipeThreshold) {
              prevSlide();
            } else if (info.offset.x < -swipeThreshold) {
              nextSlide();
            }
          }}
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
        >
          {/* Background Image with Zoom Effect */}
          <motion.div 
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${projects[currentIndex].image})` }}
          />
          
          {/* Premium Gradient Overlay - Multi-layer for better depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-slate-800/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-16 text-white">
            <motion.div
              custom={0}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="max-w-3xl"
            >
              {/* Subtitle Badge */}
              <span className="inline-block px-4 py-2 rounded-full bg-blue-600/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest mb-6 shadow-lg shadow-blue-500/30 border border-blue-400/30">
                {projects[currentIndex].subtitle}
              </span>

              {/* Title */}
              <motion.h3 
                custom={1}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter leading-[1.1] text-white drop-shadow-xl"
              >
                {projects[currentIndex].title}
              </motion.h3>

              {/* Description */}
              <motion.p 
                custom={2}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-base md:text-lg lg:text-xl text-slate-100 font-medium mb-8 leading-relaxed max-w-2xl drop-shadow-lg"
              >
                {projects[currentIndex].description}
              </motion.p>

              {/* CTA Button */}
              <motion.div
                custom={3}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <button 
                  onClick={() => {
                    if (projects[currentIndex].id === 1 && onCaseStudyClick) {
                      onCaseStudyClick(projects[currentIndex].id);
                    } else {
                      window.open(projects[currentIndex].link, '_blank');
                    }
                  }}
                  className="inline-flex items-center space-x-3 bg-white text-slate-950 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-sm md:text-base hover:bg-blue-50 active:scale-95 transition-all shadow-2xl shadow-slate-900/50 group/btn hover:shadow-white/20"
                >
                  <span>{projects[currentIndex].ctaText}</span>
                  <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Premium Styling */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 z-30 pointer-events-none">
        <motion.button 
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 md:w-14 md:h-14 glass backdrop-blur-md rounded-full flex items-center justify-center text-white pointer-events-auto hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 border border-white/20 shadow-lg shadow-black/30"
        >
          <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/>
          </svg>
        </motion.button>

        <motion.button 
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 md:w-14 md:h-14 glass backdrop-blur-md rounded-full flex items-center justify-center text-white pointer-events-auto hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100 border border-white/20 shadow-lg shadow-black/30"
        >
          <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/>
          </svg>
        </motion.button>
      </div>

      {/* Dots Indicator - Premium Design */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30 bg-black/20 backdrop-blur-md px-4 py-3 rounded-full border border-white/10">
        {projects.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => goToSlide(idx)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex 
                ? 'w-8 h-2 bg-white shadow-lg shadow-white/50' 
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-30 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        <span className="text-white text-[12px] font-black tracking-widest uppercase">
          {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};
