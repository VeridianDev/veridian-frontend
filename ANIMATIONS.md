# EcoVeridian Animation System

This document describes the modern, smooth animation system implemented for the EcoVeridian website.

## Overview

The animation system provides scroll-triggered fade-in effects and interactive hover animations that enhance the user experience while maintaining a professional, eco-friendly aesthetic.

## Features

### 1. Scroll-Triggered Animations
- **Fade In Up**: Elements fade in while sliding up 30px on scroll
- **Staggered Delays**: Multiple elements can animate in sequence
- **Intersection Observer**: Uses native browser API for performance

### 2. Hover Interactions
- **Hover Lift**: Subtle upward movement with shadow
- **Eco Card Hover**: 1.05× scale with eco-themed green shadow
- **Scale Hover**: Simple scale transformation

### 3. Custom Hook

```tsx
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// In your component
const { ref, isVisible } = useScrollAnimation({
  threshold: 0.1,           // Percentage of element visible to trigger
  rootMargin: '0px 0px -50px 0px',  // Margin adjustment
  triggerOnce: true         // Animation triggers only once
});

// Apply to element
<div
  ref={ref}
  className={isVisible ? 'scroll-animate-visible' : 'scroll-animate'}
>
  Your content
</div>
```

## Animation Classes

### Scroll Animations
```css
.scroll-animate              /* Initial state: hidden and translated down */
.scroll-animate-visible      /* Animated state: visible and in position */
```

### Delays (for staggered effects)
```css
.animate-delay-100  /* 0.1s delay */
.animate-delay-200  /* 0.2s delay */
.animate-delay-300  /* 0.3s delay */
.animate-delay-400  /* 0.4s delay */
.animate-delay-500  /* 0.5s delay */
```

### Hover Effects
```css
.hover-lift        /* Lift up 4px and scale 1.02× */
.eco-card-hover    /* Scale 1.05× with green shadow */
.scale-hover       /* Simple 1.05× scale */
```

### Page Load Animations
```css
.animate-fade-in-up         /* Fade in with upward slide */
.animate-fade-in            /* Simple fade in */
.animation-fill-both        /* Preserve animation states */
```

## Implementation Examples

### Feature Cards with Scroll Animation
```tsx
function FeatureItem({ feature, isEven }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 gap-12 ${
        isVisible ? 'scroll-animate-visible' : 'scroll-animate'
      }`}
    >
      <div className="eco-card-hover">
        {/* Card content */}
      </div>
    </div>
  );
}
```

### Staggered Grid Animation
```tsx
function GridSection() {
  const delays = ['animate-delay-100', 'animate-delay-200', 'animate-delay-300'];

  return (
    <div className="grid grid-cols-3 gap-8">
      {items.map((item, index) => {
        const { ref, isVisible } = useScrollAnimation();
        return (
          <div
            ref={ref}
            key={index}
            className={`eco-card-hover ${
              isVisible 
                ? `scroll-animate-visible ${delays[index % 3]}` 
                : 'scroll-animate'
            }`}
          >
            {/* Card content */}
          </div>
        );
      })}
    </div>
  );
}
```

### Hero Section with Page Load Animation
```tsx
<section>
  <h1 className="animate-fade-in-up animate-delay-100 opacity-0 animation-fill-both">
    Main Headline
  </h1>
  <p className="animate-fade-in-up animate-delay-200 opacity-0 animation-fill-both">
    Subheading
  </p>
  <div className="animate-fade-in-up animate-delay-300 opacity-0 animation-fill-both">
    <Button className="hover-lift">Get Started</Button>
  </div>
</section>
```

## Performance Considerations

1. **Intersection Observer**: Uses native browser API for efficient scroll detection
2. **CSS Animations**: Hardware-accelerated transforms and opacity
3. **Trigger Once**: Default behavior prevents repeated animations
4. **Cubic Bezier Easing**: Smooth, natural motion curves
5. **Will-Change**: Automatic browser optimization for transforms

## Dark Mode Support

All animations include dark mode variants:
- Adjusted shadow opacity for dark backgrounds
- Enhanced eco-themed green shadows in dark mode
- Consistent visual hierarchy across themes

## Browser Support

- Modern browsers with Intersection Observer support
- Graceful degradation for older browsers (content visible without animation)
- CSS custom properties for easy theming

## Customization

To modify animation timing or effects, edit:
- `/src/app/animations.css` - Animation definitions and classes
- `/src/hooks/useScrollAnimation.ts` - Scroll detection logic

## Best Practices

1. Use `scroll-animate` for content that should animate on scroll
2. Apply `hover-lift` to interactive elements like buttons and cards
3. Use `eco-card-hover` for prominent feature cards
4. Stagger animations in grids with delay classes
5. Keep animations subtle (0.3-0.6s duration)
6. Test scroll performance with many animated elements
