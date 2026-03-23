# Estrategia Financiera Consultores

Landing page para consultoría boutique de estrategia financiera.

## Stack Tecnológico

- **Next.js 15** — React framework con SSG/SSR
- **TypeScript** — Tipado estricto
- **Tailwind CSS v4** — Utility-first CSS
- **React Server Components** — Zero JavaScript innecesario

## Estructura del Proyecto

```
src/
├── app/                    # Next.js App Router
├── components/
│   ├── ui/                # Design system components
│   ├── layout/            # Layout components (Nav, Footer)
│   └── sections/          # Page sections
├── lib/                   # Utilities & constants
└── styles/                # Global styles
```

## Design System: "The Architectural Monograph"

Basado en principios de editorial design con:
- **Colores:** Navy primario (#000c1e), blancos/grises fríos, acentos dorados sutiles
- **Tipografía:** Noto Serif (displays), Inter (body)
- **Componentes:** Sin border-radius, layering para depth, glassmorphism para floating elements
- **Filosofía:** Exclusividad, whitespace expansivo, precisión arquitectónica

## Instalación & Setup

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build
npm start
```

## GDPR Compliance

- ✅ Consentimiento explícito para email capture
- ✅ Vercel Analytics (sin cookies de terceros)
- ✅ Server-side form validation
- ✅ Política de privacidad documentada
- ✅ No external image loading

## Deployment

Configurado para deploy en Vercel:

```bash
git push # Auto-deploys to Vercel
```

## Roadmap

- [ ] Página de servicios detallada
- [ ] Formulario de contacto con validación
- [ ] Página de metodología
- [ ] Casos de éxito / estudios
- [ ] Política de privacidad + aviso legal
- [ ] Blog / recursos
- [ ] Integración con email service
- [ ] Analytics GDPR-compliant

---

**Documentación adicional:** Ver [DESIGN.md](./DESIGN.md) para detalles del sistema de diseño.
