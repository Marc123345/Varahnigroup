You said
Need to Prompt my Webside design concept we have different groups 'use client';



import React, { useRef, useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { gsap } from 'gsap';

import {

  Volume2, VolumeX, ArrowRight this prompt isnt 100 beacause main thing is its for the varhani group but concept is ojay

Design a freelance creative developer portfolio hero inspired by high-end editorial magazines and motion-driven interactive sites.



Core concept:

A single-page hero where the main focus is a 3D rotating cube that showcases my projects, framed inside a strict, Swiss-style editorial layout with big labels and minimal color.



Goals:



Immediately demonstrate advanced front-end + WebGL/Three.js motion skills.



Feel like an “Issue N°00X / Collection 2026” of my work, not a generic website.



Keep it minimal, sharp, and performance-conscious so it can be built with Next.js + React Three Fiber.



Layout:



Full-height hero section with a strong typographic grid.



Left column:



My name and role (e.g. “Marc Friedman — Creative Developer”).



Edition-style meta labels, e.g. “Issue N°003 / Coll. 2026”, a reference code, location.



A short one-line mission statement about making “pixels move with intent”.



Right or center column:



A large interactive 3D cube as the focal element.



The cube should sit in a framed container with subtle lines, captions, and labels (like a technical diagram).



Below or beside the cube:



A vertical “index” of project titles, presented like an editorial contents list, repeated or scrolling to create rhythm.



Each project entry is short and brutalist (e.g. “01 — Moving Portraits / WebGL experiment”).



Cube behavior:



Built conceptually for Three.js / React Three Fiber.



Gently auto-rotates on idle, with smooth easing.



On hover or drag, the cube responds to cursor movement (rotation, maybe subtle parallax).



Each face can display:



A project thumbnail,



A gradient or shader-like material,



Or a combination of image + subtle noise/texture.



Optionally, link cube rotation state to the project index: hovering a project name aligns a face of the cube and changes its content.



Visual style:



Very limited palette: mainly black and white, with one accent color (e.g. a strong red) reserved for key labels and hover states.



Typography: bold, condensed grotesk for headings, mono or narrow sans for labels and codes.



Plenty of negative space, sharp borders, thin rules, and small “meta” text (codes, dates, locations) to give a printed-spec-sheet vibe.



Motion is precise and clean, no excessive blur or clutter.



Microcopy and labels:



Use small uppercase tags such as “PORTFOLIO”, “INTERACTIVE EDITION”, “STUDIES IN MOTION”.



Include technical reference-like text: issue numbers, collection year, short project descriptors (“R&D”, “Prototype”, “Commission”).



Keep tone confident, minimal, and slightly technical.



Deliverables:



A detailed visual concept description of the hero section.



Suggestions for how to structure the layout in Next.js components.



Notes on how the cube interaction connects to the project index (UX flow).



Optional: art direction notes for how the cube faces should look to match the editorial typography.

} from 'lucide-react';

import { Slide } from '../../types/slide';

import { divisionData } from '../../data/divisions';

import type { MenuItem } from '../../types/division';





interface SceneProps {

  slide: Slide;

}



export default function Scene({ slide }: SceneProps) {

  const router = useRouter();

  const containerRef = useRef<HTMLDivElement>(null);

  const welcomeHeadingRef = useRef<HTMLHeadingElement>(null);

  const welcomeTextRef = useRef<HTMLHeadingElement>(null);

  const subtitleRef = useRef<HTMLParagraphElement>(null);

  const videoRef = useRef<HTMLVideoElement>(null);



  const [isMuted, setIsMuted] = useState(true);

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);



  const handleDivisionClick = (divisionId: string) => {

    router.push(`/division/${divisionId}`);

  };



  // GSAP Entrance

  useEffect(() => {

    if (!welcomeHeadingRef.current || !welcomeTextRef.current || !subtitleRef.current) return;



    gsap.set([welcomeHeadingRef.current, welcomeTextRef.current, subtitleRef.current], { opacity: 0, y: 40 });



    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });



    tl.to(welcomeHeadingRef.current, { opacity: 1, y: 0, duration: 1.2, delay: 0.5 })

      .to(welcomeTextRef.current, { opacity: 1, y: 0, duration: 1.2 }, '-=0.8')

      .to(subtitleRef.current, { opacity: 1, y: 0, duration: 1 }, '-=0.8');

  }, []);



  // Video Autoplay Logic

  useEffect(() => {

    if (!videoRef.current) return;

    const video = videoRef.current;

    video.muted = true;

    const attemptPlay = async () => {

      try {

        if (video.readyState >= 2) await video.play();

      } catch (err) { /* silent catch */ }

    };

    if (video.readyState >= 2) attemptPlay();

    else video.addEventListener('loadeddata', attemptPlay);

    return () => video.removeEventListener('loadeddata', attemptPlay);

  }, []);



  const toggleMute = () => {

    if (!videoRef.current) return;

    videoRef.current.muted = !isMuted;

    setIsMuted(!isMuted);

  };



  return (

    <div className="min-h-screen bg-[#050505] font-sans text-white selection:bg-emerald-500 selection:text-white overflow-x-hidden" ref={containerRef}>



      {/* --- HERO SECTION --- */}

      <div className="relative h-screen flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0 z-0">

          <video

            ref={videoRef}

            autoPlay

            loop

            playsInline

            muted={isMuted}

            className="w-full h-full object-cover scale-105"

            poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"

          >

            <source src="https://player.vimeo.com/external/494252666.sd.mp4?s=254097eb7078330a6e4d58853b0062a4900da247&profile_id=164" type="video/mp4" />

          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#050505]" />

        </div>



        <div className="absolute bottom-12 right-12 z-50">

          <button

            onClick={toggleMute}

            className="w-14 h-14 bg-white/5 hover:bg-white/20 border border-white/10 rounded-full backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group"

          >

            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}

          </button>

        </div>



        <div className="relative z-10 text-center max-w-7xl mx-auto px-6 mt-[-5vh]">

          <div className="mb-8 flex justify-center">

             <div className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-[0.3em]">

               Unified Ecosystem

             </div>

          </div>

          <h1 ref={welcomeHeadingRef} className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase mb-4">

            Welcome to Vharanani

          </h1>

          <h2 ref={welcomeTextRef} className="text-5xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 tracking-tighter uppercase leading-[0.85]">

            Vision. Structure. <br /> Impact.

          </h2>

          <p ref={subtitleRef} className="mt-12 text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">

             A wholly Black-owned holding company spanning construction, property development, technology, and philanthropy -- founded and led by David Mabilu.

          </p>

        </div>

      </div>



      {/* --- CONTENT GRID --- */}

      <div className="relative z-20 py-32 px-4 sm:px-6 lg:px-8 bg-[#050505]">

        <div className="max-w-[1600px] mx-auto">

          <div className="flex items-end justify-between mb-16 px-2 border-b border-white/10 pb-8">

            <div>

              <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-2">Explore Divisions</h2>

              <p className="text-slate-400">Select a card to view intelligence reports, blogs, and data.</p>

            </div>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {divisionData.map((item) => (

              <button

                key={item.id}

                onClick={() => handleDivisionClick(item.id)}

                onMouseEnter={() => setHoveredCard(item.id)}

                onMouseLeave={() => setHoveredCard(null)}

                className="group relative aspect-[16/9] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 text-left"

              >

                <div className="absolute inset-0">

                  <img

                    src={item.image}

                    alt={item.label}

                    width={item.displayWidth}

                    height={item.displayHeight}

                    className={`w-full h-full object-cover transition-transform duration-1000 ${

                      hoveredCard === item.id ? 'scale-110' : 'scale-100'

                    }`}

                  />

                  <div className={`absolute inset-0 transition-opacity duration-500 ${hoveredCard === item.id ? 'opacity-100' : 'opacity-0'}`}>

                      <div className="absolute inset-0 bg-black/20" />

                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                </div>



                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">

                  <div className="flex gap-2 mb-4">

                    {item.exclusive && <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">Investment</span>}

                    {item.highlighted && <span className="px-3 py-1 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">Featured</span>}

                  </div>

                  <div className="transform transition-all duration-500 group-hover:-translate-y-2">

                    <span className={`inline-block mb-2 text-[10px] font-black uppercase tracking-[0.2em] ${item.color.replace('bg-', 'text-')}-400`}>

                      {item.tagline}

                    </span>

                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-4">{item.label}</h3>

                    <p className="text-white/70 text-sm md:text-base font-light max-w-md line-clamp-2 group-hover:text-white transition-colors">{item.description}</p>

                  </div>

                  <div className="mt-6 flex items-center gap-3 text-[10px] font-bold text-white uppercase tracking-[0.2em] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">

                    <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center"><ArrowRight size={14} /></div>

                    <span>Open Channel</span>

                  </div>

                </div>

              </button>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

} The idea is in the image with the cube and the overlay

Gemini said
This is a fantastic concept. Merging the high-end, Swiss-editorial 3D cube from your creative developer prompt with the corporate, impact-driven identity of Vharanani creates a highly memorable, premium web experience.

Based on your sketches and the code provided, you are building a nested navigation system driven by 3D state changes. The cube acts as the physical representation of the "Unified Ecosystem" mentioned in your code.

Here is how we can translate your notebook sketches into a technical and visual concept for the Vharanani website.

## The Visual & UX Concept: The Vharanani "Ecosystem" Cube
Your sketches outline a three-tier interaction model. We will replace the "freelance portfolio" vibe with a Corporate Intelligence / Editorial Spec-Sheet aesthetic (dark mode, emerald/accent colors, sharp grotesque typography, and technical lines).

1. Level 1: The Home Page (Sketch 1)

The Visual: A sleek, semi-transparent or glass-like 3D cube sits in the center/left of the screen, slowly auto-rotating. Each face of the cube represents one of Vharanani's divisions (Construction, Property Development, Technology, Philanthropy).

The Right Index: A vertical, editorial-style list replacing the standard grid in your code. It reads:

01 — Construction

02 — Property Development

03 — Technology

04 — Philanthropy

Interaction: Hovering over an item in the list stops the auto-rotation and smoothly rotates the 3D cube to face the user with the corresponding division's imagery/material.

2. Level 2: Division View / "Page 1" (Sketch 2)

The Transition: When a user clicks 03 — Technology (for example), GSAP animates the list out. The 3D cube scales up slightly and shifts left, locking into place.

The New Index: The right-hand list updates to show the "Sections" of that specific division, keeping the strict editorial layout:

Sec 1 — Intelligence Reports

Sec 2 — Active Projects

Sec 3 — Leadership Data

Sec 4 — Investment Metrics

3. Level 3: The Overlay / Modal (Sketch 3)

The Interaction: When the user clicks Sec 2 — Active Projects, the 3D cube blurs or dims, and a glassmorphism overlay slides in (likely from the right or bottom).

The UI: As drawn in your notebook, this overlay contains:

Heading: "Active Projects — Technology"

Tabs: Clean, unstyled text tabs (e.g., [ Q1 2026 ] [ Case Studies ] [ R&D ]) that toggle the content within the panel without leaving the 3D context.

## Suggested Next.js / R3F Architecture
To keep this performant and manageable, you'll want to decouple the 3D Canvas from the HTML UI overlay.

1. Global State Management (Zustand or React Context)
You need a store to track the user's current depth in the site so the 3D cube knows how to behave.

currentLevel (0 = Home, 1 = Division, 2 = Section Overlay)

activeDivision (e.g., 'technology')

activeSection (e.g., 'reports')

2. Component Structure

Plaintext
<AppLayout>
  {/* The 3D World (React Three Fiber) */}
  <Canvas className="fixed inset-0 z-0">
    <VharananiCube activeDivision={activeDivision} currentLevel={currentLevel} />
    <Environment preset="city" />
  </Canvas>

  {/* The HTML UI Layer (Tailwind + GSAP) */}
  <div className="relative z-10 pointer-events-none"> 
    {/* Layout wrappers need pointer-events-auto where interactive */}
    
    {/* Left Column: Meta Data & Branding */}
    <HeroMetaLabels />

    {/* Right Column: Dynamic Index */}
    {currentLevel === 0 && <HomeIndex onSelect={...} />}
    {currentLevel === 1 && <DivisionSections onSelect={...} />}

    {/* Overlay Layer */}
    <AnimatePresence>
      {currentLevel === 2 && <SectionOverlay Tabs={...} Content={...} />}
    </AnimatePresence>
  </div>
</AppLayout>
## Art Direction & Cube Behavior
The Cube Faces: Instead of standard images, use WebGL shaders to make the faces look like high-tech glass or frosted acrylic. When a division is selected, the face could reveal a looping, high-contrast video behind the glass (e.g., a drone shot of a construction site or server racks).

Typography: Use a font like Inter, Helvetica Neue, or Space Grotesk. Keep the labels small, uppercase, and tracked out (e.g., TRACKING-[0.3EM]), just as you have in your current code snippet.

Colors: #050505 background, pure white text for primary elements, slate/gray for secondary text, and an emerald-500 accent color for active tabs and selection states to tie back to the Vharanani branding.

