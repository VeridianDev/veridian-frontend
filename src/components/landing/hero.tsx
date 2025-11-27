import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

// Hero section - main headline and CTA
export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 animate-fade-in-up animate-delay-100 opacity-0 animation-fill-both">
          Clarity in Corporate <br className="hidden md:block" />
          Sustainability.
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200 opacity-0 animation-fill-both leading-relaxed">
          Our extension delivers instant sustainability scores, helping you make
          responsible decisions with confidence.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300 opacity-0 animation-fill-both">
          <Link href="/auth">
            <Button
              size="lg"
              className="rounded-full px-8 h-12 text-base font-medium w-full sm:w-auto hover-lift"
            >
              Get started <ArrowRightIcon className="ml-2 w-4 h-4" />
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-12 text-base font-medium w-full sm:w-auto border-input hover:bg-secondary/50 hover-lift"
          >
            <ArrowDownTrayIcon className="mr-2 w-4 h-4" /> Download Extension
          </Button>
        </div>
      </div>
    </section>
  );
}
