import Link from "next/link";
import { site } from "@/content";

export default function NotFound() {
  return (
    <main
      id="main"
      className="mx-auto flex min-h-[calc(100vh-16rem)] max-w-[800px] flex-col justify-center px-6 py-24 sm:px-8"
    >
      <p className="mb-2 font-sans text-sm text-muted">404</p>
      <h1 className="mb-4 font-serif text-[36px] font-normal leading-[1.1] text-foreground md:text-[48px]">
        Page Not Found
      </h1>
      <p className="mb-8 max-w-[600px] font-sans text-[16px] leading-[1.65] text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <div>
        <Link
          href="/"
          className="decoration-line inline-flex min-h-[44px] items-center font-sans text-sm text-foreground underline decoration-1 underline-offset-[4px] transition-colors hover:text-accent hover:decoration-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          ← Return to {site.name}&apos;s portfolio
        </Link>
      </div>
    </main>
  );
}
