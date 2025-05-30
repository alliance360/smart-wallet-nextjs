'use client';

interface AppHeaderProps {
  onMenuClick: () => void;
}

export default function AppHeader({ onMenuClick }: AppHeaderProps) {
  return (
    <div className="appHeader bg-primary text-light">
      <div className="left">
        <button 
          className="headerButton" 
          onClick={onMenuClick}
        >
          <span>☰</span>
        </button>
      </div>
      <div className="pageTitle">
        <img src="/assets/img/logo.png" alt="logo" className="logo" />
      </div>
      <div className="right">
        <a href="/notifications" className="headerButton">
          <span className="icon">🔔</span>
          <span className="badge badge-danger">4</span>
        </a>
        {/* ConnectButton removed from header - now in WalletCard */}
      </div>
    </div>
  );
}