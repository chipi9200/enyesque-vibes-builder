import { BUSINESS } from "@/lib/business";
import { Phone, MessageCircle } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        href={BUSINESS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Reservar por WhatsApp"
        className="group inline-flex items-center justify-center h-14 w-14 rounded-full text-white shadow-warm transition-transform hover:scale-105"
        style={{ background: "#25D366" }}
      >
        <MessageCircle size={24} />
      </a>
      <a
        href={`tel:${BUSINESS.phoneRaw}`}
        aria-label="Llamar"
        className="sm:hidden inline-flex items-center justify-center h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-warm"
      >
        <Phone size={22} />
      </a>
    </div>
  );
}