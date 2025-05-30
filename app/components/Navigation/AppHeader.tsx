'use client';

import { ConnectButton } from "thirdweb/react";
import { defineChain } from "thirdweb";
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
        
        {/* Enhanced ConnectButton for Polygon with supported tokens */}
        <div className="headerButton">
          <ConnectButton
            client={client}
            chain={defineChain(137)} // Polygon mainnet chain ID
            wallets={wallets}
            supportedTokens={{
              // Polygon mainnet supported tokens
              137: [
                {
                  address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", // USDT on Polygon
                  name: "USD Tether",
                  symbol: "USDT",
                },
                {
                  address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC on Polygon
                  name: "USD Coin", 
                  symbol: "USDC",
                },
                {
                  address: "0x61590e467DdE0043dDD499F4c10b2a78dAEc3f7a", // PAX on Polygon
                  name: "PAX Stablecoin",
                  symbol: "PAX",
                },
              ],
            }}
            accountAbstraction={{
              chain: defineChain(137), // Polygon mainnet
              sponsorGas: true, // Sponsor gas fees for users
            }}
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