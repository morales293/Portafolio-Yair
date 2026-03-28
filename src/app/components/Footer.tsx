import { motion } from "motion/react";
import { Code2, Heart, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#000000] border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="text-white font-bold">Yair Morales</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Frontend Developer & Diseñador Gráfico Digital.
              Creando experiencias web atractivas y funcionales.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://github.com/morales293" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="mailto:yairmorales.dev@gmail.com" className="text-gray-500 hover:text-blue-400 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              {[
                { label: "Sobre mí", id: "sobre-mi" },
                { label: "Experiencia", id: "experiencia" },
                { label: "Habilidades", id: "habilidades" },
                { label: "Proyectos", id: "proyectos" },
                { label: "Educación", id: "educacion" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-gray-500 hover:text-blue-400 text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="mailto:yairmorales.dev@gmail.com" className="hover:text-blue-400 transition-colors">
                  yairmorales.dev@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+529515192606" className="hover:text-blue-400 transition-colors">
                  (52) 95-15-19-26-06
                </a>
              </li>
              <li>Oaxaca de Juárez, México</li>
            </ul>
            <div className="mt-4">
              <button
                onClick={() => scrollTo("contacto")}
                className="text-xs px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Enviar mensaje
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {currentYear} Yair Morales Miguel. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Hecho con <Heart size={11} className="text-red-400" /> por Yair Morales
          </p>
        </div>
      </div>
    </footer>
  );
}