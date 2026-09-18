import { createFileRoute } from "@tanstack/react-router";
import { Countdown } from "../components/Countdown";
import { Reveal } from "../components/Reveal";
import { ReservaForm } from "../components/ReservaForm";
import heroAsset from "../assets/hero.jpg.asset.json";
import escudoAsset from "../assets/escudo.jpg.asset.json";
import horaLocaAsset from "../assets/horaloca.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reencuentro Promo 2000 | Mariscal de Zepita — 10 de Octubre" },
      {
        name: "description",
        content:
          "Reserva tu manilla para el Gran Reencuentro de Promociones del Colegio Mariscal de Zepita. Sábado 10 de octubre, Salón ALLEGRO. Preventa Bs 100.",
      },
      { property: "og:title", content: "Gran Reencuentro Promo 2000 — Mariscal de Zepita" },
      {
        property: "og:description",
        content:
          "Cena, música, Favio Show y la Hora Loca de Clowns Manía. Sábado 10 de octubre, 15:30 a 23:30. Reserva tu manilla.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const incluye = [
  { emoji: "🍽️", titulo: "Cena", detalle: "Servida para toda la promoción" },
  { emoji: "🎶", titulo: "Música", detalle: "Con la mejor amplificación" },
  { emoji: "🎤", titulo: "Favio Show", detalle: "Presentación en vivo" },
  { emoji: "🤪", titulo: "Hora Loca", detalle: "Por CLOWNS MANÍA" },
  { emoji: "🎁", titulo: "Recuerdo", detalle: "Especial de la Promo 2000" },
  { emoji: "🍺", titulo: "Bienvenida", detalle: "Tu latita de cerveza de obsequio" },
];

