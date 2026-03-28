import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Code, Server, Database, GitBranch, Palette } from "lucide-react";

const skillGroups = [
  {
    icon: Code,
    label: "Frontend",
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "React.js", level: 70 },
      { name: "Vue.js", level: 60 },
      { name: "Angular", level: 55 },
    ],
  },
  {
    icon: Server,
    label: "Backend",
    color: "from-purple-500 to-pink-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    skills: [
      { name: "Node.js", level: 65 },
      { name: "Express.js", level: 60 },
      { name: "Django", level: 50 },
      { name: "Ruby on Rails", level: 45 },
    ],
  },
  {
    icon: Database,
    label: "Bases de Datos",
    color: "from-green-500 to-teal-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/20",
    skills: [
      { name: "MySQL", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "Firebase", level: 65 },
    ],
  },
  {
    icon: GitBranch,
    label: "Control de Versiones",
    color: "from-orange-500 to-yellow-400",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "GitLab", level: 75 },
    ],
  },
  {
    icon: Palette,
    label: "Diseño y Automatización",
    color: "from-pink-500 to-rose-400",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    skills: [
      { name: "Librería de Adobe", level: 85 },
      { name: "WordPress", level: 80 },
      { name: "Sketchup", level: 65 },
      { name: "n8n", level: 70 },
      { name: "Figma", level: 75 },
    ],
  },
];

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  isInView: boolean;
  delay: number;
}

function SkillBar({ name, level, color, isInView, delay }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-gray-300 text-sm">{name}</span>
        <span className="text-gray-500 text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="habilidades" className="py-24 bg-[#000000]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm uppercase tracking-widest font-medium">Tecnologías</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Habilidades Técnicas
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
              className={`bg-[#0a0a0a] border ${group.borderColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-9 h-9 ${group.bgColor} rounded-lg flex items-center justify-center`}>
                  <group.icon size={18} className="text-white/80" />
                </div>
                <h3 className="text-white font-semibold">{group.label}</h3>
              </div>
              {group.skills.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  isInView={isInView}
                  delay={groupIdx * 0.1 + skillIdx * 0.08}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech tags cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">También trabajo con</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Tailwind CSS", "Bootstrap", "Vite", "npm", "REST APIs", "Responsive Design", "UX/UI", "Photoshop", "Illustrator", "InDesign"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400 text-xs rounded-full hover:border-blue-500/30 hover:text-blue-300 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}