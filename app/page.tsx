"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SpaceBackground from "../components/SpaceBackground";
import HeroCanvas from "../components/HeroCanvas";

type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  details: string;
  tags: string[];
  image?: string;
  links?: {
    demo?: string;
    github?: string;
  };
  status: "COMPLETED" | "ACTIVE_DEVELOPMENT" | "PROTOTYPING";
  journal: string;
  roadmap: string[];
};

// Helper component for handling project preview images gracefully
function ProjectPreview({ image, title, id }: { image?: string; title: string; id: string }) {
  const [imgError, setImgError] = useState(false);

  if (!image || imgError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center space-y-2 text-gray-500 font-mono text-xs bg-gradient-to-br from-white/[0.02] to-white/[0.06]">
        <div className="w-10 h-10 border border-dashed border-cyan-500/40 rounded-xl flex items-center justify-center text-cyan-400">
          ⚡
        </div>
        <span className="text-gray-400">[IMAGE_PREVIEW_PENDING // {id}]</span>
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={title}
      onError={() => setImgError(true)}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
  );
}

const projects: Project[] = [
  {
    id: "project-1",
    category: "Web App Development",
    title: "Kairos // AI Powered Student Scheduler",
    description: "An AI powered all-in-one solution for unorganised timetables and late assignments. You put your times, tasks, and schedule in, and AI does the rest.",
    details: "Built using HTML, CSS and native Javascript. Lightweight and feature-packed. Incorporates a Checklist, Calendar, and Daily/Weekly Event Schedule.",
    tags: ["HTML", "CSS", "Javascript"],
    image: "/projects/Kairos.png",
    status: "ACTIVE_DEVELOPMENT",
    journal: "Assignments and tasks are a pain. I hate it. My assignments are regularly rushed last minute due to poor planning and use of time, so I started thinking. Waht if I could use AI to help me plan my day, but make it visualised with a tasklist and calendar? Dopamine hits when you check off a task, when you reach a focus goal and when you finish your targets. Its something I always needed, and I really hope Kairos has helped you as much as it is already helping me.",
    roadmap: [
      "[DONE] Add login and dashboard wireframe",
      "[DONE] Add login via Firebase auth",
      "[DONE] Add dashboard grid layout",
      "[DONE] Add side menu and placeholder tabs",
      "[DONE] Add tasklist and checkboxes",
      "[DONE] Add drop down menu for user profile",
      "[DONE] Add AI helper using Google AI Studio",
      "[DONE] Add notification button",
      "[DONE] Create AI helper prompt",
      "[DONE] Create landing page and documentation",
      "[DONE] Change Index.html to main landing page instead of app",
      "[DONE] Add board style tasklists",
      "[DONE] Add schedule tab",
      "[DONE] Add schedules to firestore file",
      "[DONE] Change Index.html to index.html due to Vercel requirements (Vercel runs on Linux which is case-sensitive)",
      "[DONE] Settings revamp 1 - Customization and i18n.js languages",
      "[DONE] Fix setting crash bug - Temporarily reverted to old settings",
      "[DONE] Add archive for old boards",
      "[DONE] Add calendar",
      "[DONE] Add add calendar tab and month grid",
      "[DONE] Add individual day insights",
      "[DONE] Add timer widget to dashboard",
      "[DONE] Create tab for stats",
      "[DONE] Add achievements and retention/rewards (dopamine)",
      "[DONE] Add achievements tab",
      "[DONE] Add notification toggles in settings",
      "[DONE] Add notification js",
      "[DONE] Update firestore rule settings",
      "[DONE] Fix sync issues with firestore",
      "[DONE] Add loading screen prior to app opening",
      "[DONE] Settings revamp 2 - Backgrounds, privacy, security, cursors, ambient music, themes, fonts",
      "[DONE] Add current i18n.js translations",
      "[DONE] Fix achievement sync issues",
      "[DONE] Fix background and profile picture storage issues",
      "[DONE] Investigate AI 402 service busy errors",
      "[DONE] Change firestore rules",
      "[DONE] Change AI service to use external HackClub AI servers",
      "[DONE] Add Cloudflare worker relay",
      "[DONE] Change Vercel settings to include key",
      "[DONE] Fix firestore login issues with new URL",
      "[DONE] Add misc achievements",
      "[DONE] Remove Gemini AI key area in settings",
      "[DONE] Revamp landing page",
      "[DONE] Add data export",
      "[DONE] Configure sync with IOS and Android",
      "[DONE] Fix firestore data clumping",
      "[DONE] Prepare for Kairos Android and IOS apps",
      "[IN_PROGRESS] Change schedule dual event layout/structure",
      "[IDEA] Add community made boards and board sharing with another user's code",
      "[IDEA] Add dragable tasks in tasklist"
    ],
    links: {
      demo: "https://kairos-app.com",
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
    image: "/telemetry.png",
    status: "ACTIVE_DEVELOPMENT",
    journal: "Getting power consumption down was brutal. The CPU was waking up too frequently for sensor interrupts. Swapping to a DMA (Direct Memory Access) architecture allowed peripherals to write directly to buffer memory while the core slept, cutting power draw by 40%.",
    roadmap: [
      "[DONE] Basic I2C sensor drivers",
      "[DONE] Implement deep-sleep state management",
      "[IN_PROGRESS] Optimize BLE payload packet density",
      "[PENDING] Design custom PCB layout in KiCad"
    ],
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
    tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    image: "/projects/Portfolio.png",
    status: "ACTIVE_DEVELOPMENT",
    journal: "You're on it right now. My personal portfolio and website, where I post updates of my projects and future plans. Made with beautiful animations in a dark theme (because light theme hurts my eyes) that are fluid but optimised.",
    roadmap: [
      "[DONE] Create Astro/Tailwind Typescript project",
      "[DONE] Add background starfield and placeholder headings",
      "[DONE] Add about me section",
      "[DONE] Add text areas for projects",
      "[DONE] Add starfield animations",
      "[DONE] Add picture placeholders for projects",
      "[DONE] Add scrolling animations",
      "[DONE] Add hero",
      "[DONE] Add Project descriptions and titles",
      "[DONE] Took inspo from Byran_ee and added langauge/software widgets utilised in projects",
      "[DONE] Add Contact area",
      "[DONE] Add quick top tabbar for easy site maneuvering",
      "[DONE] Added contact information and buttons",
      "[DONE] Optimize 3D starfield for 60fps on mobile displays",
      "[DONE] Implement interactive project detail modals",
      "[DONE] Add in depth panel for proects",
      "[DONE] Fix panel formatting",
      "[DONE] Change fonts",
      "[DONE] Add currently working on/learning/ideas",
      "[DONE] Added journal and roadmap to project panel",
      "[IN_PROGRESS] Optimising further for mobile users",
      "[IN_PROGRESS] Add all projects to here along with pictures and roadmaps/journals",
      "[IN_PROGRESS] Add easier editing and more interactive journals etc",
      "[IDEA] Comments and little chat area"
    ],
    links: {
      demo: "#",
      github: "https://github.com/MRHWCKRR/space-portfolio",
    },
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen text-white selection:bg-cyan-500 selection:text-black">
      {/* Fixed 3D Starfield Background */}
      <SpaceBackground />

      {/* DevLog / Journal Modal Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#030308]/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a14] border border-white/10 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative custom-scrollbar p-6 sm:p-8 space-y-8 font-mono"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors z-10"
              >
                ✕
              </button>

              {/* Status Header */}
              <div className="space-y-2 pr-8">
                <span className="text-xs text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full inline-block">
                  STATUS: [{selectedProject.status}]
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white pt-2">{selectedProject.title}</h2>
              </div>

              {/* Dev Journal */}
              <div className="space-y-3">
                <div className="text-cyan-400 text-xs tracking-wider">// DEV_LOG & THOUGHTS</div>
                <p className="text-gray-300 text-sm leading-relaxed font-sans font-light bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                  {selectedProject.journal}
                </p>
              </div>

              {/* Roadmap */}
              <div className="space-y-3">
                <div className="text-cyan-400 text-xs tracking-wider">// DEVELOPMENT_ROADMAP</div>
                <ul className="space-y-2 bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                  {selectedProject.roadmap.map((item, i) => (
                    <li key={i} className="text-xs sm:text-sm flex gap-3 text-gray-300">
                      <span className="text-cyan-400">›</span>
                      <span className={item.includes("[DONE]") ? "text-gray-500 line-through" : item.includes("[IN_PROGRESS]") ? "text-cyan-300 font-semibold" : ""}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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

      <main className="max-w-4xl mx-auto px-6 pt-28 pb-24 space-y-24">
        
        {/* Hero Section with Interactive 3D Object */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center pt-8"
        >
          <div className="md:col-span-3 space-y-6">
            <div className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
              // WELCOME
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">Yunfei</span> _
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light">
              Fullstack software engineer and designer (who loves cars and mechanical engineering too) creating web and mobile apps, high performance tools and clean interactive systems.
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

        {/* Active Processes & Thoughts Section */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 font-mono text-sm space-y-4 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-transparent"></div>
          <div className="flex justify-between items-center text-xs text-cyan-400">
            <span>// ACTIVE_PROCESSES & STATUS</span>
            <span className="flex items-center gap-2 text-gray-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              SYSTEM_ONLINE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="space-y-1">
              <div className="text-xs text-gray-500">CURRENT_FOCUS</div>
              <div className="text-gray-200 text-xs">Developing Kairos IOS and Android APPs.</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-gray-500">LEARNING_QUEUE</div>
              <div className="text-gray-200 text-xs">Advanced KiCAD & LLM/AI Training</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-gray-500">FUTURE_IDEAS</div>
              <div className="text-gray-200 text-xs">Open source alternative to Guns.lol</div>
            </div>
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
              I build apps and tools to help daily life, whether that involves time, money or space. I specialise in engineering butter-smooth websites and pushing the boundaries. My goal is to build things that are practical and feel alive.
            </p>
            <p>
              I enjoy a range of hobbies (most of which are financially straining), such as mountain biking, 3D printing, PC building and photography/cinematography.
            </p>
          </div>
        </motion.section>

        {/* Projects Section */}
        <section id="projects" className="space-y-12">
          <div className="border-b border-white/10 pb-4 flex justify-between items-end">
            <span className="text-sm font-mono text-cyan-400 tracking-wider">
              // PROJECTS
            </span>
            <span className="text-xs font-mono text-gray-500">
              [CLICK CARDS FOR DEV_LOGS]
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
                onClick={() => setSelectedProject(project)}
                className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-8 hover:border-cyan-500/40 transition-all shadow-2xl space-y-6 group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-cyan-400/80 opacity-60 group-hover:opacity-100 transition-opacity">
                    [CLICK TO OPEN LOG_ID: 0{index + 1}] ↗
                  </span>
                </div>

                {/* Project Image Placeholder / Preview */}
                <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden border border-white/10 bg-black/40 group-hover:border-cyan-500/30 transition-colors">
                  <ProjectPreview image={project.image} title={project.title} id={project.id} />
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
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2 border-t border-white/5" onClick={(e) => e.stopPropagation()}>
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