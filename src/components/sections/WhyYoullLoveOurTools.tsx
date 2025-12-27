"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Sparkles, MapPin, Coins, CheckCircle2 } from "lucide-react";

const WhyYoullLoveOurTools = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [feature1Ref, feature1Visible] = useScrollAnimation();
  const [feature2Ref, feature2Visible] = useScrollAnimation();
  const [feature3Ref, feature3Visible] = useScrollAnimation();

  const features = [
    {
      icon: Coins,
      title: "Real Clarity",
      description: "No confusing HR jargon.",
      gradient: "from-amber-400 to-yellow-500",
      bgGradient: "from-amber-50 to-yellow-50",
      iconBg: "bg-gradient-to-br from-amber-100 to-yellow-100",
      delay: "0ms",
    },
    {
      icon: MapPin,
      title: "India Specific",
      description: "Built for Indian salaries.",
      gradient: "from-emerald-400 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50",
      iconBg: "bg-gradient-to-br from-emerald-100 to-teal-100",
      delay: "200ms",
    },
    {
      icon: CheckCircle2,
      title: "Instant Results",
      description: "Quick & private calculations.",
      gradient: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      iconBg: "bg-gradient-to-br from-blue-100 to-cyan-100",
      delay: "400ms",
    },
  ];

  return (
    <section className="py-8 md:py-10 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden relative">
      {/* Background decorative elements - minimal */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-5 left-5 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute top-10 right-5 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Title - compact */}
        <div
          ref={titleRef}
          className={`text-center mb-6 md:mb-8 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            Why You&apos;ll Love{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Our Tools
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-lg mx-auto">
            Experience financial clarity with tools designed specifically for you
          </p>
        </div>

        {/* Features Grid - compact */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const refs = [feature1Ref, feature2Ref, feature3Ref];
            const visibles = [feature1Visible, feature2Visible, feature3Visible];

            return (
              <div
                key={index}
                ref={refs[index]}
                className={`group transition-all duration-700 ${
                  visibles[index]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: feature.delay }}
              >
                <div className="relative h-full">
                  {/* Card - compact with design */}
                  <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full flex flex-col items-center text-center group-hover:-translate-y-1 relative overflow-hidden">
                    {/* Decorative background pattern */}
                    <div className={`absolute inset-0 opacity-5 ${feature.bgGradient} bg-gradient-to-br`}></div>
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-full blur-2xl`}></div>
                    </div>
                    
                    {/* Illustration Container with Light Blue Background */}
                    <div className="relative mb-4 w-32 h-32 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      {/* Light Blue Circular Background with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full shadow-lg"></div>
                      
                      {/* 3D SVG Illustrations */}
                      {index === 0 && (
                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                          <svg viewBox="0 0 140 140" className="w-24 h-24">
                            <defs>
                              <radialGradient id={`coinGrad-${index}`} cx="35%" cy="35%">
                                <stop offset="0%" stopColor="#fef08a" />
                                <stop offset="30%" stopColor="#fde047" />
                                <stop offset="60%" stopColor="#fbbf24" />
                                <stop offset="100%" stopColor="#d97706" />
                              </radialGradient>
                              <linearGradient id={`noteGrad-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#34d399" />
                                <stop offset="50%" stopColor="#10b981" />
                                <stop offset="100%" stopColor="#047857" />
                              </linearGradient>
                              <linearGradient id={`noteGrad2-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#4ade80" />
                                <stop offset="50%" stopColor="#22c55e" />
                                <stop offset="100%" stopColor="#15803d" />
                              </linearGradient>
                              <filter id={`coinShadow-${index}`}>
                                <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                                <feOffset dx="2" dy="3" result="offsetblur"/>
                                <feComponentTransfer>
                                  <feFuncA type="linear" slope="0.5"/>
                                </feComponentTransfer>
                                <feMerge>
                                  <feMergeNode/>
                                  <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                              </filter>
                            </defs>
                            <g transform="translate(70, 70)">
                              {/* Bottom currency note - darker */}
                              <rect x="-22" y="12" width="44" height="28" rx="3" fill={`url(#noteGrad2-${index})`} filter={`url(#coinShadow-${index})`} opacity="0.9" />
                              <rect x="-20" y="14" width="40" height="24" rx="2" fill="rgba(255,255,255,0.15)" />
                              <line x1="-16" y1="18" x2="16" y2="18" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
                              <line x1="-16" y1="24" x2="16" y2="24" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
                              <circle cx="-12" cy="20" r="2" fill="rgba(255,255,255,0.5)" />
                              <circle cx="12" cy="20" r="2" fill="rgba(255,255,255,0.5)" />
                              
                              {/* Middle currency note */}
                              <rect x="-22" y="6" width="44" height="28" rx="3" fill={`url(#noteGrad-${index})`} filter={`url(#coinShadow-${index})`} />
                              <rect x="-20" y="8" width="40" height="24" rx="2" fill="rgba(255,255,255,0.2)" />
                              <line x1="-16" y1="12" x2="16" y2="12" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
                              <line x1="-16" y1="18" x2="16" y2="18" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
                              <line x1="-16" y1="24" x2="16" y2="24" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" />
                              <circle cx="-12" cy="14" r="2.5" fill="rgba(255,255,255,0.6)" />
                              <circle cx="12" cy="14" r="2.5" fill="rgba(255,255,255,0.6)" />
                              <text x="0" y="20" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold" opacity="0.8">₹</text>
                              
                              {/* Top currency note - lighter */}
                              <rect x="-22" y="0" width="44" height="28" rx="3" fill={`url(#noteGrad-${index})`} filter={`url(#coinShadow-${index})`} opacity="0.95" />
                              <rect x="-20" y="2" width="40" height="24" rx="2" fill="rgba(255,255,255,0.25)" />
                              <line x1="-16" y1="6" x2="16" y2="6" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" />
                              <line x1="-16" y1="12" x2="16" y2="12" stroke="rgba(255,255,255,0.6)" strokeWidth="0.8" />
                              <circle cx="-12" cy="8" r="2.5" fill="rgba(255,255,255,0.7)" />
                              <circle cx="12" cy="8" r="2.5" fill="rgba(255,255,255,0.7)" />
                              
                              {/* Golden coin with "LOTS" on top - more detailed */}
                              <circle cx="0" cy="-12" r="22" fill={`url(#coinGrad-${index})`} filter={`url(#coinShadow-${index})`} />
                              <circle cx="0" cy="-12" r="20" fill="none" stroke="rgba(217,119,6,0.4)" strokeWidth="1" />
                              <ellipse cx="-4" cy="-14" rx="14" ry="6" fill="rgba(255,255,255,0.4)" />
                              <ellipse cx="4" cy="-10" rx="10" ry="4" fill="rgba(255,255,255,0.2)" />
                              <text x="0" y="-8" fontSize="11" fill="#78350f" textAnchor="middle" fontWeight="900" fontFamily="Arial, sans-serif" letterSpacing="1">LOTS</text>
                              {/* Coin shine effect */}
                              <ellipse cx="-6" cy="-16" rx="8" ry="3" fill="rgba(255,255,255,0.6)" />
                            </g>
                          </svg>
                        </div>
                      )}
                      
                      {index === 1 && (
                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                          <svg viewBox="0 0 140 140" className="w-24 h-24">
                            <defs>
                              <linearGradient id={`roofGrad-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#34d399" />
                                <stop offset="50%" stopColor="#10b981" />
                                <stop offset="100%" stopColor="#047857" />
                              </linearGradient>
                              <linearGradient id={`roofGrad2-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#4ade80" />
                                <stop offset="100%" stopColor="#16a34a" />
                              </linearGradient>
                              <linearGradient id={`building1-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#a78bfa" />
                                <stop offset="100%" stopColor="#8b5cf6" />
                              </linearGradient>
                              <linearGradient id={`building2-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#fbbf24" />
                                <stop offset="100%" stopColor="#f59e0b" />
                              </linearGradient>
                              <linearGradient id={`building3-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#facc15" />
                                <stop offset="100%" stopColor="#eab308" />
                              </linearGradient>
                              <filter id={`buildingShadow-${index}`}>
                                <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                                <feOffset dx="2" dy="3" result="offsetblur"/>
                                <feComponentTransfer>
                                  <feFuncA type="linear" slope="0.5"/>
                                </feComponentTransfer>
                                <feMerge>
                                  <feMergeNode/>
                                  <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                              </filter>
                            </defs>
                            <g transform="translate(70, 70)">
                              {/* Building 1 - Left (Purple) */}
                              <rect x="-30" y="10" width="18" height="24" rx="2" fill={`url(#building1-${index})`} filter={`url(#buildingShadow-${index})`} />
                              <rect x="-30" y="-4" width="18" height="14" rx="2" fill={`url(#roofGrad-${index})`} filter={`url(#buildingShadow-${index})`} />
                              {/* Windows with glow */}
                              <rect x="-27" y="12" width="4" height="7" rx="0.5" fill="#60a5fa" opacity="0.9">
                                <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
                              </rect>
                              <rect x="-21" y="12" width="4" height="7" rx="0.5" fill="#60a5fa" opacity="0.9">
                                <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" begin="0.5s" repeatCount="indefinite" />
                              </rect>
                              <rect x="-15" y="12" width="4" height="7" rx="0.5" fill="#60a5fa" opacity="0.9">
                                <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" begin="1s" repeatCount="indefinite" />
                              </rect>
                              <rect x="-27" y="22" width="4" height="7" rx="0.5" fill="#3b82f6" opacity="0.8" />
                              <rect x="-21" y="22" width="4" height="7" rx="0.5" fill="#3b82f6" opacity="0.8" />
                              <rect x="-15" y="22" width="4" height="7" rx="0.5" fill="#3b82f6" opacity="0.8" />
                              {/* Door */}
                              <rect x="-24" y="28" width="6" height="6" rx="1" fill="#1e40af" />
                              
                              {/* Building 2 - Center (Orange) - Tallest */}
                              <rect x="-10" y="14" width="20" height="20" rx="2" fill={`url(#building2-${index})`} filter={`url(#buildingShadow-${index})`} />
                              <rect x="-10" y="0" width="20" height="14" rx="2" fill={`url(#roofGrad2-${index})`} filter={`url(#buildingShadow-${index})`} />
                              {/* Windows */}
                              <rect x="-7" y="16" width="5" height="9" rx="0.5" fill="#60a5fa" opacity="0.9">
                                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" begin="0.2s" repeatCount="indefinite" />
                              </rect>
                              <rect x="0" y="16" width="5" height="9" rx="0.5" fill="#60a5fa" opacity="0.9">
                                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" begin="0.7s" repeatCount="indefinite" />
                              </rect>
                              <rect x="7" y="16" width="5" height="9" rx="0.5" fill="#60a5fa" opacity="0.9">
                                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" begin="1.2s" repeatCount="indefinite" />
                              </rect>
                              <rect x="-7" y="28" width="5" height="6" rx="0.5" fill="#3b82f6" opacity="0.8" />
                              <rect x="0" y="28" width="5" height="6" rx="0.5" fill="#3b82f6" opacity="0.8" />
                              <rect x="7" y="28" width="5" height="6" rx="0.5" fill="#3b82f6" opacity="0.8" />
                              {/* Door */}
                              <rect x="2" y="30" width="6" height="4" rx="1" fill="#1e40af" />
                              
                              {/* Building 3 - Right (Yellow) */}
                              <rect x="14" y="12" width="16" height="22" rx="2" fill={`url(#building3-${index})`} filter={`url(#buildingShadow-${index})`} />
                              <rect x="14" y="-4" width="16" height="16" rx="2" fill={`url(#roofGrad-${index})`} filter={`url(#buildingShadow-${index})`} />
                              {/* Windows */}
                              <rect x="16" y="14" width="4" height="8" rx="0.5" fill="#60a5fa" opacity="0.9">
                                <animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" begin="0.3s" repeatCount="indefinite" />
                              </rect>
                              <rect x="22" y="14" width="4" height="8" rx="0.5" fill="#60a5fa" opacity="0.9">
                                <animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" begin="0.8s" repeatCount="indefinite" />
                              </rect>
                              <rect x="28" y="14" width="4" height="8" rx="0.5" fill="#60a5fa" opacity="0.9">
                                <animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" begin="1.3s" repeatCount="indefinite" />
                              </rect>
                              <rect x="16" y="25" width="4" height="7" rx="0.5" fill="#3b82f6" opacity="0.8" />
                              <rect x="22" y="25" width="4" height="7" rx="0.5" fill="#3b82f6" opacity="0.8" />
                              <rect x="28" y="25" width="4" height="7" rx="0.5" fill="#3b82f6" opacity="0.8" />
                              {/* Door */}
                              <rect x="24" y="30" width="6" height="4" rx="1" fill="#1e40af" />
                            </g>
                          </svg>
                        </div>
                      )}
                      
                      {index === 2 && (
                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                          <svg viewBox="0 0 140 140" className="w-24 h-24">
                            <defs>
                              <radialGradient id={`cloudGrad-${index}`} cx="40%" cy="40%">
                                <stop offset="0%" stopColor="#93c5fd" />
                                <stop offset="50%" stopColor="#60a5fa" />
                                <stop offset="100%" stopColor="#3b82f6" />
                              </radialGradient>
                              <linearGradient id={`shieldGrad-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#34d399" />
                                <stop offset="50%" stopColor="#10b981" />
                                <stop offset="100%" stopColor="#047857" />
                              </linearGradient>
                              <filter id={`cloudGlow-${index}`}>
                                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                <feMerge>
                                  <feMergeNode in="coloredBlur"/>
                                  <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                              </filter>
                              <filter id={`shieldGlow-${index}`}>
                                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                                <feMerge>
                                  <feMergeNode in="coloredBlur"/>
                                  <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                              </filter>
                            </defs>
                            <g transform="translate(70, 70)">
                              {/* Cloud shape - more fluffy */}
                              <ellipse cx="0" cy="10" rx="32" ry="22" fill={`url(#cloudGrad-${index})`} filter={`url(#cloudGlow-${index})`} opacity="0.95" />
                              <ellipse cx="-18" cy="4" rx="22" ry="18" fill={`url(#cloudGrad-${index})`} filter={`url(#cloudGlow-${index})`} opacity="0.95" />
                              <ellipse cx="18" cy="4" rx="22" ry="18" fill={`url(#cloudGrad-${index})`} filter={`url(#cloudGlow-${index})`} opacity="0.95" />
                              <ellipse cx="-10" cy="8" rx="16" ry="12" fill="rgba(255,255,255,0.3)" />
                              <ellipse cx="10" cy="8" rx="16" ry="12" fill="rgba(255,255,255,0.3)" />
                              
                              {/* Green shield with checkmark - more detailed */}
                              <path
                                d="M -14,-10 Q -14,-14 -10,-16 Q -5,-18 0,-16 Q 5,-18 10,-16 Q 14,-14 14,-10 L 14,4 Q 14,8 10,10 Q 5,12 0,10 Q -5,12 -10,10 Q -14,8 -14,4 Z"
                                fill={`url(#shieldGrad-${index})`}
                                filter={`url(#shieldGlow-${index})`}
                              />
                              {/* Shield highlight */}
                              <path
                                d="M -10,-12 Q -10,-14 -6,-15 Q -3,-16 0,-15 Q 3,-16 6,-15 Q 10,-14 10,-12 L 10,2 Q 10,4 6,5 Q 3,6 0,5 Q -3,6 -6,5 Q -10,4 -10,2 Z"
                                fill="rgba(255,255,255,0.2)"
                              />
                              {/* Checkmark inside shield - bolder */}
                              <path
                                d="M -8,-2 L -3,3 L 8,-8"
                                stroke="white"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                              />
                              {/* Shield border */}
                              <path
                                d="M -14,-10 Q -14,-14 -10,-16 Q -5,-18 0,-16 Q 5,-18 10,-16 Q 14,-14 14,-10 L 14,4 Q 14,8 10,10 Q 5,12 0,10 Q -5,12 -10,10 Q -14,8 -14,4 Z"
                                stroke="rgba(255,255,255,0.4)"
                                strokeWidth="1.5"
                                fill="none"
                              />
                              
                              {/* White stars around cloud - more stars and better animation */}
                              <path d="M -26,-12 L -24,-7 L -19,-7 L -22.5,-4 L -21.5,1 L -26,-1 L -30.5,1 L -29.5,-4 L -33,-7 L -28,-7 Z" fill="white" opacity="1">
                                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                                <animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" dur="8s" repeatCount="indefinite" />
                              </path>
                              <path d="M 26,-10 L 27.5,-5.5 L 31.5,-5.5 L 28.25,-3.25 L 29.5,1 L 26,-0.5 L 22.5,1 L 23.75,-3.25 L 20.5,-5.5 L 24.5,-5.5 Z" fill="white" opacity="1">
                                <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" begin="0.3s" repeatCount="indefinite" />
                                <animateTransform attributeName="transform" type="rotate" values="0 0 0;-360 0 0" dur="7s" repeatCount="indefinite" />
                              </path>
                              <path d="M -22,20 L -20.5,23.5 L -17,23.5 L -19.75,25.75 L -18.5,29 L -22,27.5 L -25.5,29 L -24.25,25.75 L -27,23.5 L -23.5,23.5 Z" fill="white" opacity="1">
                                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" begin="0.6s" repeatCount="indefinite" />
                                <animateTransform attributeName="transform" type="rotate" values="0 0 0;360 0 0" dur="9s" repeatCount="indefinite" />
                              </path>
                              <path d="M 22,22 L 23.5,25.5 L 27,25.5 L 24.25,27.75 L 25.5,31 L 22,29.5 L 18.5,31 L 19.75,27.75 L 17,25.5 L 20.5,25.5 Z" fill="white" opacity="1">
                                <animate attributeName="opacity" values="0.6;1;0.6" dur="1.9s" begin="0.9s" repeatCount="indefinite" />
                                <animateTransform attributeName="transform" type="rotate" values="0 0 0;-360 0 0" dur="6s" repeatCount="indefinite" />
                              </path>
                              <path d="M -30,5 L -28.5,8.5 L -25,8.5 L -27.75,10.75 L -26.5,14 L -30,12.5 L -33.5,14 L -32.25,10.75 L -35,8.5 L -31.5,8.5 Z" fill="white" opacity="0.9">
                                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" begin="1.2s" repeatCount="indefinite" />
                              </path>
                              <path d="M 30,7 L 31.5,10.5 L 35,10.5 L 32.25,12.75 L 33.5,16 L 30,14.5 L 26.5,16 L 27.75,12.75 L 25,10.5 L 28.5,10.5 Z" fill="white" opacity="0.9">
                                <animate attributeName="opacity" values="0.5;1;0.5" dur="2.3s" begin="1.5s" repeatCount="indefinite" />
                              </path>
                            </g>
                          </svg>
                        </div>
                      )}
                    </div>

                    {/* Content - compact with design */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 relative z-10">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-snug relative z-10">
                      {feature.description}
                    </p>
                    
                    {/* Decorative bottom accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                    {/* Decorative line connecting to next feature */}
                    {index < features.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-gray-200 to-transparent transform -translate-y-1/2">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                      </div>
                    )}
                  </div>

                  {/* Hover glow effect */}
                  <div
                    className={`absolute inset-0 rounded-lg bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 blur-lg -z-10 transition-opacity duration-300`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative line - removed to save space */}
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.95);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default WhyYoullLoveOurTools;
