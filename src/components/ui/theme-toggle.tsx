'use client';

import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';

// Get initial theme value
function getInitialTheme() {
  if (typeof window === 'undefined') return false;
  
  const saved = localStorage.getItem('theme');
  if (saved) {
    return saved === 'dark';
  }
  
  // Check system preference
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Theme toggle button with sun/moon icons
export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Mount effect
  useEffect(() => {
    setMounted(true);
    const initialTheme = getInitialTheme();
    setIsDark(initialTheme);
    
    // Save system preference if no saved theme
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', initialTheme ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    // Sync DOM with state changes
    if (mounted) {
      document.documentElement.classList.toggle('dark', isDark);
    }
  }, [isDark, mounted]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    // Save preference
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9"
        aria-label="Toggle theme"
        disabled
      >
        <SunIcon className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="h-9 w-9"
    >
      {/* Show Sun in light mode, Moon in dark mode */}
      {isDark ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </Button>
  );
}
