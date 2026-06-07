import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stock from "@/components/Stock";
import Services from "@/components/Services";
import ImportSection from "@/components/ImportSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <Header />
      <Hero />
      <Stock />
      <Services />
      <ImportSection />
      <Contact />
      
    </main>
  );
}
