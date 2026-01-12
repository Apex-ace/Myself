import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiScikitlearn,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTensorflow,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiPytorch,
  SiOpencv,
  SiFastapi,
  SiJupyter,
  SiGooglegemini,
  SiPydantic
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        {/* <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button> */}
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          {/* <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button> */}
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  pytorch: {
    title: "PyTorch",
    bg: "black",
    fg: "white",
    icon: <SiPytorch />,
  },
  sklearn: {
    title: "Scikit Learn",
    bg: "black",
    fg: "white",
    icon: <SiScikitlearn />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  opencv: {
    title: "OpenCV",
    bg: "black",
    fg: "white",
    icon: <SiOpencv />,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <SiTensorflow />,
  },
  gemini: {
    title: "Gemini AI",
    bg: "black",
    fg: "white",
    icon: <SiGooglegemini />,
  },
  jupyter: {
    title: "Jupyter",
    bg: "black",
    fg: "white",
    icon: <SiJupyter />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  shadcn: {
    title: "ShadCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "smart-health-tracker",
    category: "ML / Healthcare",
    title: "Smart Health Tracker",
    src: "/assets/projects-screenshots/health/landing.png",
    screenshots: ["landing.png", "analysis.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.jupyter,
      ],
      backend: [
        PROJECT_SKILLS.pytorch,
        PROJECT_SKILLS.sklearn,
      ],
    },
    live: "#",
    github: "https://github.com/Apex-ace/smart-health-tracker",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Sleep Better, Live Better.
          </TypographyP>
          <TypographyP className="font-mono">
            This project leverages Python, Scikit-Learn, and PyTorch to analyze health data from a CSV dataset. By visualizing various features, the model predicts whether a user is well-rested, providing actionable insights for better sleep hygiene.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Predictive Analytics</TypographyH3>
          <p className="font-mono mb-2">
            Using advanced regression models to correlate sleep patterns with daily activity metrics.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/health/landing.png`,
              `${BASE_PATH}/health/analysis.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "junior-genius",
    category: "EdTech / AI",
    title: "Junior Genius",
    src: "/assets/projects-screenshots/junior/landing.png",
    screenshots: ["landing.png", "dashboard.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.gemini,
        PROJECT_SKILLS.sklearn,
      ],
    },
    live: "#",
    github: "https://github.com/Apex-ace/Junior-Genius",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-Powered Student Learning Platform.
          </TypographyP>
          <TypographyP className="font-mono">
            Junior Genius is an intelligent, interactive educational platform designed to provide a holistic learning experience. It combines a Regression model for performance prediction and Google Gemini for personalized 24/7 tutoring.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Generative Tutoring</TypographyH3>
          <p className="font-mono mb-2">
             Integrated <strong>Google Gemini</strong> provides real-time, context-aware answers to student doubts, simulating a human tutor.
          </p>
          <SlideShow
             images={[`${BASE_PATH}/junior/landing.png`, `${BASE_PATH}/junior/dashboard.png`]}
          />
        </div>
      );
    },
  },
  {
    id: "sport-app",
    category: "Web Application",
    title: "Campus Sports Booking",
    src: "/assets/projects-screenshots/sport/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.firebase,
      ],
    },
    live: "#",
    github: "https://github.com/Apex-ace/Sport-App",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
             Streamlined Campus Recreation.
          </TypographyP>
          <TypographyP className="font-mono">
             A centralized platform for Jhulelal Institute of Technology students to browse and book sports facilities. No more clipboard sign-ups; everything is digital and real-time.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <SlideShow images={[`${BASE_PATH}/sport/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "counting-finger",
    category: "Computer Vision",
    title: "Finger Counter",
    src: "/assets/projects-screenshots/vision/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.opencv,
      ],
      backend: [],
    },
    live: "#",
    github: "https://github.com/Apex-ace/Counting_finger",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
             Real-time Hand Gesture Recognition.
          </TypographyP>
          <TypographyP className="font-mono">
             This project uses OpenCV to detect hand landmarks via webcam. It calculates the position of fingertips to accurately count the number of raised fingers in real-time, effectively creating a vision-based controller interface.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <SlideShow images={[`${BASE_PATH}/vision/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "sentiment-analysis",
    category: "NLP",
    title: "Sentiment Analysis Engine",
    src: "/assets/projects-screenshots/nlp/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.jupyter,
      ],
      backend: [
        PROJECT_SKILLS.tensorflow,
      ],
    },
    live: "#",
    github: "https://github.com/Apex-ace/Sentiment-Analysis",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
             Deciphering Digital Emotions.
          </TypographyP>
          <TypographyP className="font-mono">
             An NLP engine designed to analyze textual data and determine underlying emotional tones. Built with TensorFlow, it processes customer feedback to classify sentiments as positive, negative, or neutral.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <SlideShow images={[`${BASE_PATH}/nlp/landing.png`]} />
        </div>
      );
    },
  },
];

export default projects;