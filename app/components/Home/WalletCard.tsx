'use client';

import { useState } from 'react';
import DepositModal from '../Modals/DepositModal';
import WithdrawModal from '../Modals/WithdrawModal';
import SendModal from '../Modals/SendModal';
import ExchangeModal from '../Modals/ExchangeModal';

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
                <ion-icon name="add-outline"></ion-icon>
              </button>
            </div>
          </div>

          {/* Wallet Footer */}
          <div className="wallet-footer">
            <div className="item">
              <button onClick={() => setActiveModal('withdraw')}>
                <div className="icon-wrapper bg-danger">
                  <ion-icon name="arrow-down-outline"></ion-icon>
                </div>
                <strong>Withdraw</strong>
              </button>
            </div>
            <div className="item">
              <button onClick={() => setActiveModal('send')}>
                <div className="icon-wrapper">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <strong>Send</strong>
              </button>
            </div>
            <div className="item">
              <a href="/cards">
                <div className="icon-wrapper bg-success">
                  <ion-icon name="card-outline"></ion-icon>
                </div>
                <strong>Cards</strong>
              </a>
            </div>
            <div className="item">
              <button onClick={() => setActiveModal('exchange')}>
                <div className="icon-wrapper bg-warning">
                  <ion-icon name="swap-vertical"></ion-icon>
                </div>
                <strong>Exchange</strong>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <DepositModal 
        isOpen={activeModal === 'deposit'} 
        onClose={() => setActiveModal(null)} 
      />
      <WithdrawModal 
        isOpen={activeModal === 'withdraw'} 
        onClose={() => setActiveModal(null)} 
      />
      <SendModal 
        isOpen={activeModal === 'send'} 
        onClose={() => setActiveModal(null)} 
      />
      <ExchangeModal 
        isOpen={activeModal === 'exchange'} 
        onClose={() => setActiveModal(null)} 
      />
    </>
  );
}
