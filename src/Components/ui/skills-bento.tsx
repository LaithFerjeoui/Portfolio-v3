"use client";

// Adapted from "Interactive Tech Stack Bento Grid with Hover Effects" by themeocean (21st.dev, MIT).
// The glow card, terminal and stack tiles are theirs; the content is this portfolio's skills.

import { useEffect, useState } from "react";
import type { MouseEvent, ReactNode, TouchEvent } from "react";
import { LuLayoutTemplate, LuServer, LuWorkflow } from "react-icons/lu";
import {
  SiAmazonaws,
  SiAnthropic,
  SiDocker,
  SiFastapi,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";

type Accent = "purple" | "indigo" | "cyan" | "emerald";
type LineType = "cmd" | "ok" | "info" | "wait";

interface Tech {
  id: string;
  name: string;
  desc: string;
  rgb: string; // "r, g, b" so it can be used inside rgba()
  icon: ReactNode;
}

interface TermLine {
  type: LineType;
  text: string;
}

// Spotlight colors, as "r, g, b"
const ACCENTS: Record<Accent, string> = {
  purple: "203, 172, 249",
  indigo: "129, 140, 248",
  cyan: "34, 211, 238",
  emerald: "52, 211, 153",
};

// Faint grid that only shows near the cursor
const GRID_IMAGE =
  "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)";

const AGENTS = [
  { name: "Research", note: "web + sources" },
  { name: "Memory", note: "recall + RAG" },
  { name: "Tools", note: "APIs + actions" },
  { name: "Review", note: "evals + approval" },
];

// An illustrative agent run, not real output
const SCRIPT: TermLine[] = [
  { type: "cmd", text: 'agent run "weekly brief"' },
  { type: "info", text: "planning: 4 steps" },
  { type: "ok", text: "spawned research, memory, review" },
  { type: "info", text: "research: web_search, read_source" },
  { type: "info", text: "memory: recalling claims" },
  { type: "ok", text: "evidence grounded, no conflicts" },
  { type: "info", text: "review: checking citations" },
  { type: "ok", text: "draft ready" },
  { type: "wait", text: "waiting for human approval" },
];

const TERM_VISIBLE = 9; // lines shown at once
const LINE_STYLES: Record<LineType, { mark: string; markClass: string; textClass: string }> = {
  cmd: { mark: "$", markClass: "text-purple", textClass: "text-slate-100" },
  ok: { mark: "✓", markClass: "text-emerald-300", textClass: "text-slate-300" },
  info: { mark: "›", markClass: "text-slate-500", textClass: "text-slate-400" },
  wait: { mark: "●", markClass: "text-amber-300", textClass: "text-amber-200" },
};

const TECHS: Tech[] = [
  { id: "next", name: "Next.js", desc: "App Router, server actions and caching for the web products I ship.", rgb: "255, 255, 255", icon: <SiNextdotjs /> },
  { id: "react", name: "React", desc: "Component architecture, from marketing sites to a full video editor.", rgb: "97, 218, 251", icon: <SiReact /> },
  { id: "ts", name: "TypeScript", desc: "Strict types end to end, from the interface to the API.", rgb: "96, 165, 250", icon: <SiTypescript /> },
  { id: "tailwind", name: "Tailwind", desc: "Design tokens and fast, consistent styling.", rgb: "56, 189, 248", icon: <SiTailwindcss /> },
  { id: "three", name: "Three.js", desc: "Real-time 3D: product configurators, shaders and scroll-driven scenes.", rgb: "203, 172, 249", icon: <SiThreedotjs /> },
  { id: "python", name: "Python", desc: "The language of my agent runtimes and data pipelines.", rgb: "255, 212, 59", icon: <SiPython /> },
  { id: "fastapi", name: "FastAPI", desc: "Multi-tenant, evented APIs behind the agent platforms.", rgb: "45, 212, 191", icon: <SiFastapi /> },
  { id: "node", name: "Node.js", desc: "Services, tooling and desktop apps with Electron.", rgb: "134, 239, 172", icon: <SiNodedotjs /> },
  { id: "postgres", name: "PostgreSQL", desc: "The relational core: multi-tenant schemas and outbox-driven workers.", rgb: "125, 170, 235", icon: <SiPostgresql /> },
  { id: "claude", name: "Claude", desc: "Agent SDK, tool use and structured outputs for production agents.", rgb: "217, 119, 87", icon: <SiAnthropic /> },
  { id: "aws", name: "AWS", desc: "EC2, Lambda, SQS and Amplify for production workloads.", rgb: "255, 153, 0", icon: <SiAmazonaws /> },
  { id: "docker", name: "Docker", desc: "Reproducible services from laptop to production.", rgb: "36, 150, 237", icon: <SiDocker /> },
];

// Join class names, skipping anything falsy
function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  return reduced;
}

