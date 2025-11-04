import { Button } from "@/components/ui/button";
import { Logo } from "@/components/common/logo";
import ThemeToggle from "@/components/ui/theme-toggle";
import Link from "next/link";

// Sticky header with logo and navigation
export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Logo />
        {/* Right-aligned navigation */}
        <div className="flex flex-1 items-center justify-end">
          <nav className="flex items-center space-x-2">
            {/* Theme toggle (sun/moon) */}
            <ThemeToggle />
            <Link href="/team">
              <Button variant="secondary">Team</Button>
            </Link>
            <Link href="/#">
              <Button>Get started</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
