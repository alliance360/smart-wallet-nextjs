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
          <ion-icon name="menu-outline"></ion-icon>
        </button>
      </div>
      <div className="pageTitle">
        <img src="/assets/img/logo.png" alt="logo" className="logo" />
      </div>
      <div className="right">
        <a href="/notifications" className="headerButton">
          <ion-icon className="icon" name="notifications-outline"></ion-icon>
          <span className="badge badge-danger">4</span>
        </a>
        <a href="/settings" className="headerButton">
          <img src="/assets/img/sample/avatar/avatar1.jpg" alt="image" className="imaged w32" />
          <span className="badge badge-danger">6</span>
        </a>
      </div>
    </div>
  );
}
