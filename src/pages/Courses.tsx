
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GlassmorphicCard from '@/components/UI/GlassmorphicCard';
import AnimatedTransition from '@/components/UI/AnimatedTransition';
import { Button } from '@/components/ui/button';
import { Search, PlusCircle, Filter, BookOpen, Users, Clock } from 'lucide-react';

const Courses = () => {
  useEffect(() => {
    document.title = "Courses | College Management System";
  }, []);

  const [activeTab, setActiveTab] = useState('all');

  // Mock courses data
  const courses = [
    { id: 1, code: 'CS101', name: 'Introduction to Computer Science', department: 'Computer Science', credits: 4, students: 45, instructor: 'Dr. Robert Smith', schedule: 'Mon, Wed 10:00-11:30' },
    { id: 2, code: 'MT205', name: 'Advanced Calculus', department: 'Mathematics', credits: 3, students: 32, instructor: 'Dr. Emily Johnson', schedule: 'Tue, Thu 09:00-10:30' },
    { id: 3, code: 'EG304', name: 'Digital Signal Processing', department: 'Engineering', credits: 4, students: 28, instructor: 'Prof. David Wilson', schedule: 'Mon, Wed, Fri 13:00-14:00' },
    { id: 4, code: 'BT202', name: 'Molecular Biology', department: 'Biotechnology', credits: 3, students: 35, instructor: 'Dr. Sarah Williams', schedule: 'Tue, Thu 14:00-15:30' },
    { id: 5, code: 'PH101', name: 'Fundamentals of Physics', department: 'Physics', credits: 4, students: 50, instructor: 'Prof. Thomas Brown', schedule: 'Mon, Wed, Fri 09:00-10:00' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Courses</h1>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Filter size={16} />
            Filter
          </Button>
          <Button size="sm" className="flex items-center gap-2">
            <PlusCircle size={16} />
            Add Course
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="Search courses..."
            className="rounded-md border border-input bg-background py-2 pl-10 pr-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
          />
        </div>

        <div className="flex gap-2">
          <Button 
            variant={activeTab === 'all' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setActiveTab('all')}
          >
            All
          </Button>
          <Button 
            variant={activeTab === 'active' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setActiveTab('active')}
          >
            Active
          </Button>
          <Button 
            variant={activeTab === 'upcoming' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming
          </Button>
          <Button 
            variant={activeTab === 'archived' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setActiveTab('archived')}
          >
            Archived
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses.map((course) => (
          <AnimatedTransition key={course.id} type="scale" delay={course.id * 0.1}>
            <GlassmorphicCard className="p-5">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {course.code}
                  </span>
                  <h3 className="text-lg font-medium mt-2">{course.name}</h3>
                </div>
                <div className="bg-muted/50 p-2 rounded-full">
                  <BookOpen size={18} className="text-primary" />
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                Department of {course.department}
              </p>

              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <Users size={16} className="mr-2 text-muted-foreground" />
                  <span>{course.students} Students</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock size={16} className="mr-2 text-muted-foreground" />
                  <span>{course.schedule}</span>
                </div>
              </div>

              <div className="text-sm mt-4">
                <span className="text-muted-foreground">Instructor:</span> {course.instructor}
              </div>

              <div className="flex gap-2 mt-5">
                <Button variant="outline" size="sm" className="flex-1">View Details</Button>
                <Button size="sm" className="flex-1">Enroll</Button>
              </div>
            </GlassmorphicCard>
          </AnimatedTransition>
        ))}
      </div>
    </motion.div>
  );
};

export default Courses;
