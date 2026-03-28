import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { ExternalLink, Github, Layout, BarChart2, Globe } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Landing Page Responsiva",
    category: "Frontend",
    description:
      "Landing page totalmente responsiva desarrollada durante el Bootcamp TripleTen, utilizando HTML, CSS y JavaScript puro. Optimizada para mobile-first con mejoras en velocidad de carga.",
    tech: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub"],
    icon: Layout,
    gradient: "from-blue-500 to-cyan-400",
    bgGlow: "bg-blue-500/5",
    borderColor: "border-blue-500/20",
    link: "https://github.com/morales293",
    github: "https://github.com/morales293",
    highlights: ["Diseño Mobile-first", "Velocidad de carga optimizada", "Control de versiones profesional"],
  },
  {
    id: 2,
    title: "Automatización de Procesos",
    category: "Automatización",
    description:
      "Sistema de automatización de procesos administrativos utilizando n8n, logrando una reducción del 25% en los tiempos de consulta en áreas administrativas del CEO No. 59.",
    tech: ["n8n", "Automatización", "Flujos de trabajo", "Análisis de datos"],
    icon: BarChart2,
    gradient: "from-purple-500 to-pink-400",
    bgGlow: "bg-purple-500/5",
    borderColor: "border-purple-500/20",
    link: "#",
    github: "#",
    highlights: ["25% reducción en tiempos", "Automatización administrativa", "Flujos de trabajo eficientes"],
  },
  {
    id: 3,
    title: "Landing Pages WordPress",
    category: "Diseño Web",
    description:
      "Transformación de piezas gráficas en landing pages interactivas en WordPress, duplicando el tiempo promedio en sitio en campañas digitales de marketing.",
    tech: ["WordPress", "CSS", "Diseño Gráfico", "UX/UI", "Adobe Suite"],
    icon: Globe,
    gradient: "from-green-500 to-teal-400",
    bgGlow: "bg-green-500/5",
    borderColor: "border-green-500/20",
    link: "https://chimacacao.com/",
    github: "#",
    highlights: ["2x tiempo promedio en sitio", "Diseño interactivo", "Optimización de conversión"],
  },
  {
    id: 4,
    title: "Identidades Corporativas",
    category: "Branding",
    description:
      "Desarrollo de identidades corporativas completas como freelancer, comunicando de manera efectiva los valores de marca mediante soluciones gráficas estratégicas y propuestas creativas.",
    tech: ["Illustrator", "Photoshop", "InDesign", "Branding", "Estrategia Visual"],
    icon: Layout,
    gradient: "from-orange-500 to-yellow-400",
    bgGlow: "bg-orange-500/5",
    borderColor: "border-orange-500/20",
    link: "https://drive.google.com/drive/folders/177PhePuJijNKDOJ17-vFZKmeVZ87IPON?usp=sharing",
    github: "#",
    highlights: ["Identidad de marca completa", "Comunicación visual efectiva", "Múltiples clientes"],
  },
];

const categories = ["Todos", "Frontend", "Automatización", "Diseño Web", "Branding"];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered = projects.filter(
    (p) => activeFilter === "Todos" || p.category === activeFilter
  );

  return (
    <section id="proyectos" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-blue-400 text-sm uppercase tracking-widest font-medium">Portafolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Proyectos Destacados
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/20"
                  : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`group relative ${project.bgGlow} border ${project.borderColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                {/* Gradient orb */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />

                <div className="relative">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                      <project.icon size={20} className="text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2.5 py-1 bg-white/5 border border-white/10 text-gray-400 rounded-full">
                        {project.category}
                      </span>
                      {project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-colors"
                        >
                          <Github size={14} />
                        </a>
                      )}
                      {project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-colors"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-1 mb-5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-gray-400">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} shrink-0`} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 bg-white/5 text-gray-400 rounded-full border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}