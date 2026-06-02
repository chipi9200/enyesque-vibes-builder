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
    id: "raciones-pescado",
    title: "Raciones · Pescado",
    items: [
      { name: "Sepia a la plancha", desc: "", price: "15,00 €" },
      { name: "Calamares a la andaluza", desc: "Rebozado fino y crujiente.", price: "12,50 €" },
      { name: "Gambón a la plancha", desc: "", price: "15,00 €" },
      { name: "Gambón al ajillo", desc: "", price: "15,00 €" },
      { name: "Pulpo a la gallega", desc: "Con pimentón y aceite de oliva.", price: "22,00 €" },
      { name: "Chipirones con salsa americana", desc: "", price: "16,00 €" },
      { name: "Cazón", desc: "En adobo.", price: "12,00 €" },
    ],
  },
  {
    id: "raciones-carne",
    title: "Raciones · Carne",
    items: [
      { name: "Torreznos de Soria", desc: "Por unidad.", price: "8,00 €" },
      { name: "Oreja a la plancha", desc: "Con un toque de pimentón.", price: "10,00 €" },
      { name: "Solomillo de cerdo al ajillo", desc: "", price: "14,00 €" },
      { name: "Revuelto de morcilla", desc: "", price: "10,00 €" },
      { name: "Magro con tomate", desc: "", price: "11,00 €" },
      { name: "Callos caseros", desc: "Receta tradicional.", price: "14,00 €" },
      { name: "Filetitos de ciervo", desc: "", price: "14,50 €" },
      { name: "Fingers de pollo", desc: "Con salsas para mojar.", price: "10,90 €" },
      { name: "Entrecot con guarnición", desc: "", price: "20,00 €" },
      { name: "Chuletitas de lechal", desc: "", price: "s/m" },
      { name: "Croquetas caseras de jamón", desc: "Cremosas por dentro, crujientes por fuera.", price: "12,00 €" },
      { name: "Patatas bravas", desc: "Salsa brava casera.", price: "8,00 €" },
      { name: "Ensaladilla Rusa", desc: "Receta de la casa.", price: "8,50 €", badge: "Top ventas" },
      { name: "Huevos rotos con chistorra", desc: "", price: "12,50 €" },
      { name: "Huevos rotos con jamón", desc: "Patata, huevo y buen jamón.", price: "12,50 €", badge: "Top ventas" },
    ],
  },
  {
    id: "bocadillos",
    title: "Bocadillos y montados",
    items: [
      { name: "Beicon", desc: "Bocadillo 7,50 € · Montado 3,50 €" },
      { name: "Lomo", desc: "Bocadillo 7,50 € · Montado 3,50 €" },
      { name: "Calamares", desc: "Bocadillo 7,50 € · Montado 4,00 €" },
      { name: "Pollo, queso y cebolla", desc: "Bocadillo 5,50 € · Montado 3,50 €" },
    ],
  },
  {
    id: "por-encargo",
    title: "Por encargo (mínimo 4 personas)",
    items: [
      { name: "Paella mixta", desc: "Por persona.", price: "14,00 €" },
      { name: "Arroz negro", desc: "Por persona.", price: "14,00 €" },
      { name: "Arroz con bogavante", desc: "Por persona.", price: "18,00 €" },
    ],
  },
  {
    id: "asados",
    title: "Asados",
    items: [
      { name: "Paletilla de lechal", desc: "Asada en horno tradicional.", price: "s/m" },
      { name: "Pierna de cordero de lechal", desc: "", price: "s/m" },
    ],
  },
  {
    id: "ensaladas",
    title: "Ensaladas",
    items: [
      { name: "Ensalada de pollo", desc: "", price: "12,50 €" },
      { name: "Ensalada de burrata", desc: "Con tomate y aceite virgen extra.", price: "13,50 €" },
      { name: "Ensalada de pote con atún", desc: "", price: "13,50 €" },
    ],
  },
  {
    id: "tostas",
    title: "Tostas",
    items: [
      { name: "Tosta de solomillo con cebolla caramelizada", desc: "", price: "11,00 €" },
      { name: "Tosta de salmón con guacamole", desc: "", price: "11,00 €" },
    ],
  },
  {
    id: "hamburguesas",
    title: "Hamburguesas y sándwiches",
    items: [
      { name: "Hamburguesa completa", desc: "", price: "12,00 €" },
      { name: "Hamburguesa de pollo", desc: "", price: "8,00 €" },
      { name: "Sándwich mixto", desc: "", price: "3,00 €" },
      { name: "Sándwich cubano", desc: "", price: "4,00 €" },
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