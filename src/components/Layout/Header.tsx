
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Search,
  Bell,
  ChevronDown,
  Menu as MenuIcon,
  X,
} from 'lucide-react';
import AnimatedTransition from '../UI/AnimatedTransition';

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Header = ({ toggleSidebar, isSidebarOpen }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 py-3',
        scrolled 
          ? 'bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar}
            className="lg:hidden"
          >
            {isSidebarOpen ? <X size={20} /> : <MenuIcon size={20} />}
          </Button>
          
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-medium">CM</span>
            </div>
            <span className="font-medium text-lg hidden sm:block">College Management</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative hidden md:flex items-center">
            <Search size={18} className="absolute left-3 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-muted/50 rounded-full pl-10 pr-4 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
            />
          </div>

          <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
            <Bell size={20} />
          </Button>

          <div className="flex items-center gap-2 ml-2">
            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-medium text-sm">JS</span>
            </div>
            <span className="font-medium text-sm hidden sm:block">John Smith</span>
            <ChevronDown size={16} className="text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
