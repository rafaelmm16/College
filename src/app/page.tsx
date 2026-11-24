import { DisciplineCatalog } from "@/components/DisciplineCatalog";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LanguageBreakdown } from "@/components/LanguageBreakdown";
import { Navbar } from "@/components/Navbar";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <DisciplineCatalog />
        <LanguageBreakdown />
      </main>
      <Footer />
    </div>
  );
}
