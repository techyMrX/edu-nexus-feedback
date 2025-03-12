
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import GlassmorphicCard from './GlassmorphicCard';
import AnimatedTransition from './AnimatedTransition';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | College Management System";
  }, []);

  return (
    <div className="min-h-[calc(100vh-theme(spacing.16))] flex items-center justify-center p-4">
      <AnimatedTransition type="scale">
        <GlassmorphicCard className="max-w-md w-full p-8 text-center">
          <h1 className="text-5xl font-bold mb-2">404</h1>
          <div className="h-1 w-16 bg-primary/50 mx-auto my-6 rounded-full"></div>
          <h2 className="text-xl font-medium mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button asChild>
            <Link to="/" className="inline-flex items-center gap-2">
              <ArrowLeft size={16} />
              Return to Dashboard
            </Link>
          </Button>
        </GlassmorphicCard>
      </AnimatedTransition>
    </div>
  );
};

export default NotFound;
