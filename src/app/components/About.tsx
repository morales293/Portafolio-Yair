import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { User, Target, Lightbulb, Globe } from "lucide-react";

const traits = [
  { icon: Target, label: "Pensamiento Analítico", desc: "Resolución de problemas complejos con enfoque estructurado" },
  { icon: Lightbulb, label: "Aprendizaje Continuo", desc: "Siempre actualizado con las últimas tecnologías" },
  { icon: User, label: "Trabajo Colaborativo", desc: "Experiencia en equipos multidisciplinarios" },
  { icon: Globe, label: "Adaptabilidad", desc: "Rápida adaptación a entornos tecnológicos dinámicos" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" className="py-24 bg-[#000000]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm uppercase tracking-widest font-medium">Conóceme</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Sobre Mí
            </h2>
            <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Bio */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl blur" />
                <div className="relative bg-[#0a0a0a] border border-blue-500/10 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <User size={20} className="text-white" />
                    </div>
                    <h3 className="text-white text-lg font-semibold">Perfil Profesional</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Desarrollador Web Junior con formación en diseño gráfico digital, 
                    enfocado en la creación de interfaces web funcionales y visualmente atractivas. 
                    Cuento con conocimientos en <span className="text-blue-400">HTML, CSS y JavaScript</span>, 
                    aplicando buenas prácticas de desarrollo y principios de{" "}
                    <span className="text-purple-400">UX/UI</span> para mejorar la experiencia del usuario.
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    Me apoyo en herramientas como <span className="text-blue-400">Figma, Git</span> y 
                    entornos de desarrollo modernos. Destaco por mi pensamiento analítico, 
                    aprendizaje continuo y trabajo colaborativo, cualidades que me permiten 
                    adaptarme rápidamente a entornos tecnológicos dinámicos.
                  </p>
                  <div className="mt-6 pt-6 border-t border-blue-500/10">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="text-green-400">●</span>
                      <span>Idiomas: Español (Nativo) · Inglés (Básico - en proceso de mejora)</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Traits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {traits.map((trait, i) => (
                <motion.div
                  key={trait.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="group bg-[#0a0a0a] border border-blue-500/10 rounded-xl p-5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <trait.icon size={18} className="text-blue-400" />
                  </div>
                  <h4 className="text-white text-sm font-semibold mb-1">{trait.label}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{trait.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}