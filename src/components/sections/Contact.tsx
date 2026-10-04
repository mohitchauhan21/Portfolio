import { contact, profile } from "@/content";
import type { SectionProps } from "@/lib/sections";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact({ id, title = "Get in touch" }: SectionProps) {
  // Resolve social links from contact.linkIds
  const contactLinks = contact.linkIds
    .map((linkId) => {
      const social = profile.socials.find((s) => s.id === linkId);
      if (!social) return null;
      const text = social.displayText
        ? `${social.label} (${social.displayText})`
        : social.label;
      return {
        id: social.id,
        href: social.href,
        text,
      };
    })
    .filter((link): link is NonNullable<typeof link> => link !== null);

  return (
    <Section id={id}>
      <div className="lg:grid lg:grid-cols-12 lg:gap-12">
        {/* Left 4 columns: sticky heading */}
        <div className="lg:col-span-4">
          <SectionHeading id={id}>{title}</SectionHeading>
        </div>

        {/* Right 8 columns: content */}
        <div className="lg:col-span-8">
          <p className="text-muted mb-6 max-w-[65ch] font-sans text-[15px] leading-6 md:text-[16px]">
            {contact.message}
          </p>

          {/* Large serif email link */}
          <div className="mb-6">
            <a
              href={`mailto:${profile.email}`}
              className="text-foreground decoration-line hover:text-accent hover:decoration-accent focus-visible:ring-accent font-serif text-[22px] leading-[1.3] font-normal break-all underline decoration-1 underline-offset-8 transition-colors focus:outline-none focus-visible:ring-2 sm:text-[28px]"
            >
              {profile.email}
            </a>
          </div>

          {/* Social links: stacked below 640px, row above */}
          {contactLinks.length > 0 && (
            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:gap-12">
              {contactLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center py-2 font-sans text-sm leading-5 text-muted transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:min-h-0 sm:py-0"
                >
                  {link.text}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
