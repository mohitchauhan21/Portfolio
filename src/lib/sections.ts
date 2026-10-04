import type { ComponentType } from "react";
import type { SectionId } from "@/content";

export interface SectionProps {
  id: SectionId;
  title?: string;
}

export const sectionRegistry: Partial<Record<SectionId, ComponentType<SectionProps>>> = {};

export function registerSection(id: SectionId, component: ComponentType<SectionProps>): void {
  sectionRegistry[id] = component;
}
