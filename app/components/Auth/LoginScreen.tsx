'use client';

import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client } from "../../client";

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

export default function LoginScreen({ onLoginSuccess }: LoginScreenProps) {
  const account = useActiveAccount();

  // Auto-redirect when wallet connects
  if (account) {
    onLoginSuccess();
    return null;
  }

  return (
    <div className="login-screen">
      <div className="login-container">
        {/* Your wallet app branding */}
        <div className="login-header">
          <img src="/assets/img/logo.png" alt="Smart Wallet" className="login-logo" />
          <h1>Smart Wallet</h1>
          <p>Connect your wallet to get started</p>
        </div>

        {/* Thirdweb Connect Button */}
        <div className="connect-button-container">
          <ConnectButton
            client={client}
            appMetadata={{
              name: "Smart Wallet",
              url: "https://finance.alliance360.club",
              description: "Your digital wallet application",
              logoUrl: "/assets/img/icon/192x192.png",
            }}
            theme="light"
            connectModal={{
              size: "wide",
              titleIcon: "/assets/img/icon/192x192.png",
            }}
          />
        </div>

        {/* Optional: Manual wallet options */}
        <div className="wallet-options">
          <p>Supported wallets:</p>
          <div className="wallet-icons">
            <span>MetaMask</span>
            <span>WalletConnect</span>
            <span>Coinbase</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .login-screen {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #6236FF 0%, #4318FF 100%);
          padding: 2rem;
        }
        
        .login-container {
          background: white;
          padding: 3rem 2rem;
          border-radius: 20px;
          text-align: center;
          max-width: 400px;
          width: 100%;
          box-shadow: 0 20px 40px rgba(98, 54, 255, 0.3);
        }
        
        .login-header {
          margin-bottom: 2rem;
        }
        
        .login-logo {
          width: 80px;
          height: 80px;
          margin-bottom: 1rem;
        }
        
        .login-header h1 {
          font-size: 2rem;
          color: #1a1a1a;
          margin-bottom: 0.5rem;
        }
        
        .login-header p {
          color: #666;
          font-size: 1rem;
        }
        
        .connect-button-container {
          margin: 2rem 0;
        }
        
        .wallet-options {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #eee;
        }
        
        .wallet-icons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 1rem;
        }
        
        .wallet-icons span {
          background: #f8f9fa;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.875rem;
          color: #666;
        }
      `}</style>
    </div>
  );
}