function Index() {
  return (
    <main className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-5 py-20 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-30 blur-2xl"
          style={{
            backgroundImage: `url(${heroAsset.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 mx-auto max-w-5xl">
          <img
            src={escudoAsset.url}
            alt="Escudo de la Promoción 2000 del Colegio Mariscal de Zepita"
            className="mx-auto w-24 animate-float drop-shadow-[0_0_25px_rgba(255,0,170,0.6)] sm:w-32"
          />
          <p className="mt-6 font-display text-lg uppercase tracking-[0.4em] text-neon-cyan animate-flicker">
            Colegio Mariscal de Zepita
          </p>
          <h1 className="mt-3 font-display text-6xl leading-[0.9] text-graffiti sm:text-8xl md:text-9xl">
            Gran Reencuentro
            <span className="block">Promo 2000</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            La Promoción 2000 te invita a celebrar el aniversario de nuestro querido colegio:
            reencontrarnos, compartir recuerdos y disfrutar como en los viejos tiempos. ❤️
          </p>

          <div className="mt-10">
            <Countdown />
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#reservas"
              className="rounded-full bg-primary px-9 py-4 font-display text-2xl uppercase tracking-wider text-primary-foreground shadow-[var(--shadow-neon)] transition hover:scale-105 hover:brightness-110"
            >
              Reservar mi manilla
            </a>
            <a
              href="#detalles"
              className="rounded-full border border-neon-lime px-9 py-4 font-display text-2xl uppercase tracking-wider text-neon-lime transition hover:scale-105 hover:bg-accent hover:text-accent-foreground"
            >
              Ver detalles
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative overflow-hidden border-y border-border bg-secondary/40 py-4">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="flex gap-10 font-display text-2xl uppercase tracking-widest">
              <span className="text-neon-pink">Sábado 10 de Octubre</span>
              <span className="text-neon-lime">15:30 — 23:30</span>
              <span className="text-neon-cyan">Salón ALLEGRO</span>
              <span className="text-neon-yellow">Calle 11 de Obrajes</span>
              <span className="text-neon-pink">Preventa Bs 100</span>
            </span>
          ))}
        </div>
      </div>

      {/* INCLUYE */}
      <section id="detalles" className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <h2 className="text-center font-display text-5xl text-graffiti sm:text-7xl">
            ¿Qué incluye tu manilla?
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {incluye.map((item, i) => (
            <Reveal key={item.titulo} delay={i * 80}>
              <article className="neon-card tilt-hover h-full rounded-3xl p-7">
                <div className="text-5xl">{item.emoji}</div>
                <h3 className="mt-4 font-display text-3xl text-neon-lime">{item.titulo}</h3>
                <p className="mt-1 text-muted-foreground">{item.detalle}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <div className="neon-card overflow-hidden rounded-3xl md:flex">
            <img
              src={horaLocaAsset.url}
              alt="Animadores de Clowns Manía listos para la hora loca del reencuentro"
              loading="lazy"
              className="h-64 w-full object-cover md:h-auto md:w-1/2"
            />
            <div className="p-8">
              <h3 className="font-display text-4xl text-graffiti">La Hora Loca</h3>
              <p className="mt-3 text-muted-foreground">
                CLOWNS MANÍA se encarga de encender la pista: luces, alas LED, batucada y toda la
                energía para que la promo baile hasta el final.
              </p>
              <p className="mt-4 font-display text-2xl text-neon-cyan">
                + Presentación de Favio Show 🎤
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CUANDO Y DONDE */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { t: "📅 Fecha", v: "Sábado 10 de Octubre" },
            { t: "🕞 Hora", v: "15:30 a 23:30" },
            { t: "📍 Lugar", v: "Salón ALLEGRO · Calle 11 de Obrajes" },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 100}>
              <div className="neon-card tilt-hover h-full rounded-3xl p-7 text-center">
                <div className="text-xs uppercase tracking-[0.3em] text-neon-pink">{c.t}</div>
                <div className="mt-3 font-display text-3xl">{c.v}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRECIOS */}
     <section className="mx-auto max-w-5xl px-5 pb-24">
  <Reveal>
    <h2 className="text-center font-display text-5xl text-graffiti sm:text-7xl">
      Precio de la manilla
    </h2>
  </Reveal>

  <div className="mt-12 grid gap-6 md:grid-cols-3">
    {/* Preventa */}
    <Reveal>
      <div className="neon-card tilt-hover relative h-full overflow-hidden rounded-3xl p-8 text-center">
        <span className="absolute right-5 top-5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent-foreground">
          🔥 Preventa
        </span>

        <div className="font-display text-6xl text-graffiti">Bs 100</div>

        <p className="mt-3 text-muted-foreground">
          📅 Hasta el 15 de septiembre
        </p>
      </div>
    </Reveal>

    {/* Segunda etapa */}
    <Reveal delay={120}>
      <div className="neon-card h-full rounded-3xl p-8 text-center">
        <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-bold uppercase tracking-widest">
          🎟️ Venta anticipada
        </span>

        <div className="mt-5 font-display text-6xl text-graffiti">
          Bs 130
        </div>

        <p className="mt-3 text-muted-foreground">
          📅 Del 01 al 10 de septiembre
        </p>
      </div>
    </Reveal>

    {/* Precio final */}
    <Reveal delay={240}>
      <div className="neon-card h-full rounded-3xl p-8 text-center opacity-90">
        <span className="inline-block rounded-full bg-muted px-3 py-1 text-xs font-bold uppercase tracking-widest">
          🎫 Precio final
        </span>

        <div className="mt-5 font-display text-6xl">
          Bs 150
        </div>

        <p className="mt-3 text-muted-foreground">
          📅 Desde el 1 de octubre
        </p>

        <p className="mt-2 text-sm text-muted-foreground">
          Online y en puerta
        </p>
      </div>
    </Reveal>
  </div>

  <p className="mt-8 text-center font-display text-2xl text-neon-lime">
    👉 ¡Aprovecha la preventa y asegura tu manilla!
  </p>
</section>

      {/* RESERVAS */}
      <section id="reservas" className="mx-auto max-w-6xl px-5 pb-24">
        <Reveal>
          <h2 className="text-center font-display text-5xl text-graffiti sm:text-7xl">Reservas</h2>
          <p className="mt-3 text-center text-muted-foreground">
            📲 72591292 &nbsp;—&nbsp; 78887838
          </p>
        </Reveal>
        <Reveal className="mt-12">
          <ReservaForm />
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-5 py-14 text-center">
        <img
          src={escudoAsset.url}
          alt="Escudo Promo 2000"
          className="mx-auto w-16 animate-float"
          loading="lazy"
        />
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          Porque podrán pasar los años… pero los recuerdos del cole y los amigos de promoción quedan
          para siempre. ❤️🥂
        </p>
        <p className="mt-6 font-display text-2xl text-graffiti">Promoción 2000</p>
      </footer>
    </main>
  );
}
