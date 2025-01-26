'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '../components/Navigation'

const campaigns = [
  {
    title: "NOART ANTI-PORNVERSIE",
    image: "/campaign1.jpg",
    link: "/campaigns/noart"
  },
  {
    title: "LEASE A BIKE - JOIN THE RIDE",
    image: "/campaign2.jpg",
    link: "/campaigns/lease-a-bike"
  },
  {
    title: "HUDIKX X ROSE BERTRAM",
    image: "/campaign3.jpg",
    link: "/campaigns/hudikx"
  },
  {
    title: "CLUB ZIEN - MUSEUM TRAINING VOOR HET VMBO",
    image: "/campaign4.jpg",
    link: "/campaigns/club-zien"
  },
  {
    title: "FILMORE",
    image: "/campaign5.jpg",
    link: "/campaigns/filmore"
  },
  {
    title: "KUNSTBENDE BRAND WORLD",
    image: "/campaign6.jpg",
    link: "/campaigns/kunstbende"
  }
]

export default function Campaigns() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation currentPage="campaigns" />
      {/* Main Content */}
      <main className="pt-32 px-8 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
          {campaigns.map((campaign, index) => (
            <Link 
              href={campaign.link} 
              key={index}
              className="relative group overflow-hidden"
            >
              <div className="relative h-[70vh] w-full">
                <Image
                  src={campaign.image}
                  alt={campaign.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                <h2 className="absolute bottom-8 left-8 text-[#00FF00] text-5xl font-bold tracking-tight">
                  {campaign.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
} 