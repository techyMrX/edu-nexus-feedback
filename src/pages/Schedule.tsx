
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GlassmorphicCard from '@/components/UI/GlassmorphicCard';
import AnimatedTransition from '@/components/UI/AnimatedTransition';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, addDays, startOfWeek, getDay } from 'date-fns';

const Schedule = () => {
  useEffect(() => {
    document.title = "Schedule | College Management System";
  }, []);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState('week');

  // Get the current week's dates
  const startOfCurrentWeek = startOfWeek(currentDate, { weekStartsOn: 1 });
  const weekDays = Array.from({ length: 5 }, (_, i) => addDays(startOfCurrentWeek, i));

  // Mock schedule data
  const scheduleData = [
    { id: 1, course: 'CS101: Intro to Computer Science', instructor: 'Dr. Robert Smith', time: '10:00-11:30', day: 1, room: 'Room 101' },
    { id: 2, course: 'CS101: Intro to Computer Science', instructor: 'Dr. Robert Smith', time: '10:00-11:30', day: 3, room: 'Room 101' },
    { id: 3, course: 'MT205: Advanced Calculus', instructor: 'Dr. Emily Johnson', time: '09:00-10:30', day: 2, room: 'Room 205' },
    { id: 4, course: 'MT205: Advanced Calculus', instructor: 'Dr. Emily Johnson', time: '09:00-10:30', day: 4, room: 'Room 205' },
    { id: 5, course: 'EG304: Digital Signal Processing', instructor: 'Prof. David Wilson', time: '13:00-14:00', day: 1, room: 'Lab 304' },
    { id: 6, course: 'EG304: Digital Signal Processing', instructor: 'Prof. David Wilson', time: '13:00-14:00', day: 3, room: 'Lab 304' },
    { id: 7, course: 'EG304: Digital Signal Processing', instructor: 'Prof. David Wilson', time: '13:00-14:00', day: 5, room: 'Lab 304' },
    { id: 8, course: 'BT202: Molecular Biology', instructor: 'Dr. Sarah Williams', time: '14:00-15:30', day: 2, room: 'Lab 202' },
    { id: 9, course: 'BT202: Molecular Biology', instructor: 'Dr. Sarah Williams', time: '14:00-15:30', day: 4, room: 'Lab 202' },
    { id: 10, course: 'PH101: Fundamentals of Physics', instructor: 'Prof. Thomas Brown', time: '09:00-10:00', day: 1, room: 'Room 301' },
    { id: 11, course: 'PH101: Fundamentals of Physics', instructor: 'Prof. Thomas Brown', time: '09:00-10:00', day: 3, room: 'Room 301' },
    { id: 12, course: 'PH101: Fundamentals of Physics', instructor: 'Prof. Thomas Brown', time: '09:00-10:00', day: 5, room: 'Room 301' },
  ];

  // Time slots
  const timeSlots = [
    '09:00-10:00', 
    '10:00-11:00', 
    '11:00-12:00', 
    '12:00-13:00', 
    '13:00-14:00', 
    '14:00-15:00', 
    '15:00-16:00', 
    '16:00-17:00'
  ];

  const prevWeek = () => {
    setCurrentDate(prev => addDays(prev, -7));
  };

  const nextWeek = () => {
    setCurrentDate(prev => addDays(prev, 7));
  };

  const getScheduleForDayAndTime = (day, time) => {
    return scheduleData.filter(item => {
      const [itemStartTime] = item.time.split('-');
      const [slotStartTime] = time.split('-');
      return item.day === day && itemStartTime === slotStartTime;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Schedule</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={prevWeek}>
            <ChevronLeft size={16} />
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <CalendarIcon size={16} />
            <span>Today</span>
          </Button>
          <Button variant="outline" size="sm" onClick={nextWeek}>
            <ChevronRight size={16} />
          </Button>
          
          <div className="ml-2 flex gap-2">
            <Button 
              variant={view === 'day' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setView('day')}
            >
              Day
            </Button>
            <Button 
              variant={view === 'week' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setView('week')}
            >
              Week
            </Button>
            <Button 
              variant={view === 'month' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setView('month')}
            >
              Month
            </Button>
          </div>
        </div>
      </div>

      <p className="text-sm text-muted-foreground text-center">
        Week of {format(startOfCurrentWeek, 'MMMM d, yyyy')}
      </p>

      <AnimatedTransition type="fade">
        <GlassmorphicCard className="overflow-hidden">
          <div className="grid grid-cols-6 h-full">
            {/* Time labels column */}
            <div className="bg-muted/20 border-r border-border">
              <div className="h-12 border-b border-border"></div>
              {timeSlots.map((time, index) => (
                <div key={index} className="h-24 px-2 py-1 text-xs text-muted-foreground flex items-start justify-center border-b border-border">
                  {time}
                </div>
              ))}
            </div>
            
            {/* Weekdays columns */}
            {weekDays.map((day, dayIndex) => (
              <div key={dayIndex} className="border-r border-border last:border-r-0">
                <div className="h-12 border-b border-border flex flex-col items-center justify-center bg-muted/10">
                  <div className="text-sm font-medium">{format(day, 'EEE')}</div>
                  <div className="text-xs text-muted-foreground">{format(day, 'MMM d')}</div>
                </div>
                
                {timeSlots.map((time, timeIndex) => {
                  const scheduleItems = getScheduleForDayAndTime(dayIndex + 1, time);
                  
                  return (
                    <div key={timeIndex} className="h-24 border-b border-border p-1 relative">
                      {scheduleItems.length > 0 ? (
                        scheduleItems.map(item => (
                          <div 
                            key={item.id} 
                            className="absolute inset-1 bg-primary/10 border border-primary/20 rounded-md p-2 text-xs overflow-hidden hover:bg-primary/20 transition-colors cursor-pointer"
                          >
                            <div className="font-medium mb-1">{item.course}</div>
                            <div className="text-muted-foreground">{item.time}</div>
                            <div className="text-muted-foreground truncate">{item.room}</div>
                          </div>
                        ))
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-muted-foreground/40 border border-dashed border-muted-foreground/20 rounded-md">
                          {/* Empty slot */}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </GlassmorphicCard>
      </AnimatedTransition>
    </motion.div>
  );
};

export default Schedule;
