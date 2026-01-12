"use client";
import React, { useEffect, useState } from "react";
import { DiMongodb, DiNpm } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaReact,
  FaVuejs,
  FaXTwitter,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiMongoose,
  SiPostgresql,
  SiPython,
  SiScikitlearn,
  SiSupabase,
  SiTensorflow,
  SiTypescript,
  SiVercel,
  SiVscodium,
} from "react-icons/si";
import { TbTerminal2 } from "react-icons/tb";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "ayushmishra.pi@gmail.com",
    href: "mailto:ayushmishra.pi@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ayush-mishra-0976b0202",
    content: "/ayush-mishra",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Apex-ace",
    content: "/Apex-ace",
    icon: <FaGithub height={"50px"} />,
  },
  {
    name: "Twitter",
    href: "https://x.com/ayush_mishra_13", // Updated to match your config
    content: "/ayush_mishra_13",
    icon: <FaXTwitter height={"50px"} />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_ayush__mishra_11",
    content: "/_ayush__mishra_11",
    icon: <FaInstagram height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "Python",
    content: "The language of Data Science and ML.",
    icon: <SiPython size={"50px"} color={"#3776ab"} />,
    color: "#3776ab",
  },
  {
    name: "TensorFlow",
    content: "End-to-end open source platform for machine learning.",
    icon: <SiTensorflow size={"50px"} color={"#FF6F00"} />,
    color: "#FF6F00",
  },
  {
    name: "Scikit Learn",
    content: "Machine Learning in Python.",
    icon: <SiScikitlearn size={"50px"} color={"#F7931E"} />,
    color: "#F7931E",
  },
  {
    name: "JavaScript",
    content: "JavaScript is a high-level, interpreted programming language",
    icon: <SiJavascript size={"50px"} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    content: "TypeScript is a superset of JavaScript that compiles to plain JS",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "Next.js",
    content: "The React Framework for the Web",
    icon: <RiNextjsFill size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "React.js",
    content: "A JavaScript library for building user interfaces",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "Node.js",
    content: "JavaScript runtime built on Chrome's V8 JavaScript engine",
    icon: <FaNodeJs size={"50px"} color="#6cc24a" />,
    color: "#6cc24a",
  },
  {
    name: "PostgreSQL",
    content: "The World's Most Advanced Open Source Relational Database",
    icon: <SiPostgresql size={"50px"} color="#336791" />,
    color: "#336791",
  },
  {
    name: "Supabase",
    content: "The Open Source Firebase Alternative",
    icon: <SiSupabase size={"50px"} color="#3ecf8e" />,
    color: "#3ecf8e",
  },
  {
    name: "MongoDB",
    content: "The application data platform",
    icon: <DiMongodb size={"50px"} color="#4db33d" />,
    color: "#4db33d",
  },
  {
    name: "Mongoose",
    content: "Elegant mongodb object modeling for node.js",
    icon: <SiMongoose size={"50px"} color="#880000" />,
    color: "#880000",
  },
  {
    name: "Express.js",
    content: "Fast, unopinionated, minimalist web framework for Node.js",
    icon: <SiExpress size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Docker",
    content: "Develop, ship, and run any application as a lightweight container",
    icon: <FaDocker size={"50px"} color="#2496ed" />,
    color: "#2496ed",
  },
  {
    name: "HTML",
    content: "Standard markup language for documents designed to be displayed",
    icon: <FaHtml5 size={"50px"} color="#e34c26" />,
    color: "#e34c26",
  },
  {
    name: "CSS",
    content: "Style sheet language used for describing the presentation",
    icon: <FaCss3 size={"50px"} color="#563d7c" />,
    color: "#563d7c",
  },
  {
    name: "Tailwind",
    content: "A utility-first CSS framework",
    icon: <RiTailwindCssFill size={"50px"} color="#06b6d4" />,
    color: "#06b6d4",
  },
  {
    name: "Vue.js",
    content: "The Progressive JavaScript Framework",
    icon: <FaVuejs size={"50px"} color="#41b883" />,
    color: "#41b883",
  },
  {
    name: "Firebase",
    content: "Google's mobile platform that helps you quickly develop high-quality apps",
    icon: <RiFirebaseFill size={"50px"} color="#FFCA28" />,
    color: "#FFCA28",
  },
  {
    name: "Git",
    content: "Distributed version control system",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "Hosting for software development and version control using Git",
    icon: <FaGithub size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "VS Code",
    content: "Code editing. Redefined.",
    icon: <SiVscodium size={"50px"} color="#007acc" />,
    color: "#007acc",
  },
  {
    name: "NPM",
    content: "Node Package Manager",
    icon: <DiNpm size={"50px"} color="#CB3837" />,
    color: "#CB3837",
  },
  {
    name: "Vercel",
    content: "Develop. Preview. Ship.",
    icon: <SiVercel size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Linux",
    content: "Open source operating system",
    icon: <FaLinux size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Terminal",
    content: "Command line interface",
    icon: <TbTerminal2 size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "AWS",
    content: "Cloud computing services",
    icon: <FaAws size={"50px"} color="#3f51b5" />,
    color: "#000000",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
                  alt="me"
                  src="/assets/me.jpg" // Make sure this file exists in your public folder!
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl font-bold">Ayush Mishra</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full text-center">
                  Developer / Data Scientist / ML Engineer
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md transition-colors"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-8 flex items-center justify-center">
                        {link.icon}
                      </div>
                      <div className="flex flex-col">
                        <div className="text-sm font-semibold">{link.name}</div>
                        <div className="text-xs text-zinc-500 truncate w-32">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-full">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600 h-full"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20 font-mono">About me</h1>
            <p className="mb-6 text-roboto text-lg leading-relaxed">
              Hey! I&apos;m <strong>Ayush</strong>, a developer and creative
              technologist who lives at the intersection of{" "}
              <span className="text-blue-400">Web Development</span>{" "}
              and <span className="text-orange-400">Machine Learning</span>.
            </p>
            <p className="mb-10 text-roboto text-lg leading-relaxed">
              I don&apos;t just build websites; I build intelligent systems.
              Whether it&apos;s training a neural network to detect objects,
              architecting a scalable CRM with <strong>Next.js</strong> &{" "}
              <strong>Postgres</strong>, or predicting stock market trends with{" "}
              <strong>Python</strong>, I&apos;m always pushing the boundaries of
              what&apos;s possible on the web.
            </p>

            <h1 className="text-3xl mb-10 lg:md-20 font-mono">Tech Stack</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px] flex items-center justify-center text-zinc-500">
                  Loading tools...
                </p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 6,
                    breakpoints: {
                      640: {
                        perPage: 3,
                      },
                      768: {
                        perPage: 4,
                      },
                      1024: {
                        perPage: 5,
                      },
                    },
                    perMove: 1,
                    rewind: true,
                    easing: "linear",
                    arrows: false,
                    gap: "1rem",
                  }}
                  aria-label="My Tech Stack"
                >
                  {TOOLS.map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        className="w-full aspect-square flex items-center justify-center p-4 border-[.5px] border-zinc-700 bg-zinc-800/50 rounded-xl hover:border-zinc-500 transition-colors"
                        title={tool.name}
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;