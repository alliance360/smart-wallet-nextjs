'use client';

import { ConnectButton } from "thirdweb/react";
import { client } from "../../client";
import { wallets } from "../../wallets";

export default function DesktopSidebar() {
  const menuItems = [
    { href: '/', icon: '🏠', label: 'Dashboard', active: true },
    { href: '/cards', icon: '💳', label: 'Cards', active: false },
    { href: '/analytics', icon: '📊', label: 'Analytics', active: false },
    { href: '/transactions', icon: '💸', label: 'Transactions', active: false },
    { href: '/settings', icon: '⚙️', label: 'Settings', active: false },
  ];

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
        
        {/* Add ConnectButton to Sidebar */}
        <div style={{ marginBottom: '2rem' }}>
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
              size: "wide",
              titleIcon: "/assets/img/icon/192x192.png",
            }}
            connectButton={{
              label: "Connect Wallet",
              style: {
                background: "linear-gradient(135deg, #6236FF 0%, #4318FF 100%)",
                color: "white",
                border: "none",
                borderRadius: "12px",
                padding: "12px 0",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                width: "100%",
                boxShadow: "0 4px 12px rgba(98, 54, 255, 0.3)",
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
        
        {/* Balance Card - only show when connected */}
        <div style={{
          backgroundColor: '#3b82f6',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '12px',
          marginBottom: '2rem'
        }}>
          <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>Total Balance</div>
          <div style={{ fontSize: '1.875rem', fontWeight: '700' }}>$ 2,562.50</div>
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
                color: item.active ? '#3b82f6' : '#6b7280',
                backgroundColor: item.active ? '#eff6ff' : 'transparent',
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

        {/* Quick Actions */}
        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ 
            fontSize: '0.875rem', 
            fontWeight: '600', 
            color: '#6b7280',
            marginBottom: '1rem' 
          }}>
            Quick Actions
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
            <button style={{
              padding: '0.75rem',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              backgroundColor: 'white',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: '500'
            }}>
              💰 Deposit
            </button>
            <button style={{
              padding: '0.75rem',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              backgroundColor: 'white',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: '500'
            }}>
              📤 Send
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}