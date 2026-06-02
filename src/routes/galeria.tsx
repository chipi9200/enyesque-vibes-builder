import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { X } from "lucide-react";
import hero from "@/assets/hero-interior.jpg";
import tortilla from "@/assets/tortilla.jpg";
import tapas from "@/assets/tapas.jpg";
import terraza from "@/assets/terraza.jpg";
import menu from "@/assets/menu-dia.jpg";
import desayuno from "@/assets/desayuno.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galería | ENYESQUE Bargas" },
      { name: "description", content: "Fotos del local, desayunos, tapas, menú y terraza de ENYESQUE en Bargas." },
      { property: "og:title", content: "Galería | ENYESQUE Bargas" },
      { property: "og:description", content: "Fotos del local, platos y terraza." },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: GaleriaPage,
});

type Cat = "Todo" | "Local" | "Desayunos" | "Tapas" | "Menú" | "Terraza";
const IMAGES: { src: string; alt: string; cat: Exclude<Cat, "Todo"> }[] = [
  { src: hero, alt: "Interior del local", cat: "Local" },
  { src: tortilla, alt: "Tortilla de patata", cat: "Desayunos" },
  { src: desayuno, alt: "Desayuno con café", cat: "Desayunos" },
  { src: tapas, alt: "Mesa de tapas", cat: "Tapas" },
  { src: menu, alt: "Plato del menú del día", cat: "Menú" },
  { src: terraza, alt: "Terraza exterior", cat: "Terraza" },
  { src: tapas, alt: "Raciones para compartir", cat: "Tapas" },
  { src: hero, alt: "Ambiente del local", cat: "Local" },
  { src: menu, alt: "Sugerencia del día", cat: "Menú" },
];
const CATS: Cat[] = ["Todo", "Local", "Desayunos", "Tapas", "Menú", "Terraza"];

function GaleriaPage() {
  const [cat, setCat] = useState<Cat>("Todo");
  const [open, setOpen] = useState<number | null>(null);
  const list = cat === "Todo" ? IMAGES : IMAGES.filter((i) => i.cat === cat);

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <Reveal>
        <SectionTitle eyebrow="Galería" title="El local y los platos" />
      </Reveal>

      <div className="mt-8 flex flex-wrap gap-2">
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-4 py-2 text-sm border transition ${
              cat === c
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card border-border hover:bg-muted"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {list.map((img, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className="mb-4 block w-full overflow-hidden rounded-2xl border border-border group"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
        >
          <button
            aria-label="Cerrar"
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 text-white inline-flex items-center justify-center"
          >
            <X size={20} />
          </button>
          <img
            src={list[open].src}
            alt={list[open].alt}
            className="max-h-[85vh] max-w-full rounded-xl"
          />
        </div>
      )}
    </section>
  );
}