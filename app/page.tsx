"use client";

import { motion } from "framer-motion";
import SpaceBackground from "../components/SpaceBackground";

const projects = [
  {
    id: "project-1",
    category: "Deep Space Engineering",
    title: "Project Orion // Autonomous Telemetry Array",
    description: "An end-to-end data pipeline built for high-altitude sensor tracking. Features custom telemetry parsing, a real-time React dashboard, and low-latency websocket connections.",
    details: "Built with a focus on high availability under poor network conditions. Utilizes WebSockets for real-time packet streaming and a modular plugin architecture for different sensor types.",
    tags: ["React", "WebSockets", "Node.js", "Tailwind"],
  },
  {
    id: "project-2",
    category: "Systems & Embedded",
    title: "ZMK Studio Wireless Firmware",
    description: "Contributing to open-source Bluetooth Low Energy (BLE) keyboard firmware, optimizing power states and multi-device peripheral switching.",
    details: "Focused on shaving milliseconds off input latency while extending battery life to over 6 months on a single charge through aggressive sleep state management.",
    tags: ["C/C++", "Zephyr RTOS", "BLE", "Embedded"],
  },
  {
    id: "project-3",
    category: "Web Interfaces",
    title: "The Digital Universe Portfolio",
    description: "A space-themed, fluidly animated web experience featuring a 3D starfield, glassmorphism UI components, and dynamic layout scaling.",
    details: "Engineered using Next.js App Router, React Three Fiber for the 3D environment, and Framer Motion for buttery-smooth viewport-triggered scroll transitions.",
    tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind v4"],
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen text-white selection:bg-cyan-500 selection:text-black">
      {/* Fixed 3D Starfield Background */}
      <SpaceBackground />

      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/60 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="#" className="font-mono text-cyan-400 font-bold tracking-wider">
            // PORTFOLIO.SYS
          </a>
          <div className="flex gap-6 font-mono text-sm text-gray-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">01. ABOUT</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">02. PROJECTS</a>
            <a href="#socials" className="hover:text-cyan-400 transition-colors">03. CONTACT</a>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-24 space-y-32">
        
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 pt-12"
        >
          <div className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
            // WELCOME TO MY PORTFOLIO
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">Yunfei</span> _
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
            Fullstack software engineer and designer (who loves cars and mechanical engineering too) creating web and mobile apps, high performance tools and clean interactive systems.
          </p>

          <div className="flex gap-4 pt-4">
            <a href="#projects" className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold transition-colors font-mono text-sm">
              Explore Projects
            </a>
            <a href="#socials" className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full font-semibold transition-colors font-mono text-sm">
              My Socials
            </a>
          </div>
        </motion.section>

        {/* About Me Section */}
        <motion.section 
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 bg-white/[0.02] backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl"
        >
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            // ABOUT ME
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Driven by curiosity, precision, and clean code.
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed font-light">
            <p>
              I specialize in bridging the gap between raw hardware capabilities and fluid, modern user interfaces. Whether I'm optimizing low-level firmware or engineering butter-smooth web animations, my goal is to build things that feel alive.
            </p>
            <p>
              When I'm not writing code or looking at star charts, you can find me tinkering with custom mechanical peripherals, studying distributed system architectures, or experimenting with generative 3D graphics in the browser.
            </p>
          </div>
        </motion.section>

        {/* In-Depth Projects Section */}
        <section id="projects" className="space-y-12">
          <div className="border-b border-white/10 pb-4 flex justify-between items-end">
            <span className="text-sm font-mono text-cyan-400 tracking-wider">
              // PROJECTS
            </span>
            <span className="text-xs font-mono text-gray-500">
              [SCROLL FOR DETAILS]
            </span>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:border-cyan-500/40 transition-all shadow-2xl space-y-6 group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-gray-500">
                    LOG_ID: 0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {project.description}
                </p>

                <div className="border-l-2 border-cyan-500/50 pl-4 py-1 text-sm text-gray-400 italic font-light">
                  {project.details}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Socials / Contact Section */}
        <motion.section 
          id="socials"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-center pt-12 border-t border-white/10"
        >
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
            03 // TRANSMISSION CHANNELS
          </div>
          <h2 className="text-3xl font-bold">Let's build something extraordinary.</h2>
          <p className="text-gray-400 max-w-md mx-auto text-sm font-light">
            My communication frequencies are always open. Reach out via any of the channels below.
          </p>

          <div className="flex justify-center gap-6 pt-4 font-mono text-sm">
            <a href="https://github.com" target="_blank" className="bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full text-gray-200 hover:text-cyan-400 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" className="bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full text-gray-200 hover:text-cyan-400 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:you@domain.com" className="bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full text-gray-200 hover:text-cyan-400 transition-colors">
              Email
            </a>
          </div>
        </motion.section>

      </main>
    </div>
  );
}