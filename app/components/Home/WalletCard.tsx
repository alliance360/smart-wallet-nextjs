'use client';

import { useState } from 'react';
import { useActiveAccount, useWalletBalance } from "thirdweb/react";
import { ConnectButton } from "thirdweb/react";
import { defineChain } from "thirdweb";
import { polygon } from "thirdweb/chains";
import { client } from "../../client";
import { wallets } from "../../wallets";
import { EnhancedModal, modalConfig } from '../Modals/WalletModals';

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
          {/* Balance - Keeping your exact structure */}
          <div className="balance" style={{ flexDirection: 'column', alignItems: 'stretch'}}>
            {/* Balance Info Section - Your exact code */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'flex-start',
              marginBottom: '16px'
            }}>
              <div className="left">
                <span className="title">Your Total A360 Wealth (USD)</span>
                <h1 className="total">{displayBalance}</h1>
                {/* Keeping your commented wallet address section as-is */}
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

            {/* ConnectButton Section - Your exact code */}
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
                    width: "100%",
                    maxWidth: "380px",
                    height: "48px",
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

          {/* Wallet Footer - Updated with external link handling */}
          <div className="wallet-footer">
            <div className="item">
              <div onClick={() => setActiveModal('marketplace')} style={{ cursor: 'pointer' }}>
                <span style={{ fontSize: '32px' }}>🏪</span>
                <strong>Marketplace</strong>
              </div>
            </div>
            <div className="item">
              <div onClick={() => setActiveModal('backoffice')} style={{ cursor: 'pointer' }}>
                <span style={{ fontSize: '32px' }}>📊</span>
                <strong>Back-Office</strong>
              </div>
            </div>
            <div className="item">
              <div onClick={() => setActiveModal('crowdfunding')} style={{ cursor: 'pointer' }}>
                <span style={{ fontSize: '32px' }}>💰</span>
                <strong>Crowdfunding</strong>
              </div>
            </div>
            <div className="item">
              <div onClick={() => setActiveModal('social')} style={{ cursor: 'pointer' }}>
                <span style={{ fontSize: '32px' }}>👥</span>
                <strong>Social</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modals with External Links */}
      <EnhancedModal 
        isOpen={activeModal === 'marketplace'} 
        onClose={() => setActiveModal(null)} 
        title={modalConfig.marketplace.title}
        description={modalConfig.marketplace.description}
        externalUrl={modalConfig.marketplace.externalUrl}
      />
      
      <EnhancedModal 
        isOpen={activeModal === 'backoffice'} 
        onClose={() => setActiveModal(null)} 
        title={modalConfig.backoffice.title}
        description={modalConfig.backoffice.description}
        isComingSoon={modalConfig.backoffice.isComingSoon}
      />
      
      <EnhancedModal 
        isOpen={activeModal === 'crowdfunding'} 
        onClose={() => setActiveModal(null)} 
        title={modalConfig.crowdfunding.title}
        description={modalConfig.crowdfunding.description}
        externalUrl={modalConfig.crowdfunding.externalUrl}
      />
      
      <EnhancedModal 
        isOpen={activeModal === 'social'} 
        onClose={() => setActiveModal(null)} 
        title={modalConfig.social.title}
        description={modalConfig.social.description}
        externalUrl={modalConfig.social.externalUrl}
      />
    </>
  );
}
