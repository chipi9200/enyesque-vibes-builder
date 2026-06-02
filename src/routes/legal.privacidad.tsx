import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de Privacidad | ENYESQUE Bargas" },
      { name: "description", content: "Política de privacidad y tratamiento de datos." },
      { property: "og:url", content: "/legal/privacidad" },
    ],
    links: [{ rel: "canonical", href: "/legal/privacidad" }],
  }),
  component: () => (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-16 prose prose-sm">
      <h1 className="font-display text-3xl">Política de Privacidad</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la LOPDGDD 3/2018, te informamos sobre el tratamiento de tus datos personales.
      </p>
      <h2 className="mt-6 font-display text-xl">Responsable</h2>
      <p className="text-sm">[Razón social — pendiente de completar], con dirección en C. Comercio, 11, 45593 Bargas (Toledo).</p>
      <h2 className="mt-6 font-display text-xl">Finalidad</h2>
      <p className="text-sm">Gestionar tu consulta o reserva. No usamos tus datos para fines comerciales sin tu consentimiento expreso.</p>
      <h2 className="mt-6 font-display text-xl">Legitimación</h2>
      <p className="text-sm">Tu consentimiento al enviar el formulario.</p>
      <h2 className="mt-6 font-display text-xl">Conservación y destinatarios</h2>
      <p className="text-sm">Los datos se conservarán el tiempo imprescindible para atender tu consulta y no se cederán a terceros salvo obligación legal.</p>
      <h2 className="mt-6 font-display text-xl">Derechos</h2>
      <p className="text-sm">Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a [email de contacto].</p>
    </article>
  ),
});