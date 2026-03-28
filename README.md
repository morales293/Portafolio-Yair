# Portafolio Profesional - Yair Morales Miguel

Portafolio web profesional desarrollado con React, Tailwind CSS y Motion. Presenta información profesional, experiencia laboral, proyectos destacados y formulario de contacto.

## 📋 Secciones

- **Hero** - Presentación principal con CTA
- **Sobre mí** - Biografía profesional
- **Experiencia** - Historial laboral detallado
- **Habilidades** - Stack tecnológico organizado por categorías
- **Portafolio** - Proyectos destacados con filtros
- **Educación** - Formación académica y certificaciones
- **Contacto** - Formulario y datos de contacto
- **Footer** - Enlaces rápidos y redes sociales

## 🛠️ Tecnologías

- **React 18.3.1** - Framework JavaScript
- **Tailwind CSS 4.1.12** - Framework de estilos
- **Motion 12.23.24** - Animaciones
- **Vite 6.3.5** - Build tool
- **Lucide React** - Iconos
- **React Hook Form** - Manejo de formularios

## 📄 Estructura del proyecto

```
/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   └── ui/          # Componentes UI reutilizables
│   │   └── App.tsx
│   └── styles/
│       ├── fonts.css
│       ├── index.css
│       ├── tailwind.css
│       └── theme.css
├── package.json
├── vite.config.ts
└── README.md
```

## 🐛 Solución de problemas

### Error al instalar dependencias

```bash
# Limpia caché e intenta de nuevo
rm -rf node_modules package-lock.json
npm install
```

### Error al construir

```bash
# Asegúrate de tener Node.js 18+
node --version

# Limpia y reconstruye
npm run build
```
