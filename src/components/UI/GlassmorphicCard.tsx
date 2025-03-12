
import React, { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface GlassmorphicCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
  hoverEffect?: boolean;
  clickEffect?: boolean;
}

const GlassmorphicCard = forwardRef<HTMLDivElement, GlassmorphicCardProps>(
  ({ children, className, intensity = 'medium', hoverEffect = true, clickEffect = false, ...props }, ref) => {
    
    const intensityClasses = {
      light: 'bg-background/40 backdrop-blur-sm',
      medium: 'bg-background/60 backdrop-blur-md',
      strong: 'bg-background/80 backdrop-blur-lg',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border border-border/50 shadow-sm',
          intensityClasses[intensity],
          hoverEffect && 'transition-all duration-300 hover:shadow-md hover:border-border/90',
          clickEffect && 'active:scale-[0.98] transition-transform',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassmorphicCard.displayName = 'GlassmorphicCard';

export default GlassmorphicCard;
