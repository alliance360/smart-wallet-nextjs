// app/components/Layout/SimpleLayout.tsx
'use client';

import AppHeader from '../Navigation/AppHeader';
import AppBottomMenu from '../Navigation/AppBottomMenu';

interface SimpleLayoutProps {
  children: React.ReactNode;
}

export default function SimpleLayout({ children }: SimpleLayoutProps) {
  return (
    <div className="app-container">
      <AppHeader />
      
      <main id="appCapsule" className="main-content">
        {children}
      </main>

      <AppBottomMenu />
      
      <style jsx>{`
        .app-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          max-width: 100vw;
          overflow-x: hidden;
        }
        
        .main-content {
          flex: 1;
          padding-bottom: 80px; /* Space for bottom menu */
          padding-top: 60px; /* Space for header */
        }
        
        /* Ensure proper spacing on different screen sizes */
        @media (max-width: 768px) {
          .main-content {
            padding-bottom: 70px;
            padding-top: 55px;
          }
        }
      `}</style>
    </div>
  );
}
