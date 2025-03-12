
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  BookOpen,
  Calendar,
  Star,
  Settings,
  ChevronRight,
  LogOut,
} from 'lucide-react';
import AnimatedTransition from '../UI/AnimatedTransition';

interface SidebarProps {
  isOpen: boolean;
}

interface NavItem {
  title: string;
  icon: React.ElementType;
  path: string;
}

const navItems: NavItem[] = [
  { title: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { title: 'Students', icon: GraduationCap, path: '/students' },
  { title: 'Faculty', icon: Users, path: '/faculty' },
  { title: 'Courses', icon: BookOpen, path: '/courses' },
  { title: 'Schedule', icon: Calendar, path: '/schedule' },
  { title: 'Ratings & Reviews', icon: Star, path: '/ratings' },
  { title: 'Settings', icon: Settings, path: '/settings' },
];

const Sidebar = ({ isOpen }: SidebarProps) => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(() => 
    navItems.findIndex(item => item.path === location.pathname)
  );

  return (
    <div
      className={cn(
        'fixed top-0 left-0 z-40 h-full w-64 bg-background border-r border-border/50 pt-16 transition-all duration-300 ease-in-out',
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-20'
      )}
    >
      <div className="flex flex-col h-full justify-between px-3 py-4">
        <div className="space-y-1">
          {navItems.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <Link
                key={item.title}
                to={item.path}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                )}
                onClick={() => setActiveIndex(index)}
              >
                <item.icon size={20} />
                <span className={cn('transition-opacity duration-200', isOpen ? 'opacity-100' : 'opacity-0 lg:hidden')}>
                  {item.title}
                </span>
                {isActive && (
                  <div className="ml-auto">
                    <ChevronRight size={16} className={cn('transition-opacity duration-200', isOpen ? 'opacity-100' : 'opacity-0 lg:hidden')} />
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        <Link
          to="/logout"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-all duration-200"
        >
          <LogOut size={20} />
          <span className={cn('transition-opacity duration-200', isOpen ? 'opacity-100' : 'opacity-0 lg:hidden')}>
            Logout
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
