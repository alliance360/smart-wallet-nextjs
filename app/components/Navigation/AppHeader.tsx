import { ConnectButton } from "thirdweb/react";
import { client } from "../../client";
import { wallets } from "../../wallets";

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
        
        {/* Replace the original avatar button with ConnectButton */}
        <div className="headerButton">
          <ConnectButton
            client={client}
            wallets={wallets}
            appMetadata={{
              name: "Smart Wallet",
              url: "https://finance.alliance360.club",
              description: "Your digital wallet application",
              logoUrl: "/assets/img/icon/192x192.png",
            }}
            connectModal={{ 
              size: "compact",
              titleIcon: "/assets/img/icon/192x192.png",
            }}
            connectButton={{
              label: "Connect",
              style: {
                background: "rgba(255,255,255,0.2)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                padding: "0",
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }
            }}
            detailsButton={{
              style: {
                background: "rgba(255,255,255,0.2)",
                color: "white", 
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                padding: "0",
                fontSize: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative"
              }
            }}
            theme="dark"
          />
        </div>
      </div>
    </div>
  );
}
