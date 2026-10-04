import fs from "node:fs";
import path from "node:path";
import {
  site,
  sections,
  navItems,
  profile,
  skillsHeading,
  skillGroups,
  backgroundGroups,
  contact,
  projects,
} from "@/content";

export function assertContentValid(): void {
  // 1. Uniqueness checks
  function assertUnique(ids: string[], fileName: string, context: string) {
    const seen = new Set<string>();
    for (const id of ids) {
      if (seen.has(id)) {
        throw new Error(
          `[Content Validation Error] File "${fileName}": Duplicate id "${id}" in ${context}. Every id must be unique.`
        );
      }
      seen.add(id);
    }
  }

  assertUnique(
    sections.map((s) => s.id),
    "site.ts",
    "sections"
  );
  assertUnique(
    projects.map((p) => p.id),
    "projects.ts",
    "projects"
  );
  assertUnique(
    skillGroups.map((g) => g.id),
    "skills.ts",
    "skillGroups"
  );
  assertUnique(
    backgroundGroups.map((g) => g.id),
    "background.ts",
    "backgroundGroups"
  );
  for (const group of backgroundGroups) {
    assertUnique(
      group.entries.map((e) => e.id),
      "background.ts",
      `backgroundGroup "${group.id}" entries`
    );
  }
  assertUnique(
    profile.socials.map((s) => s.id),
    "profile.ts",
    "socials"
  );

  // 2. Non-empty string checks
  function assertNonEmpty(val: unknown, fileName: string, entryId: string, fieldName: string) {
    if (typeof val !== "string" || val.trim().length === 0) {
      throw new Error(
        `[Content Validation Error] File "${fileName}": Entry "${entryId}" has empty or non-string field "${fieldName}".`
      );
    }
  }

  assertNonEmpty(site.name, "site.ts", "site", "name");
  assertNonEmpty(site.title, "site.ts", "site", "title");
  assertNonEmpty(site.description, "site.ts", "site", "description");
  assertNonEmpty(site.url, "site.ts", "site", "url");
  assertNonEmpty(site.locale, "site.ts", "site", "locale");

  assertNonEmpty(profile.name, "profile.ts", "profile", "name");
  assertNonEmpty(profile.role, "profile.ts", "profile", "role");
  assertNonEmpty(profile.location, "profile.ts", "profile", "location");
  assertNonEmpty(profile.intro, "profile.ts", "profile", "intro");
  assertNonEmpty(profile.email, "profile.ts", "profile", "email");
  for (let i = 0; i < profile.about.length; i++) {
    assertNonEmpty(profile.about[i], "profile.ts", "profile", `about[${i}]`);
  }

  for (const s of profile.socials) {
    assertNonEmpty(s.id, "profile.ts", s.id, "id");
    assertNonEmpty(s.label, "profile.ts", s.id, "label");
    assertNonEmpty(s.href, "profile.ts", s.id, "href");
  }

  for (const p of projects) {
    assertNonEmpty(p.id, "projects.ts", p.id, "id");
    assertNonEmpty(p.title, "projects.ts", p.id, "title");
    assertNonEmpty(p.dateLabel, "projects.ts", p.id, "dateLabel");
    assertNonEmpty(p.description, "projects.ts", p.id, "description");
    for (const l of p.links) {
      assertNonEmpty(l.label, "projects.ts", p.id, "links.label");
      assertNonEmpty(l.href, "projects.ts", p.id, "links.href");
    }
  }

  assertNonEmpty(skillsHeading, "skills.ts", "skillsHeading", "skillsHeading");
  for (const sg of skillGroups) {
    assertNonEmpty(sg.id, "skills.ts", sg.id, "id");
    assertNonEmpty(sg.label, "skills.ts", sg.id, "label");
    for (const item of sg.items) {
      assertNonEmpty(item, "skills.ts", sg.id, "items");
    }
  }

  for (const bg of backgroundGroups) {
    assertNonEmpty(bg.id, "background.ts", bg.id, "id");
    assertNonEmpty(bg.label, "background.ts", bg.id, "label");
    for (const e of bg.entries) {
      assertNonEmpty(e.id, "background.ts", e.id, "id");
      assertNonEmpty(e.dateLabel, "background.ts", e.id, "dateLabel");
      assertNonEmpty(e.title, "background.ts", e.id, "title");
    }
  }

  assertNonEmpty(contact.message, "contact.ts", "contact", "message");

  // 3. External hrefs and internal paths
  function validateHref(href: string, fileName: string, entryId: string) {
    const isExternal =
      href.startsWith("https://") ||
      href.startsWith("http://") ||
      href.startsWith("mailto:");
    const isInternal = href.startsWith("/");
    if (!isExternal && !isInternal) {
      throw new Error(
        `[Content Validation Error] File "${fileName}": Entry "${entryId}" has invalid href "${href}". External hrefs must start with https://, http://, or mailto:, and internal asset paths must start with /. `
      );
    }
  }

  for (const s of profile.socials) {
    validateHref(s.href, "profile.ts", s.id);
  }
  if (profile.resume) {
    validateHref(profile.resume.href, "profile.ts", "resume");
  }
  for (const p of projects) {
    for (const l of p.links) {
      validateHref(l.href, "projects.ts", p.id);
    }
  }
  for (const bg of backgroundGroups) {
    for (const e of bg.entries) {
      if (e.href) {
        validateHref(e.href, "background.ts", e.id);
      }
    }
  }

  // 4. Asset existence under public
  const publicDir = path.join(process.cwd(), "public");

  function assertAssetExists(assetPath: string, fileName: string, entryId: string, fieldName: string) {
    if (!assetPath.startsWith("/")) {
      throw new Error(
        `[Content Validation Error] File "${fileName}": Entry "${entryId}" field "${fieldName}" path "${assetPath}" must start with "/".`
      );
    }
    const relativePath = assetPath.replace(/^\//, "");
    const fullPath = path.join(publicDir, relativePath);
    if (!fs.existsSync(fullPath)) {
      throw new Error(
        `[Content Validation Error] File "${fileName}": Entry "${entryId}" field "${fieldName}" references "${assetPath}", but file was not found under public directory (${fullPath}).`
      );
    }
  }

  if (profile.avatar) {
    assertAssetExists(profile.avatar.src, "profile.ts", "profile", "avatar.src");
  }
  if (profile.resume && profile.resume.href.startsWith("/")) {
    assertAssetExists(profile.resume.href, "profile.ts", "profile", "resume.href");
  }
  for (const p of projects) {
    if (p.image) {
      assertAssetExists(p.image.src, "projects.ts", p.id, "image.src");
    }
  }

  // 5. heroLinks and contact.linkIds exist in socials or "email"
  const socialIds = new Set(profile.socials.map((s) => s.id));
  for (const id of profile.heroLinks) {
    if (id !== "email" && !socialIds.has(id)) {
      throw new Error(
        `[Content Validation Error] File "profile.ts": heroLinks contains unknown id "${id}". Must be an id from profile.socials or "email".`
      );
    }
  }
  for (const id of contact.linkIds) {
    if (!socialIds.has(id)) {
      throw new Error(
        `[Content Validation Error] File "contact.ts": contact.linkIds contains unknown id "${id}". Must be an id from profile.socials.`
      );
    }
  }

  // 6. Every navItems section target exists in sections
  const sectionIds = new Set(sections.map((s) => s.id));
  for (const item of navItems) {
    if (item.target.type === "section" && !sectionIds.has(item.target.id)) {
      throw new Error(
        `[Content Validation Error] File "site.ts": navItems contains target for unknown section id "${item.target.id}".`
      );
    }
  }

  // 7. profile.email contains exactly one @ and a dot in its domain
  const email = profile.email.trim();
  const atParts = email.split("@");
  if (atParts.length !== 2 || !atParts[0] || !atParts[1] || !atParts[1].includes(".")) {
    throw new Error(
      `[Content Validation Error] File "profile.ts": profile.email "${profile.email}" must contain exactly one "@" and a dot in its domain.`
    );
  }

  // 8. site.description has 160 characters or fewer
  if (site.description.length > 160) {
    throw new Error(
      `[Content Validation Error] File "site.ts": site.description has ${site.description.length} characters; maximum allowed is 160 characters.`
    );
  }

  // 9. Every project has at least one stack item
  for (const p of projects) {
    if (!p.stack || p.stack.length === 0) {
      throw new Error(
        `[Content Validation Error] File "projects.ts": Project "${p.id}" must contain at least one stack item.`
      );
    }
  }
}
