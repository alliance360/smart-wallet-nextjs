'use client';

import { ConnectButton, useActiveAccount, useWalletBalance } from "thirdweb/react";
import { defineChain } from "thirdweb";
import { polygon } from "thirdweb/chains";
import { client } from "../../client";
import { wallets } from "../../wallets";

export default function DesktopSidebar() {
  const account = useActiveAccount();
  const { data: balance } = useWalletBalance({
    client,
    chain: polygon,
    address: account?.address,
  });

  const menuItems = [
    { href: '/', icon: '🏠', label: 'Dashboard', active: true },
    { href: '/cards', icon: '💳', label: 'Cards', active: false },
    { href: '/analytics', icon: '📊', label: 'Analytics', active: false },
    { href: '/transactions', icon: '💸', label: 'Transactions', active: false },
    { href: '/settings', icon: '⚙️', label: 'Settings', active: false },
  ];

  const displayBalance = balance ? 
    `${parseFloat(balance.displayValue).toFixed(4)} MATIC` : 
    "0.0000 MATIC";

  return (
    <aside className="desktop-sidebar" style={{ 
      width: '280px', 
      backgroundColor: 'white', 
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      height: '100vh'
    }}>
      <div style={{ padding: '2rem' }}>
        {/* Logo */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '2rem' 
        }}>
          <img 
            src="/assets/img/logo.png" 
            alt="logo" 
            style={{ height: '40px', marginRight: '12px' }}
          />
          <h1 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            margin: 0,
            color: '#1f2937'
          }}>
            Smart Wallet
          </h1>
        </div>
        
        {/* Enhanced ConnectButton with Polygon tokens */}
        <div style={{ marginBottom: '2rem' }}>
          <ConnectButton
            client={client}
            chain={defineChain(137)} // Polygon mainnet
            wallets={wallets}
            supportedTokens={{
              // Polygon mainnet supported tokens
              137: [
                {
                  address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F", // USDT
                  name: "USD Tether",
                  symbol: "USDT",
                },
                {
                  address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC
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
              size: "wide",
              titleIcon: "/assets/img/icon/192x192.png",
            }}
            connectButton={{
              label: "Connect Wallet",
              style: {
                background: "linear-gradient(135deg, #8247e5 0%, #6f42c1 100%)",
                color: "white",
                border: "none",
                borderRadius: "12px",
                padding: "12px 0",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                width: "100%",
                boxShadow: "0 4px 12px rgba(130, 71, 229, 0.3)",
              }
            }}
            detailsButton={{
              style: {
                background: "#f8f9fa",
                color: "#1f2937", 
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                padding: "12px 16px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: "pointer",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }
            }}
            theme="light"
          />
        </div>
        
        {/* Balance Card */}
        <div style={{
          background: 'linear-gradient(135deg, #8247e5 0%, #6f42c1 100%)',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          marginBottom: '2rem'
        }}>
          <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>Polygon Balance</div>
          <div style={{ fontSize: '1.875rem', fontWeight: '700' }}>
            {account ? displayBalance : "Connect Wallet"}
          </div>
          {account && (
            <div style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: '8px' }}>
              Network: Polygon PoS • Gas Sponsored
            </div>
          )}
        </div>
        
        {/* Navigation */}
        <nav>
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.875rem 1rem',
                borderRadius: '8px',
                textDecoration: 'none',
                color: item.active ? '#8247e5' : '#6b7280',
                backgroundColor: item.active ? '#f3f0ff' : 'transparent',
                marginBottom: '0.25rem',
                fontSize: '0.95rem',
                fontWeight: item.active ? '600' : '400'
              }}
            >
              <span style={{ marginRight: '12px', fontSize: '1.25rem' }}>
                {item.icon}
              </span>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Supported Tokens Display */}
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ 
            fontSize: '0.875rem', 
            fontWeight: '600', 
            color: '#6b7280',
            marginBottom: '1rem' 
          }}>
            Supported Tokens
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '0.5rem',
            fontSize: '0.75rem'
          }}>
            <div style={{ 
              padding: '0.5rem', 
              backgroundColor: '#f8f9fa', 
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              💰 USDT
            </div>
            <div style={{ 
              padding: '0.5rem', 
              backgroundColor: '#f8f9fa', 
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              💵 USDC
            </div>
            <div style={{ 
              padding: '0.5rem', 
              backgroundColor: '#f8f9fa', 
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              📊 DAI
            </div>
            <div style={{ 
              padding: '0.5rem', 
              backgroundColor: '#f8f9fa', 
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              ⚡ WETH
            </div>
          </div>
        </div>
        
        {/* Network Info */}
        <div style={{ 
          marginTop: '2rem', 
          padding: '1rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '4px' }}>
            Network
          </div>
          <div style={{ 
            fontSize: '0.875rem', 
            fontWeight: '600', 
            color: '#8247e5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}>
            <span>🟣</span> Polygon PoS
          </div>
          <div style={{ fontSize: '0.625rem', color: '#8247e5', marginTop: '2px' }}>
            Gas Sponsored ✨
          </div>
        </div>
      </div>
    </aside>
  );
}