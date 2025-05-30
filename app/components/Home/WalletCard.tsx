'use client';

import { useState } from 'react';
import { useActiveAccount, useWalletBalance } from "thirdweb/react";
import { polygon } from "thirdweb/chains"; // Changed from ethereum to polygon
import { client } from "../../client";

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
            backgroundColor: '#8247e5', // Polygon purple
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
  
  // Get MATIC balance from Polygon network
  const { data: balance, isLoading } = useWalletBalance({
    client,
    chain: polygon, // Using Polygon instead of Ethereum
    address: account?.address,
  });

  // Show real MATIC balance if connected, otherwise show placeholder
  const displayBalance = account && balance && !isLoading ? 
    `${parseFloat(balance.displayValue).toFixed(4)} MATIC` : // MATIC instead of ETH
    "$ 2,562.50";

  return (
    <>
      <div className="section wallet-card-section pt-1">
        <div className="wallet-card">
          {/* Balance */}
          <div className="balance">
            <div className="left">
              <span className="title">Total Balance</span>
              <h1 className="total">{displayBalance}</h1>
              {/* Show wallet address if connected */}
              {account && (
                <p style={{ fontSize: '12px', opacity: 0.8, margin: '5px 0 0 0' }}>
                  {account.address.slice(0, 8)}...{account.address.slice(-6)}
                  <span style={{ color: '#8247e5', marginLeft: '8px', fontWeight: '600' }}>
                    Polygon
                  </span>
                </p>
              )}
            </div>
            <div className="right">
              <button 
                className="button" 
                onClick={() => setActiveModal('deposit')}
              >
                <span>➕</span>
              </button>
            </div>
          </div>

          {/* Wallet Footer */}
          <div className="wallet-footer">
            <div className="item">
              <button onClick={() => setActiveModal('withdraw')}>
                <div className="icon-wrapper bg-danger">
                  <span>⬇️</span>
                </div>
                <strong>Withdraw</strong>
              </button>
            </div>
            <div className="item">
              <button onClick={() => setActiveModal('send')}>
                <div className="icon-wrapper">
                  <span>➡️</span>
                </div>
                <strong>Send</strong>
              </button>
            </div>
            <div className="item">
              <a href="/cards">
                <div className="icon-wrapper bg-success">
                  <span>💳</span>
                </div>
                <strong>Cards</strong>
              </a>
            </div>
            <div className="item">
              <button onClick={() => setActiveModal('exchange')}>
                <div className="icon-wrapper bg-warning">
                  <span>🔄</span>
                </div>
                <strong>Exchange</strong>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <SimpleModal 
        isOpen={activeModal === 'deposit'} 
        onClose={() => setActiveModal(null)} 
        title="Add MATIC Balance"
      />
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