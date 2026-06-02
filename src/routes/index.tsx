import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Coffee,
  UtensilsCrossed,
  Sun,
  Wine,
  Star,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";
import heroImg from "@/assets/hero-interior.jpg";
import tortillaAsset from "@/assets/tortilla-real.jpg.asset.json";
import tapasImg from "@/assets/tapas.jpg";
import terrazaImg from "@/assets/terraza.jpg";
import menuImg from "@/assets/menu-dia.jpg";
import desayunoImg from "@/assets/desayuno.jpg";
import { BUSINESS } from "@/lib/business";
import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "ENYESQUE Cafetería y Restaurante en Bargas | Desayunos, Tapas y Menú del día",
      },
      {
        name: "description",
        content:
          "Cafetería y restaurante en Bargas (Toledo). Desayunos con tortilla recomendada, raciones, tapas y menú del día casero. Reserva: 692 26 11 08.",
      },
      { property: "og:title", content: "ENYESQUE — Bargas (Toledo)" },
      {
        property: "og:description",
        content:
          "Desayunos, tapas, raciones y menú del día casero. Buena vibra y precios razonables.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const QUICK = [
  { icon: Coffee, title: "Desayunos", text: "Café, tostadas y tortilla muy recomendada." },
  { icon: UtensilsCrossed, title: "Menú del día", text: "Cocina casera, cambia a diario." },
  { icon: Wine, title: "Tapas y raciones", text: "Para compartir sin prisa." },
  { icon: Sun, title: "Terraza y copas", text: "Buen ambiente y música." },
];

const DISHES = [
  { name: "Ensaladilla Enyesque", tag: "Top ventas", img: tapasImg },
  { name: "Patatas bravas", tag: "Para compartir", img: tapasImg },
  { name: "Calamares a la andaluza", tag: "Crujiente", img: tapasImg },
  { name: "Oreja a la plancha", tag: "Clásico", img: tapasImg },
  { name: "Huevos rotos con jamón ibérico", tag: "Top ventas", img: desayunoImg },
  { name: "Fingers de pollo crujientes", tag: "Crujiente", img: tapasImg },
];

