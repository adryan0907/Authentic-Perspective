'use client'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navigation from './components/Navigation'

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const textX = useTransform(scrollYProgress, [0, 1], [0, -1000])
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  return (
    <div ref={containerRef} className="min-h-[200vh] bg-black text-white overflow-hidden">
      <Navigation currentPage="home" />

      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#00FF00_0%,_rgba(0,255,0,0)_50%)] opacity-20 animate-pulse" />
        <motion.div 
          className="absolute inset-0 bg-[url('/noise.png')] opacity-50"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
      </div>

      {/* Main Content */}
      <main className="relative pt-32">
        {/* Experimental Text Layout */}
        <div className="relative h-screen">
          <motion.div 
            className="absolute left-[-20%] top-1/4 whitespace-nowrap"
            style={{ x: textX }}
          >
            <h1 className="text-[20vw] font-bold leading-none tracking-tighter text-[#00FF00] opacity-20">
              VISUAL ALCHEMY
            </h1>
          </motion.div>

          <motion.div
            className="absolute left-1/4 top-1/3 max-w-xl"
            style={{ scale: textScale, opacity }}
          >
            <h2 className="text-[#00FF00] text-8xl md:text-8xl font-bold mb-8 leading-none">
              CREATING
              <br />
              IMPACT
            </h2>
            <p className="text-xl text-white/60 mb-8">
              Transforming moments into lasting impressions
            </p>
          </motion.div>

          {/* Floating Images */}
          <div className="absolute right-20 top-40 w-72 h-96">
            <motion.div
              className="relative w-full h-full"
              animate={{ 
                rotateX: [0, 10, 0],
                rotateY: [0, 15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Image
                src="/campaign1.jpg"
                alt="Featured Work"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            className="absolute left-20 bottom-40 w-64 h-80"
            animate={{ 
              y: [0, -30, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Image
              src="/photo1.jpg"
              alt="Photography"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Interactive Elements */}
        <div className="h-screen relative flex items-center justify-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                className="mb-8"
                whileHover={{ scale: 1.2 }}
              >
                <Link 
                  href="/contact"
                  className="relative inline-block"
                >
                  <span className="absolute inset-0 bg-[#00FF00] blur-lg opacity-50" />
                  <span className="relative block bg-black px-12 py-4 text-[#00FF00] border border-[#00FF00] hover:bg-[#00FF00] hover:text-black transition-colors">
                    EXPLORE WORK
                  </span>
                </Link>
              </motion.div>
              
              <motion.div 
                className="text-[#00FF00] text-opacity-50 text-sm"
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                SCROLL TO DISCOVER
              </motion.div>
            </div>
          </motion.div>
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
