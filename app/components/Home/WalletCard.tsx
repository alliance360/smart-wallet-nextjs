'use client';

import { useState } from 'react';

// Temporary simple modals to avoid import issues
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
        <p>Modal functionality coming soon...</p>
        <button 
          onClick={onClose}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#3b82f6',
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

  return (
    <>
      <div className="section wallet-card-section pt-1">
        <div className="wallet-card">
          {/* Balance */}
          <div className="balance">
            <div className="left">
              <span className="title">Total Balance</span>
              <h1 className="total">$ 2,562.50</h1>
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

      {/* Simple Modals */}
      <SimpleModal 
        isOpen={activeModal === 'deposit'} 
        onClose={() => setActiveModal(null)} 
        title="Add Balance"
      />
      <SimpleModal 
        isOpen={activeModal === 'withdraw'} 
        onClose={() => setActiveModal(null)} 
        title="Withdraw Money"
      />
      <SimpleModal 
        isOpen={activeModal === 'send'} 
        onClose={() => setActiveModal(null)} 
        title="Send Money"
      />
      <SimpleModal 
        isOpen={activeModal === 'exchange'} 
        onClose={() => setActiveModal(null)} 
        title="Exchange Money"
      />
    </>
  );
}
