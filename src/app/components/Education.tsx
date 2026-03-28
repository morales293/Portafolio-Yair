import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const education = [
  {
    institution: "TripleTen Bootcamp",
    degree: "Bootcamp en Desarrollo Full Stack",
    period: "2026",
    type: "Bootcamp",
    icon: BookOpen,
    gradient: "from-blue-500 to-purple-500",
    description:
      "Formación intensiva en desarrollo web full stack con enfoque en tecnologías modernas, metodologías ágiles y buenas prácticas de desarrollo profesional.",
    skills: ["React.js", "Node.js", "JavaScript ES6+", "Git/GitHub", "REST APIs", "PostgreSQL"],
    status: "En proceso",
  },
  {
    institution: "Universidad Mundo Maya",
    degree: "Licenciatura en Diseño Gráfico Digital",
    period: "2023",
    type: "Universidad",
    icon: GraduationCap,
    gradient: "from-purple-500 to-pink-500",
    description:
      "Formación profesional en diseño gráfico digital, principios de UX/UI, comunicación visual y producción multimedia. Base sólida en herramientas del ecosistema Adobe.",
    skills: ["Adobe Illustrator", "Photoshop", "InDesign", "Figma", "UX/UI", "Branding"],
    status: "Completado",
  },
];

const certifications = [
  { name: "Automatización con n8n", issuer: "CEO No. 59", icon: Award },
  { name: "Git & GitHub", issuer: "TripleTen Bootcamp", icon: Award },
  { name: "Diseño Gráfico Digital", issuer: "Autoformación", icon: Award },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="educacion" className="py-24 bg-[#000000]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm uppercase tracking-widest font-medium">Formación</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Educación Académica
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Education cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.gradient} flex items-center justify-center shadow-lg`}>
                  <edu.icon size={22} className="text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2.5 py-1 rounded-full border ${
                    edu.status === "En proceso"
                      ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
                      : "bg-green-500/10 border-green-500/20 text-green-400"
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </div>

              <div className="mb-1">
                <span className="text-xs text-gray-500 uppercase tracking-widest">{edu.type} · {edu.period}</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{edu.degree}</h3>
              <p className="text-blue-400 text-sm mb-3">{edu.institution}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{edu.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {edu.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-0.5 bg-white/5 border border-white/10 text-gray-400 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-white font-semibold text-center mb-6">Conocimientos Adicionales</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3 bg-[#0a0a0a] border border-white/5 rounded-xl p-4 hover:border-blue-500/20 transition-colors"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center shrink-0">
                  <cert.icon size={16} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{cert.name}</p>
                  <p className="text-gray-500 text-xs">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}