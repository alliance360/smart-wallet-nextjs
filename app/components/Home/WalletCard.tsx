'use client';

import { useState } from 'react';
import { useActiveAccount, useWalletBalance } from "thirdweb/react";
import { ConnectButton } from "thirdweb/react";
import { defineChain } from "thirdweb";
import { polygon } from "thirdweb/chains";
import { client } from "../../client";
import { wallets } from "../../wallets";

const SimpleModal = ({ 
  isOpen, 
  onClose, 
  title 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  title: string; 
}) => {
  if (!isOpen) return null;
  
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'white',
          padding: '2rem',
          borderRadius: '8px',
          maxWidth: '400px',
          width: '90%'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>{title}</h3>
        <p>Polygon functionality coming soon...</p>
        <button 
          onClick={onClose}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#163563',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default function WalletCard() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const account = useActiveAccount();
  
  const { data: balance, isLoading } = useWalletBalance({
    client,
    chain: polygon,
    address: account?.address,
  });

  const displayBalance = account && balance && !isLoading ? 
    `$ ${parseFloat(balance.displayValue).toFixed(4)}` : 
    "$ 0.00";

  return (
    <>
      <div className="section wallet-card-section pt-1">
        <div className="wallet-card">
          {/* Balance */}
          <div className="balance">
            <div className="left">
              <span className="title">Total Balance</span>
              <h1 className="total">{displayBalance}</h1>
              {account && (
                <p style={{ fontSize: '14px', opacity: 0.8, margin: '5px 0 0 0' }}>
                  {account.address.slice(0, 8)}...{account.address.slice(-6)}
                  <span style={{ color: '#163563', marginLeft: '8px', fontWeight: '800' }}>
                    Polygon
                  </span>
                </p>
              )}
            </div>
            <div className="right">
              {/* Replace plus button with ConnectButton */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ConnectButton
                  client={client}
                  chain={defineChain(137)}
                  wallets={wallets}
                  supportedTokens={{
                    137: [
                      {
                        address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
                        name: "USD Tether",
                        symbol: "USDT",
                      },
                      {
                        address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
                        name: "USD Coin",
                        symbol: "USDC",
                      },
                      {
                        address: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
                        name: "Dai Stablecoin",
                        symbol: "DAI",
                      },
                    ],
                  }}
                  accountAbstraction={{
                    chain: defineChain(137),
                    sponsorGas: true,
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
                      background: "linear-gradient(135deg, #163563 0%, #8494A8 100%)",
                      color: "white",
                      border: "none",
                      borderRadius: "12px",
                      width: "auto",
                      height: "40px",
                      padding: "0 16px",
                      fontSize: "16px",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 12px rgba(22, 53, 99, 0.3)",
                    }
                  }}
                  detailsButton={{
                    style: {
                      background: "linear-gradient(135deg, #163563 0%, #8494A8 100%)",
                      color: "white", 
                      border: "none",
                      borderRadius: "12px",
                      width: "auto",
                      height: "40px",
                      padding: "0 12px",
                      fontSize: "10px",
                      fontWeight: "500",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 12px rgba(22, 53, 99, 0.3)",
                    }
                  }}
                  theme="dark"
                />
              </div>
            </div>
          </div>

          {/* Rest of your wallet footer unchanged */}
          <div className="wallet-footer">
            <div className="item">
              <div onClick={() => setActiveModal('withdraw')}>
                <span style={{ fontSize: '48px' }}>🏪</span>
                <strong>Marketplace</strong>
              </div>
            </div>
            <div className="item">
              <button onClick={() => setActiveModal('send')}>
                <span style={{ fontSize: '48px' }}>⚙️</span>
                <strong>Back-Office</strong>
              </button>
            </div>
            <div className="item">
              <button onClick={() => setActiveModal('send')}>
                <span style={{ fontSize: '48px' }}>💰</span>
                <strong>Crowdfunding</strong>
              </button>
            </div>
            <div className="item">
              <button onClick={() => setActiveModal('exchange')}>
                <span style={{ fontSize: '48px' }}>🔀</span>
                <strong>Exchange</strong>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals unchanged */}
      <SimpleModal 
        isOpen={activeModal === 'withdraw'} 
        onClose={() => setActiveModal(null)} 
        title="Withdraw MATIC"
      />
      <SimpleModal 
        isOpen={activeModal === 'send'} 
        onClose={() => setActiveModal(null)} 
        title="Send MATIC"
      />
      <SimpleModal 
        isOpen={activeModal === 'exchange'} 
        onClose={() => setActiveModal(null)} 
        title="Exchange MATIC"
      />
    </>
  );
}