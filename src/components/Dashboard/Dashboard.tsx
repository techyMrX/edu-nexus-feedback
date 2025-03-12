
import { useState } from 'react';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  Star, 
  TrendingUp,
  BarChart3,
  Activity
} from 'lucide-react';
import StatCard from './StatCard';
import RatingCard from '../Reviews/RatingCard';
import GlassmorphicCard from '../UI/GlassmorphicCard';
import AnimatedTransition from '../UI/AnimatedTransition';
import { Button } from '@/components/ui/button';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const attendanceData = [
  { name: 'Mon', attendance: 92 },
  { name: 'Tue', attendance: 88 },
  { name: 'Wed', attendance: 95 },
  { name: 'Thu', attendance: 90 },
  { name: 'Fri', attendance: 85 },
];

const performanceData = [
  { name: 'CS', score: 85 },
  { name: 'Math', score: 78 },
  { name: 'Eng', score: 90 },
  { name: 'Phy', score: 82 },
  { name: 'Chem', score: 75 },
];

const ratingDistributionData = [
  { name: '5 Stars', value: 42 },
  { name: '4 Stars', value: 28 },
  { name: '3 Stars', value: 15 },
  { name: '2 Stars', value: 10 },
  { name: '1 Star', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF0000'];

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  return (
    <div className="space-y-8 px-4">
      <AnimatedTransition type="fade">
        <div className="flex items-center justify-between py-2">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button
              variant={selectedPeriod === 'day' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedPeriod('day')}
              className="text-xs h-8"
            >
              Day
            </Button>
            <Button
              variant={selectedPeriod === 'week' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedPeriod('week')}
              className="text-xs h-8"
            >
              Week
            </Button>
            <Button
              variant={selectedPeriod === 'month' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedPeriod('month')}
              className="text-xs h-8"
            >
              Month
            </Button>
            <Button
              variant={selectedPeriod === 'year' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedPeriod('year')}
              className="text-xs h-8"
            >
              Year
            </Button>
          </div>
        </div>
      </AnimatedTransition>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Students"
          value="2,856"
          icon={<GraduationCap size={20} />}
          trend={{ value: 12, positive: true }}
          index={0}
        />
        <StatCard
          title="Faculty Members"
          value="148"
          icon={<Users size={20} />}
          trend={{ value: 4, positive: true }}
          index={1}
        />
        <StatCard
          title="Active Courses"
          value="64"
          icon={<BookOpen size={20} />}
          trend={{ value: 0, positive: true }}
          index={2}
        />
        <StatCard
          title="Average Rating"
          value="4.8"
          icon={<Star size={20} />}
          trend={{ value: 0.3, positive: true }}
          index={3}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <AnimatedTransition type="scale" delay={4}>
          <GlassmorphicCard className="p-6 col-span-1 lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-medium">Performance Insights</h3>
                <p className="text-sm text-muted-foreground">Academic progress over time</p>
              </div>
              <TrendingUp size={20} className="text-primary" />
            </div>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'rgba(255, 255, 255, 0.8)', 
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                      border: '1px solid #f3f4f6'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="attendance" 
                    stroke="#3b82f6" 
                    strokeWidth={2} 
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </GlassmorphicCard>
        </AnimatedTransition>

        <AnimatedTransition type="scale" delay={5}>
          <GlassmorphicCard className="p-6 row-span-1">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-medium">Rating Distribution</h3>
                <p className="text-sm text-muted-foreground">Student feedback overview</p>
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
          </GlassmorphicCard>
        </AnimatedTransition>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnimatedTransition type="slide" delay={6}>
          <GlassmorphicCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-medium">Subject Performance</h3>
                <p className="text-sm text-muted-foreground">Average scores by subject</p>
              </div>
              <BarChart3 size={20} className="text-primary" />
            </div>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'rgba(255, 255, 255, 0.8)', 
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                      border: '1px solid #f3f4f6'
                    }} 
                  />
                  <Bar 
                    dataKey="score" 
                    fill="#3b82f6" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </GlassmorphicCard>
        </AnimatedTransition>

        <AnimatedTransition type="slide" delay={7}>
          <GlassmorphicCard className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-medium">Recent Reviews</h3>
                <p className="text-sm text-muted-foreground">Latest student feedback</p>
              </div>
              <Activity size={20} className="text-primary" />
            </div>
            
            <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
              <RatingCard
                name="Alex Johnson"
                role="Computer Science"
                rating={5}
                comment="The faculty's teaching methods are innovative and engaging. The interactive sessions have significantly improved my understanding of complex topics."
                date="2 days ago"
                imageUrl="https://randomuser.me/api/portraits/men/32.jpg"
              />
              <RatingCard
                name="Sophia Williams"
                role="Mathematics"
                rating={4}
                comment="Good course structure, but could use more practical examples to help bridge theoretical concepts with real-world applications."
                date="1 week ago"
                imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
              />
              <RatingCard
                name="Michael Brown"
                role="Engineering"
                rating={5}
                comment="Exceptional course content and faculty support. The lab facilities are well-equipped and provide hands-on experience."
                date="2 weeks ago"
                imageUrl="https://randomuser.me/api/portraits/men/22.jpg"
              />
            </div>
          </GlassmorphicCard>
        </AnimatedTransition>
      </div>
    </div>
  );
};

export default Dashboard;
