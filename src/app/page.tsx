import { assertContentValid } from "@/lib/validate-content";
import { profile, sections, site } from "@/content";
import { sectionRegistry } from "@/lib/sections";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  assertContentValid();

  const enabledSections = sections.filter((s) => s.enabled);

  // Schema.org Person structured data (no email or phone, absolute image URL)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    url: site.url,
    image: profile.avatar?.src
      ? new URL(profile.avatar.src, site.url).toString()
      : undefined,
    sameAs: profile.socials.map((s) => s.href),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />
      <main
        id="main"
        tabIndex={-1}
        className="w-full"
      >
        {enabledSections.map((sectionConfig) => {
          const SectionComponent = sectionRegistry[sectionConfig.id];
          if (!SectionComponent) return null;
          return (
            <SectionComponent
              key={sectionConfig.id}
              id={sectionConfig.id}
              title={sectionConfig.title}
            />
          );
        })}
      </main>
      <Footer />
    </>
  );
}
