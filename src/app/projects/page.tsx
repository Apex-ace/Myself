"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import "@splidejs/react-splide/css";
import RevealAnimation from "@/components/reveal-animations";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    id: 1,
    name: "Smart Health Tracker",
    description: `Predicting well-restedness using advanced health metrics. This ML project leverages Python, Scikit-Learn, and PyTorch to analyze health data and provide actionable sleep hygiene insights.`,
    link: "#", 
    github: "https://github.com/Apex-ace/smart-health-tracker",
    tags: ["Python", "PyTorch", "Scikit-Learn", "Jupyter"],
    images: [
      "/assets/projects-screenshots/health/landing.png",
      "/assets/projects-screenshots/health/analysis.png",
    ],
  },
  {
    id: 2,
    name: "Junior Genius",
    description: `AI-Powered Student Learning Platform. Features a custom Regression model for performance prediction, Google Gemini for 24/7 personalized tutoring, and a gamified UI to boost engagement.`,
    link: "#", 
    github: "https://github.com/Apex-ace/Junior-Genius",
    tags: ["Next.js", "Gemini AI", "Scikit-Learn", "Python"],
    images: [
      "/assets/projects-screenshots/junior/landing.png",
      "/assets/projects-screenshots/junior/dashboard.png",
    ],
  },
  {
    id: 3,
    name: "Campus Sports Booking",
    description: `Centralized sports facility management for Jhulelal Institute of Technology. A full-stack app that streamlines the booking process, manages reservations, and ensures fair access to campus resources.`,
    link: "#", 
    github: "https://github.com/Apex-ace/Sport-App",
    tags: ["React", "Node.js", "Firebase", "Tailwind"],
    images: [
      "/assets/projects-screenshots/sport/landing.png",
    ],
  },
  {
    id: 4,
    name: "Finger Counter",
    description: `Real-time hand gesture recognition powered by Computer Vision. Uses OpenCV to detect hand landmarks via webcam and accurately count the number of raised fingers in real-time.`,
    link: "#",
    github: "https://github.com/Apex-ace/Counting_finger",
    tags: ["Python", "OpenCV", "Computer Vision"],
    images: [
      "/assets/projects-screenshots/vision/landing.png",
    ],
  },
  {
    id: 5,
    name: "Sentiment Analysis Engine",
    description: `An NLP engine designed to decipher emotions from text. It analyzes textual data to determine underlying emotional tones (positive, negative, neutral) using TensorFlow models.`,
    link: "#",
    github: "https://github.com/Apex-ace/Sentiment-Analysis",
    tags: ["Python", "TensorFlow", "NLP", "Jupyter"],
    images: [
      "/assets/projects-screenshots/nlp/landing.png",
    ],
  },
];

function Page() {
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[150px] text-zinc-300 min-h-screen pb-20 pt-24 font-sans">
      <RevealAnimation>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Projects
        </h1>
        <p className="text-zinc-400 mb-12 max-w-2xl text-lg">
          A collection of my work in Full Stack Development, Data Science, and Machine Learning.
        </p>
      </RevealAnimation>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <RevealAnimation key={project.id} delay={index * 0.1}>
            <li
              className="group h-full flex flex-col border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm rounded-xl overflow-hidden hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="h-[200px] relative bg-black">
                {project.images.length > 0 ? (
                  <Splide
                    options={{
                      type: "loop",
                      interval: 3000,
                      autoplay: true,
                      speed: 1000,
                      perMove: 1,
                      rewind: true,
                      easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                      arrows: false,
                      pagination: true,
                      height: "200px",
                    }}
                    aria-label={project.name}
                  >
                    {project.images.map((image, i) => (
                      <SplideSlide key={i}>
                        <div className="relative w-full h-full">
                          <Image
                            src={image}
                            alt={`${project.name} screenshot ${i + 1}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </SplideSlide>
                    ))}
                  </Splide>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-zinc-600">
                    No Image
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold text-zinc-100 group-hover:text-purple-400 transition-colors">
                    {project.name}
                  </h2>
                  <div className="flex gap-2">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </Link>
                    )}
                    {project.link !== "#" && (
                      <Link
                        href={project.link}
                        target="_blank"
                        className="text-zinc-400 hover:text-white transition-colors"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </Link>
                    )}
                  </div>
                </div>

                <p className="text-sm text-zinc-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-zinc-700 text-zinc-400 text-xs py-0.5 px-2"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t border-zinc-800 flex gap-3">
                   <Button variant="outline" size="sm" className="w-full border-zinc-700 hover:bg-zinc-800 text-zinc-300" asChild>
                      <Link href={project.link} target="_blank">View Live</Link>
                   </Button>
                </div>
              </div>
            </li>
          </RevealAnimation>
        ))}
      </ul>
    </div>
  );
}

export default Page;