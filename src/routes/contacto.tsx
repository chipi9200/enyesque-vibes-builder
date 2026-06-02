import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BUSINESS } from "@/lib/business";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Reveal } from "@/components/site/Reveal";
import { Phone, MessageCircle, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto y Reservas | ENYESQUE Bargas" },
      {
        name: "description",
        content: `Reserva mesa en ENYESQUE Bargas. Teléfono ${BUSINESS.phone}, WhatsApp y mapa. ${BUSINESS.address}.`,
      },
      { property: "og:title", content: "Contacto y Reservas | ENYESQUE Bargas" },
      { property: "og:description", content: "Reservas, teléfono, WhatsApp y mapa." },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactoPage,
});

const Schema = z.object({
  nombre: z.string().trim().min(2, "Indica tu nombre").max(80),
  email: z.string().trim().email("Email no válido").max(120),
  telefono: z.string().trim().max(20).optional().or(z.literal("")),
  mensaje: z.string().trim().min(5, "Escribe un mensaje").max(800),
  consent: z.literal(true, { errorMap: () => ({ message: "Debes aceptar la política" }) }),
});

function ContactoPage() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      nombre: String(fd.get("nombre") ?? ""),
      email: String(fd.get("email") ?? ""),
      telefono: String(fd.get("telefono") ?? ""),
      mensaje: String(fd.get("mensaje") ?? ""),
      consent: fd.get("consent") === "on",
    };
    const parsed = Schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.errors[0]?.message ?? "Revisa el formulario");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Mensaje recibido. Te responderemos lo antes posible.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  }

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <Reveal>
        <SectionTitle
          eyebrow="Contacto y reservas"
          title="Reserva tu mesa"
          subtitle="Llámanos o escríbenos por WhatsApp. Te confirmamos al momento."
        />
      </Reveal>

      <div className="mt-10 grid lg:grid-cols-2 gap-8">
        <Reveal>
          <div className="rounded-2xl bg-card border border-border p-6">
            <h3 className="font-semibold">Información</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-primary" />
                <div>
                  <div>{BUSINESS.address}</div>
                  <div className="text-xs text-muted-foreground">Plus code: {BUSINESS.plusCode}</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <a href={`tel:${BUSINESS.phoneRaw}`} className="hover:text-primary">{BUSINESS.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-1 text-primary" />
                <div>
                  <div>Horarios pendientes de confirmar.</div>
                  <div className="text-xs text-muted-foreground">
                    Confirma por teléfono o Instagram.
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={BUSINESS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm"
              >
                <Phone size={16} /> Llamar
              </a>
              <a
                href={BUSINESS.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm"
              >
                <MapPin size={16} /> Cómo llegar
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Si vienes por primera vez, confirma el número exacto en el local o llámanos.
            </p>

            <div className="mt-6 overflow-hidden rounded-xl border border-border">
              <iframe
                title="Ubicación de ENYESQUE en Bargas"
                src={BUSINESS.mapsEmbed}
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl bg-card border border-border p-6 space-y-4"
            noValidate
          >
            <h3 className="font-semibold">Escríbenos</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block text-sm">
                <span>Nombre</span>
                <input
                  name="nombre"
                  required
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2"
                />
              </label>
              <label className="block text-sm">
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2"
                />
              </label>
            </div>
            <label className="block text-sm">
              <span>Teléfono (opcional)</span>
              <input
                name="telefono"
                className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              <span>Mensaje</span>
              <textarea
                name="mensaje"
                rows={4}
                required
                className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2"
              />
            </label>
            <label className="flex items-start gap-2 text-xs text-muted-foreground">
              <input type="checkbox" name="consent" required className="mt-0.5" />
              <span>
                He leído y acepto la{" "}
                <a href="/legal/privacidad" className="underline text-primary">política de privacidad</a>.
              </span>
            </label>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium disabled:opacity-60"
            >
              <Send size={16} /> {loading ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}