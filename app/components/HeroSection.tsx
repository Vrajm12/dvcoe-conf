'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight, FaStar } from 'react-icons/fa';

interface HeroProps {
  heroTitle?: string;
  heroSubtitle?: string;
  heroTagline?: string;
  heroEventType?: string;
  heroBackground?: string;
}

export default function EnhancedHero({
  heroTitle = 'ICCET-2026',
  heroSubtitle = '9th International Conference on Computing and Technology',
  heroTagline = 'International Conference',
  heroEventType = 'Hybrid mode',
  heroBackground = "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop"
}: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const scaleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Image with Parallax */}
        <Image
          src={heroBackground}
          alt="Conference Background"
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
        
        {/* Multiple Gradient Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-blue-950/70 to-indigo-950/80"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              background: i % 3 === 0 ? '#00d9ff' : i % 3 === 1 ? '#a78bfa' : '#93c5fd',
            }}
            initial={{ 
              opacity: 0, 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * 1000 
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              y: [Math.random() * 1000, -200, Math.random() * 1000],
              x: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-8"
          >
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="text-yellow-400"
            >
              <FaStar size={20} />
            </motion.span>
            <span className="text-sm md:text-base font-semibold text-yellow-300 uppercase tracking-widest bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2">
              {heroTagline}
            </span>
            <motion.span
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="text-yellow-400"
            >
              <FaStar size={20} />
            </motion.span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-yellow-300 via-white to-blue-200 bg-clip-text text-transparent drop-shadow-2xl">
              {heroTitle}
            </span>
          </motion.h1>

          {/* Decorative Line */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-1 w-12 bg-gradient-to-r from-yellow-400 to-transparent"></div>
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
            <div className="h-1 w-12 bg-gradient-to-r from-transparent to-yellow-400"></div>
          </motion.div>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          >
            <span className="text-white drop-shadow-lg">
              {heroSubtitle}
            </span>
          </motion.h2>

          {/* Event Type Badge */}
          <motion.div
            variants={scaleVariants}
            className="inline-flex items-center justify-center gap-3 mb-12 bg-gradient-to-r from-yellow-400 to-amber-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg shadow-2xl"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xl"
            >
              ●
            </motion.span>
            <span>{heroEventType}</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="text-xl"
            >
              ●
            </motion.span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-6 mt-12"
          >
            {/* Call for Papers Button */}
            <motion.div
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Link
                href="/authors/call-for-papers"
                className="relative inline-block bg-white text-blue-900 px-12 py-5 rounded-xl font-bold text-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-gray-50"
              >
                <div className="relative flex items-center gap-2">
                  <span>Call for Papers</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaArrowRight size={16} />
                  </motion.span>
                </div>
              </Link>
            </motion.div>

            {/* Register Now Button */}
            <motion.div
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <Link
                href="/registration/author"
                className="relative inline-block bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 px-12 py-5 rounded-xl font-bold text-lg shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-amber-400/50"
              >
                {/* Button Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></div>
                <div className="relative flex items-center gap-2">
                  <span>Register Now</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaArrowRight size={16} />
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-16 flex justify-center"
          >
            <div className="text-white/50 text-sm font-medium flex flex-col items-center gap-2">
              <span>Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-2 bg-white/50 rounded-full mt-2"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Top Gradient Bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-20"></div>
    </section>
  );
}
