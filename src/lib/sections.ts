import type { ComponentType } from "react";
import type { SectionId } from "@/content";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { About } from "@/components/sections/About";
import { Background } from "@/components/sections/Background";
import { Contact } from "@/components/sections/Contact";

export interface SectionProps {
  id: SectionId;
  title?: string;
}

export const sectionRegistry: Record<SectionId, ComponentType<SectionProps>> = {
  hero: Hero,
  work: Work,
  about: About,
  background: Background,
  contact: Contact,
};

export function registerSection(
  id: SectionId,
  component: ComponentType<SectionProps>
): void {
  sectionRegistry[id] = component;
}
