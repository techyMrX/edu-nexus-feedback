
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Logout = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Here you would typically handle actual logout logic
    // For now, we'll just show a toast notification
    
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account.",
    });
  }, [toast]);
  
  // Redirect to the login page or home page
  return <Navigate to="/" replace />;
};

export default Logout;
