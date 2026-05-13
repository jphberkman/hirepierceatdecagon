"use client";

import { useState } from "react";

const PARAGRAPHS_BEFORE_LIST = [
  "Hi, I'm Pierce.",
  "I've always been a self-starter, builder, and teammate. Growing up, my dad called me MacGyver because I was always taking things apart and putting them back together. I was a Lego kid, but in third grade, I traded plastic bricks for real wood and taught myself to woodwork.",
  "In high school, I wasn't a mainstream athlete, such as a football or baseball player; I was a rower. Rowing teaches you something most sports don't: you're in the same boat with your teammates, driving toward the same finish line, but you're also competing against them for a seat.",
];

const LIST_ITEMS = [
  "You have to be accountable.",
  "You have to pull your weight.",
  "You have to support the people around you, but are constantly competing.",
];

const PARAGRAPHS_AFTER_LIST = [
  "I went to the University of Miami, studied Global Health, and interned across the industry. I started on the policy consulting side, advising digital health founders, and then switched to hospital operations.",
  "At Sachs Policy Group, I made a lot of cold calls and spent hours on hold trying to get a straight answer. It was a game. How many different answers can you get for the same question?",
  "That was when it clicked. The hardest problems usually aren't in the product. They're in the layer between the customer and the answer.",
  "This past year, I taught myself to code and built ShopForCare, a consumer platform that shows what every Manhattan hospital charges for a given procedure.",
  "Which brings me here.",
  "Decagon is not a typical customer support. It's a conversational AI platform delivering concierge customer experiences to strengthen relationships and help brands improve reputations.",
  "We have all been on hold and had bad experiences.",
  "I’m ready to start changing the narrative.",
];

const PEOPLE = {
  sachs: {
    name: "Jeffrey Sachs",
    role: "CEO, Sachs Policy Group",
    linkedin: "https://www.linkedin.com/in/jeffrey-sachs-392103101/",
  },
  mercado: {
    name: "Stephanie Mercado",
    role: "Manager, Lululemon",
    linkedin: "https://www.linkedin.com/in/stephanie-mercado-947678b4/",
  },
} as const;

const QUOTES = [
  {
    text: "Pierce performed at the level of a full-time post-master's level associate. His energy and scholarship set an example for his colleagues.",
    person: PEOPLE.sachs,
  },
  {
    text: "You stand in curiosity and question the 'why' behind everything we do.",
    person: PEOPLE.mercado,
  },
  {
    text: "You have, maybe without even knowing, created a more seamless experience for our guests and have made their time in-store more enjoyable!",
    person: PEOPLE.mercado,
  },
  {
    text: "His smile is contagious.",
    person: PEOPLE.sachs,
  },
];

const LOGOS = [
  "University of Miami",
  "Sachs Policy Group",
  "UHealth",
  "Lululemon",
  "ShopForCare",
  "Rothman Orthopedics",
];

