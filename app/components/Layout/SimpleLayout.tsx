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
          width: 100vw;
          max-width: 100vw;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }
        
        .main-content {
          flex: 1;
          width: 100%;
          max-width: 100%;
          padding: 0; /* Remove default padding */
          padding-bottom: 80px; /* Space for bottom menu */
          padding-top: 60px; /* Space for header */
          margin: 0;
          box-sizing: border-box;
        }
        
        /* Ensure proper spacing on different screen sizes */
        @media (max-width: 768px) {
          .main-content {
            padding-bottom: 70px;
            padding-top: 55px;
          }
        }
        
        /* Make sure child elements can use full width */
        .main-content > * {
          max-width: 100%;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
