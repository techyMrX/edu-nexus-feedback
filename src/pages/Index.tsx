
import { useEffect } from 'react';
import Dashboard from '../components/Dashboard/Dashboard';
import { motion } from 'framer-motion';

const Index = () => {
  // Add a fade effect when the component mounts
  useEffect(() => {
    document.title = "College Management System | Dashboard";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Dashboard />
    </motion.div>
  );
};

export default Index;
