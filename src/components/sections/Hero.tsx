import { profile, site } from "@/content";
import type { SectionProps } from "@/lib/sections";
import { Section } from "@/components/ui/Section";
import { Avatar } from "@/components/ui/Avatar";
import { TextLink } from "@/components/ui/TextLink";
import { HeroMotion } from "@/components/ui/MotionWrapper";

export function Hero({ id }: SectionProps) {
  const label = `${profile.role}, ${profile.location}`;

  // Resolve heroLinks from profile and site config
  const heroLinks = profile.heroLinks
    .map((linkId) => {
      if (linkId === "email") {
        return {
          id: "email",
          label: site.ui.emailLabel,
          href: `mailto:${profile.email}`,
          external: false,
        };
      }
      const social = profile.socials.find((s) => s.id === linkId);
      if (!social) return null;
      return {
        id: social.id,
        label: social.label,
        href: social.href,
        external: true,
      };
    })
    .filter((link): link is NonNullable<typeof link> => link !== null);

  const leftContent = (
    <>
      {/* Label */}
      <p className="text-muted font-sans text-sm leading-5 mb-2">{label}</p>

      {/* Fluid Name: clamp(40px, 6vw, 96px) */}
      <h1
        id="hero-heading"
        className="font-serif font-normal leading-[1.02] tracking-[-0.02em] text-foreground mb-6"
        style={{ fontSize: "clamp(40px, 6vw, 96px)" }}
      >
        {profile.name}
      </h1>

      {/* Intro paragraph (max 65ch measure) */}
      <p className="text-foreground mb-8 max-w-[65ch] font-sans text-[16px] leading-[1.65] md:text-[18px]">
        {profile.intro}
      </p>

      {/* Hero links row */}
      {heroLinks.length > 0 && (
        <div className="flex flex-wrap items-center gap-6 pt-1">
          {heroLinks.map((link) => (
            <TextLink
              key={link.id}
              href={link.href}
              newTab={link.external}
              className="inline-flex min-h-[44px] items-center py-2 font-sans text-sm text-foreground sm:min-h-0 sm:py-0"
            >
              {link.label}
            </TextLink>
          ))}
        </div>
      )}
    </>
  );

  const rightContent = profile.avatar ? (
    <>
      {/* Mobile avatar (< 1024px): 64px */}
      <div className="block lg:hidden">
        <Avatar image={profile.avatar} size={64} />
      </div>
      {/* Desktop enlarged avatar (>= 1024px): ~220px */}
      <div className="hidden lg:block">
        <Avatar image={profile.avatar} size={220} />
      </div>
    </>
  ) : null;

  return (
    <Section id={id} ariaLabelledBy="hero-heading">
      <HeroMotion leftContent={leftContent} rightContent={rightContent} />
    </Section>
  );
}
