import type { MetaFunction } from "react-router";
import { useConfigurables } from "~/modules/configurables";

export const meta: MetaFunction = () => [
  { title: "SusieQ Kitchen" },
  {
    name: "description",
    content: "Homemade comfort, made with love — fresh from SusieQ Kitchen.",
  },
];

const isFilled = (v: unknown): v is string =>
  typeof v === "string" && v.length > 0 && !v.startsWith("FILL_");

export default function IndexPage() {
  const { config, loading } = useConfigurables();

  // Avoid SSR/hydration flicker: render a calm placeholder until config lands.
  if (loading) {
    return (
      <main className="flex min-h-[100svh] items-center justify-center bg-secondary">
        <span className="sr-only">Loading SusieQ Kitchen</span>
      </main>
    );
  }

  const appName = isFilled(config?.appName) ? config.appName : "SusieQ Kitchen";
  const tagline = isFilled(config?.tagline)
    ? config.tagline
    : "Homemade comfort, made with love.";
  const supportingLine = isFilled(config?.supportingLine)
    ? config.supportingLine
    : "";
  const ctaLabel = isFilled(config?.ctaLabel) ? config.ctaLabel : "Order Now";
  const ctaUrl = isFilled(config?.ctaUrl) ? config.ctaUrl : "#";
  const logoUrl = isFilled(config?.logoUrl) ? config.logoUrl : "";
  const heroBackground = isFilled(config?.heroBackground)
    ? config.heroBackground
    : "var(--secondary)";

  const isExternal = /^https?:\/\//i.test(ctaUrl);

  return (
    <main
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-16 text-center sm:px-8"
      style={{ backgroundColor: heroBackground }}
    >
      {/* Soft ambient glow — pure CSS, no heavy imagery, keeps load instant */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--accent), transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-16 h-[24rem] w-[24rem] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--primary), transparent)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center">
        {logoUrl ? (
          <img
            src={logoUrl}
            alt={`${appName} logo`}
            className="mb-8 h-20 w-20 rounded-2xl object-contain shadow-sm sm:h-24 sm:w-24"
            loading="eager"
            decoding="async"
          />
        ) : null}

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary sm:text-base">
          {appName}
        </p>

        <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight text-secondary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {tagline}
        </h1>

        {supportingLine ? (
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-secondary-foreground/70 sm:text-lg">
            {supportingLine}
          </p>
        ) : null}

        <a
          href={ctaUrl}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-9 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/35 hover:brightness-110 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 active:translate-y-0 sm:text-lg"
        >
          {ctaLabel}
        </a>
      </div>
    </main>
  );
}
