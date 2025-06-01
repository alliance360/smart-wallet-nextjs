import DesktopSidebar from '../Navigation/DesktopSidebar';
import DesktopHeader from '../Navigation/DesktopHeader';

interface DesktopLayoutProps {
  children: React.ReactNode;
}

export default function DesktopLayout({ children }: DesktopLayoutProps) {
  return (
    <div className="desktop-layout" style={{ display: 'flex', minHeight: '100vh' }}>
      <DesktopSidebar />
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <DesktopHeader />
        
        <main style={{ flex: 1 }}>
          {children}
        </main>
      </div>
    </div>
  );
}
