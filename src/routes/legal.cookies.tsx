import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies | ENYESQUE Bargas" },
      { name: "description", content: "Información sobre el uso de cookies en este sitio web." },
      { property: "og:url", content: "/legal/cookies" },
    ],
    links: [{ rel: "canonical", href: "/legal/cookies" }],
  }),
  component: () => (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 py-16 prose prose-sm">
      <h1 className="font-display text-3xl">Política de Cookies</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Este sitio web puede utilizar cookies técnicas necesarias para su correcto funcionamiento y, en su caso, cookies analíticas para entender de forma agregada cómo se usa la web.
      </p>
      <h2 className="mt-6 font-display text-xl">Tipos de cookies</h2>
      <ul className="text-sm list-disc list-inside">
        <li><strong>Técnicas:</strong> imprescindibles para la navegación.</li>
        <li><strong>Analíticas:</strong> nos ayudan a mejorar el sitio (solo si se han habilitado).</li>
      </ul>
      <h2 className="mt-6 font-display text-xl">Gestión</h2>
      <p className="text-sm">Puedes configurar o eliminar las cookies en cualquier momento desde la configuración de tu navegador.</p>
    </article>
  ),
});