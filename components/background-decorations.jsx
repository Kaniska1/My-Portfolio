"use client"

import { useEffect, useState } from "react"

export default function BackgroundDecorations() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/3 right-20 w-80 h-80 bg-gradient-to-br from-accent/8 to-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-secondary/8 to-accent/5 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-1/4 left-1/3 w-4 h-4 border border-accent/20 rotate-45 animate-float"></div>
      <div className="absolute top-2/3 right-1/4 w-6 h-6 border border-primary/20 rotate-12 animate-float-delayed"></div>
      <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-secondary/20 rounded-full animate-float-slow"></div>
      <div className="absolute top-1/2 right-1/3 w-5 h-5 border border-text/10 animate-float"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern"></div>
      </div>

      {/* Curved Lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e60000" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#ff6e00" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ffae00" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffae00" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#e60000" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        <path d="M0,100 Q200,50 400,100 T800,100 L800,0 L0,0 Z" fill="url(#gradient1)" className="animate-wave" />

        <path
          d="M0,200 Q300,150 600,200 T1200,200 L1200,0 L0,0 Z"
          fill="url(#gradient2)"
          className="animate-wave-delayed"
        />

        <circle cx="20%" cy="30%" r="2" fill="#fff5d1" opacity="0.1" className="animate-pulse" />
        <circle cx="80%" cy="70%" r="1.5" fill="#ff6e00" opacity="0.15" className="animate-pulse delay-1000" />
        <circle cx="60%" cy="20%" r="1" fill="#ffae00" opacity="0.2" className="animate-pulse delay-2000" />
      </svg>

      {/* Interactive Mouse Follower */}
      <div
        className="absolute w-96 h-96 bg-gradient-radial from-accent/5 to-transparent rounded-full blur-2xl transition-all duration-1000 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      ></div>

      {/* Hexagon Pattern */}
      <div className="absolute top-10 right-10 opacity-10">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <polygon
            points="50,5 85,25 85,65 50,85 15,65 15,25"
            fill="none"
            stroke="#fff5d1"
            strokeWidth="1"
            className="animate-spin-slow"
          />
          <polygon
            points="50,15 75,30 75,60 50,75 25,60 25,30"
            fill="none"
            stroke="#ff6e00"
            strokeWidth="0.5"
            className="animate-spin-reverse"
          />
        </svg>
      </div>

      {/* Abstract Lines */}
      <div className="absolute bottom-10 left-10 opacity-10">
        <svg width="200" height="100" viewBox="0 0 200 100">
          <path
            d="M10,50 Q50,10 100,50 T190,50"
            fill="none"
            stroke="#e60000"
            strokeWidth="1"
            className="animate-draw"
          />
          <path
            d="M10,70 Q80,30 150,70"
            fill="none"
            stroke="#ffae00"
            strokeWidth="0.5"
            className="animate-draw-delayed"
          />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-text/20 rounded-full animate-float-particle-${i % 3}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
