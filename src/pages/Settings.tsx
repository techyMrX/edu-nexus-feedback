
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GlassmorphicCard from '@/components/UI/GlassmorphicCard';
import AnimatedTransition from '@/components/UI/AnimatedTransition';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { 
  Bell, 
  Moon, 
  Sun, 
  UserCog, 
  Shield, 
  Mail,
  Key,
  RefreshCw,
  Globe,
  LogOut
} from 'lucide-react';

const Settings = () => {
  useEffect(() => {
    document.title = "Settings | College Management System";
  }, []);

  const [activeTab, setActiveTab] = useState('account');
  
  // Mock notification settings
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [appNotifications, setAppNotifications] = useState(true);
  const [newCourseAlerts, setNewCourseAlerts] = useState(true);
  const [gradesPublished, setGradesPublished] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Settings</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        <div className="md:col-span-2">
          <GlassmorphicCard className="p-4">
            <nav className="space-y-1">
              <Button
                variant={activeTab === 'account' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('account')}
              >
                <UserCog className="mr-2 h-4 w-4" />
                Account
              </Button>
              <Button
                variant={activeTab === 'notifications' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('notifications')}
              >
                <Bell className="mr-2 h-4 w-4" />
                Notifications
              </Button>
              <Button
                variant={activeTab === 'appearance' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('appearance')}
              >
                <Sun className="mr-2 h-4 w-4" />
                Appearance
              </Button>
              <Button
                variant={activeTab === 'security' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('security')}
              >
                <Shield className="mr-2 h-4 w-4" />
                Security
              </Button>
              <Button
                variant={activeTab === 'language' ? 'default' : 'ghost'}
                className="w-full justify-start"
                onClick={() => setActiveTab('language')}
              >
                <Globe className="mr-2 h-4 w-4" />
                Language
              </Button>
              <div className="pt-4 border-t border-border mt-4">
                <Button
                  variant="destructive"
                  className="w-full justify-start"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </div>
            </nav>
          </GlassmorphicCard>
        </div>

        <div className="md:col-span-4">
          <AnimatedTransition type="fade">
            {activeTab === 'account' && (
              <GlassmorphicCard className="p-6">
                <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-xl">JS</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">John Smith</h3>
                    <p className="text-sm text-muted-foreground">john.smith@example.com</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Change Avatar
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <input 
                      type="text" 
                      value="John Smith" 
                      className="rounded-md border border-input bg-background py-2 px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <input 
                      type="email" 
                      value="john.smith@example.com" 
                      className="rounded-md border border-input bg-background py-2 px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <input 
                      type="tel" 
                      value="+1 (555) 123-4567" 
                      className="rounded-md border border-input bg-background py-2 px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    <label className="text-sm font-medium">Department</label>
                    <select className="rounded-md border border-input bg-background py-2 px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option>Computer Science</option>
                      <option>Mathematics</option>
                      <option>Engineering</option>
                      <option>Physics</option>
                      <option>Chemistry</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-6 flex gap-3">
                  <Button>Save Changes</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
              </GlassmorphicCard>
            )}

            {activeTab === 'notifications' && (
              <GlassmorphicCard className="p-6">
                <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium">Email Notifications</h3>
                      <p className="text-xs text-muted-foreground">Receive email notifications</p>
                    </div>
                    <Switch 
                      checked={emailNotifications} 
                      onCheckedChange={setEmailNotifications} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium">App Notifications</h3>
                      <p className="text-xs text-muted-foreground">Receive in-app notifications</p>
                    </div>
                    <Switch 
                      checked={appNotifications} 
                      onCheckedChange={setAppNotifications} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium">New Course Alerts</h3>
                      <p className="text-xs text-muted-foreground">Be notified when new courses are available</p>
                    </div>
                    <Switch 
                      checked={newCourseAlerts} 
                      onCheckedChange={setNewCourseAlerts} 
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium">Grades Published</h3>
                      <p className="text-xs text-muted-foreground">Be notified when new grades are published</p>
                    </div>
                    <Switch 
                      checked={gradesPublished} 
                      onCheckedChange={setGradesPublished} 
                    />
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button>Save Preferences</Button>
                </div>
              </GlassmorphicCard>
            )}

            {activeTab === 'appearance' && (
              <GlassmorphicCard className="p-6">
                <h2 className="text-xl font-semibold mb-4">Appearance Settings</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium">Dark Mode</h3>
                      <p className="text-xs text-muted-foreground">Switch between light and dark mode</p>
                    </div>
                    <div className="flex items-center">
                      <Sun size={16} className="mr-2 text-muted-foreground" />
                      <Switch 
                        checked={darkMode} 
                        onCheckedChange={setDarkMode} 
                      />
                      <Moon size={16} className="ml-2 text-muted-foreground" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button>Save Preferences</Button>
                </div>
              </GlassmorphicCard>
            )}

            {activeTab === 'security' && (
              <GlassmorphicCard className="p-6">
                <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-medium mb-2">Change Password</h3>
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 gap-2">
                        <label className="text-sm font-medium">Current Password</label>
                        <div className="relative">
                          <input 
                            type="password" 
                            className="rounded-md border border-input bg-background py-2 px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                          />
                          <Key className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-2">
                        <label className="text-sm font-medium">New Password</label>
                        <div className="relative">
                          <input 
                            type="password" 
                            className="rounded-md border border-input bg-background py-2 px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                          />
                          <Key className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-2">
                        <label className="text-sm font-medium">Confirm New Password</label>
                        <div className="relative">
                          <input 
                            type="password" 
                            className="rounded-md border border-input bg-background py-2 px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                          />
                          <Key className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                    
                    <Button className="mt-3">Update Password</Button>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <h3 className="text-base font-medium mb-2">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground mb-3">Add an extra layer of security to your account</p>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Shield size={16} />
                      Enable 2FA
                    </Button>
                  </div>
                  
                  <div className="border-t border-border pt-4">
                    <h3 className="text-base font-medium mb-2">Recovery Email</h3>
                    <div className="grid grid-cols-1 gap-2">
                      <label className="text-sm font-medium">Backup Email Address</label>
                      <div className="relative">
                        <input 
                          type="email" 
                          placeholder="backup@example.com"
                          className="rounded-md border border-input bg-background py-2 px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                        />
                        <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <Button className="mt-3">Save Email</Button>
                  </div>
                </div>
              </GlassmorphicCard>
            )}

            {activeTab === 'language' && (
              <GlassmorphicCard className="p-6">
                <h2 className="text-xl font-semibold mb-4">Language Settings</h2>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-2">
                    <label className="text-sm font-medium">Interface Language</label>
                    <select className="rounded-md border border-input bg-background py-2 px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option>English (US)</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                      <option>Chinese (Simplified)</option>
                      <option>Japanese</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    <label className="text-sm font-medium">Date Format</label>
                    <select className="rounded-md border border-input bg-background py-2 px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option>MM/DD/YYYY</option>
                      <option>DD/MM/YYYY</option>
                      <option>YYYY/MM/DD</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    <label className="text-sm font-medium">Time Format</label>
                    <select className="rounded-md border border-input bg-background py-2 px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option>12-hour (1:30 PM)</option>
                      <option>24-hour (13:30)</option>
                    </select>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button>Save Preferences</Button>
                </div>
              </GlassmorphicCard>
            )}
          </AnimatedTransition>
        </div>
      </div>
    </motion.div>
  );
};

export default Settings;
