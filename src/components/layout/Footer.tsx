import { site } from "@/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      <div className="mx-auto max-w-[800px] px-6 py-8 sm:px-8">
        <p className="text-muted font-sans text-sm leading-5">
          © {currentYear} {site.name}
        </p>
      </div>
    </footer>
  );
}
