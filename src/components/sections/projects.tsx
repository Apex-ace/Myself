"use client";
import Image from "next/image";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="max-w-7xl mx-auto min-h-screen py-20">
      <SectionHeader id="projects" title="Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
          <ProjectModal key={project.id || index} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectModal = ({ project }: { project: Project }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <Modal>
        <ModalTrigger className="bg-transparent flex justify-center group/modal-btn w-full h-full">
          <div
            className="relative w-full h-auto rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50 group hover:border-purple-500/50 transition-colors"
            style={{ aspectRatio: "3/2" }}
          >
            <div className="absolute inset-0 bg-zinc-900/20 z-0" />
            <Image
              className="absolute w-full h-full top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500"
              src={project.src}
              alt={project.title}
              width={600}
              height={400}
            />
            <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity" />
            
            <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col items-start justify-end h-full z-10">
              <h3 className="text-xl font-bold text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                <span className="text-xs font-mono bg-purple-500/20 text-purple-200 border border-purple-500/30 px-2 py-1 rounded-md">
                  {project.category}
                </span>
              </div>
            </div>
          </div>
        </ModalTrigger>
        <ModalBody className="md:max-w-4xl md:max-h-[90vh] overflow-hidden bg-zinc-950 border border-zinc-800">
          <SmoothScroll isInsideModal={true}>
            <ModalContent className="p-0">
              <ProjectContents project={project} />
            </ModalContent>
          </SmoothScroll>
          <ModalFooter className="gap-4 bg-zinc-900/50 border-t border-zinc-800 p-4">
            {project.github && (
               <Link href={project.github} target="_blank">
                <button className="px-4 py-2 bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700 rounded-md text-sm flex items-center gap-2 transition-colors">
                  <Github size={16} /> GitHub
                </button>
               </Link>
            )}
            <Link href={project.live} target="_blank">
              <button className="bg-white text-black hover:bg-zinc-200 text-sm px-4 py-2 rounded-md font-medium flex items-center gap-2 transition-colors">
                Visit Site <ExternalLink size={16} />
              </button>
            </Link>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <div className="p-6 md:p-10">
      <h4 className="text-2xl md:text-4xl text-zinc-100 font-bold text-center mb-8 font-display">
        {project.title}
      </h4>
      
      <div className="flex flex-col gap-8 mb-10">
        {/* Frontend Skills Dock */}
        {project.skills.frontend?.length > 0 && (
          <div className="flex flex-col items-center gap-4">
            <span className="text-sm uppercase tracking-wider text-zinc-500 font-mono">Frontend Stack</span>
            <div className="p-2 bg-zinc-900/50 rounded-full border border-zinc-800">
              <FloatingDock 
                // Mapping skills to include a dummy href since FloatingDock usually expects it
                items={project.skills.frontend.map(skill => ({ ...skill, href: "#" }))} 
              />
            </div>
          </div>
        )}

        {/* Backend Skills Dock */}
        {project.skills.backend?.length > 0 && (
          <div className="flex flex-col items-center gap-4">
            <span className="text-sm uppercase tracking-wider text-zinc-500 font-mono">Backend Stack</span>
            <div className="p-2 bg-zinc-900/50 rounded-full border border-zinc-800">
              <FloatingDock 
                 items={project.skills.backend.map(skill => ({ ...skill, href: "#" }))}
              />
            </div>
          </div>
        )}
      </div>

      <div className="prose prose-invert prose-zinc max-w-none mx-auto">
        {project.content}
      </div>
    </div>
  );
};