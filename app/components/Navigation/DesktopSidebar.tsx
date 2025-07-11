'use client';

import { ConnectButton, useActiveAccount, useWalletBalance } from "thirdweb/react";
import { defineChain } from "thirdweb";
import { polygon } from "thirdweb/chains";
import { client } from "../../client";
import { wallets } from "../../wallets";
import QRCodeComponent from "../PWA/QRCodeComponent";

export default function DesktopSidebar() {
  const account = useActiveAccount();
  const { data: balance } = useWalletBalance({
    client,
    chain: polygon,
    address: account?.address,
  });

  const menuItems = [
    { href: '/', icon: '📊', label: 'Overview', active: true },
    { href: '/about', icon: '📰', label: 'About', active: false },
    { href: '/transactions', icon: '💸', label: 'Transactions', active: false },
    { href: '/team', icon: '👥', label: 'My Team', active: false },
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
        {/* Logo + ConnectButton Area */}
        <div style={{ marginBottom: '2rem' }}>
          {/* Logo */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginBottom: '1rem' 
          }}>
            <img 
              src="/assets/img/A360logo.webp" 
              alt="logo" 
              style={{ height: '40px', marginRight: '12px' }}
            />
          </div>
        </div>
        
        {/* NEW: QR Code Section for Mobile Installation */}
        <div style={{ 
          marginBottom: '2rem',
          padding: '1.5rem',
          backgroundColor: '#f8f9fa',
          borderRadius: '12px',
          textAlign: 'center',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{ 
            fontSize: '0.875rem', 
            fontWeight: '600', 
            color: '#163563',
            marginBottom: '1rem',
            margin: '0 0 1rem 0'
          }}>
            📱 Install on Mobile
          </h3>
          
          <QRCodeComponent />
          
          <p style={{ 
            fontSize: '0.75rem', 
            color: '#6b7280',
            margin: '1rem 0 0 0',
            lineHeight: '1.4'
          }}>
            Scan with your phone to install<br />Smart Wallet as an app
          </p>
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
              border: '1px solid #8247e5',
              borderRadius: '8px',
              backgroundColor: 'white',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: '500',
              color: '#8247e5'
            }}>
              💰 Deposit
            </button>
            <button style={{
              padding: '0.75rem',
              border: '1px solid #8247e5',
              borderRadius: '8px',
              backgroundColor: 'white',
              cursor: 'pointer',
              fontSize: '0.75rem',
              fontWeight: '500',
              color: '#8247e5'
            }}>
              📤 Send
            </button>
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