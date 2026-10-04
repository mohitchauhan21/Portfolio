import { profile, site } from "@/content";
import type { SectionProps } from "@/lib/sections";
import { Section } from "@/components/ui/Section";
import { Avatar } from "@/components/ui/Avatar";
import { TextLink } from "@/components/ui/TextLink";

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

  return (
    <Section id={id} ariaLabelledBy="hero-heading">
      {/* Top block: avatar + label + name */}
      <div className="mb-6 flex flex-col sm:mb-8 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        {/* Mobile avatar: placed above label on screens < 640px */}
        {profile.avatar && (
          <div className="mb-6 sm:hidden">
            <Avatar image={profile.avatar} size={56} />
          </div>
        )}

        <div className="space-y-1">
          <p className="text-muted font-sans text-sm leading-5">{label}</p>
          <h1
            id="hero-heading"
            className="text-foreground font-serif text-[40px] leading-[1.05] font-normal tracking-[-0.015em] sm:text-[56px]"
          >
            {profile.name}
          </h1>
        </div>

        {/* Desktop avatar: top right on screens >= 640px */}
        {profile.avatar && (
          <div className="hidden shrink-0 sm:block sm:pt-1">
            <Avatar image={profile.avatar} size={64} />
          </div>
        )}
      </div>

      {/* Intro paragraph */}
      <p className="text-foreground mb-6 max-w-[680px] font-sans text-[16px] leading-[1.65] md:text-[17px]">
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
              className="text-foreground font-sans text-sm"
            >
              {link.label}
            </TextLink>
          ))}
        </div>
      )}
    </Section>
  );
}
