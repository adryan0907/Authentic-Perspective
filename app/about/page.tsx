'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation currentPage="about" />

      {/* Main Content */}
      <main className="pt-24 md:pt-32 px-4 md:px-8 pb-16 md:pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Layout */}
          <div className="md:hidden space-y-8">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#00FF00] text-5xl font-bold tracking-tighter"
            >
              ABOUT
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative h-[300px] w-full"
            >
              <Image
                src="/about-image.jpg"
                alt="Johan Verhoeven at work"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-[#00FF00] text-lg md:text-xl leading-relaxed">
                Adryan Sedyaporna brings a unique global perspective to his creative work. Originally from Indonesia and having lived across Scotland, Oman, Iraq, Saudi Arabia, and now the Netherlands, his adaptability has become his greatest strength. Currently pursuing ICT & Media at Fontys, he combines his lifelong passion for visual storytelling with emerging technologies. As an aspiring Videographer and UX designer, Adryan's multicultural background and technical expertise allow him to create work that resonates across cultural boundaries, always pushing the boundaries of digital storytelling.
              </p>
              <div>
                <Link 
                  href="/contact" 
                  className="inline-block bg-[#00FF00] text-black px-8 py-4 text-lg font-medium hover:bg-opacity-90 transition-colors"
                >
                  CONNECT
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <h1 className="text-[#00FF00] text-8xl font-bold tracking-tighter">
                ABOUT
              </h1>
              <p className="text-[#00FF00] text-xl leading-relaxed">
                Adryan Sedyaporna brings a unique global perspective to his creative work. Originally from Indonesia and having lived across Scotland, Oman, Iraq, Saudi Arabia, and now the Netherlands, his adaptability has become his greatest strength. Currently pursuing ICT & Media at Fontys, he combines his lifelong passion for visual storytelling with emerging technologies. As an aspiring Videographer and UX designer, Adryan's multicultural background and technical expertise allow him to create work that resonates across cultural boundaries, always pushing the boundaries of digital storytelling.
              </p>
              <div>
                <Link 
                  href="/contact" 
                  className="group relative inline-block bg-[#00FF00] text-black px-8 py-4 text-xl font-medium overflow-hidden hover:bg-opacity-90 transition-colors"
                >
                  CONNECT
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative h-[600px]"
            >
              <Image
                src="/about-image.jpg"
                alt="Johan Verhoeven at work"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}

// Icon Components
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function VimeoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
    </svg>
  )
}

function EmailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  )
} 