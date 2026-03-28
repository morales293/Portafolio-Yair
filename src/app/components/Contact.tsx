import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  User,
  MessageSquare,
  Briefcase,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "yairmorales.dev@gmail.com",
    href: "mailto:yairmorales.dev@gmail.com",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "(52) 95-15-19-26-06",
    href: "tel:+529515192606",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Oaxaca de Juárez, México",
    href: "#",
    gradient: "from-green-500 to-teal-400",
  },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
    toast.success("¡Mensaje enviado con éxito! Te responderé pronto.", {
      duration: 5000,
    });
    reset();
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section id="contacto" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm uppercase tracking-widest font-medium">¿Hablamos?</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Solicitud de Contacto
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            ¿Tienes un proyecto en mente o quieres trabajar juntos? Completa el formulario y te responderé lo antes posible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left panel: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info cards */}
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4 p-4 bg-[#000000] border border-white/5 rounded-xl hover:border-blue-500/20 hover:bg-blue-500/5 transition-all group"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center shadow-lg shrink-0 group-hover:scale-110 transition-transform`}>
                  <info.icon size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs">{info.label}</p>
                  <p className="text-white text-sm font-medium">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-4"
            >
              <p className="text-gray-500 text-sm mb-3">Encuéntrame en</p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#000000] border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/30 hover:bg-blue-500/10 transition-all hover:scale-110"
                    title={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="p-4 bg-green-500/5 border border-green-500/15 rounded-xl"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-medium">Disponible para trabajar</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                Actualmente disponible para proyectos freelance y posiciones de tiempo completo como Frontend Developer.
              </p>
            </motion.div>
          </motion.div>

          {/* Right panel: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl blur" />
              <div className="relative bg-[#000000] border border-white/5 rounded-2xl p-6 sm:p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle size={32} className="text-green-400" />
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-gray-400">Gracias por contactarme. Te responderé en menos de 24 horas.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name + Company */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-400 text-sm mb-1.5">
                          <span className="flex items-center gap-1.5">
                            <User size={13} /> Nombre completo *
                          </span>
                        </label>
                        <input
                          {...register("name", { required: "El nombre es requerido" })}
                          placeholder="Tu nombre"
                          className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-xl text-white placeholder-gray-600 text-sm transition-all outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 ${
                            errors.name ? "border-red-500/50" : "border-white/10"
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-1.5">
                          <span className="flex items-center gap-1.5">
                            <Briefcase size={13} /> Empresa / Organización
                          </span>
                        </label>
                        <input
                          {...register("company")}
                          placeholder="Tu empresa (opcional)"
                          className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white placeholder-gray-600 text-sm transition-all outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-gray-400 text-sm mb-1.5">
                        <span className="flex items-center gap-1.5">
                          <Mail size={13} /> Correo electrónico *
                        </span>
                      </label>
                      <input
                        {...register("email", {
                          required: "El email es requerido",
                          pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Ingresa un email válido",
                          },
                        })}
                        placeholder="tu@email.com"
                        type="email"
                        className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-xl text-white placeholder-gray-600 text-sm transition-all outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 ${
                          errors.email ? "border-red-500/50" : "border-white/10"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-gray-400 text-sm mb-1.5">
                        <span className="flex items-center gap-1.5">
                          <MessageSquare size={13} /> Asunto *
                        </span>
                      </label>
                      <select
                        {...register("subject", { required: "Selecciona un asunto" })}
                        className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-xl text-sm transition-all outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 ${
                          errors.subject ? "border-red-500/50 text-gray-400" : "border-white/10 text-gray-300"
                        }`}
                      >
                        <option value="" className="bg-[#0a0a0a] text-gray-500">Selecciona una opción...</option>
                        <option value="proyecto-web" className="bg-[#0a0a0a]">Proyecto Web (Frontend)</option>
                        <option value="diseno-grafico" className="bg-[#0a0a0a]">Diseño Gráfico / Branding</option>
                        <option value="landing-page" className="bg-[#0a0a0a]">Landing Page</option>
                        <option value="automatizacion" className="bg-[#0a0a0a]">Automatización de Procesos</option>
                        <option value="colaboracion" className="bg-[#0a0a0a]">Oportunidad de Colaboración</option>
                        <option value="otro" className="bg-[#0a0a0a]">Otro</option>
                      </select>
                      {errors.subject && (
                        <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-gray-400 text-sm mb-1.5">
                        <span className="flex items-center gap-1.5">
                          <MessageSquare size={13} /> Mensaje *
                        </span>
                      </label>
                      <textarea
                        {...register("message", {
                          required: "El mensaje es requerido",
                          minLength: { value: 20, message: "El mensaje debe tener al menos 20 caracteres" },
                        })}
                        placeholder="Cuéntame sobre tu proyecto, idea o en qué puedo ayudarte..."
                        rows={5}
                        className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-xl text-white placeholder-gray-600 text-sm transition-all outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 resize-none ${
                          errors.message ? "border-red-500/50" : "border-white/10"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Enviar Solicitud
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-gray-600 text-xs">
                      Te responderé en menos de 24 horas · Sin spam
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}