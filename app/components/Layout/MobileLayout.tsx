// app/components/Layout/MobileLayout.tsx
import { useState } from 'react';
import AppHeader from '../Navigation/AppHeader';
import AppBottomMenu from '../Navigation/AppBottomMenu';
import SidebarPanel from '../Navigation/SidebarPanel';

interface MobileLayoutProps {
  children: React.ReactNode;
}

export default function MobileLayout({ children }: MobileLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="mobile-layout">
      <AppHeader onMenuClick={() => setSidebarOpen(true)} />
      
      <div id="appCapsule">
        {children}
      </div>

      <AppBottomMenu />
      
      <SidebarPanel 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
    </div>
  );
}