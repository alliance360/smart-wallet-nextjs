// app/components/Layout/MobileLayout.tsx
import AppHeader from '../Navigation/AppHeader';
import AppBottomMenu from '../Navigation/AppBottomMenu';

interface MobileLayoutProps {
  children: React.ReactNode;
}

export default function MobileLayout({ children }: MobileLayoutProps) {
  return (
    <div className="mobile-layout">
      <AppHeader />
      
      <div id="appCapsule">
        {children}
      </div>

      <AppBottomMenu />
    </div>
  );
}