
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GlassmorphicCard from '@/components/UI/GlassmorphicCard';
import AnimatedTransition from '@/components/UI/AnimatedTransition';
import RatingCard from '@/components/Reviews/RatingCard';
import { Button } from '@/components/ui/button';
import { Search, Filter, Star, BookOpen, Users, School } from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Ratings = () => {
  useEffect(() => {
    document.title = "Ratings & Reviews | College Management System";
  }, []);

  const [activeCategory, setActiveCategory] = useState('all');

  // Mock rating distribution data
  const ratingDistributionData = [
    { name: '5 Stars', value: 42 },
    { name: '4 Stars', value: 28 },
    { name: '3 Stars', value: 15 },
    { name: '2 Stars', value: 10 },
    { name: '1 Star', value: 5 },
  ];

  // Colors for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000'];

  // Mock department ratings data
  const departmentRatingsData = [
    { name: 'CS', rating: 4.5 },
    { name: 'Math', rating: 4.2 },
    { name: 'Eng', rating: 4.7 },
    { name: 'Bio', rating: 4.4 },
    { name: 'Phy', rating: 4.3 },
    { name: 'Chem', rating: 4.1 },
  ];

  // Mock reviews data
  const reviews = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'Computer Science',
      rating: 5,
      comment: 'The Computer Science department provides excellent resources and support. The professors are knowledgeable and always willing to help. The curriculum is challenging but rewarding.',
      date: '2 days ago',
      imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      category: 'department'
    },
    {
      id: 2,
      name: 'Sophia Williams',
      role: 'Mathematics',
      rating: 4,
      comment: 'Advanced Calculus (MT205) was well-structured, but could use more practical examples to help bridge theoretical concepts with real-world applications.',
      date: '1 week ago',
      imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      category: 'course'
    },
    {
      id: 3,
      name: 'Michael Brown',
      role: 'Engineering',
      rating: 5,
      comment: 'Prof. David Wilson is an exceptional instructor who makes complex topics easy to understand. His Digital Signal Processing course is incredibly valuable.',
      date: '2 weeks ago',
      imageUrl: 'https://randomuser.me/api/portraits/men/22.jpg',
      category: 'faculty'
    },
    {
      id: 4,
      name: 'Emma Davis',
      role: 'Biotechnology',
      rating: 4,
      comment: 'The Biotechnology program offers cutting-edge research opportunities. The lab facilities are state-of-the-art, and the faculty are experts in their fields.',
      date: '3 weeks ago',
      imageUrl: 'https://randomuser.me/api/portraits/women/28.jpg',
      category: 'department'
    },
    {
      id: 5,
      name: 'James Wilson',
      role: 'Physics',
      rating: 3,
      comment: 'Fundamentals of Physics (PH101) covers important concepts, but the pace can be quite fast for beginners. More tutorial sessions would be helpful.',
      date: '1 month ago',
      imageUrl: 'https://randomuser.me/api/portraits/men/42.jpg',
      category: 'course'
    },
  ];

  // Filter reviews based on active category
  const filteredReviews = activeCategory === 'all' 
    ? reviews 
    : reviews.filter(review => review.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Ratings & Reviews</h1>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Filter size={16} />
            Filter
          </Button>
          <Button size="sm" className="flex items-center gap-2">
            <Star size={16} />
            Add Review
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AnimatedTransition type="scale" delay={0.1}>
          <GlassmorphicCard className="p-6 col-span-1 lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-medium">Rating by Department</h3>
                <p className="text-sm text-muted-foreground">Average ratings across academic departments</p>
              </div>
              <School size={20} className="text-primary" />
            </div>
            
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={departmentRatingsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" domain={[0, 5]} />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'rgba(255, 255, 255, 0.8)', 
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                      border: '1px solid #f3f4f6'
                    }} 
                    formatter={(value) => [`${value}/5`, 'Rating']}
                  />
                  <Bar 
                    dataKey="rating" 
                    fill="#3b82f6" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </GlassmorphicCard>
        </AnimatedTransition>

        <AnimatedTransition type="scale" delay={0.2}>
          <GlassmorphicCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-medium">Rating Distribution</h3>
                <p className="text-sm text-muted-foreground">Overview of ratings spread</p>
              </div>
              <Star size={20} className="text-primary" />
            </div>
            
            <div className="h-60">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ratingDistributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    labelLine={false}
                  >
                    {ratingDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-5 gap-1 mt-4 text-center">
              {[5, 4, 3, 2, 1].map((num) => (
                <div key={num} className="flex flex-col items-center">
                  <div className="flex items-center">
                    <Star size={14} className="fill-current text-amber-400" />
                    <span className="text-xs ml-1">{num}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {ratingDistributionData[5 - num].value}
                  </span>
                </div>
              ))}
            </div>
          </GlassmorphicCard>
        </AnimatedTransition>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="Search reviews..."
            className="rounded-md border border-input bg-background py-2 pl-10 pr-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
          />
        </div>

        <div className="flex gap-2">
          <Button 
            variant={activeCategory === 'all' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setActiveCategory('all')}
          >
            All
          </Button>
          <Button 
            variant={activeCategory === 'course' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setActiveCategory('course')}
            className="flex items-center gap-1"
          >
            <BookOpen size={14} />
            Courses
          </Button>
          <Button 
            variant={activeCategory === 'faculty' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setActiveCategory('faculty')}
            className="flex items-center gap-1"
          >
            <Users size={14} />
            Faculty
          </Button>
          <Button 
            variant={activeCategory === 'department' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setActiveCategory('department')}
            className="flex items-center gap-1"
          >
            <School size={14} />
            Departments
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {filteredReviews.map((review, index) => (
          <AnimatedTransition key={review.id} type="slide" delay={index * 0.1}>
            <RatingCard
              name={review.name}
              role={review.role}
              rating={review.rating}
              comment={review.comment}
              date={review.date}
              imageUrl={review.imageUrl}
            />
          </AnimatedTransition>
        ))}
      </div>
    </motion.div>
  );
};

export default Ratings;
