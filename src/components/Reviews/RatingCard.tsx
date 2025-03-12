
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import GlassmorphicCard from '../UI/GlassmorphicCard';

interface RatingCardProps {
  name: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  imageUrl?: string;
  className?: string;
}

const RatingCard = ({ 
  name, 
  role, 
  rating, 
  comment, 
  date, 
  imageUrl,
  className 
}: RatingCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Truncate comment if it's too long
  const isLongComment = comment.length > 120;
  const displayComment = isLongComment && !isExpanded 
    ? `${comment.substring(0, 120)}...` 
    : comment;

  return (
    <GlassmorphicCard 
      className={cn('p-4', className)}
      intensity="light"
    >
      <div className="flex gap-4">
        <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={name} 
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-medium text-sm">
                {name.substring(0, 2)}
              </span>
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-sm font-medium">{name}</h4>
              <p className="text-xs text-muted-foreground">{role}</p>
            </div>
            <span className="text-xs text-muted-foreground">{date}</span>
          </div>
          
          <div className="flex items-center my-1.5">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={cn(
                  'fill-current', 
                  i < rating ? 'text-amber-400' : 'text-muted'
                )}
              />
            ))}
          </div>
          
          <p className="text-sm leading-relaxed">
            {displayComment}
          </p>
          
          {isLongComment && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs font-medium text-primary mt-1 hover:underline focus:outline-none"
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>
      </div>
    </GlassmorphicCard>
  );
};

export default RatingCard;