/* GlowCard: the shell every box uses. The border glow, the inner spotlight
   and the little grid all follow the cursor. */
function GlowCard({
  accent,
  className = "",
  children,
}: {
  accent: Accent;
  className?: string;
  children: ReactNode;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const rgb = ACCENTS[accent];

  // Cursor position, measured from the card's top-left corner
  const moveTo = (clientX: number, clientY: number, el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    setPos({ x: clientX - rect.left, y: clientY - rect.top });
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => moveTo(e.clientX, e.clientY, e.currentTarget);

  // Touch screens have no hover, so a finger dragging across the card lights it up too
  const handleTouch = (e: TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    if (touch) {
      moveTo(touch.clientX, touch.clientY, e.currentTarget);
      setActive(true);
    }
  };

  const gridMask = `radial-gradient(220px circle at ${pos.x}px ${pos.y}px, black, transparent 75%)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onTouchStart={handleTouch}
      onTouchMove={handleTouch}
      onTouchEnd={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setActive(false);
      }}
      className={cx("relative rounded-3xl", className)}
    >
      {/* Edge layer 1: dim border */}
      <div aria-hidden="true" className="absolute inset-0 rounded-3xl bg-white/10" />

      {/* Edge layer 2: bright border that follows the cursor */}
      <div
        aria-hidden="true"
        className={cx("absolute inset-0 rounded-3xl transition-opacity duration-500", active ? "opacity-100" : "opacity-0")}
        style={{
          background: `radial-gradient(240px circle at ${pos.x}px ${pos.y}px, rgba(${rgb}, 0.95), transparent 70%)`,
        }}
      />

      {/* Card face: spotlight and grid live inside it */}
      <div aria-hidden="true" className="absolute inset-px overflow-hidden rounded-[23px] bg-[#04071D]">
        <div
          className={cx("absolute inset-0 transition-opacity duration-500", active ? "opacity-100" : "opacity-0")}
          style={{
            background: `radial-gradient(380px circle at ${pos.x}px ${pos.y}px, rgba(${rgb}, 0.14), transparent 65%)`,
          }}
        />
        <div
          className={cx("absolute inset-0 transition-opacity duration-500", active ? "opacity-100" : "opacity-0")}
          style={{
            backgroundImage: GRID_IMAGE,
            backgroundSize: "26px 26px",
            maskImage: gridMask,
            WebkitMaskImage: gridMask,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-5 sm:p-6">{children}</div>
    </div>
  );
}

// Title row shared by the cards
function CardTitle({ icon, children, right }: { icon?: ReactNode; children: ReactNode; right?: ReactNode }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <h3 className="flex items-center gap-2 text-sm font-medium text-slate-300">
        {icon}
        {children}
      </h3>
      {right}
    </div>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-slate-300">
          {item}
        </li>
      ))}
    </ul>
  );
}

/* Card 1: AI and multi-agent orchestration (large) */
function OrchestrationCard() {
  const reduced = usePrefersReducedMotion();
  const [active, setActive] = useState(0);

  // The orchestrator hands work to one subagent after another
  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % AGENTS.length), 1500);
    return () => window.clearInterval(id);
  }, [reduced]);

  const rgb = ACCENTS.purple;
  const centers = [27, 79, 131, 183];
  const pathTo = (cy: number) => `M 122 105 C 190 105, 190 ${cy}, 258 ${cy}`;

  return (
    <GlowCard accent="purple" className="sm:min-h-[420px] sm:col-span-2 lg:row-span-2">
      <CardTitle
        icon={<LuWorkflow className="text-purple" />}
        right={
          <span className="flex items-center gap-1.5 text-xs text-purple">
            <span className="sb-pulse h-1.5 w-1.5 rounded-full bg-purple" />
            Agents
          </span>
        }
      >
        AI and multi-agent orchestration
      </CardTitle>

      <svg viewBox="0 0 380 210" className="w-full flex-1" role="img" aria-label="An orchestrator agent delegating work to research, memory, tools and review subagents">
        {AGENTS.map((agent, i) => {
          const on = i === active;
          return (
            <g key={agent.name}>
              <path
                d={pathTo(centers[i])}
                fill="none"
                stroke={on ? `rgba(${rgb}, 0.9)` : "rgba(255,255,255,0.12)"}
                strokeWidth={on ? 1.6 : 1}
                style={{ transition: "stroke 400ms ease" }}
              />
              {on && !reduced && (
                <circle r="3.5" fill={`rgb(${rgb})`}>
                  <animateMotion dur="1.2s" repeatCount="indefinite" path={pathTo(centers[i])} />
                </circle>
              )}
              <rect
                x="258"
                y={centers[i] - 19}
                width="114"
                height="38"
                rx="10"
                fill={on ? `rgba(${rgb}, 0.12)` : "rgba(255,255,255,0.03)"}
                stroke={on ? `rgba(${rgb}, 0.7)` : "rgba(255,255,255,0.1)"}
                style={{ transition: "fill 400ms ease, stroke 400ms ease" }}
              />
              <text x="270" y={centers[i] - 2} fontSize="12" fontWeight="600" fill={on ? "#ffffff" : "#cbd5e1"}>
                {agent.name}
              </text>
              <text x="270" y={centers[i] + 12} fontSize="9.5" fill="#64748b">
                {agent.note}
              </text>
            </g>
          );
        })}

        <rect x="8" y="78" width="114" height="54" rx="12" fill={`rgba(${rgb}, 0.14)`} stroke={`rgba(${rgb}, 0.8)`} />
        <text x="65" y="101" fontSize="12.5" fontWeight="600" fill="#ffffff" textAnchor="middle">
          Orchestrator
        </text>
        <text x="65" y="117" fontSize="9.5" fill="#a5b4c8" textAnchor="middle">
          plans + delegates
        </text>
      </svg>

      <p className="mb-3 mt-2 text-sm text-slate-400">
        Agent systems that plan, delegate to subagents, call tools and stay grounded in real data, with a human approving anything that matters.
      </p>
      <Chips items={["Claude Agent SDK", "Subagents", "Tool use", "RAG", "Evals", "Human in the loop"]} />
    </GlowCard>
  );
}

/* Card 2: agent run log (tall) */
function TerminalCard() {
  const reduced = usePrefersReducedMotion();
  // step counts how many script lines have been printed; after the end it waits a moment, then starts over
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (reduced) {
      setStep(SCRIPT.length);
      return;
    }
    const id = window.setInterval(() => {
      setStep((s) => (s >= SCRIPT.length + 4 ? 1 : s + 1));
    }, 850);
    return () => window.clearInterval(id);
  }, [reduced]);

  const printed = Math.min(step, SCRIPT.length);
  const first = Math.max(0, printed - TERM_VISIBLE);
  const visible = SCRIPT.slice(first, printed);

  return (
    <GlowCard accent="indigo" className="min-h-[340px] sm:col-span-2 lg:col-span-1 lg:row-span-2">
      <CardTitle
        right={
          <span className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </span>
        }
      >
        agent-run.log
      </CardTitle>

      <div
        className="flex flex-1 flex-col justify-end gap-1.5 overflow-hidden rounded-xl border border-white/5 bg-black/30 p-4 font-mono text-xs leading-relaxed"
        aria-label="Example agent run log"
        role="log"
      >
        {visible.map((line, i) => {
          const style = LINE_STYLES[line.type];
          const isLast = first + i === printed - 1;
          return (
            <div key={first + i} className="sb-slide flex gap-2">
              <span className={cx("w-3 shrink-0 text-center", style.markClass)}>{style.mark}</span>
              <span className={cx("min-w-0 break-words", style.textClass)}>
                {line.text}
                {isLast && printed < SCRIPT.length && <span className="sb-blink ml-1 inline-block h-3 w-1.5 translate-y-0.5 bg-purple" />}
              </span>
            </div>
          );
        })}
      </div>
    </GlowCard>
  );
}

/* Cards 3 and 4: frontend and backend (small) */
function SkillCard({
  accent,
  icon,
  title,
  headline,
  chips,
}: {
  accent: Accent;
  icon: ReactNode;
  title: string;
  headline: string;
  chips: string[];
}) {
  return (
    <GlowCard accent={accent} className="min-h-[200px]">
      <CardTitle icon={icon}>{title}</CardTitle>
      <p className="text-lg font-semibold leading-snug text-white">{headline}</p>
      <div className="mt-auto pt-4">
        <Chips items={chips} />
      </div>
    </GlowCard>
  );
}

/* Card 5: tech stack badges (wide) */
function StackCard() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = TECHS.find((t) => t.id === activeId);

  return (
    <GlowCard accent="purple" className="min-h-[200px] sm:col-span-2 lg:col-span-4">
      <CardTitle>Tech stack</CardTitle>

      <ul className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-12">
        {TECHS.map((tech) => {
          const on = tech.id === activeId;
          return (
            <li key={tech.id}>
              <button
                type="button"
                onMouseEnter={() => setActiveId(tech.id)}
                onMouseLeave={() => setActiveId(null)}
                onFocus={() => setActiveId(tech.id)}
                onBlur={() => setActiveId(null)}
                aria-label={tech.name}
                className="flex w-full flex-col items-center gap-2 rounded-2xl border px-1 py-3 text-2xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple"
                style={{
                  color: on ? `rgb(${tech.rgb})` : "#94a3b8",
                  borderColor: on ? `rgba(${tech.rgb}, 0.55)` : "rgba(255,255,255,0.08)",
                  background: on ? `rgba(${tech.rgb}, 0.1)` : "rgba(255,255,255,0.03)",
                  transform: on ? "translateY(-3px)" : "translateY(0)",
                  boxShadow: on ? `0 10px 30px -10px rgba(${tech.rgb}, 0.5)` : "none",
                }}
              >
                {tech.icon}
                <span className={cx("text-[11px] font-medium transition-colors duration-300", on ? "text-white" : "text-slate-300")}>
                  {tech.name}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Description of whichever tool you are pointing at */}
      <p className="mt-4 min-h-[20px] text-sm text-slate-400" aria-live="polite">
        {active ? (
          <span key={active.id} className="sb-fade">
            {active.desc}
          </span>
        ) : (
          "Hover or tab to a tool to see what I use it for."
        )}
      </p>
    </GlowCard>
  );
}

export default function SkillsBento() {
  return (
    <>
      {/* Component-scoped CSS so no tailwind.config changes are needed */}
      <style>{`
        @keyframes sb-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        .sb-pulse { animation: sb-pulse 1.6s ease-in-out infinite; }

        @keyframes sb-slide {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .sb-slide { animation: sb-slide 0.3s ease both; }

        @keyframes sb-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .sb-blink { animation: sb-blink 1s steps(2, start) infinite; }

        @keyframes sb-fade {
          from { opacity: 0; transform: translateY(3px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .sb-fade { display: inline-block; animation: sb-fade 0.3s ease both; }

        @media (prefers-reduced-motion: reduce) {
          .sb-pulse, .sb-slide, .sb-blink, .sb-fade { animation: none; }
        }
      `}</style>

      <div className="grid grid-cols-1 gap-4 text-slate-200 sm:grid-cols-2 lg:auto-rows-[220px] lg:grid-cols-4">
        <OrchestrationCard />
        <TerminalCard />
        <SkillCard
          accent="cyan"
          icon={<LuLayoutTemplate className="text-cyan-300" />}
          title="Frontend design"
          headline="Interfaces with motion, depth and real attention to detail."
          chips={["Next.js", "React", "Tailwind", "Motion", "Three.js"]}
        />
        <SkillCard
          accent="emerald"
          icon={<LuServer className="text-emerald-300" />}
          title="Complex backend engineering"
          headline="Multi-tenant APIs, queues and data pipelines that hold up."
          chips={["FastAPI", "Node.js", "PostgreSQL", "AWS", "Docker"]}
        />
        <StackCard />
      </div>
    </>
  );
}
