import { assertContentValid } from "@/lib/validate-content";
import { site } from "@/content";

export default function Home() {
  assertContentValid();

  return (
    <main id="main" tabIndex={-1} className="max-w-[800px] mx-auto px-6 py-12">
      <h1 className="font-serif text-3xl font-normal">{site.name}</h1>
      <p className="text-muted mt-2">{site.title}</p>
    </main>
  );
}
