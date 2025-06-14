"use client";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiGit,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiReactrouter,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { CiShare1 } from "react-icons/ci";
import { motion } from "framer-motion";

export default function Home() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-featured e-commerce platform with product, cart, and payment support.",
      githubLink: "https://github.com/Kuldip-Sirpali/Ecommerce_Mern",
      websiteLink: "https://ecomartia.vercel.app/",
      stack: "React / NodeJs / Tailwind / MongoDB / Google OAuth",
    },
    {
      title: "Social Media Platform",
      description: "A place to share thoughts and connect with others.",
      githubLink: "https://github.com/Kuldip-Sirpali/Ecommerce_Mern",
      websiteLink: "https://ecomartia.vercel.app/",
      stack: "React / Tailwind / NodeJs / MongoDb",
    },
    {
      title: "Audio Book Summary App",
      description: "Get curated audio book summaries in one place.",
      githubLink: "https://github.com/Kuldip-Sirpali/Ecommerce_Mern",
      websiteLink: "https://ecomartia.vercel.app/",
      stack: "React / Express / Redis",
    },
    {
      title: "Learning Management System",
      description: "Manage and sell your courses easily.",
      githubLink: "https://github.com/Kuldip-Sirpali/Ecommerce_Mern",
      websiteLink: "https://ecomartia.vercel.app/",
      stack: "Next.js / Tailwind / Prisma / Clerk",
    },
  ];

  const socialMedias = [
    {
      name: "Github",
      link: "https://github.com/Kuldip-Sirpali",
      icon: <BsGithub />,
    },
    {
      name: "X",
      link: "https://x.com/kuldip_sirpali",
      icon: <BsTwitterX />,
    },
    {
      name: "Linkedin",
      link: "https://np.linkedin.com/in/kuldip-sirpali-044a422b4",
      icon: <BsLinkedin />,
    },
  ];

  const toolsAndTechStacks = [
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <RiNextjsFill /> },
    { name: "React Router", icon: <SiReactrouter /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Redis", icon: <DiRedis /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ];

  return (
    <motion.main
      className="px-4 py-8 max-w-3xl mx-auto space-y-12 text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.section
        className="space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="text-2xl font-semibold">Hey, I'm Kuldip Sirpali</h1>
        <p className="text-gray-400 leading-relaxed">
          Nepal-based full stack developer passionate about crafting exceptional
          digital experiences. I transform complex challenges into elegant,
          user-centric solutions.
        </p>
        <div className="flex gap-4 text-xl text-gray-300">
          {socialMedias &&
            socialMedias?.map((item, index) => (
              <a
                key={index}
                href={item?.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item?.icon}
              </a>
            ))}
        </div>
      </motion.section>

      <motion.section
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-xl font-medium">Projects</h2>
        <div className="grid gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative p-3 border rounded-md hover:shadow transition-all bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="absolute top-2 right-2 flex gap-2 text-xs">
                <a
                  href={project.websiteLink}
                  className="flex items-center gap-1 px-2 py-0.5 border rounded text-gray-700 hover:bg-gray-100"
                  target="_blank"
                >
                  View <CiShare1 />
                </a>
                <a
                  href={project.githubLink}
                  className="flex items-center gap-1 px-2 py-0.5 border rounded text-gray-700 hover:bg-gray-100"
                  target="_blank"
                >
                  GitHub <CiShare1 />
                </a>
              </div>
              <h3 className="font-semibold text-black text-sm pr-28">
                {project.title}
              </h3>
              <p className="text-gray-600 text-xs">{project.description}</p>
              <p className="text-[11px] text-gray-700 mt-2 italic">
                {project.stack}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-xl font-medium">Tools & Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-gray-400">
          {toolsAndTechStacks &&
            toolsAndTechStacks?.map((item, index) => (
              <div className="flex items-center gap-1" key={index}>
                {item?.icon}
                {item?.name}
              </div>
            ))}
        </div>
      </motion.section>
    </motion.main>
  );
}
