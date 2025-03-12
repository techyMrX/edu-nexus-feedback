
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import GlassmorphicCard from '../UI/GlassmorphicCard';
import AnimatedTransition from '../UI/AnimatedTransition';

interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    positive: boolean;
  };
  className?: string;
  index?: number;
}

const StatCard = ({ 
  title, 
  value, 
  icon, 
  trend, 
  className,
  index = 0,
  ...props 
}: StatCardProps) => {
  return (
    <AnimatedTransition type="slide" delay={index * 2}>
      <GlassmorphicCard 
        className={cn('p-6', className)}
        intensity="medium"
        {...props}
      >
        <div className="flex justify-between items-start">
          <div className="space-y-1.5">
            <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
            <div className="text-2xl font-semibold">{value}</div>
            
            {trend && (
              <div className="flex items-center mt-2">
                <div className={cn(
                  'text-xs font-medium flex items-center',
                  trend.positive ? 'text-green-500' : 'text-red-500'
                )}>
                  <span className="inline-block mr-1">
                    {trend.positive ? '↑' : '↓'}
                  </span>
                  {Math.abs(trend.value)}%
                </div>
                <span className="text-xs text-muted-foreground ml-1.5">vs last month</span>
              </div>
            )}
          </div>
          
          <div className={cn(
            'p-2.5 rounded-md',
            'bg-primary/10 text-primary'
          )}>
            {icon}
          </div>
        </div>
      </GlassmorphicCard>
    </AnimatedTransition>
  );
};

export default StatCard;
