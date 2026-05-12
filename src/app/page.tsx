"use client";

import { useState } from "react";

const BLURB = `Hi,
I'm Pierce. But you already know that.
Quick refresher.
I'm from outside Philadelphia and studied at the University of Miami. I majored in Global Health with a minor in Health Management and Policy. I've interned across healthcare, on the policy consulting side, advising digital health startups, and on the hospital enterprise side.
At Sachs Policy Group, I made a lot of cold calls, sat in on many meetings, and spent more time than I'd like to admit on hold trying to get a straight answer.
That was when it clicked for me.
The hardest problems aren't usually in the product. They're in the layer between the customer and the answer.
Decagon is rebuilding that layer by bringing customer experience back into support and grievances.
Some people preferred Dr. Seuss. I preferred Curious George.
I've always been a builder and a fixer. Growing up, my dad called me MacGyver because I was always building something.
Yes, I was a Legos kid, but in third grade, I traded plastic bricks for real wood and taught myself to woodwork. I'm always learning, always digging deeper.
This past year, I taught myself to code. Rather than build something that's been done before, I built a consumer platform that helps people understand their medical costs across Manhattan.
Of course I integrated an AI agent. How could I not? Decagon's been doing it from the start.
Every project teaches me something new. Every one adds a tool to the kit.
Sales is the next one I want to pick up.
I was not a football or lacrosse kid, but I was a rower.
Rowing teaches you something most sports don't. You're in the same boat with your teammates, pulling toward the same finish line, but you're also competing against them for a seat.
You have to be accountable. You have to pull your weight. You support the people around you while pushing yourself to be better than you were yesterday.
That tension between team and individual, between camaraderie and competition, is where growth happens.
From my conversations with the team at Decagon, it's also how you scale a sales org that keeps winning.
What makes Decagon different is the part of the customer experience you're rebuilding.
It's the part nobody loves. The complaints line. The hold music. The form that has to be filled out before anyone can help.
Everyone wants to build a product that becomes a household name like Apple, Uber, or Instagram, with easy onboarding, a magical demo, and customers lining up before product launches.
Decagon isn't trying to build its own name-brand product. You're helping companies deliver on the promises they've already made to their customers.
It's the work that doesn't get applauded, but it's the work that decides whether someone actually gets the help they came for, or gives up and walks away.
If you couldn't tell by now, I'm a self-starter.
I'm curious. I'm ambitious. I'm coachable.
I've heard no enough times to know the next dial is the only one that matters.
I'd like the shot.`;

export default function HirePierceAtDecagonPage() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#0A0A23] antialiased relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full blur-3xl opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,212,184,0.55), rgba(0,212,184,0))",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[700px] -left-48 h-[420px] w-[420px] rounded-full blur-3xl opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(99,102,241,0.45), rgba(99,102,241,0))",
        }}
      />

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <DecagonMark />
          <span className="text-lg font-semibold tracking-tight">
            Hire Pierce
          </span>
        </div>
        <a
          href="mailto:jphberkman@gmail.com"
          className="rounded-full bg-[#00D4B8] px-5 py-2 text-sm font-semibold text-[#0A0A23] transition hover:bg-[#00bfa6]"
        >
          Get in touch
        </a>
      </header>

      {/* Hero — photo + headline */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-12 md:pt-20">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#00D4B8] to-[#6366F1] opacity-80 blur-2xl"
              />
              <div className="relative h-72 w-72 overflow-hidden rounded-3xl bg-[#0A0A23] shadow-xl ring-1 ring-black/5 md:h-96 md:w-96">
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

          <div className="order-2 md:order-1">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#0A0A23]/5 px-3 py-1 text-xs font-medium tracking-wide text-[#0A0A23]/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4B8]" />
              Built for the Decagon team
            </p>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Hi, I&apos;m Pierce.
              <br />
              <span className="text-[#0A0A23]/60">
                Here&apos;s why I want to work at Decagon.
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Blurb */}
      <section className="relative z-10 mx-auto max-w-3xl px-6 pb-16">
        <div className="whitespace-pre-line text-lg leading-relaxed text-[#0A0A23]/85">
          {BLURB}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <a
            href="mailto:jphberkman@gmail.com"
            className="rounded-full bg-[#0A0A23] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
          >
            Email me
          </a>
          <a
            href="https://decagon.ai"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#0A0A23]/15 px-6 py-3 text-sm font-semibold text-[#0A0A23] transition hover:border-[#0A0A23]/40"
          >
            Visit Decagon →
          </a>
        </div>
      </section>

      <footer className="relative z-10 mx-auto max-w-6xl px-6 pb-10 text-sm text-[#0A0A23]/50">
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#0A0A23]/10 pt-6">
          <span>© {new Date().getFullYear()} Pierce Berkman</span>
          <span>
            Not affiliated with Decagon — a personal pitch from a fan of the
            product.
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
        fill="#0A0A23"
      />
      <polygon
        points="50,22 68,30 80,46 80,54 68,70 50,78 32,70 20,54 20,46 32,30"
        fill="#00D4B8"
      />
    </svg>
  );
}
