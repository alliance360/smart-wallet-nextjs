'use client';

interface AppHeaderProps {
  onMenuClick?: () => void; // Made optional since we won't use it
}

export default function AppHeader({ onMenuClick }: AppHeaderProps) {
  return (
    <div className="appHeader bg-primary text-light">
      {/* Removed the left div with hamburger menu button */}
      <div className="pageTitle left" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img 
          src="/android-chrome-192x192.png" 
          alt="logo" 
          className="logo" 
          style={{ width: '40px', height: '40px' }}
        /> 
        <span 
          className="brand-text"
          style={{
            fontSize: '24px',
            fontWeight: '700',
            letterSpacing: '-0.5px',
            color: '#ffffff'
          }}
        >
          <span style={{ color: '#99F6E4' }}>Legacy</span>{' '}
          <span style={{ color: '#ffffff' }}>Feeder</span>
        </span>
      </div>
      <div className="right">
        <a href="/notifications" className="headerButton">
          <span className="icon">🔔</span>
          {/* <span className="badge badge-danger">4</span> */}
        </a>
      </div>
    </div>
  );
}