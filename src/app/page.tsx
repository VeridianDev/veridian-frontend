import PageLayout from "@/components/layout/page-layout";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import Faq from "@/components/landing/faq";

// Main landing page layout
export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <Features />
      <Faq />
    </PageLayout>
  );
}
