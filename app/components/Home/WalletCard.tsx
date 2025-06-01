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
    `$ ${parseFloat(balance.displayValue).toFixed(2)}` : 
    "$ 0.00";

  return (
    <>
      <div className="section wallet-card-section pt-1">
        <div className="wallet-card">
          {/* Balance - Restructured for mobile */}
          <div className="balance" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
            {/* Balance Info Section */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start',
              marginBottom: '16px'
            }}>
              <div className="left">
                <span className="title">Your Total A360 Wealth (USD)</span>
                <h1 className="total">{displayBalance}</h1>
                {/* {account && (
                  <p style={{ fontSize: '14px', opacity: 0.8, margin: '5px 0 0 0' }}>
                    {account.address.slice(0, 8)}...{account.address.slice(-6)}
                    <span style={{ color: '#163563', marginLeft: '8px', fontWeight: '800' }}>
                      Polygon
                    </span>
                  </p>
                )} */}
              </div>
            </div>

            {/* ConnectButton Section - Now below the balance */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center',
              width: '100%'
            }}>
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
                      address: "0x61590e467DdE0043dDD499F4c10b2a78dAEc3f7a",
                      name: "PAX Token",
                      symbol: "PAX",
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
                  label: "Connect Smart Wallet",
                  style: {
                    background: "linear-gradient(135deg, #163563 0%, #8494A8 100%)",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    width: "100%",
                    maxWidth: "380px",
                    height: "48px",
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
                    background: "linear-gradient(135deg, #163563 0%,rgb(126, 147, 172) 100%)",
                    color: "white", 
                    border: "none",
                    borderRadius: "12px",
                    width: "100%", // Full width for mobile
                    maxWidth: "380px", // But not too wide
                    height: "48px", // Consistent height
                    padding: "0 16px",
                    fontSize: "16px",
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

          {/* Wallet Footer */}
          <div className="wallet-footer">
            <div className="item">
              <div onClick={() => setActiveModal('withdraw')} style={{ cursor: 'pointer' }}>
                <span style={{ fontSize: '32px' }}>🏪</span>
                <strong>Marketplace</strong>
              </div>
            </div>
            <div className="item">
              <div onClick={() => setActiveModal('send')} style={{ cursor: 'pointer' }}>
                <span style={{ fontSize: '32px' }}>💼</span>
                <strong>Back-Office</strong>
              </div>
            </div>
            <div className="item">
              <div onClick={() => setActiveModal('send')} style={{ cursor: 'pointer' }}>
                <span style={{ fontSize: '32px' }}>💰</span>
                <strong>Crowdfunding</strong>
              </div>
            </div>
            <div className="item">
              <div onClick={() => setActiveModal('exchange')} style={{ cursor: 'pointer' }}>
                <span style={{ fontSize: '32px' }}>👨‍👩‍👧‍👦</span>
                <strong>Social</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <SimpleModal 
        isOpen={activeModal === 'withdraw'} 
        onClose={() => setActiveModal(null)} 
        title="Marketplace"
      />
      <SimpleModal 
        isOpen={activeModal === 'send'} 
        onClose={() => setActiveModal(null)} 
        title="Back-Office"
      />
      <SimpleModal 
        isOpen={activeModal === 'exchange'} 
        onClose={() => setActiveModal(null)} 
        title="Exchange"
      />
    </>
  );
}