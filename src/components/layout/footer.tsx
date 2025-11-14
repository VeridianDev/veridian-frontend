import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/logo";
import Link from "next/link";

// Footer with CTA — It's "PLACEHOLDER" for now and will be added/updated to copyright hopefully in the future
export default function Footer() {
  return (
    <footer className="bg-[#0B0F3A] text-primary-foreground">
      <div className="container py-20 text-center">
        {/* Final CTA section */}
        <h2 className="font-headline scroll-m-20 text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl">
          Start Your Journey to Sustainability Today
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
          Start making informed decisions. Add EcoVeridian to
          your browser for free.
        </p>
        {/* Bottom bar with logo and copyright */}
        <div className="mt-20 flex flex-col items-center justify-center gap-6 border-t border-primary-foreground/10 pt-8">
          <Logo className="text-primary-foreground" />
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-primary-foreground/60">
              &copy; 2025 EcoVeridian. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/50">
              Licensed under{" "}
              <a
                href="https://www.gnu.org/licenses/agpl-3.0.html"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary-foreground/70"
              >
                AGPL v3.0
              </a>
              {" "}&middot;{" "}
              <Link
                href="/legal"
                className="underline hover:text-primary-foreground/70"
              >
                Legal
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
