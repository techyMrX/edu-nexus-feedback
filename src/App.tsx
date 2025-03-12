
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import Students from "./pages/Students";
import Faculty from "./pages/Faculty";
import Courses from "./pages/Courses";
import Schedule from "./pages/Schedule";
import Ratings from "./pages/Ratings";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import NotFound from "./pages/NotFound";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";

const queryClient = new QueryClient();

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-background">
            <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
            <Sidebar isOpen={isSidebarOpen} />
            
            <main className={`pt-16 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-20'}`}>
              <div className="px-4 py-6 max-w-7xl mx-auto">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/students" element={<Students />} />
                  <Route path="/faculty" element={<Faculty />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/schedule" element={<Schedule />} />
                  <Route path="/ratings" element={<Ratings />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/logout" element={<Logout />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </main>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
