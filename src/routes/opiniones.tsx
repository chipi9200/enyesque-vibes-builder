import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/opiniones")({
  head: () => ({
    meta: [
      { title: "Opiniones | ENYESQUE Bargas" },
      {
        name: "description",
        content: `${BUSINESS.rating}/5 en Google con ${BUSINESS.reviews} reseñas. Lo que dicen los clientes de ENYESQUE en Bargas.`,
      },
      { property: "og:title", content: "Opiniones | ENYESQUE Bargas" },
      { property: "og:description", content: "Reseñas y opiniones de clientes." },
      { property: "og:url", content: "/opiniones" },
    ],
    links: [{ rel: "canonical", href: "/opiniones" }],
  }),
  component: OpinionesPage,
});

const REVIEWS = [
  {
    text: "Comida muy buena, bien presentada, cantidades razonables.",
    author: "Patricia López (Local Guide)",
    rating: 5,
  },
  {
    text: "Desayuno con mi esposa, nos atendieron genial y se adaptaron.",
    author: "César Vera (Local Guide)",
    rating: 5,
  },
  {
    text: "De lo mejorcito en Bargas; buenos desayunos, precios razonables, local decorado con gusto.",
    author: "Javier Román (Local Guide)",
    rating: 5,
  },
  {
    text: "Muy buen sitio para desayunar, la tortilla totalmente recomendable!",
    author: "Cliente verificado",
    rating: 5,
  },
  {
    text: "Las cantidades son razonables, perfectas para quedarte satisfecho sin excesos.",
    author: "Cliente verificado",
    rating: 5,
  },
  {
    text: "Dani el cocinero es muy simpático y está pendiente de atenderte!",
    author: "Cliente verificado",
    rating: 5,
  },
];

function OpinionesPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <Reveal>
        <SectionTitle
          eyebrow="Opiniones"
          title="Opiniones de nuestros clientes"
          subtitle="Gracias a todas las personas que nos visitan y nos recomiendan."
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 rounded-2xl bg-card border border-border p-6 flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="text-center sm:text-left">
            <div className="font-display text-5xl text-espresso">{BUSINESS.rating}</div>
            <div className="flex gap-0.5 mt-1 justify-center sm:justify-start text-dorado">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <div className="text-xs text-muted-foreground mt-1">{BUSINESS.reviews} reseñas en Google</div>
          </div>
          <div className="text-sm text-muted-foreground sm:max-w-md">
            La valoración y el número de reseñas pueden variar. Para ver todas las opiniones actualizadas, visita nuestro perfil en Google.
          </div>
          <a
            href="https://www.google.com/search?q=ENYESQUE+Bargas"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:ml-auto inline-flex rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium"
          >
            Ver en Google
          </a>
        </div>
      </Reveal>

      <div className="mt-10 grid md:grid-cols-2 gap-4">
        {REVIEWS.map((r, i) => (
          <Reveal key={i} delay={i * 0.04}>
            <figure className="rounded-2xl bg-card border border-border p-6 h-full">
              <div className="flex gap-0.5 text-dorado">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed">“{r.text}”</blockquote>
              <figcaption className="mt-4 text-xs text-muted-foreground">— {r.author}</figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}