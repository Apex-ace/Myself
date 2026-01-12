"use client";
import { EXPERIENCE, SkillNames, SKILLS } from "@/data/constants"; 
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Building2 } from "lucide-react";

const ExperienceSection = () => {
  return (
    <SectionWrapper
      id="experience"
      className="flex flex-col items-center justify-center min-h-[80vh] py-20 relative z-10"
    >
      <div className="w-full max-w-4xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="experience"
          title="Experience"
          desc="My professional journey through the cosmos of code."
          className="mb-12 md:mb-20 mt-0"
        />

        <div className="flex flex-col gap-8 md:gap-12 relative pl-4 md:pl-0">
          {/* Connector Line - Left aligned on all screens for a clean look */}
          <div className="absolute left-4 md:left-8 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent hidden md:block" />

          {EXPERIENCE.map((exp, index) => (
            <div key={exp.id} className="relative md:pl-16">
              {/* Timeline Dot */}
              <div className="absolute left-8 top-6 w-3 h-3 rounded-full border border-purple-500 bg-zinc-950 -translate-x-[5px] hidden md:block z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
              
              <ExperienceCard experience={exp} index={index} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: (typeof EXPERIENCE)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className={cn(
          "bg-zinc-900/40 text-zinc-100 border-zinc-800/60 backdrop-blur-sm",
          "hover:border-purple-500/30 hover:bg-zinc-900/60 transition-all duration-300",
          "shadow-lg hover:shadow-xl"
        )}
      >
        <CardHeader className="pb-4 border-b border-zinc-800/50">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1.5">
              <CardTitle className="text-xl md:text-2xl font-bold tracking-tight text-zinc-100 font-display">
                {experience.title}
              </CardTitle>
              <div className="flex items-center gap-2 text-base font-medium text-purple-400">
                <Building2 className="w-4 h-4" />
                {experience.company}
              </div>
            </div>
            <Badge 
              variant="secondary" 
              className="w-fit font-mono text-xs font-normal bg-zinc-800 text-zinc-400 border border-zinc-700 flex items-center gap-2 px-3 py-1"
            >
              <CalendarDays className="w-3.5 h-3.5" />
              {experience.startDate} - {experience.endDate}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="pt-6 space-y-6">
          <ul className="list-none space-y-3 text-base text-zinc-400 leading-relaxed">
            {experience.description.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500/50 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/50">
            {experience.skills.map((skillName) => {
              const skill = SKILLS[skillName as SkillNames];
              if (!skill) return null;
              
              return (
                <Badge
                  key={skillName}
                  variant="outline"
                  className="gap-1.5 text-xs font-normal bg-zinc-950/50 text-zinc-400 border-zinc-800 hover:border-purple-500/30 hover:text-zinc-200 transition-colors py-1 pl-1 pr-2.5"
                >
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className="w-4 h-4 object-contain opacity-70"
                  />
                  {skill.label}
                </Badge>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceSection;