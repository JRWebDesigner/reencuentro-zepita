import { useState } from "react";
import qrAsset from "@/assets/qr.jpg.asset.json";

const PRECIO_PREVENTA = 100;
const PRECIO_NORMAL = 110;
const FIN_PREVENTA = new Date("2026-09-15T23:59:59-04:00").getTime();

export function ReservaForm() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [cantidad, setCantidad] = useState(1);

  const enPreventa = Date.now() <= FIN_PREVENTA;
  const precio = enPreventa ? PRECIO_PREVENTA : PRECIO_NORMAL;
  const total = precio * cantidad;

  const mensaje = encodeURIComponent(
    `¡Hola! Quiero reservar mi manilla para el Gran Reencuentro Promo 2000 🎉\n\n` +
      `Nombre: ${nombre || "-"}\n` +
      `Teléfono: ${telefono || "-"}\n` +
      `Manillas: ${cantidad}\n` +
      `Total: Bs ${total} (${enPreventa ? "preventa" : "precio normal"})`,
  );

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="neon-card rounded-3xl p-6 sm:p-8"
      >
        <h3 className="font-display text-3xl text-graffiti">Reserva tu manilla</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Llena tus datos y confirma por WhatsApp en un toque.
        </p>

        <div className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-1 block text-xs uppercase tracking-[0.2em] text-neon-lime">
              Nombre y apellido
            </span>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Ej. Ana María Agreda"
              className="w-full rounded-xl border border-input bg-secondary/60 px-4 py-3 text-foreground outline-none transition focus:border-neon-pink focus:ring-2 focus:ring-ring/60"
            />
          </label>

          <label className="block">
            <span className="mb-1 block text-xs uppercase tracking-[0.2em] text-neon-lime">
              Celular
            </span>
            <input
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              inputMode="tel"
              placeholder="Ej. 70000000"
              className="w-full rounded-xl border border-input bg-secondary/60 px-4 py-3 text-foreground outline-none transition focus:border-neon-pink focus:ring-2 focus:ring-ring/60"
            />
          </label>

          <div>
            <span className="mb-1 block text-xs uppercase tracking-[0.2em] text-neon-lime">
              Cantidad de manillas
            </span>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setCantidad((c) => Math.max(1, c - 1))}
                className="h-11 w-11 rounded-full border border-border bg-secondary/60 font-display text-2xl transition hover:scale-110 hover:bg-primary/30"
                aria-label="Quitar una manilla"
              >
                −
              </button>
              <span className="font-display text-4xl text-graffiti">{cantidad}</span>
              <button
                type="button"
                onClick={() => setCantidad((c) => Math.min(30, c + 1))}
                className="h-11 w-11 rounded-full border border-border bg-secondary/60 font-display text-2xl transition hover:scale-110 hover:bg-primary/30"
                aria-label="Agregar una manilla"
              >
                +
              </button>
              <div className="ml-auto text-right">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Total
                </div>
                <div className="font-display text-3xl text-neon-lime">Bs {total}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href={`https://wa.me/59172591292?text=${mensaje}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-full bg-primary px-6 py-4 text-center font-display text-xl uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-neon)] transition hover:scale-[1.03] hover:brightness-110"
          >
            Reservar al 72591292
          </a>
          <a
            href={`https://wa.me/59178887838?text=${mensaje}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-full border border-neon-lime px-6 py-4 text-center font-display text-xl uppercase tracking-wider text-neon-lime transition hover:scale-[1.03] hover:bg-accent hover:text-accent-foreground"
          >
            Reservar al 78887838
          </a>
        </div>
      </form>

      <div className="neon-card tilt-hover rounded-3xl p-6 text-center sm:p-8">
        <h3 className="font-display text-3xl text-graffiti">Paga con QR</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Banco Ganadero · Cuenta 1311937289 · Agreda Guzmán Ana María
        </p>
        <img
          src={qrAsset.url}
          alt="Código QR de Banco Ganadero para pagar la manilla del reencuentro"
          loading="lazy"
          className="mx-auto mt-5 w-full max-w-72 rounded-2xl animate-float"
        />
        <p className="mt-5 text-sm text-muted-foreground">
          Envía tu comprobante por WhatsApp para confirmar tu manilla.
        </p>
      </div>
    </div>
  );
}
