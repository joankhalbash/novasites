import { useState } from "react";

export default function WebdesignerHomepage() {
  const services = [
    {
      title: "Professionelle hjemmesider",
      text: "Moderne hjemmesider til virksomheder, selvstændige og lokale brands, der vil se professionelle ud online.",
      tag: "Hjemmeside",
    },
    {
      title: "Webshops",
      text: "Brugervenlige webshops med fokus på produkter, tillid, nem navigation og en klar vej til køb.",
      tag: "Webshop",
    },
    {
      title: "Strategisk opbygning",
      text: "Siden bygges med en klar struktur, så besøgende hurtigt forstår virksomheden og tager næste skridt.",
      tag: "Strategi",
    },
    {
      title: "Kontakt og konvertering",
      text: "Kontaktformularer, klikbare knapper og tydelige call-to-actions, så kunder nemt kan tage næste skridt.",
      tag: "Kontakt",
    },
  ];

  const packages = [
    {
      name: "Start",
      price: "Fra 2.995 kr.",
      description: "Til mindre virksomheder, der har brug for en enkel og professionel online tilstedeværelse.",
      features: ["1-3 sider", "Klar sidestruktur", "Kontaktsektion", "Basis opsætning"],
    },
    {
      name: "Business",
      price: "Fra 5.995 kr.",
      description: "Til virksomheder, der vil have en mere komplet hjemmeside med flere sektioner og stærkere præsentation.",
      features: ["Op til 6 sider", "Servicesektion", "Kontaktformular", "SEO-klare tekster", "Hjælp til domæne"],
      highlighted: true,
    },
    {
      name: "Webshop",
      price: "Fra 8.995 kr.",
      description: "Til dig der vil sælge produkter online med en overskuelig og professionel webshop.",
      features: ["Produktstruktur", "Forside til webshop", "Kategorier", "Kurv/køb-flow", "Grundopsætning"],
    },
  ];

  const examples = [
    {
      title: "Salon Liva",
      type: "Frisør hjemmeside",
      text: "En elegant hjemmeside til en lokal frisør med behandlinger, priser, åbningstider og booking-knap.",
      cta: "Book tid",
      services: ["Dameklip", "Herreklip", "Farve", "Styling"],
      tone: "Elegant og rolig",
    },
    {
      title: "NordWear",
      type: "Tøjbrand webshop",
      text: "En moderne webshop til et tøjbrand med produktkort, kategorier, kampagnefelt og tydelig vej til køb.",
      cta: "Shop kollektion",
      services: ["T-shirts", "Hoodies", "Jakker", "Accessories"],
      tone: "Moderne og eksklusiv",
    },
    {
      title: "MesterByg",
      type: "Håndværker hjemmeside",
      text: "En seriøs hjemmeside til et håndværkerfirma med ydelser, tidligere arbejde, tillidspunkter og kontaktformular.",
      cta: "Få tilbud",
      services: ["Renovering", "Tagarbejde", "Terrasse", "Reparation"],
      tone: "Stærk og troværdig",
    },
  ];

  const process = [
    "Vi afklarer mål, stil, indhold og hvad siden skal kunne.",
    "Vi laver et professionelt layout med fokus på tillid og brugervenlighed.",
    "Siden bygges med tydelig struktur og gøres klar til lancering.",
    "Vi kobler domæne, hosting og kontaktmuligheder på, så siden kan bruges rigtigt.",
  ];

  const [activeDemo, setActiveDemo] = useState(0);

  function openDemo(index) {
    setActiveDemo(index);
    setTimeout(() => {
      document.getElementById("demo-visning")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }

  function DemoWebsite({ example, index }) {
    const isShop = index === 1;
    const isBuilder = index === 2;
    const headline = index === 0
      ? "Professionel frisør i rolige omgivelser"
      : index === 1
        ? "Minimalistisk fashion til hverdagen"
        : "Solidt håndværk du kan stole på";
    const subline = index === 0
      ? "Book din næste behandling hos Salon Liva. Se priser, behandlinger og book tid direkte online."
      : index === 1
        ? "Udforsk NordWears nyeste kollektion med rene linjer, produktkort og tydelig vej til køb."
        : "MesterByg hjælper med renovering, tagarbejde og byggeopgaver udført ordentligt fra start til slut.";

    return (
      <div className={isShop ? "overflow-hidden rounded-[2rem] bg-neutral-950 text-white shadow-2xl" : "overflow-hidden rounded-[2rem] bg-white text-neutral-950 shadow-2xl"}>
        <div className={isShop ? "flex items-center justify-between border-b border-white/10 px-5 py-4" : "flex items-center justify-between border-b border-neutral-200 px-5 py-4"}>
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-neutral-400"></span>
            <span className="h-3 w-3 rounded-full bg-neutral-400"></span>
            <span className="h-3 w-3 rounded-full bg-neutral-400"></span>
          </div>
          <span className={isShop ? "text-xs text-neutral-400" : "text-xs text-neutral-500"}>Demo inde på Novasites</span>
        </div>

        <div className={isShop ? "bg-neutral-950" : isBuilder ? "bg-stone-100" : "bg-orange-50"}>
          <header className={isShop ? "flex items-center justify-between px-6 py-6 text-white" : "flex items-center justify-between px-6 py-6 text-neutral-950"}>
            <p className="text-2xl font-black tracking-tight">{example.title}</p>
            <nav className="hidden gap-6 text-sm font-medium opacity-80 md:flex">
              <span>Forside</span>
              <span>{isShop ? "Shop" : "Services"}</span>
              <span>Om os</span>
              <span>Kontakt</span>
            </nav>
          </header>

          <section className="grid gap-8 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className={isShop ? "mb-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white" : "mb-5 inline-flex rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white"}>
                Demo lavet af Novasites
              </span>
              <h3 className="max-w-3xl text-5xl font-black leading-none tracking-tight md:text-6xl">{headline}</h3>
              <p className={isShop ? "mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300" : "mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600"}>{subline}</p>
              <button type="button" className={isShop ? "mt-8 rounded-full bg-white px-7 py-4 font-bold text-neutral-950" : "mt-8 rounded-full bg-neutral-950 px-7 py-4 font-bold text-white"}>
                {example.cta}
              </button>
            </div>

            <div className={isShop ? "rounded-[2rem] bg-white/10 p-6" : "rounded-[2rem] bg-white p-6 shadow-sm"}>
              <div className={isShop ? "h-72 rounded-[1.5rem] bg-white/10" : "h-72 rounded-[1.5rem] bg-neutral-200"}></div>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {example.services.slice(0, 3).map((service) => (
                  <div key={service} className={isShop ? "rounded-2xl bg-white/10 p-4" : "rounded-2xl bg-neutral-100 p-4"}>
                    <p className="text-sm font-bold">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-4 px-6 pb-10 md:grid-cols-4">
            {example.services.map((service) => (
              <article key={service} className={isShop ? "rounded-3xl bg-white/10 p-5" : "rounded-3xl bg-white p-5 shadow-sm"}>
                <div className={isShop ? "mb-4 h-28 rounded-2xl bg-white/10" : "mb-4 h-28 rounded-2xl bg-neutral-100"}></div>
                <h4 className="font-bold">{service}</h4>
                <p className={isShop ? "mt-2 text-sm text-neutral-300" : "mt-2 text-sm text-neutral-600"}>
                  {isShop ? "Produktsektion med fokus på køb." : "Klar information til kunden."}
                </p>
              </article>
            ))}
          </section>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <a href="#top" className="text-xl font-bold tracking-tight">Novasites</a>
          <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#pakker" className="hover:text-white">Priser</a>
            <a href="#lancering" className="hover:text-white">Lancering</a>
            <a href="#eksempler" className="hover:text-white">Eksempler</a>
            <a href="#kontakt" className="rounded-full bg-white px-5 py-2 font-medium text-neutral-950 hover:bg-neutral-200">Kontakt</a>
          </nav>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden px-6 py-20 md:px-10 md:py-28">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl"></div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">Design · Hjemmesider · Webshops · Lancering</p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">Moderne hjemmesider og webshops, der får din virksomhed til at se seriøs ud.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-neutral-300 md:text-xl">Novasites hjælper virksomheder med at komme professionelt online — fra design og indhold til domæne, hosting og kontaktformular.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#kontakt" className="rounded-full bg-white px-7 py-4 text-center font-semibold text-neutral-950 transition hover:bg-neutral-200">Start dit projekt</a>
              <a href="#eksempler" className="rounded-full border border-white/15 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10">Se demoer</a>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="font-bold text-white">Fast struktur</p><p className="mt-1 text-sm text-neutral-400">Klar proces fra start til slut</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="font-bold text-white">Flere henvendelser</p><p className="mt-1 text-sm text-neutral-400">Bygget med tydelige næste skridt</p></div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="font-bold text-white">Klar til launch</p><p className="mt-1 text-sm text-neutral-400">Domæne, hosting og kontakt</p></div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl">
            <div className="overflow-hidden rounded-[1.5rem] bg-neutral-900">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-neutral-600"></span><span className="h-3 w-3 rounded-full bg-neutral-600"></span><span className="h-3 w-3 rounded-full bg-neutral-600"></span></div>
                <span className="text-xs text-neutral-500">novasites.dk</span>
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-5 rounded-3xl bg-white p-6 text-neutral-950">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div><p className="text-sm font-semibold text-neutral-500">Novasites løsning</p><h3 className="mt-1 text-2xl font-black">Website + webshop</h3></div>
                    <span className="rounded-full bg-neutral-950 px-4 py-2 text-sm font-bold text-white">Live klar</span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl bg-neutral-100 p-4"><p className="text-2xl font-black">01</p><p className="mt-2 text-sm font-semibold">Design</p></div>
                    <div className="rounded-2xl bg-neutral-100 p-4"><p className="text-2xl font-black">02</p><p className="mt-2 text-sm font-semibold">Opbygning</p></div>
                    <div className="rounded-2xl bg-neutral-100 p-4"><p className="text-2xl font-black">03</p><p className="mt-2 text-sm font-semibold">Lancering</p></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5"><p className="mb-3 text-sm font-semibold text-neutral-400">Hjemmeside</p><div className="mb-3 h-20 rounded-2xl bg-white/10"></div><div className="h-3 w-3/4 rounded bg-white/20"></div></div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5"><p className="mb-3 text-sm font-semibold text-neutral-400">Webshop</p><div className="mb-3 h-20 rounded-2xl bg-white/10"></div><div className="h-3 w-3/4 rounded bg-white/20"></div></div>
                </div>
                <div className="mt-4 rounded-2xl bg-white px-5 py-4 text-center font-semibold text-neutral-950">Få et tilbud på din løsning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-6 py-20 text-neutral-950 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Services</p><h2 className="text-4xl font-bold tracking-tight md:text-5xl">Alt du skal bruge for at komme professionelt online</h2></div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="rounded-[1.75rem] border border-neutral-200 bg-neutral-50 p-6 transition hover:-translate-y-1 hover:shadow-xl">
                <span className="mb-6 inline-flex rounded-full bg-neutral-950 px-3 py-1 text-xs font-medium text-white">{service.tag}</span>
                <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                <p className="leading-relaxed text-neutral-600">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pakker" className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Pakker</p><h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">Klare løsninger med tydelige priser</h2></div>
            <p className="max-w-md text-neutral-400">Priserne kan justeres efter opgaven, men pakkerne gør det nemt for kunden at forstå, hvad de kan få.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {packages.map((plan) => (
              <article key={plan.name} className={plan.highlighted ? "rounded-[2rem] bg-white p-7 text-neutral-950 shadow-2xl" : "rounded-[2rem] border border-white/10 bg-white/5 p-7"}>
                {plan.highlighted && <p className="mb-4 inline-flex rounded-full bg-neutral-950 px-3 py-1 text-xs font-semibold text-white">Mest valgt</p>}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className={plan.highlighted ? "mt-3 text-neutral-600" : "mt-3 text-neutral-400"}>{plan.description}</p>
                <p className="mt-6 text-3xl font-bold">{plan.price}</p>
                <ul className="mt-7 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3"><span className={plan.highlighted ? "text-neutral-950" : "text-white"}>✓</span><span className={plan.highlighted ? "text-neutral-700" : "text-neutral-300"}>{feature}</span></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 px-6 py-20 text-white md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Hvorfor Novasites?</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Et professionelt udtryk fra første klik</h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-400">En god hjemmeside handler ikke kun om design. Den skal skabe tillid, forklare hvad virksomheden tilbyder og gøre det nemt for kunden at tage kontakt eller købe.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"><p className="mb-4 text-3xl font-bold">01</p><h3 className="mb-3 text-xl font-bold">Klar og moderne stil</h3><p className="leading-relaxed text-neutral-400">Vi bygger sider med et rent, seriøst og overskueligt design, så virksomheden fremstår professionel.</p></article>
            <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"><p className="mb-4 text-3xl font-bold">02</p><h3 className="mb-3 text-xl font-bold">Fokus på kunder</h3><p className="leading-relaxed text-neutral-400">Siden bygges med tydelige knapper, kontaktmuligheder og struktur, så besøgende hurtigt forstår næste skridt.</p></article>
            <article className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"><p className="mb-4 text-3xl font-bold">03</p><h3 className="mb-3 text-xl font-bold">Klar til lancering</h3><p className="leading-relaxed text-neutral-400">Vi hjælper med domæne, hosting og opsætning, så hjemmesiden eller webshoppen kan komme rigtigt online.</p></article>
          </div>
        </div>
      </section>

      <section id="eksempler" className="bg-neutral-100 px-6 py-20 text-neutral-950 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Eksempler</p><h2 className="text-4xl font-bold tracking-tight md:text-5xl">Se hvordan en færdig hjemmeside kan se ud</h2><p className="mt-5 text-lg text-neutral-600">Vælg en demo herunder og se et eksempel på en hjemmeside eller webshop direkte inde på Novasites-siden.</p></div>
          <div id="demo-visning" className="scroll-mt-28 rounded-[2rem] border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="mb-4 flex flex-wrap gap-3">
              {examples.map((example, index) => (
                <button key={example.title} type="button" onClick={() => openDemo(index)} className={activeDemo === index ? "rounded-full bg-neutral-950 px-5 py-3 text-sm font-bold text-white" : "rounded-full bg-neutral-100 px-5 py-3 text-sm font-bold text-neutral-700 hover:bg-neutral-200"}>{example.title}</button>
              ))}
            </div>
            <DemoWebsite example={examples[activeDemo]} index={activeDemo} />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Proces</p><h2 className="text-4xl font-bold tracking-tight md:text-5xl">En enkel proces fra idé til online side</h2><p className="mt-5 text-lg leading-relaxed text-neutral-400">Kunder skal føle sig trygge. Derfor viser vi tydeligt, hvordan samarbejdet foregår.</p></div>
          <div className="space-y-4">{process.map((step, index) => (<div key={step} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"><p className="mb-2 text-sm font-semibold text-neutral-500">Step {index + 1}</p><p className="text-xl font-semibold">{step}</p></div>))}</div>
        </div>
      </section>

      <section id="lancering" className="bg-white px-6 py-20 text-neutral-950 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Domæne, hosting og lancering</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Vi hjælper hele vejen fra idé til online side</h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-600">Mange kunder ved ikke, hvordan man køber domæne, vælger hosting eller får siden online. Derfor kan Novasites hjælpe med hele opsætningen, så kunden får en færdig løsning uden teknisk forvirring.</p>
            <a href="#kontakt" className="mt-8 inline-flex rounded-full bg-neutral-950 px-7 py-4 font-semibold text-white transition hover:bg-neutral-800">Spørg om lancering</a>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-neutral-200 bg-neutral-50 p-6"><p className="mb-4 text-3xl font-bold">01</p><h3 className="mb-3 text-xl font-bold">Domæne</h3><p className="text-neutral-600">Vi hjælper kunden med at finde og koble et professionelt domæne til hjemmesiden eller webshoppen.</p></div>
            <div className="rounded-[1.75rem] border border-neutral-200 bg-neutral-50 p-6"><p className="mb-4 text-3xl font-bold">02</p><h3 className="mb-3 text-xl font-bold">Hosting</h3><p className="text-neutral-600">Vi hjælper med at vælge en stabil løsning, så siden kan være online og fungere hurtigt.</p></div>
            <div className="rounded-[1.75rem] border border-neutral-200 bg-neutral-50 p-6"><p className="mb-4 text-3xl font-bold">03</p><h3 className="mb-3 text-xl font-bold">Email og kontakt</h3><p className="text-neutral-600">Kontaktformularen kan kobles op, så beskeder fra kunder bliver sendt videre til den rigtige email.</p></div>
            <div className="rounded-[1.75rem] border border-neutral-200 bg-neutral-50 p-6"><p className="mb-4 text-3xl font-bold">04</p><h3 className="mb-3 text-xl font-bold">Lancering</h3><p className="text-neutral-600">Når siden er klar, hjælper vi med at få den live, så virksomheden kan begynde at bruge den rigtigt.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-100 px-6 py-20 text-neutral-950 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl"><p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">FAQ</p><h2 className="text-4xl font-bold tracking-tight md:text-5xl">Spørgsmål kunder ofte har</h2></div>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm"><h3 className="mb-3 text-xl font-bold">Kan I lave både hjemmesider og webshops?</h3><p className="text-neutral-600">Ja, Novasites kan hjælpe med både præsentationssider, servicesider og webshops til virksomheder, der vil sælge online.</p></div>
            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm"><h3 className="mb-3 text-xl font-bold">Kan I hjælpe med domæne og hosting?</h3><p className="text-neutral-600">Ja, vi kan hjælpe med den tekniske opsætning, så kunden ikke selv skal finde rundt i det hele.</p></div>
            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm"><h3 className="mb-3 text-xl font-bold">Kan siden hjælpe med flere kunder?</h3><p className="text-neutral-600">Ja, siden bygges med tydelige tekster, knapper og kontaktmuligheder, så besøgende nemmere kan tage kontakt eller købe.</p></div>
            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm"><h3 className="mb-3 text-xl font-bold">Hvad koster en hjemmeside?</h3><p className="text-neutral-600">Det afhænger af opgaven. Derfor tilbyder vi simple pakker og kan også lave et tilbud ud fra kundens behov.</p></div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="bg-white px-6 py-20 text-neutral-950 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Kontakt</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Klar til at få din virksomhed online?</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-600">Udfyld formularen med navn, kontaktoplysninger og en kort besked om projektet. Så vender vi tilbage med et forslag og kan ringe kunden op, hvis de har skrevet telefonnummer.</p>
            <div className="mt-7 rounded-[1.5rem] bg-neutral-100 p-6"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">Kontakt via formular</p><p className="mt-2 text-2xl font-bold">Send en forespørgsel</p><p className="mt-3 text-neutral-600">Udfyld formularen for at få et uforpligtende tilbud. Skriv gerne telefonnummer, hvis du ønsker at blive ringet op.</p></div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] bg-neutral-100 p-5"><p className="mb-2 text-2xl font-bold">01</p><p className="font-semibold">Send forespørgsel</p><p className="mt-2 text-sm text-neutral-600">Fortæl kort om virksomheden og behovet.</p></div>
              <div className="rounded-[1.5rem] bg-neutral-100 p-5"><p className="mb-2 text-2xl font-bold">02</p><p className="font-semibold">Få forslag</p><p className="mt-2 text-sm text-neutral-600">Vi vurderer løsningen og kommer med en anbefaling.</p></div>
              <div className="rounded-[1.5rem] bg-neutral-100 p-5"><p className="mb-2 text-2xl font-bold">03</p><p className="font-semibold">Kom online</p><p className="mt-2 text-sm text-neutral-600">Når alt er godkendt, hjælper vi siden live.</p></div>
            </div>
          </div>

          <form action="https://formspree.io/f/xwvybjbv" className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 shadow-sm md:p-8" method="POST">
            <input type="hidden" name="_subject" value="Ny forespørgsel fra Novasites.dk" />
            <div className="grid gap-4 md:grid-cols-2">
              <div><label className="mb-2 block text-sm font-semibold">Navn <span className="text-red-600">*</span></label><input required className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-300" placeholder="Dit navn" name="navn" /></div>
              <div><label className="mb-2 block text-sm font-semibold">Email <span className="text-red-600">*</span></label><input required className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-300" placeholder="din@email.dk" type="email" name="email" /></div>
              <div><label className="mb-2 block text-sm font-semibold">Telefon <span className="text-neutral-400">(valgfri)</span></label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-300" placeholder="Dit telefonnummer" type="tel" name="telefon" /></div>
              <div><label className="mb-2 block text-sm font-semibold">Virksomhed <span className="text-red-600">*</span></label><input required className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-300" placeholder="Virksomhedens navn" name="virksomhed" /></div>
            </div>
            <div className="mt-4"><label className="mb-2 block text-sm font-semibold">Hvad har du brug for? <span className="text-red-600">*</span></label><select required defaultValue="" name="behov" className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-300"><option value="" disabled>Vælg løsning</option><option>Hjemmeside</option><option>Webshop</option><option>Begge dele</option><option>Ikke sikker endnu</option></select></div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div><label className="mb-2 block text-sm font-semibold">Budget <span className="text-red-600">*</span></label><select required defaultValue="" name="budget" className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-300"><option value="" disabled>Vælg budget</option><option>Under 5.000 kr.</option><option>5.000 - 10.000 kr.</option><option>10.000 - 20.000 kr.</option><option>Ikke sikker endnu</option></select></div>
              <div><label className="mb-2 block text-sm font-semibold">Ønsket lancering <span className="text-red-600">*</span></label><select required defaultValue="" name="lancering" className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-300"><option value="" disabled>Vælg tidspunkt</option><option>Så hurtigt som muligt</option><option>Inden for 2-4 uger</option><option>Inden for 1-2 måneder</option><option>Ingen fast deadline</option></select></div>
            </div>
            <div className="mt-4"><label className="mb-2 block text-sm font-semibold">Besked <span className="text-red-600">*</span></label><textarea required name="besked" className="min-h-36 w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-neutral-300" placeholder="Fortæl kort om virksomheden og hvad siden skal kunne"></textarea></div>
            <button type="submit" className="mt-5 w-full rounded-full bg-neutral-950 px-6 py-4 font-semibold text-white transition hover:bg-neutral-800">Send forespørgsel</button>
            <p className="mt-4 text-sm text-neutral-500">Felter markeret med * skal udfyldes. Telefon er valgfri. Når siden kommer online, sender vi forespørgslerne til kontakt@novasites.dk.</p>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-neutral-400 md:flex-row">
          <p>© 2026 Novasites. Alle rettigheder forbeholdes.</p>
          <p>Hjemmesider · Webshops · Domæne · Hosting</p>
        </div>
      </footer>
    </main>
  );
}
