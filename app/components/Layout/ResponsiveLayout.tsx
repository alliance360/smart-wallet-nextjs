'use client';

import { useState, useEffect } from 'react';
import MobileLayout from './MobileLayout';
import DesktopLayout from './DesktopLayout';

interface ResponsiveLayoutProps {
  children: React.ReactNode;
}

export default function ResponsiveLayout({ children }: ResponsiveLayoutProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 768);
      setIsLoaded(true);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  if (!isLoaded) {
    return (
      <div id="loader">
        <img src="/assets/img/loading-icon.png" alt="icon" className="loading-icon" />
      </div>
    );
  }

  return isMobile ? (
    <MobileLayout>{children}</MobileLayout>
  ) : (
    <DesktopLayout>{children}</DesktopLayout>
  );
}
