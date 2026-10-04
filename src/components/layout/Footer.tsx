import { site } from "@/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      <div className="content-container py-8">
        <p className="text-muted font-sans text-sm leading-5">
          © {currentYear} {site.name}
        </p>
      </div>
    </footer>
  );
}
