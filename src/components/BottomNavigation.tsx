import { Home, Heart, BookOpen, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { icon: Home, label: 'Home', id: 'home', path: '/' },
  { icon: Heart, label: 'Health', id: 'health', path: '/health' },
  { icon: BookOpen, label: 'Journal', id: 'journal', path: '/journal' },
  { icon: User, label: 'Profile', id: 'profile', path: '/profile' },
];

export const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const getActiveTab = () => {
    const currentPath = location.pathname;
    const activeItem = navItems.find(item => item.path === currentPath);
    return activeItem?.id || 'home';
  };

  const activeTab = getActiveTab();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-md mx-auto glass-panel rounded-3xl p-2">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`relative flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-white/10 text-lavender shadow-glow-lavender' 
                    : 'text-glass-muted hover:text-glass hover:bg-white/5'
                }`}
              >
                <Icon size={20} />
                <span className="text-xs mt-1 font-medium">{item.label}</span>
                
                {isActive && (
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-lavender rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};