import Header from "@/components/layout/header";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import Faq from "@/components/landing/faq";
import Footer from "@/components/layout/footer";

// Main landing page layout
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      {/* Main content sections */}
      <main className="flex-1">
        <Hero />
        <Features />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
