import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { QrCode, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/carta")({
  head: () => ({
    meta: [
      { title: "Carta | ENYESQUE Bargas" },
      {
        name: "description",
        content:
          "Carta de ENYESQUE en Bargas: desayunos, tapas, raciones, postres y bebidas. Cocina casera y precios razonables.",
      },
      { property: "og:title", content: "Carta | ENYESQUE Bargas" },
      { property: "og:description", content: "Desayunos, tapas, raciones, postres y bebidas." },
      { property: "og:url", content: "/carta" },
    ],
    links: [{ rel: "canonical", href: "/carta" }],
  }),
  component: CartaPage,
});

const SECTIONS = [
  {
    id: "desayunos",
    title: "Desayunos",
    items: [
      { name: "Café e infusiones", desc: "Espresso, cortado, café con leche, té e infusiones." },
      { name: "Zumos naturales", desc: "Naranja recién exprimida." },
      { name: "Tostadas variadas", desc: "Aceite y tomate, jamón ibérico, mantequilla y mermelada." },
      { name: "Bollería", desc: "Croissant, napolitana, palmera." },
      {
        name: "Tortilla de patata",
        desc: "Jugosa, hecha al momento.",
        badge: "Muy recomendada",
      },
    ],
  },
  {
    id: "tapas",
    title: "Tapas y raciones",
    items: [
      { name: "Ensaladilla Enyesque", desc: "Receta de la casa, cremosa y bien servida.", badge: "Top ventas" },
      { name: "Patatas bravas", desc: "Salsa brava casera." },
      { name: "Calamares a la andaluza", desc: "Rebozado fino y crujiente." },
      { name: "Oreja a la plancha", desc: "Con un toque de pimentón." },
      { name: "Huevos rotos con jamón ibérico", desc: "Patata, huevo y buen jamón.", badge: "Top ventas" },
      { name: "Fingers de pollo crujientes", desc: "Con salsas para mojar." },
    ],
  },
  {
    id: "menu",
    title: "Menú del día / Sugerencias",
    items: [
      {
        name: "Menú del día casero",
        desc: "Primeros y segundos a elegir, postre y bebida. Cambia a diario.",
      },
    ],
    cta: { to: "/menu-del-dia", label: "Ver menú del día" },
  },
  {
    id: "postres",
    title: "Postres",
    items: [
      { name: "Postre casero del día", desc: "Pregunta por la sugerencia del día." },
      { name: "Tartas", desc: "Selección de tartas." },
      { name: "Helados", desc: "Varios sabores." },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    items: [
      { name: "Refrescos", desc: "Selección completa." },
      { name: "Cervezas", desc: "Caña, doble, sin alcohol." },
      { name: "Vinos", desc: "Tinto, blanco y rosado por copa o botella." },
      { name: "Combinados", desc: "Copas y combinados de marca." },
    ],
  },
];

function CartaPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
        <Reveal>
          <SectionTitle
            eyebrow="Carta"
            title="Nuestra carta"
            subtitle="Cocina casera, raciones para compartir y cuidado en cada plato. La carta puede variar según disponibilidad."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <a
            href="#"
            className="mt-8 flex items-center justify-between gap-3 rounded-2xl bg-espresso text-crema p-5 hover:opacity-95 transition"
          >
            <div className="flex items-center gap-3">
              <QrCode size={22} />
              <div>
                <div className="font-semibold">Abrir carta digital</div>
                <div className="text-xs text-crema/70">Versión actualizada (Barmanager)</div>
              </div>
            </div>
            <ChevronRight size={18} />
          </a>
        </Reveal>

        <div className="mt-10">
          <Accordion type="multiple" defaultValue={["desayunos"]} className="space-y-3">
            {SECTIONS.map((s) => (
              <AccordionItem
                key={s.id}
                value={s.id}
                className="rounded-2xl border border-border bg-card px-5"
              >
                <AccordionTrigger className="font-display text-xl">
                  {s.title}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="divide-y divide-border">
                    {s.items.map((it) => (
                      <li key={it.name} className="py-3 flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{it.name}</span>
                            {"badge" in it && it.badge && (
                              <span className="text-[10px] font-label tracking-widest px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                                {it.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-0.5">{it.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {s.cta && (
                    <Link
                      to={s.cta.to}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
                    >
                      {s.cta.label} <ChevronRight size={14} />
                    </Link>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}