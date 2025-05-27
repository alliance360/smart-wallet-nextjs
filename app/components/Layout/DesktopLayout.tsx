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
        
        <main style={{ flex: 1, padding: '2rem' }}>
          {children}
        </main>
      </div>
    </div>
  );
}
