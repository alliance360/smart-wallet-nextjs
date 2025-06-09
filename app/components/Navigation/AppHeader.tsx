'use client';

interface AppHeaderProps {
  onMenuClick?: () => void; // Made optional since we won't use it
}

export default function AppHeader({ onMenuClick }: AppHeaderProps) {
  return (
    <div className="appHeader bg-primary text-light">
      {/* Removed the left div with hamburger menu button */}
      <div className="pageTitle left">
        <img src="/assets/img/A360logo.webp" alt="logo" className="logo" />
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