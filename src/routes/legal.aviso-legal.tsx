import { createFileRoute } from "@tanstack/react-router";
import { BUSINESS } from "@/lib/business";

export const Route = createFileRoute("/legal/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso legal | ENYESQUE Bargas" },
      { name: "description", content: "Aviso legal de ENYESQUE Cafetería / Restaurante." },
      { property: "og:url", content: "/legal/aviso-legal" },
    ],
    links: [{ rel: "canonical", href: "/legal/aviso-legal" }],
  }),
  component: () => (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-16 prose prose-sm">
      <h1 className="font-display text-3xl">Aviso legal</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se informa:
      </p>
      <ul className="mt-4 text-sm space-y-1">
        <li><strong>Titular:</strong> [Razón social — pendiente de completar]</li>
        <li><strong>NIF/CIF:</strong> [pendiente]</li>
        <li><strong>Dirección:</strong> {BUSINESS.address}</li>
        <li><strong>Teléfono:</strong> {BUSINESS.phone}</li>
        <li><strong>Email:</strong> [pendiente]</li>
      </ul>
      <h2 className="mt-8 font-display text-xl">Objeto</h2>
      <p className="text-sm">El presente sitio web tiene por finalidad informar sobre los servicios de cafetería y restaurante de ENYESQUE.</p>
      <h2 className="mt-6 font-display text-xl">Propiedad intelectual</h2>
      <p className="text-sm">Los contenidos, diseño y código fuente son propiedad del titular o están licenciados a su favor. Queda prohibida su reproducción sin autorización.</p>
      <h2 className="mt-6 font-display text-xl">Responsabilidad</h2>
      <p className="text-sm">El titular no se responsabiliza de los posibles daños derivados del uso del sitio web o de la información contenida en él.</p>
    </article>
  ),
});