export default function HirePierceAtDecagonPage() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#0A0A23] antialiased">
      {/* ─────────────── HERO (purple gradient, Decagon-style) ─────────────── */}
      <section className="relative overflow-hidden text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(135deg,#4F46E5_0%,#6D5BFF_35%,#8A5BFF_65%,#B66BFF_100%)]"
        />
        {/* prism overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-50 mix-blend-screen"
          style={{
            background:
              "radial-gradient(60% 50% at 70% 60%, rgba(255,180,140,0.5), transparent 70%), radial-gradient(40% 40% at 30% 30%, rgba(180,160,255,0.5), transparent 70%)",
          }}
        />
        <svg
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-30"
          viewBox="0 0 600 600"
        >
          <polygon
            points="100,500 500,100 580,300 250,580"
            fill="white"
            opacity="0.08"
          />
          <polygon
            points="200,560 540,180 600,360 320,600"
            fill="white"
            opacity="0.08"
          />
        </svg>

        {/* announcement bar */}
        <div className="relative z-10 flex items-center justify-center bg-white/10 px-6 py-2 text-xs font-medium backdrop-blur-sm">
          <span>Introducing: Pierce. Now interviewing for SDR roles.</span>
        </div>

        {/* nav */}
        <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <DecagonMark />
            <span className="text-lg font-semibold tracking-tight">Pierce Berkman</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#background" className="text-white/80 transition hover:text-white">
              Background
            </a>
            <a href="#stats" className="text-white/80 transition hover:text-white">
              Stats
            </a>
            <a href="#pitch" className="text-white/80 transition hover:text-white">
              Pitch
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/jpierceberkman/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0A0A23] transition hover:bg-white/90"
            >
              LinkedIn
            </a>
          </div>
        </header>

        {/* hero content */}
        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-16 md:grid-cols-[1.4fr_1fr] md:gap-16 md:pb-28 md:pt-20">
          <div>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Here&apos;s why I want
              <br />
              to work at Decagon
            </h1>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-white/40 to-white/0 opacity-70 blur-2xl"
              />
              <div className="relative h-80 w-80 overflow-hidden rounded-3xl bg-[#0A0A23]/20 shadow-2xl ring-1 ring-white/30 md:h-[26rem] md:w-[26rem]">
                {!imgFailed ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src="/pierce.jpg"
                    alt="Pierce Berkman"
                    className="h-full w-full object-cover"
                    onError={() => setImgFailed(true)}
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center text-white/70">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-2xl font-semibold text-white">
                      PB
                    </div>
                    <p className="text-sm">
                      Drop a photo at{" "}
                      <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs">
                        /public/pierce.jpg
                      </code>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── LOGO MARQUEE ─────────────── */}
      <section id="background" className="border-y border-[#0A0A23]/10 bg-white py-8 scroll-mt-4">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-6 text-center text-xs uppercase tracking-[0.18em] text-[#0A0A23]/50">
            Where I&apos;ve learned
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-lg font-semibold tracking-tight text-[#0A0A23]/60">
            {LOGOS.map((logo) => (
              <span key={logo} className="opacity-70">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── BLURB ─────────────── */}
      <section id="pitch" className="bg-white py-20 scroll-mt-4">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-4 text-sm uppercase tracking-[0.18em] text-[#5B5BFF]">
            The pitch
          </p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Here&apos;s why I want to work at Decagon.
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-relaxed text-[#0A0A23]/85">
            {PARAGRAPHS_BEFORE_LIST.map((p, i) => (
              <p key={`pre-${i}`}>{p}</p>
            ))}
            <ul className="list-disc space-y-2 pl-8 marker:text-[#5B5BFF]">
              {LIST_ITEMS.map((item, i) => (
                <li key={`li-${i}`}>{item}</li>
              ))}
            </ul>
            {PARAGRAPHS_AFTER_LIST.map((p, i) => (
              <p key={`post-${i}`}>{p}</p>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a
              href="https://www.linkedin.com/in/jpierceberkman/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#5B5BFF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#4747e8]"
            >
              View on LinkedIn →
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────── FOUNDER SECTION (mirrors Decagon's Founders) ─────────────── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-center gap-4">
            <div>
              <a
                href="https://www.linkedin.com/in/jpierceberkman/"
                target="_blank"
                rel="noreferrer"
                className="text-2xl font-semibold text-[#5B5BFF] underline-offset-4 hover:underline"
              >
                Pierce Berkman
              </a>
              <p className="mt-1 text-[#0A0A23]/70">Aspiring Decagon SDR</p>
            </div>
            <a
              href="https://www.linkedin.com/in/jpierceberkman/"
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#0A0A23] text-white transition hover:bg-black"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ─────────────── STATS BENTO ─────────────── */}
      <section id="stats" className="relative overflow-hidden bg-gradient-to-b from-[#fbf7ff] via-[#f9eff7] to-[#fff3e9] py-20 scroll-mt-4">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Driving results that truly matter
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {QUOTES.map((q, i) => (
              <figure
                key={i}
                className="flex flex-col rounded-3xl bg-white/70 p-8 ring-1 ring-black/5 backdrop-blur-sm"
              >
                <svg
                  className="h-7 w-7 text-[#5B5BFF]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M7.2 6C4.3 6 2 8.3 2 11.2c0 2.7 1.9 4.6 4.4 4.6.4 0 .7-.05 1-.1-.5 1.4-1.8 2.7-3.7 3.4l.9 1.4c3.3-1 5.7-3.7 5.7-7.5V11C10.3 8 8.8 6 7.2 6zm10.4 0c-2.9 0-5.2 2.3-5.2 5.2 0 2.7 1.9 4.6 4.4 4.6.4 0 .7-.05 1-.1-.5 1.4-1.8 2.7-3.7 3.4l.9 1.4c3.3-1 5.7-3.7 5.7-7.5V11c0-3-1.5-5-3.1-5z" />
                </svg>
                <blockquote className="mt-4 flex-1 text-xl leading-relaxed text-[#0A0A23]">
                  {`“${q.text}”`}
                </blockquote>
                <figcaption className="mt-6">
                  <a
                    href={q.person.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex flex-col"
                  >
                    <span className="flex items-center gap-1.5 font-semibold text-[#0A0A23] group-hover:underline">
                      {q.person.name}
                      <LinkedInIcon className="h-3.5 w-3.5 text-[#0A0A23]/40" />
                    </span>
                    <span className="text-sm text-[#0A0A23]/60">
                      {q.person.role}
                    </span>
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── FOOTER ─────────────── */}
      <footer className="border-t border-[#0A0A23]/10 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-[#0A0A23]/50">
          <span>© {new Date().getFullYear()} Pierce Berkman</span>
          <span>
            A loving parody of{" "}
            <a
              href="https://decagon.ai"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
            >
              decagon.ai
            </a>
            . Not affiliated with Decagon.
          </span>
        </div>
      </footer>
    </main>
  );
}

function DecagonMark() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <polygon
        points="50,4 78.5,15.5 96,40 96,60 78.5,84.5 50,96 21.5,84.5 4,60 4,40 21.5,15.5"
        fill="white"
        fillOpacity="0.95"
      />
      <polygon
        points="50,22 68,30 80,46 80,54 68,70 50,78 32,70 20,54 20,46 32,30"
        fill="#5B5BFF"
      />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C21.3 8.75 22 11 22 14v7h-4v-6.3c0-1.5-.03-3.42-2.08-3.42-2.08 0-2.4 1.62-2.4 3.3V21h-4V9z" />
    </svg>
  );
}

