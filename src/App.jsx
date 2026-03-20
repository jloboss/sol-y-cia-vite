import {
  Sun,
  Building2,
  Wrench,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  BadgeCheck,
  Leaf,
  Zap,
  MessageCircle,
  Star,
  ShieldCheck,
  ChartNoAxesCombined,
  CircleHelp,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      icon: Sun,
      title: "Sistemas solares residenciales",
      desc: "Diseñamos e instalamos soluciones fotovoltaicas para casas, parcelas y condominios, buscando ahorro, autonomía y valorización de la propiedad.",
    },
    {
      icon: Building2,
      title: "Proyectos para empresas",
      desc: "Desarrollamos proyectos para pymes, comercio, agroindustria y operaciones productivas que necesitan reducir su costo eléctrico y mejorar su eficiencia energética.",
    },
    {
      icon: Wrench,
      title: "Mantención y soporte técnico",
      desc: "Realizamos mantención preventiva, revisión de rendimiento, diagnóstico de fallas y soporte postventa para asegurar continuidad operativa.",
    },
  ];

  const benefits = [
    "Reducción del gasto eléctrico mensual",
    "Diseño según consumo, superficie y objetivo del cliente",
    "Equipos de alta eficiencia y larga vida útil",
    "Instalación, puesta en marcha y acompañamiento técnico",
  ];

  const stats = [
    { value: "+180", label: "Instalaciones ejecutadas" },
    { value: "Hasta 70%", label: "de ahorro potencial" },
    { value: "RM y regiones", label: "cobertura de proyectos" },
    { value: "Postventa real", label: "acompañamiento continuo" },
  ];

  const differentiators = [
    {
      icon: BadgeCheck,
      title: "Asesoría clara desde el primer contacto",
      text: "Evaluamos tu necesidad, revisamos el contexto de instalación y proponemos una alternativa coherente con tu presupuesto y consumo real.",
    },
    {
      icon: Leaf,
      title: "Sustentabilidad con impacto medible",
      text: "Implementar energía solar no solo baja costos: también mejora la imagen de tu proyecto y reduce tu dependencia de la red eléctrica.",
    },
    {
      icon: Zap,
      title: "Diseño técnico orientado a rendimiento",
      text: "Cada proyecto se desarrolla según ubicación, demanda energética, tipo de estructura y proyección de uso futuro.",
    },
  ];

  const projects = [
    {
      title: "Residencia en Chicureo",
      type: "Sistema residencial",
      text: "Instalación orientada a disminuir el gasto mensual y mejorar la autonomía energética de la vivienda.",
    },
    {
      title: "Local comercial en Santiago",
      type: "Proyecto pyme",
      text: "Solución para controlar costos operacionales y dar mayor estabilidad al consumo eléctrico del negocio.",
    },
    {
      title: "Parcela productiva en Curicó",
      type: "Proyecto agroindustrial",
      text: "Sistema diseñado para apoyar consumos diurnos y mejorar eficiencia en una operación con uso intensivo de energía.",
    },
  ];

  const testimonials = [
    {
      name: "Marcela R.",
      role: "Cliente residencial",
      text: "El proceso fue claro desde la evaluación inicial. Nos explicaron la solución, los tiempos y el ahorro esperado de manera muy profesional.",
    },
    {
      name: "Carlos P.",
      role: "Administrador de local comercial",
      text: "Necesitábamos una propuesta seria y bien aterrizada. Sol y Cía nos entregó una solución acorde a nuestro consumo y espacio disponible.",
    },
    {
      name: "Jorge A.",
      role: "Encargado de operaciones",
      text: "Destaco el acompañamiento técnico y la disposición postventa. No fue solo instalar paneles, sino ayudarnos a entender el proyecto completo.",
    },
  ];

  const faqs = [
    {
      q: "¿Cómo sé si mi casa o empresa puede instalar paneles solares?",
      a: "Primero se evalúa el consumo eléctrico, la superficie disponible, la orientación del lugar y las condiciones de instalación. Con eso se define si el proyecto es técnica y comercialmente viable.",
    },
    {
      q: "¿Cuánto puedo ahorrar con un sistema solar?",
      a: "El ahorro depende del perfil de consumo, tamaño del sistema y horario de uso. En muchos casos se logra una disminución importante del gasto mensual, especialmente cuando existe alto consumo diurno.",
    },
    {
      q: "¿Realizan mantención después de la instalación?",
      a: "Sí. Ofrecemos mantención preventiva, revisión de rendimiento y soporte técnico para asegurar que el sistema opere correctamente a lo largo del tiempo.",
    },
    {
      q: "¿Atienden fuera de Santiago?",
      a: "Sí. Evaluamos proyectos en Región Metropolitana y otras regiones, según alcance, ubicación y requerimientos técnicos del cliente.",
    },
  ];

  const navItems = [
    ["inicio", "Inicio"],
    ["servicios", "Servicios"],
    ["proyectos", "Proyectos"],
    ["testimonios", "Testimonios"],
    ["faq", "FAQ"],
    ["contacto", "Contacto"],
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.15),transparent_22%),radial-gradient(circle_at_left,rgba(245,158,11,0.12),transparent_18%),linear-gradient(to_bottom,rgba(2,6,23,1),rgba(15,23,42,1))]" />

      <a
        href="https://wa.me/56912345678?text=Hola%20Sol%20y%20C%C3%ADa%20Ltda%2C%20quiero%20cotizar%20un%20proyecto%20solar"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[60] flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white shadow-2xl shadow-green-900/30 transition hover:scale-[1.03] hover:bg-green-400"
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-300 to-amber-500 shadow-lg shadow-amber-500/20">
              <Sun className="h-6 w-6 text-slate-950" />
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight text-white md:text-xl">Sol y Cía Ltda</h1>
              <p className="text-xs text-slate-400">Energía solar para Chile</p>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm font-medium text-slate-300 md:flex">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="hidden rounded-2xl border border-amber-400/30 bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:scale-[1.02] hover:bg-amber-300 md:inline-flex"
            >
              Solicitar cotización
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-2 text-white md:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-medium text-slate-300">
              {navItems.map(([id, label]) => (
                <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)} className="transition hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Soluciones solares para hogares, pymes, comercio y proyectos productivos
              </div>

              <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
                Convierte tu consumo eléctrico en una inversión inteligente.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                En <strong className="text-white">Sol y Cía Ltda</strong> diseñamos e instalamos proyectos
                fotovoltaicos con un enfoque premium: ingeniería seria, propuesta comercial clara, equipos
                confiables y acompañamiento técnico real para clientes en Chile.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-6 py-3.5 font-semibold text-slate-950 shadow-xl shadow-amber-500/20 transition hover:bg-amber-300"
                >
                  Solicitar evaluación
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/56912345678?text=Hola%20Sol%20y%20C%C3%ADa%20Ltda%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-green-400/30 bg-green-500/10 px-6 py-3.5 font-semibold text-green-300 backdrop-blur transition hover:bg-green-500/20"
                >
                  <MessageCircle className="h-4 w-4" />
                  Hablar por WhatsApp
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-2xl font-black text-white">Residencial</p>
                  <p className="mt-1 text-sm text-slate-400">Casas, parcelas y condominios</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-2xl font-black text-white">Comercial</p>
                  <p className="mt-1 text-sm text-slate-400">Locales, oficinas y pymes</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <p className="text-2xl font-black text-white">Productivo</p>
                  <p className="mt-1 text-sm text-slate-400">Agroindustria y operación técnica</p>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {stats.map((item) => (
                      <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                        <p className="text-2xl font-black text-white">{item.value}</p>
                        <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-3xl bg-gradient-to-r from-amber-400 to-yellow-300 p-6 text-slate-950">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em]">Propuesta comercial</p>
                    <h3 className="mt-2 text-2xl font-black">Cotización técnica según consumo real</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-800">
                      Revisamos tu necesidad energética para proponer una solución rentable, bien dimensionada y
                      alineada con tu realidad operativa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-4">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <ShieldCheck className="h-8 w-8 text-amber-300" />
              <h3 className="mt-4 text-xl font-bold text-white">Confianza técnica</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Levantamiento, evaluación y propuesta con mirada comercial y técnica desde el primer contacto.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <ChartNoAxesCombined className="h-8 w-8 text-amber-300" />
              <h3 className="mt-4 text-xl font-bold text-white">Ahorro proyectado</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Diseñamos sistemas con foco en retorno, eficiencia energética y estabilidad del consumo eléctrico.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <MessageCircle className="h-8 w-8 text-amber-300" />
              <h3 className="mt-4 text-xl font-bold text-white">Atención directa</h3>
              <p className="mt-3 leading-7 text-slate-300">
                Canales de contacto rápidos, seguimiento comercial y soporte cercano antes y después de la instalación.
              </p>
            </div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">Servicios</p>
            <h3 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
              Soluciones solares pensadas para venta real
            </h3>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Esta propuesta integra diseño visual premium, argumentos comerciales, confianza técnica y llamados
              a la acción claros para convertir visitas en contactos comerciales.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/15 ring-1 ring-amber-300/20">
                    <Icon className="h-6 w-6 text-amber-300" />
                  </div>
                  <h4 className="mt-6 text-xl font-bold text-white">{service.title}</h4>
                  <p className="mt-4 leading-7 text-slate-300">{service.desc}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-amber-300">
                    Cotización personalizada
                    <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="ventajas" className="border-y border-white/10 bg-white/[0.03] py-20 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
                  Ventajas competitivas
                </p>
                <h3 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
                  No se trata solo de instalar paneles. Se trata de resolver bien tu necesidad energética.
                </h3>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Nuestro enfoque combina presentación comercial, claridad técnica y experiencia de cliente. La idea
                  es que cada potencial cliente entienda el valor de invertir en energía solar con una empresa seria
                  y cercana.
                </p>

                <div className="mt-8 grid gap-4">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4"
                    >
                      <div className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                      <p className="font-medium text-slate-200">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5">
                {differentiators.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-black/20"
                    >
                      <div className="flex items-start gap-4">
                        <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/15">
                          <Icon className="h-5 w-5 text-amber-300" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white">{item.title}</h4>
                          <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="proyectos" className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">Proyectos</p>
            <h3 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
              Casos de referencia para generar confianza comercial
            </h3>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Esta sección ayuda a mostrar experiencia y diversidad de soluciones, reforzando la percepción de
              respaldo y profesionalismo.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project, idx) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-lg shadow-black/10"
              >
                <div className="flex h-52 items-end bg-gradient-to-br from-amber-300/30 via-yellow-200/10 to-slate-900 p-6">
                  <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                    Proyecto {idx + 1}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">{project.type}</p>
                  <h4 className="mt-3 text-2xl font-bold text-white">{project.title}</h4>
                  <p className="mt-4 leading-7 text-slate-300">{project.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="testimonios" className="border-y border-white/10 bg-white/[0.03] py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">Testimonios</p>
              <h3 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
                Prueba social para reforzar conversión
              </h3>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Los testimonios ayudan a validar el servicio y disminuir la fricción comercial al momento de cotizar.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-7 shadow-lg shadow-black/20"
                >
                  <div className="flex gap-1 text-amber-300">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <p className="mt-5 leading-7 text-slate-300">“{item.text}”</p>
                  <div className="mt-6">
                    <p className="font-bold text-white">{item.name}</p>
                    <p className="text-sm text-slate-400">{item.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-300 p-8 text-slate-950 shadow-2xl shadow-amber-500/10 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr] md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em]">Evaluación comercial y técnica</p>
                <h3 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                  Solicita una propuesta adaptada a tu consumo, espacio y tipo de instalación.
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-800">
                  Puedes dejar tus datos en el formulario o escribirnos directamente por WhatsApp para una atención
                  más rápida y personalizada.
                </p>
              </div>

              <div className="flex flex-col gap-3 md:items-end">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-6 py-3.5 font-semibold text-white shadow-lg transition hover:bg-slate-900"
                >
                  Solicitar cotización
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/56912345678?text=Hola%20quiero%20cotizar%20un%20proyecto%20solar"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-950/10 bg-white/60 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-white/80"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp directo
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">Preguntas frecuentes</p>
            <h3 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
              Información que ayuda a cerrar más ventas
            </h3>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Resolver objeciones frecuentes mejora la confianza y facilita la decisión de contacto del cliente.
            </p>
          </div>

          <div className="mt-12 grid gap-5">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="flex items-start gap-3">
                  <CircleHelp className="mt-1 h-5 w-5 text-amber-300" />
                  <div>
                    <h4 className="text-lg font-bold text-white">{item.q}</h4>
                    <p className="mt-3 leading-7 text-slate-300">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">Contacto</p>
              <h3 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">
                Conversemos sobre tu próximo proyecto solar
              </h3>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Esta versión final está pensada para captar leads, transmitir respaldo y facilitar un contacto directo
                por formulario, teléfono, correo o WhatsApp.
              </p>

              <div className="mt-8 space-y-4 text-slate-200">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-amber-300" />
                  <span>contacto@solycia.cl</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-amber-300" />
                  <span>+56 9 1234 5678</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-amber-300" />
                  <span>Santiago, Chile · Atención en RM y regiones</span>
                </div>
                <a
                  href="https://wa.me/56912345678?text=Hola%20quiero%20cotizar%20un%20proyecto%20solar"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-green-500 px-5 py-3 font-semibold text-white transition hover:bg-green-400"
                >
                  <MessageCircle className="h-5 w-5" />
                  Escribir por WhatsApp
                </a>
              </div>
            </div>

            <form className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20 backdrop-blur-xl">
              <div className="grid gap-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200">Nombre</label>
                  <input
                    type="text"
                    placeholder="Tu nombre o empresa"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-amber-300"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200">Correo electrónico</label>
                  <input
                    type="email"
                    placeholder="ejemplo@empresa.cl"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-amber-300"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200">Teléfono</label>
                  <input
                    type="text"
                    placeholder="+56 9..."
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-amber-300"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200">Tipo de proyecto</label>
                  <select className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition focus:border-amber-300">
                    <option>Residencial</option>
                    <option>Comercial</option>
                    <option>Pyme</option>
                    <option>Agroindustrial</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200">Cuéntanos tu requerimiento</label>
                  <textarea
                    rows="5"
                    placeholder="Ejemplo: necesito evaluar paneles solares para una vivienda, local comercial, bodega o instalación productiva"
                    className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-amber-300"
                  />
                </div>
                <button
                  type="button"
                  className="rounded-2xl bg-amber-400 px-6 py-3.5 font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:bg-amber-300"
                >
                  Solicitar contacto
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Sol y Cía Ltda. Energía solar para hogares y empresas en Chile.</p>
          <p>Diseño web premium en React + Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
