
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import GlassmorphicCard from '@/components/UI/GlassmorphicCard';
import AnimatedTransition from '@/components/UI/AnimatedTransition';
import { Button } from '@/components/ui/button';
import { Search, UserPlus, Filter, Download } from 'lucide-react';

const Students = () => {
  useEffect(() => {
    document.title = "Students | College Management System";
  }, []);

  // Mock student data
  const students = [
    { id: 1, name: 'Alex Johnson', rollNo: 'CS001', course: 'Computer Science', year: '2nd Year', attendance: '92%', performance: 'A' },
    { id: 2, name: 'Sophia Williams', rollNo: 'MT002', course: 'Mathematics', year: '3rd Year', attendance: '88%', performance: 'A-' },
    { id: 3, name: 'Michael Brown', rollNo: 'EG003', course: 'Engineering', year: '4th Year', attendance: '95%', performance: 'A+' },
    { id: 4, name: 'Emma Davis', rollNo: 'BT004', course: 'Biotechnology', year: '2nd Year', attendance: '87%', performance: 'B+' },
    { id: 5, name: 'James Wilson', rollNo: 'PH005', course: 'Physics', year: '1st Year', attendance: '91%', performance: 'A-' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Students</h1>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Filter size={16} />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Download size={16} />
            Export
          </Button>
          <Button size="sm" className="flex items-center gap-2">
            <UserPlus size={16} />
            Add Student
          </Button>
        </div>
      </div>

      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <input
          type="text"
          placeholder="Search students..."
          className="rounded-md border border-input bg-background py-2 pl-10 pr-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
        />
      </div>

      <AnimatedTransition type="fade">
        <GlassmorphicCard className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-muted/50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Roll No.</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Course</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Year</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Attendance</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Performance</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-background divide-y divide-border">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{student.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{student.rollNo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{student.course}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{student.year}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{student.attendance}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{student.performance}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                      <Button variant="ghost" size="sm">View</Button>
                      <Button variant="ghost" size="sm">Edit</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassmorphicCard>
      </AnimatedTransition>
    </motion.div>
  );
};

export default Students;
