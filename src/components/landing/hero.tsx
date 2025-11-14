import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Hero section - main headline and CTA
export default function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container text-center">
        {/* Main headline */}
        <h1 className="font-headline scroll-m-20 text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Clarity in Corporate Sustainability.
        </h1>
        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Our extension delivers instant sustainability scores,
          helping you make responsible decisions with confidence.
        </p>
        {/* Primary CTA */}
        <div className="mt-10 flex justify-center">
          <Link href="/#">
            <Button size="lg">Get started</Button>
          </Link>
        </div>
        {/* Hero showcase image */}
        <div className="mt-14 flex justify-center">
          <Image
            src="/hero-showcase.jpg"
            alt="EcoVeridian dashboard"
            width={1200}
            height={700}
            className="rounded-xl border bg-card shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
