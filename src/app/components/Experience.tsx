import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "C.E.O. No. 59",
    role: "Analista de Procesos y Datos",
    period: "2018 - Actualidad",
    current: true,
    color: "from-blue-500 to-cyan-400",
    description:
      "Realizó la optimización de datos por medio de diferentes flujos de trabajo, así como la automatización de procesos administrativos con n8n mejorando en un 25% los tiempos de consulta en áreas administrativas.",
    tags: ["n8n", "Automatización", "Análisis de Datos", "Flujos de trabajo"],
  },
  {
    company: "Proyecto Bootcamp TripleTen",
    role: "Junior Web Developer",
    period: "2025 - Actualidad",
    current: true,
    color: "from-purple-500 to-pink-400",
    description:
      "Diseñé una landing page totalmente responsiva utilizando HTML, CSS y JavaScript, mejorando la experiencia móvil y la velocidad de carga. Usé Git y GitHub para control de versiones y colaboración en equipo dentro de un flujo de trabajo profesional.",
    tags: ["HTML", "CSS", "JavaScript", "Git", "GitHub", "Responsive Design"],
  },
  {
    company: "Gestión de Sitios Web en WordPress",
    role: "Diseñador Gráfico Digital",
    period: "2024 - Actualidad",
    current: true,
    color: "from-green-500 to-teal-400",
    description:
      "Transformé piezas gráficas en landing pages interactivas, duplicando el tiempo promedio en sitio en campañas digitales.",
    tags: ["WordPress", "Landing Pages", "Diseño Gráfico", "UX/UI"],
  },
  {
    company: "Freelancer",
    role: "Diseñador Gráfico Digital",
    period: "2023 - 2025",
    current: false,
    color: "from-orange-500 to-yellow-400",
    description:
      "Experiencia en el desarrollo de identidades corporativas, enfocadas en comunicar de manera clara y efectiva los valores de marca mediante soluciones gráficas estratégicas, resolviendo problemáticas de comunicación a través de propuestas creativas, coherentes y orientadas a fortalecer la presencia e impacto de las marcas.",
    tags: ["Identidad Corporativa", "Branding", "Adobe Suite", "Comunicación Visual"],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencia" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm uppercase tracking-widest font-medium">Trayectoria</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Experiencia Laboral
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-14 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-2 sm:left-5 top-6 w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>

                {/* Card */}
                <div className="group bg-[#000000] border border-white/5 rounded-2xl p-6 hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} className="text-blue-400" />
                        <span className="text-blue-400 text-sm font-medium">{exp.company}</span>
                        {exp.current && (
                          <span className="text-xs px-2 py-0.5 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full">
                            Actual
                          </span>
                        )}
                      </div>
                      <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 text-sm shrink-0">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-blue-500/5 border border-blue-500/15 text-blue-300/80 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}