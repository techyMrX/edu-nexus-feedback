
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import GlassmorphicCard from '@/components/UI/GlassmorphicCard';
import AnimatedTransition from '@/components/UI/AnimatedTransition';
import { Button } from '@/components/ui/button';
import { Search, UserPlus, Filter, Download } from 'lucide-react';

const Faculty = () => {
  useEffect(() => {
    document.title = "Faculty | College Management System";
  }, []);

  // Mock faculty data
  const faculty = [
    { id: 1, name: 'Dr. Robert Smith', department: 'Computer Science', designation: 'Professor', experience: '15 years', qualifications: 'Ph.D', contact: 'robert@example.com' },
    { id: 2, name: 'Dr. Emily Johnson', department: 'Mathematics', designation: 'Associate Professor', experience: '10 years', qualifications: 'Ph.D', contact: 'emily@example.com' },
    { id: 3, name: 'Prof. David Wilson', department: 'Engineering', designation: 'Assistant Professor', experience: '8 years', qualifications: 'M.Tech, Ph.D', contact: 'david@example.com' },
    { id: 4, name: 'Dr. Sarah Williams', department: 'Biotechnology', designation: 'Professor', experience: '12 years', qualifications: 'Ph.D', contact: 'sarah@example.com' },
    { id: 5, name: 'Prof. Thomas Brown', department: 'Physics', designation: 'Associate Professor', experience: '9 years', qualifications: 'Ph.D', contact: 'thomas@example.com' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Faculty</h1>
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
            Add Faculty
          </Button>
        </div>
      </div>

      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <input
          type="text"
          placeholder="Search faculty..."
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
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Department</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Designation</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Experience</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Qualifications</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Contact</th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-background divide-y divide-border">
                {faculty.map((member) => (
                  <tr key={member.id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{member.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{member.department}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{member.designation}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{member.experience}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{member.qualifications}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{member.contact}</td>
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

export default Faculty;
