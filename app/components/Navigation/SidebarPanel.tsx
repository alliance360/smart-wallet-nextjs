import Link from 'next/link';
import { useActiveAccount, useWalletBalance } from "thirdweb/react";
import { polygon } from "thirdweb/chains";
import { client } from "../../client";

interface SidebarPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SidebarPanel({ isOpen, onClose }: SidebarPanelProps) {
  const account = useActiveAccount();
  const { data: balance } = useWalletBalance({
    client,
    chain: polygon,
    address: account?.address,
  });

  if (!isOpen) return null;

  const displayBalance = balance ? 
    `${parseFloat(balance.displayValue).toFixed(4)} MATIC` : 
    "$ 2,562.50";

  return (
    <div className={`modal fade panelbox panelbox-left ${isOpen ? 'show' : ''}`} 
         style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body p-0">
            {/* Profile Box */}
            <div className="profileBox pt-2 pb-2">
              <div className="image-wrapper">
                <img src="/assets/img/sample/avatar/avatar1.jpg" alt="image" className="imaged w36" />
              </div>
              <div className="in">
                <strong>
                  {account ? 
                    `${account.address.slice(0, 6)}...${account.address.slice(-4)}` : 
                    "Sebastian Doe"
                  }
                </strong>
                <div className="text-muted">
                  {account ? "Polygon Network" : "4029209"}
                </div>
              </div>
              <button 
                className="btn btn-link btn-icon sidebar-close" 
                onClick={onClose}
              >
                <span>✕</span>
              </button>
            </div>

            {/* Balance - Updated for Polygon */}
            <div className="sidebar-balance">
              <div className="listview-title">
                {account ? "Polygon Balance" : "Balance"}
              </div>
              <div className="in">
                <h1 className="amount">{displayBalance}</h1>
                {account && (
                  <div style={{ 
                    fontSize: '12px', 
                    opacity: 0.8, 
                    color: '#8247e5',
                    marginTop: '4px'
                  }}>
                    🟣 Polygon PoS Network
                  </div>
                )}
              </div>
            </div>

            {/* Action Group */}
            <div className="action-group">
              <Link href="/" className="action-button">
                <div className="in">
                  <div className="iconbox" style={{ backgroundColor: '#8247e5' }}>
                    <span>➕</span>
                  </div>
                  Deposit MATIC
                </div>
              </Link>
              <Link href="/" className="action-button">
                <div className="in">
                  <div className="iconbox" style={{ backgroundColor: '#8247e5' }}>
                    <span>⬇️</span>
                  </div>
                  Withdraw MATIC
                </div>
              </Link>
              <Link href="/" className="action-button">
                <div className="in">
                  <div className="iconbox" style={{ backgroundColor: '#8247e5' }}>
                    <span>➡️</span>
                  </div>
                  Send MATIC
                </div>
              </Link>
              <a href="/cards" className="action-button">
                <div className="in">
                  <div className="iconbox" style={{ backgroundColor: '#8247e5' }}>
                    <span>💳</span>
                  </div>
                  My Cards
                </div>
              </a>
            </div>

            {/* Menu Items */}
            <div className="listview-title mt-1">Menu</div>
            <ul className="listview flush transparent no-line image-listview">
              <li>
                <Link href="/" className="item">
                  <div className="icon-box" style={{ backgroundColor: '#8247e5' }}>
                    <span>📊</span>
                  </div>
                  <div className="in">
                    Overview
                    <span className="badge" style={{ backgroundColor: '#8247e5' }}>10</span>
                  </div>
                </Link>
              </li>
              <li>
                <a href="/pages" className="item">
                  <div className="icon-box" style={{ backgroundColor: '#8247e5' }}>
                    <span>📄</span>
                  </div>
                  <div className="in">Pages</div>
                </a>
              </li>
              <li>
                <a href="/components" className="item">
                  <div className="icon-box" style={{ backgroundColor: '#8247e5' }}>
                    <span>⚙️</span>
                  </div>
                  <div className="in">Components</div>
                </a>
              </li>
              <li>
                <a href="/cards" className="item">
                  <div className="icon-box" style={{ backgroundColor: '#8247e5' }}>
                    <span>💳</span>
                  </div>
                  <div className="in">My Cards</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}