'use client';

import { ConnectButton } from "thirdweb/react";
import { client } from "../../client";
import { wallets } from "../../wallets";

// Make sure this interface is defined
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
        
        {/* ConnectButton for Mobile with Polygon theme */}
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
                background: "linear-gradient(135deg, #8247e5 0%, #6f42c1 100%)",
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
                boxShadow: "0 2px 8px rgba(130, 71, 229, 0.3)",
              }
            }}
            detailsButton={{
              style: {
                background: "linear-gradient(135deg, #8247e5 0%, #6f42c1 100%)",
                color: "white", 
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                padding: "0",
                fontSize: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                boxShadow: "0 2px 8px rgba(130, 71, 229, 0.3)",
              }
            }}
            theme="dark"
          />
        </div>
      </div>
    </div>
  );
}