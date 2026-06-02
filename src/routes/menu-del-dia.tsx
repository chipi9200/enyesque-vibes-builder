import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { BUSINESS } from "@/lib/business";
import { Instagram, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/menu-del-dia")({
  head: () => ({
    meta: [
      { title: "Menú del día | ENYESQUE Bargas" },
      {
        name: "description",
        content:
          "Menú del día casero en ENYESQUE Bargas. Primeros, segundos, postre y bebida. Cambia a diario.",
      },
      { property: "og:title", content: "Menú del día | ENYESQUE Bargas" },
      { property: "og:description", content: "Cocina casera que cambia a diario." },
      { property: "og:url", content: "/menu-del-dia" },
    ],
    links: [{ rel: "canonical", href: "/menu-del-dia" }],
  }),
  component: MenuDiaPage,
});

const WEEK = [
  {
    day: "Hoy",
    primeros: ["Macarrones boloñesa", "Ensalada de la casa"],
    segundos: ["Pechuguitas al cabrales", "Berenjena rellena"],
    postre: "Postre casero o café",
  },
  {
    day: "Mañana",
    primeros: ["Crema de verduras", "Lentejas estofadas"],
    segundos: ["Ternera en salsa", "Cachopín asturiano"],
    postre: "Postre casero o café",
  },
  {
    day: "Próximos días",
    primeros: ["Pasta del día", "Sopa o crema"],
    segundos: ["Crepes de pollo o ternera", "Pescado del día"],
    postre: "Postre casero o café",
  },
];

function MenuDiaPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <Reveal>
        <SectionTitle
          eyebrow="Menú del día"
          title="Cocina casera, cambia a diario"
          subtitle="Estos son ejemplos orientativos. Para confirmar el menú de hoy, llámanos o pregúntanos en el local."
        />
      </Reveal>

      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {WEEK.map((d, i) => (
          <Reveal key={d.day} delay={i * 0.06}>
            <article className="rounded-2xl bg-card border border-border p-6 h-full">
              <div className="font-label text-xs tracking-[0.25em] text-primary">{d.day.toUpperCase()}</div>
              <h3 className="mt-1 font-display text-xl">Menú</h3>
              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <div className="font-semibold">Primeros</div>
                  <ul className="text-muted-foreground list-disc list-inside">
                    {d.primeros.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
                <div>
                  <div className="font-semibold">Segundos</div>
                  <ul className="text-muted-foreground list-disc list-inside">
                    {d.segundos.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
                <div>
                  <div className="font-semibold">Postre / Café</div>
                  <p className="text-muted-foreground">{d.postre}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 rounded-2xl bg-secondary/60 border border-border p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="font-semibold">Síguenos en Instagram para ver novedades</div>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary inline-flex items-center gap-1"
            >
              <Instagram size={14} /> {BUSINESS.instagramHandle}
            </a>
          </div>
          <div className="flex flex-wrap gap-2">
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
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm bg-card"
            >
              <Phone size={16} /> Llamar
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}