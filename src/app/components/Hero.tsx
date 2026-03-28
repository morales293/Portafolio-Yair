import { motion } from "motion/react";
import { Download, ChevronDown, MapPin, Mail, Phone } from "lucide-react";

export function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm mb-6"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Disponible para nuevos proyectos
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-4 tracking-tight"
        >
          Yair Morales
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-xl sm:text-2xl text-gray-200 font-light tracking-widest uppercase">
            Frontend Developer
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Desarrollador Web Junior con formación en diseño gráfico digital, 
          enfocado en crear interfaces web funcionales y visualmente atractivas. 
          Apasionado por el UX/UI y las buenas prácticas de desarrollo.
        </motion.p>

        {/* Contact info row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-gray-400"
        >
          <a href="tel:+529515192606" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Phone size={14} /> (52) 95-15-19-26-06
          </a>
          <a href="mailto:yairmorales.dev@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
            <Mail size={14} /> yairmorales.dev@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={14} /> Oaxaca de Juárez, México
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => handleScrollTo("proyectos")}
            className="px-8 py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-blue-500/30 font-medium"
          >
            Ver mis proyectos
          </button>
          <button
            onClick={() => handleScrollTo("contacto")}
            className="px-8 py-3.5 border border-blue-500/40 text-blue-400 rounded-xl hover:bg-blue-500/10 transition-all hover:scale-105 font-medium flex items-center gap-2 justify-center"
          >
            <Download size={16} />
            Contactar
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScrollTo("sobre-mi")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-white transition-colors"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}