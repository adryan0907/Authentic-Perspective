'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface NavigationProps {
  currentPage: 'home' | 'campaigns' | 'photo' | 'about' | 'contact'
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 p-4 bg-black/80 backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-48 md:w-64">
          <Image
            src="/Authentic perspective 4copy (1).png"
            alt="Authentic Perspective"
            width={240}
            height={60}
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="/" 
            className={currentPage === 'home' ? 'text-[#00FF00]' : 'text-white hover:text-[#00FF00] transition-colors'}
          >
            HOME
          </Link>
          <Link 
            href="/campaigns" 
            className={currentPage === 'campaigns' ? 'text-[#00FF00]' : 'text-white hover:text-[#00FF00] transition-colors'}
          >
            CAMPAIGNS
          </Link>
          <Link 
            href="/photo" 
            className={currentPage === 'photo' ? 'text-[#00FF00]' : 'text-white hover:text-[#00FF00] transition-colors'}
          >
            PHOTO
          </Link>
          <Link 
            href="/about" 
            className={currentPage === 'about' ? 'text-[#00FF00]' : 'text-white hover:text-[#00FF00] transition-colors'}
          >
            ABOUT
          </Link>
          <Link 
            href="/contact" 
            className={currentPage === 'contact' ? 'text-[#00FF00]' : 'text-white hover:text-[#00FF00] transition-colors'}
          >
            CONTACT
          </Link>
          <div className="flex gap-4 ml-8">
            <Link href="https://instagram.com" target="_blank">
              <InstagramIcon className="w-6 h-6 text-[#00FF00] hover:scale-110 transition-transform" />
            </Link>
            <Link href="https://vimeo.com" target="_blank">
              <VimeoIcon className="w-6 h-6 text-[#00FF00] hover:scale-110 transition-transform" />
            </Link>
            <Link href="mailto:contact@example.com">
              <EmailIcon className="w-6 h-6 text-[#00FF00] hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#00FF00] p-2"
        >
          {!isMenuOpen ? (
            <MenuIcon className="w-8 h-8" />
          ) : (
            <CloseIcon className="w-8 h-8" />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg p-4 md:hidden"
            >
              <div className="flex flex-col items-center gap-6 py-8">
                <Link 
                  href="/" 
                  className={currentPage === 'home' ? 'text-[#00FF00] text-2xl' : 'text-white text-2xl hover:text-[#00FF00] transition-colors'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link 
                  href="/campaigns" 
                  className={currentPage === 'campaigns' ? 'text-[#00FF00] text-2xl' : 'text-white text-2xl hover:text-[#00FF00] transition-colors'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  CAMPAIGNS
                </Link>
                <Link 
                  href="/photo" 
                  className={currentPage === 'photo' ? 'text-[#00FF00] text-2xl' : 'text-white text-2xl hover:text-[#00FF00] transition-colors'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  PHOTO
                </Link>
                <Link 
                  href="/about" 
                  className={currentPage === 'about' ? 'text-[#00FF00] text-2xl' : 'text-white text-2xl hover:text-[#00FF00] transition-colors'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  ABOUT
                </Link>
                <Link 
                  href="/contact" 
                  className={currentPage === 'contact' ? 'text-[#00FF00] text-2xl' : 'text-white text-2xl hover:text-[#00FF00] transition-colors'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </Link>
                <div className="flex gap-6 mt-4">
                  <Link href="https://instagram.com" target="_blank">
                    <InstagramIcon className="w-8 h-8 text-[#00FF00]" />
                  </Link>
                  <Link href="https://vimeo.com" target="_blank">
                    <VimeoIcon className="w-8 h-8 text-[#00FF00]" />
                  </Link>
                  <Link href="mailto:contact@example.com">
                    <EmailIcon className="w-8 h-8 text-[#00FF00]" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

// Add MenuIcon and CloseIcon components
function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

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