const REVIEWS = [
  {
    text: "Muy buen sitio para desayunar, la tortilla totalmente recomendable!",
    author: "Cliente verificado",
  },
  {
    text: "Las cantidades son razonables, perfectas para quedarte satisfecho sin excesos.",
    author: "Cliente verificado",
  },
  {
    text: "Dani el cocinero es muy simpático y está pendiente de atenderte!",
    author: "Cliente verificado",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Interior de ENYESQUE en Bargas"
            width={1600}
            height={1100}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/55 to-espresso/85" />
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32 lg:py-40 text-crema">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-label text-xs tracking-[0.3em] text-dorado">
              CAFETERÍA · RESTAURANTE · BARGAS
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl leading-[1.05]"
          >
            Cafetería y restaurante en Bargas para desayunar, tapear y comer a gusto.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 max-w-2xl text-crema/85 text-lg"
          >
            Desayunos con tortilla muy recomendada, raciones para compartir y menú del día casero. Buen ambiente, precios razonables.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-95 transition shadow-warm"
            >
              <MessageCircle size={18} /> Reservar por WhatsApp
            </a>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-full bg-crema text-espresso px-6 py-3 font-medium hover:bg-crema/90 transition"
            >
              <Phone size={18} /> Llamar {BUSINESS.phone}
            </a>
            <Link
              to="/carta"
              className="inline-flex items-center gap-1 rounded-full border border-crema/40 text-crema px-5 py-3 hover:bg-crema/10 transition"
            >
              Ver carta <ChevronRight size={16} />
            </Link>
          </motion.div>
          <p className="mt-6 text-xs text-crema/70">
            Precio medio {BUSINESS.priceRange} · Comer aquí o para llevar · Bargas (Toledo)
          </p>
        </div>
      </section>

      {/* QUICK BLOCKS */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUICK.map((q, i) => (
            <Reveal key={q.title} delay={i * 0.05}>
              <div className="group h-full rounded-2xl bg-card border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-warm">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <q.icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{q.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{q.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LO QUE MÁS GUSTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <Reveal>
          <SectionTitle
            eyebrow="Lo que más gusta"
            title="Pequeños grandes detalles"
            subtitle="Lo que dicen quienes ya vienen a menudo."
          />
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            {
              t: "Tortilla que engancha",
              p: "Jugosa por dentro, dorada por fuera. La estrella del desayuno.",
              img: tortillaAsset.url,
            },
            {
              t: "Cantidades razonables",
              p: "Te quedas satisfecho sin excesos, con precios honestos.",
              img: tapasImg,
            },
            {
              t: "Servicio cercano",
              p: "Pregunta por Dani: te recomienda lo mejor del día.",
              img: heroImg,
            },
          ].map((it, i) => (
            <Reveal key={it.t} delay={i * 0.08}>
              <article className="rounded-2xl overflow-hidden bg-card border border-border h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.t}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{it.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{it.p}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Tortilla Meter */}
        <Reveal>
          <div className="mt-10 rounded-2xl bg-gradient-to-r from-dorado/15 to-primary/10 border border-border p-6 flex flex-col sm:flex-row gap-6 items-center">
            <div className="font-label text-xs tracking-[0.25em] text-primary">TORTILLA METER</div>
            <div className="flex-1 grid grid-cols-3 gap-2 w-full">
              {["Suave", "Jugosa", "Muy recomendada"].map((l, idx) => (
                <div
                  key={l}
                  className={`text-center text-xs sm:text-sm rounded-full py-2 ${
                    idx === 2 ? "bg-primary text-primary-foreground font-medium" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {l}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground sm:max-w-xs">
              La tortilla es nuestra estrella del desayuno.
            </p>
          </div>
        </Reveal>
      </section>

      {/* PLATOS DESTACADOS */}
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <SectionTitle eyebrow="Carta" title="Platos destacados" subtitle="Para empezar fuerte." />
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {DISHES.map((d, i) => (
              <Reveal key={d.name} delay={i * 0.04}>
                <div className="group rounded-xl overflow-hidden bg-card border border-border h-full">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={d.img}
                      alt={d.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <div className="text-[10px] font-label tracking-widest text-primary">{d.tag}</div>
                    <div className="text-sm font-medium leading-tight mt-0.5">{d.name}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/carta"
              className="inline-flex items-center gap-2 rounded-full bg-espresso text-crema px-6 py-3 hover:opacity-95 transition"
            >
              Ver carta completa <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* MENÚ DEL DÍA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <div className="rounded-3xl overflow-hidden">
            <img src={menuImg} alt="Menú del día casero" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <SectionTitle
            eyebrow="Menú del día"
            title="Cocina casera con platos del día"
            subtitle="Cambia cada día. Aquí van algunos ejemplos para que te hagas una idea."
          />
          <ul className="mt-6 space-y-3 text-sm">
            <li><span className="font-semibold">Primeros:</span> macarrones boloñesa</li>
            <li><span className="font-semibold">Segundos:</span> crepes de pollo o ternera, berenjena rellena, ternera en salsa, pechuguitas al cabrales, cachopín asturiano</li>
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">El menú cambia a diario.</p>
          <div className="mt-6">
            <Link
              to="/menu-del-dia"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 font-medium hover:opacity-95"
            >
              Ver menú del día <ChevronRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* AMBIENTE */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <SectionTitle
            eyebrow="Ambiente"
            title="Buena vibra, música y calma"
            subtitle="Perfecto para parejas, familias y grupos. Sin prisas."
          />
          <ul className="mt-6 space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Sun size={16} className="text-primary" /> Terraza (según disponibilidad)
            </li>
            <li className="flex items-center gap-2">
              <UtensilsCrossed size={16} className="text-primary" /> Para llevar
            </li>
            <li className="flex items-center gap-2">
              <Wine size={16} className="text-primary" /> Celebraciones pequeñas (consultar)
            </li>
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 gap-3">
            <img src={terrazaImg} alt="Terraza" loading="lazy" className="rounded-2xl aspect-[3/4] object-cover" />
            <img src={desayunoImg} alt="Desayuno" loading="lazy" className="rounded-2xl aspect-[3/4] object-cover mt-8" />
          </div>
        </Reveal>
      </section>

      {/* OPINIONES */}
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <SectionTitle
                eyebrow="Opiniones"
                title="Lo que dicen de nosotros"
                subtitle={`${BUSINESS.rating}/5 en Google · ${BUSINESS.reviews} reseñas`}
              />
              <div className="flex items-center gap-1 text-dorado">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
                ))}
                <span className="ml-2 text-espresso font-semibold">{BUSINESS.rating}</span>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {REVIEWS.map((r, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <figure className="rounded-2xl bg-card border border-border p-6 h-full">
                  <div className="flex gap-0.5 text-dorado">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-sm leading-relaxed">“{r.text}”</blockquote>
                  <figcaption className="mt-4 text-xs text-muted-foreground">— {r.author}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link to="/opiniones" className="inline-flex rounded-full border border-border bg-card px-5 py-2.5 text-sm hover:bg-muted">
              Ver todas las opiniones
            </Link>
            <a
              href={BUSINESS.mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-5 py-2.5 text-sm hover:bg-muted"
            >
              <MapPin size={14} /> Cómo llegar
            </a>
          </div>
        </div>
      </section>

      {/* HORARIO */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <Reveal>
          <SectionTitle eyebrow="Horario" title="Cuándo venir" />
        </Reveal>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-2xl bg-card border border-border p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Clock size={16} className="text-primary" /> Horario semanal
              </div>
              <table className="mt-4 w-full text-sm">
                <tbody>
                  {[
                    ["Lunes", "8:00–16:00 · 19:00–23:00"],
                    ["Martes", "8:00–16:00 · 19:00–23:00"],
                    ["Miércoles", "Cerrado"],
                    ["Jueves", "8:00–16:00 · 19:00–23:00"],
                    ["Viernes", "8:00–16:00 · 19:00–23:00"],
                    ["Sábado", "8:00–1:00"],
                    ["Domingo", "8:00–23:00"],
                  ].map(([d, h]) => (
                    <tr key={d} className="border-t border-border">
                      <td className="py-2 font-medium">{d}</td>
                      <td className="py-2 text-muted-foreground text-right">{h}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-xs text-muted-foreground">
                Horarios sujetos a cambios. Confirma por teléfono o Instagram.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl bg-card border border-border p-6 h-full">
              <div className="text-sm font-semibold">Horas punta</div>
              <p className="mt-3 text-sm text-muted-foreground">
                Suele haber más movimiento en mañanas y últimas horas de tarde. Si quieres ir tranquilo, ven entre semana a media mañana.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={BUSINESS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium"
                >
                  <MessageCircle size={16} /> Reservar
                </a>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm"
                >
                  <Phone size={16} /> Llamar
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20">
        <Reveal>
          <div className="rounded-3xl overflow-hidden relative p-10 sm:p-14 text-crema">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary to-dorado" />
            <h2 className="font-display text-3xl sm:text-4xl max-w-xl">
              ¿Desayuno, tapas o menú del día?
            </h2>
            <p className="mt-3 max-w-xl text-crema/90">
              Reserva rápido por WhatsApp o llámanos. Te confirmamos al momento.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-crema text-espresso px-6 py-3 font-medium hover:bg-crema/90"
              >
                <MessageCircle size={18} /> Reservar por WhatsApp
              </a>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full bg-espresso text-crema px-6 py-3 font-medium"
              >
                <Phone size={18} /> Llamar
              </a>
              <a
                href={BUSINESS.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-crema/50 text-crema px-6 py-3 hover:bg-crema/10"
              >
                <MapPin size={18} /> Cómo llegar
              </a>
            </div>
            <p className="mt-6 text-sm text-crema/90">{BUSINESS.address}</p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
