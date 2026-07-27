"use client";

import { motion } from "framer-motion";
import SpaceBackground from "../components/SpaceBackground";
import HeroCanvas from "../components/HeroCanvas";

type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  details: string;
  tags: string[];
  image?: string; // Path to image inside /public (e.g. "/projects/kairos.jpg")
  links?: {
    demo?: string;
    github?: string;
  };
};

const projects: Project[] = [
  {
    id: "project-1",
    category: "App Development",
    title: "Kairos // AI Powered Student Scheduler",
    description: "An AI powered all-in-one solution for unorganised timetables and late assignments. You put your times, tasks, and schedule in, and AI does the rest.",
    details: "Built using HTML, CSS and native Javascript. Lightweight and feature-packed. Incorporates a Checklist, Calendar, and Daily/Weekly Event Schedule.",
    tags: ["HTML", "CSS", "Javascript"],
    image: "/projects/Kairos.png",
    links: {
      demo: "https://kairos-xi-two.vercel.app/",
      github: "https://github.com/MRHWCKRR/kairos",
    },
  },
  {
    id: "project-2",
    category: "Systems & Embedded",
    title: "Telemetry & Sensor Hub // Wireless RTOS Node",
    description: "A low-power wireless telemetry hub designed to stream multi-sensor environmental data over Bluetooth Low Energy with sub-10ms packet latency.",
    details: "Engineered on Zephyr RTOS with C++. Utilizes multi-threading for asynchronous sensor reads, DMA memory transfers, and deep-sleep state management.",
    tags: ["C/C++", "Zephyr RTOS", "BLE", "Embedded"],
    image: "",
    links: {
      github: "https://github.com/MRHWCKRR/telemetry-rtos",
    },
  },
  {
    id: "project-3",
    category: "Web Interfaces",
    title: "Space Themed Portfolio",
    description: "A space-themed, fluidly animated web experience featuring a 3D starfield, glassmorphism UI components, and dynamic layout scaling.",
    details: "Engineered using Next.js App Router, React Three Fiber for the 3D environment, and Framer Motion for smooth animations and seamless navigation.",
    tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind v3"],
    image: "/projects/Website.png",
    links: {
      demo: "#",
      github: "https://github.com/MRHWCKRR/space-portfolio",
    },
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

      <main className="max-w-4xl mx-auto px-6 pt-28 pb-24 space-y-32">
        
        {/* Hero Section with Interactive 3D Object */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center pt-8"
        >
          <div className="md:col-span-3 space-y-6">
            <div className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
              // WELCOME TO MY PORTFOLIO
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">Yunfei</span> _
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
              Fullstack software engineer and designer creating web apps, high performance tools, and clean interactive systems.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold transition-colors font-mono text-sm">
                Explore Projects
              </a>
              <a href="#socials" className="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full font-semibold transition-colors font-mono text-sm">
                My Socials
              </a>
            </div>
          </div>

          {/* Interactive 3D Node */}
          <div className="md:col-span-2 flex justify-center items-center">
            <HeroCanvas />
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
            Challenge the unknown
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed font-light">
            <p>
              I build apps and tools to help daily life, whether that involves time, money or space. I specialise in engineering butter-smooth websites and pushing the boundaries. My goal is to build things that feel alive.
            </p>
            <p>
              I enjoy a range of hobbies, such as mountain biking, 3D printing, PC building and photography/cinematography.
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
                className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 hover:border-cyan-500/40 transition-all shadow-2xl space-y-6 group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-gray-500">
                    LOG_ID: 0{index + 1}
                  </span>
                </div>

                {/* Project Image Placeholder / Preview */}
                <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden border border-white/10 bg-black/40 group-hover:border-cyan-500/30 transition-colors">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center space-y-2 text-gray-600 font-mono text-xs bg-gradient-to-br from-white/[0.02] to-white/[0.06]">
                      <div className="w-12 h-12 border border-dashed border-cyan-500/30 rounded-xl flex items-center justify-center text-cyan-400/50">
                        ⚡
                      </div>
                      <span>[IMAGE_PREVIEW_PENDING // {project.id}]</span>
                    </div>
                  )}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="border-l-2 border-cyan-500/50 pl-4 py-1 text-sm text-gray-400 italic font-light">
                  {project.details}
                </div>

                {/* Tags and Links Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="text-xs font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-lg text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center gap-3 font-mono text-xs">
                    {project.links?.github && (
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-gray-400 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/50 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 bg-white/[0.02]"
                      >
                        <span>CODE</span> ↗
                      </a>
                    )}
                    {project.links?.demo && (
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
                      >
                        <span>LIVE DEMO</span> ↗
                      </a>
                    )}
                  </div>
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
            // SOCIALS
          </div>
          <h2 className="text-3xl font-bold">Let's build something extraordinary.</h2>
          <p className="text-gray-400 max-w-md mx-auto text-sm font-light">
            Reach out to me on any of my socials. I'm always ready for a chat.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4 font-mono text-sm">
            <a href="https://github.com/MRHWCKRR" target="_blank" className="bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full text-gray-200 hover:text-cyan-400 transition-colors">
              GitHub
            </a>
            <a href="https://discord.com" target="_blank" title="Add me: mrhwckrr_v2" className="bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full text-gray-200 hover:text-cyan-400 transition-colors">
              Discord (@mrhwckrr_v2)
            </a>
            <a href="https://www.instagram.com/bytebybyte.builds/" target="_blank" className="bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full text-gray-200 hover:text-cyan-400 transition-colors">
              Instagram
            </a>
            <a href="https://www.facebook.com/profile.php?id=61576772697674" target="_blank" className="bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full text-gray-200 hover:text-cyan-400 transition-colors">
              Facebook
            </a>
            <a href="mailto:bytebybytebuilds@gmail.com" className="bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full text-gray-200 hover:text-cyan-400 transition-colors">
              Email
            </a>
          </div>
        </motion.section>

      </main>
    </div>
  );
}