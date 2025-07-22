"use client";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiGit,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiReactrouter,
  SiClerk,
  SiRedux,
  SiExpress,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { CiShare1 } from "react-icons/ci";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Full-featured e-commerce platform with product, cart, and payment support.",
      githubLink: "https://github.com/Kuldip-Sirpali/Ecommerce_Mern",
      websiteLink: "https://ecomartia.vercel.app/",
      stack: "React / NodeJs / Tailwind / MongoDB / Google OAuth",
      image:
        "https://res.cloudinary.com/djlajb0wj/image/upload/v1752846485/e-m_llsbfb.png",
    },
    {
      title: "Social Media Platform",
      description: "A place to share thoughts and connect with others.",
      // githubLink: "https://github.com/Kuldip-Sirpali/",
      websiteLink: "https://hubbell.vercel.app/",
      stack: "React / Tailwind / NodeJs / MongoDb",
      image:
        "https://res.cloudinary.com/djlajb0wj/image/upload/v1752846485/s-m_hqmqyk.png",
    },
    {
      title: "Audio Streaming platform App",
      description: "Get curated audio book summaries in one place.",
      // githubLink: "https://github.com/Kuldip-Sirpali/",
      websiteLink: "https://dhawni.vercel.app/",
      stack: "React / Express / MongoDB /Google OAuth",
      image:
        "https://res.cloudinary.com/djlajb0wj/image/upload/v1752846485/a-p_p7keei.png",
    },

    {
      title: "Netflix Clone - A video streaming platform",
      description: "A frontend ui clone of netflix using venilla javascript. ",
      githubLink: "https://github.com/Kuldip-Sirpali/video-app-frontend",
      websiteLink: "https://kuldip-sirpali.github.io/video-app-frontend",
      stack: "HTML / CSS / JS",
      image:
        "https://res.cloudinary.com/djlajb0wj/image/upload/v1752846485/n-x_kzcuol.png",
    },
    {
      title: "Linkedin UI ",
      description:
        "Frontend of Linkedin with single page feature in javascript",
      githubLink: "https://github.com/Kuldip-Sirpali/Linkedin-Clone",
      websiteLink: "https://kuldip-sirpali.github.io/Linkedin-Clone/",
      stack: "HTML / CSS / JS",
      image:
        "https://res.cloudinary.com/djlajb0wj/image/upload/v1752846485/l-in_tski7k.png",
    },
    {
      title: "Xpaces-Experience blackhole",
      description: "Simple animated blackhole virtual reality",
      // githubLink: "https://github.com/Kuldip-Sirpali/",
      websiteLink: "https://xpaces.netlify.app/",
      stack: "HTML / CSS / JS",
      image:
        "https://res.cloudinary.com/djlajb0wj/image/upload/v1752847252/b-h_h2m7xr.png",
    },
  ];

  const socialMedias = [
    {
      name: "Github",
      link: "https://github.com/Kuldip-Sirpali",
      icon: BsGithub,
    },
    {
      name: "X",
      link: "https://x.com/kuldip_sirpali",
      icon: BsTwitterX,
    },
    {
      name: "Linkedin",
      link: "https://np.linkedin.com/in/kuldip-sirpali-044a422b4",
      icon: BsLinkedin,
    },
  ];

  const toolsAndTechStacks = [
    { name: "React", icon: SiReact, link: "https://react.dev/" },
    { name: "Next.js", icon: RiNextjsFill, link: "https://nextjs.org/" },
    { name: "Express", icon: SiExpress, link: "https://expressjs.com/" },
    {
      name: "React Router",
      icon: SiReactrouter,
      link: "https://reactrouter.com/",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      link: "https://www.typescriptlang.org/",
    },
    { name: "Node.js", icon: SiNodedotjs, link: "https://nodejs.org/en" },
    { name: "Git", icon: SiGit, link: "https://git-scm.com/" },
    { name: "Redis", icon: DiRedis, link: "https://redis.io/" },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      link: "https://tailwindcss.com/",
    },
    { name: "Clerk", icon: SiClerk, link: "https://clerk.com/" },
    {
      name: "Redux Toolkit",
      icon: SiRedux,
      link: "https://redux-toolkit.js.org/",
    },
  ];
  return (
    <motion.main
      className="relative min-h-screen bg-[#0f0f0f] text-white overflow-hidden py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute w-[400px] h-[400px] bg-purple-600 rounded-full blur-3xl opacity-30 top-[-100px] left-[-100px]"
        animate={{ x: [0, 20, -20, 0], y: [0, -10, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] bg-blue-500 rounded-full blur-2xl opacity-20 bottom-[50px] right-[50px]"
        animate={{ x: [0, -15, 15, 0], y: [0, 10, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-3xl mx-auto px-4 space-y-16 relative z-10">
        <motion.section
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.25)]">
            Hey, I&apos;m Kuldip Sirpali
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Nepal-based full stack developer passionate about crafting
            exceptional digital experiences. I transform complex challenges into
            elegant, user-centric solutions.
          </p>
          <div className="flex gap-4 items-center text-xl text-gray-300">
            {socialMedias.map(({ icon: Icon, link, name }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="hover:text-white transition"
              >
                <Icon />
              </a>
            ))}
            {/* <a
              href={"/resume.pdf"}
              className="flex items-center gap-1 px-3 py-1 border border-white/20 rounded-full text-xs text-gray-400 hover:bg-white/10 transition"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
            >
              View Resume
            </a> */}
          </div>
        </motion.section>

        <motion.section
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-white ">Projects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="flex flex-col justify-between p-4 border border-white/10 rounded-xl bg-white/2 backdrop-blur-md hover:scale-[1.01] hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {/* Project title, description, and stack */}
                <div>
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-32 object-cover rounded-lg mb-2"
                    />
                  )}
                  <h3 className="font-semibold text-white text-sm">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs mt-1">
                    {project.description}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-2 italic">
                    {project.stack}
                  </p>
                </div>

                {/* Bottom aligned buttons */}
                <div className="mt-4 flex gap-2 text-xs text-gray-300">
                  <a
                    href={project.websiteLink}
                    className="flex items-center gap-1 px-2 py-0.5 rounded hover:bg-white/10"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View <CiShare1 />
                  </a>
                  {project?.githubLink && (
                    <a
                      href={project.githubLink}
                      className="flex items-center gap-1 px-2 py-0.5 rounded hover:bg-white/10"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub <CiShare1 />
                    </a>
                  )}
                </div>
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
          <h3 className="text-2xl font-semibold">Tools & Stack</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-white/80">
            {toolsAndTechStacks.map(({ icon: Icon, name, link }, index) => (
              <div
                className="flex items-center gap-2 hover:text-white transition"
                key={index}
              >
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1"
                >
                  <Icon /> {name}
                </Link>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.main>
  );
}
