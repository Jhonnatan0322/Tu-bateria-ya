import { SITE } from "@/lib/site";
import { telLink, waLink } from "@/lib/utils";
import Image from "next/image";


export default function HomePage() {
  return (
    <main>
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0F0F0F]/95 backdrop-blur">
  <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
    
    {/* Logo + Marca */}
    <div className="flex items-center gap-3">
            <Image
        src="/images/logo-tu-bateria-ya.png"   // solo la T + rayo
        alt="Tu Batería Ya"
        width={60}
        height={60}
        priority
        className="h-12 w-auto"
      />


      <div className="leading-tight">
        <div className="text-sm font-semibold text-white">
          {SITE.brand}
        </div>
        <div className="text-xs text-white/70">
          Baterías a domicilio • {SITE.city}
        </div>
      </div>
    </div>

    {/* Botones */}
    <div className="flex items-center gap-3">
      <a
        href={waLink()}
        className="rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-green-700 hover:shadow-lg"
      >
        WhatsApp
      </a>

      <a
        href={telLink()}
        className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-red-700 hover:shadow-lg"
      >
        Llamar
      </a>
    </div>

  </div>
</header>


      {/* HERO */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl text-black">
              Baterías a domicilio en {SITE.city}
            </h1>
            <p className="mt-4 max-w-xl text-slate-600">
              Instalación en tu ubicación, atención inmediata por WhatsApp y garantía.
              Servicio exclusivo en {SITE.city}.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={waLink(`Hola, necesito una batería a domicilio en ${SITE.city}. ¿Disponibilidad y precio?`)}
                className="rounded-2xl bg-green-600 px-5 py-3 text-sm font-semibold text-white hover:bg-green-700"
              >
                Pedir por WhatsApp
              </a>
              <a
                href={telLink()}
                className="rounded-xl bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700"



              >
                Llamar ahora
              </a>
            </div>

                    <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-2xl bg-slate-100 p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-black">
                Tiempo estimado
              </div>
              <div className="mt-1 text-lg font-bold text-slate-900">
                30–90 min
              </div>
            </div>

            <div className="rounded-2xl bg-slate-100 p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-black">
                Horario
              </div>
              <div className="mt-1 text-lg font-bold text-slate-900">
                {SITE.hours}
              </div>
            </div>
          </div>



            <div className="mt-4 text-xs text-slate-500">
              *Tiempos sujetos a zona y disponibilidad.
            </div>
          </div>

          {/* CARD INFO */}
          <div className="rounded-3xl border bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-700">Para cotizar rápido envía:</div>
            <ul className="mt-3 grid gap-2 text-sm text-slate-600">
              <li>• Marca, modelo y año</li>
              <li>• Tipo de vehículo (carro / camioneta)</li>
              <li>• Barrio o ubicación en Barranquilla</li>
            </ul>

            <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              Recibimos batería usada (según estado) y confirmamos garantía antes de instalar.
            </div>

            <a
              href={waLink(`Hola, estoy en ${SITE.city}. Mi carro es (marca/modelo/año). Quiero cotizar batería.`)}
              className="mt-5 inline-flex w-full justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Cotizar ahora
            </a>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-14" id="servicios">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            ¿Qué incluye el servicio?
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Lo esencial para que el carro quede listo sin perder tiempo.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { t: "Asesoría", d: "Te recomendamos la batería correcta según tu vehículo y uso." },
              { t: "Instalación", d: "Cambio de batería en tu ubicación y revisión básica." },
              { t: "Garantía", d: "Respaldo según referencia (se confirma antes de instalar)." },
            ].map((x) => (
              <div key={x.t} className="rounded-3xl border p-6">
                <div className="text-lg font-semibold">{x.t}</div>
                <div className="mt-2 text-slate-600">{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
        <section className="bg-slate-50 py-16" id="faq">
  <div className="mx-auto max-w-6xl px-4">
    
    <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
      Preguntas frecuentes
    </h2>

    <div className="mt-10 grid gap-4">
      {[
        { q: "¿Cuánto cuesta?", a: "Depende del vehículo. Envíanos marca, modelo y año para cotizar." },
        { q: "¿Solo atienden Barranquilla?", a: "Sí, el servicio es exclusivo en Barranquilla." },
        { q: "¿Qué medios de pago manejan?", a: "Efectivo y transferencia. Si necesitas otra opción, se confirma antes." },
        { q: "¿Reciben la batería usada?", a: "Sí, se recibe según estado y se define antes de ir." },
      ].map((x) => (
        <details
          key={x.q}
          className="group rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-slate-900">
            {x.q}
            <span className="ml-4 text-green-600 transition-transform duration-300 group-open:rotate-180">
              ⌄
            </span>
          </summary>

          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            {x.a}
          </p>
        </details>
      ))}
    </div>

  </div>
</section>


      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="text-lg font-semibold">{SITE.brand}</div>
              <div className="mt-1 text-sm text-slate-600">
                Servicio a domicilio • {SITE.city}
              </div>
              <div className="mt-2 text-xs text-slate-500">
                *Cobertura y tiempos sujetos a disponibilidad.
              </div>
            </div>
          </div>

          <div className="mt-8 text-xs text-slate-500">
            © {new Date().getFullYear()} {SITE.brand}. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      
    </main>
  );
}
