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

const MENU = {
  primeros: ["Salmorejo o gazpacho", "Pisto con huevo", "Judías verdes con jamón"],
  segundos: ["Calamares a la andaluza", "Filetes de pollo a la plancha", "Solomillo al ajillo"],
  postres: ["Flan casero", "Fruta de temporada"],
  precio: "15 €",
  bebida: "Incluye bebida (agua, refresco, vino o cerveza de barril)",
};

function MenuDiaPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <Reveal>
        <SectionTitle
          eyebrow="Menú del día"
          title="Menú diario por 15 €"
          subtitle="Cocina casera con primero, segundo, postre y bebida incluida. La selección puede variar según disponibilidad."
        />
      </Reveal>

      <Reveal>
        <article className="mt-10 rounded-2xl bg-card border border-border p-8 max-w-2xl mx-auto text-center">
          <div className="font-label text-xs tracking-[0.25em] text-primary">MENÚ DIARIO</div>
          <div className="mt-6 grid sm:grid-cols-3 gap-6 text-sm text-left">
            <div>
              <div className="font-semibold mb-2">Primer plato</div>
              <ul className="text-muted-foreground space-y-1">
                {MENU.primeros.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Segundo plato</div>
              <ul className="text-muted-foreground space-y-1">
                {MENU.segundos.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Postres</div>
              <ul className="text-muted-foreground space-y-1">
                {MENU.postres.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </div>
          <div className="mt-8 font-display text-4xl text-espresso">{MENU.precio}</div>
          <p className="mt-2 text-xs text-muted-foreground">{MENU.bebida}</p>
        </article>
      </Reveal>

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