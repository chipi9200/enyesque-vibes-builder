import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function Footer() {
  return (
    <footer className="mt-24 bg-espresso text-crema">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl">ENYESQUE</div>
          <p className="mt-3 text-sm text-crema/75 max-w-sm">
            Cafetería y restaurante en Bargas. Desayunos, tapas, raciones y menú del día casero. Buena vibra y precios razonables.
          </p>
          <a
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-dorado hover:opacity-90"
          >
            <Instagram size={16} /> {BUSINESS.instagramHandle}
          </a>
        </div>
        <div className="text-sm space-y-2">
          <div className="font-semibold text-crema mb-2">Contacto</div>
          <p className="flex items-start gap-2 text-crema/80">
            <MapPin size={14} className="mt-1 shrink-0" /> {BUSINESS.address}
          </p>
          <a href={`tel:${BUSINESS.phoneRaw}`} className="flex items-center gap-2 text-crema/80 hover:text-dorado">
            <Phone size={14} /> {BUSINESS.phone}
          </a>
          <p className="text-crema/60 text-xs pt-2">
            Si vienes por primera vez, confirma el número exacto en el local o llámanos.
          </p>
        </div>
        <div className="text-sm space-y-2">
          <div className="font-semibold text-crema mb-2">Enlaces</div>
          {[
            ["/carta", "Carta"],
            ["/menu-del-dia", "Menú del día"],
            ["/galeria", "Galería"],
            ["/opiniones", "Opiniones"],
            ["/contacto", "Contacto"],
            ["/legal/aviso-legal", "Aviso legal"],
            ["/legal/privacidad", "Privacidad"],
            ["/legal/cookies", "Cookies"],
          ].map(([to, label]) => (
            <Link key={to} to={to} className="block text-crema/80 hover:text-dorado">
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-crema/10 py-5 text-center text-xs text-crema/60">
        © {new Date().getFullYear()} ENYESQUE Cafetería / Restaurante · Bargas (Toledo)
      </div>
    </footer>
  );
}