import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

// Logo component with icon and text
export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn('flex items-center gap-2', className)}>
      {/* Logo icon */}
      <Image
        src="/logo.svg"
        alt="EcoVeridian Logo"
        width={40}
        height={40}
        priority
      />
      {/* Logo text */}
      <span className="text-xl font-bold tracking-tight">EcoVeridian</span>
    </Link>
  );
}
