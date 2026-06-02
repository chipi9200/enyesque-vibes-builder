import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/carta", label: "Carta" },
  { to: "/menu-del-dia", label: "Menú del día" },
  { to: "/galeria", label: "Galería" },
  { to: "/opiniones", label: "Opiniones" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Mobile sticky reservar bar */}
      <div className="md:hidden bg-espresso text-crema text-xs text-center py-2 px-3">
        Reservas: <a href={`tel:${BUSINESS.phoneRaw}`} className="font-semibold underline">{BUSINESS.phone}</a>
      </div>
      <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2" aria-label="Inicio ENYESQUE">
            <span className="font-display text-2xl tracking-tight text-espresso">
              ENYESQUE
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Bargas
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-7" aria-label="Principal">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm text-foreground/80 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary font-semibold" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center rounded-full bg-primary text-primary-foreground text-sm font-medium px-4 py-2 hover:opacity-95 transition"
            >
              Reservar
            </a>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="md:hidden inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground h-10 w-10"
              aria-label="Llamar"
            >
              <Phone size={18} />
            </a>
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-border"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menú"
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        <div
          className={cn(
            "md:hidden overflow-hidden transition-[max-height] duration-300 bg-background border-t border-border",
            open ? "max-h-96" : "max-h-0",
          )}
        >
          <nav className="px-4 py-3 flex flex-col gap-1" aria-label="Móvil">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md text-sm hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-primary text-primary-foreground text-center py-2 font-medium"
            >
              Reservar por WhatsApp
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}