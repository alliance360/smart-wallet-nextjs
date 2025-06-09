// app/settings/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
  const router = useRouter();
  
  // State for all the toggle switches
  const [darkMode, setDarkMode] = useState(false);
  const [paymentAlert, setPaymentAlert] = useState(false);
  const [privateProfile, setPrivateProfile] = useState(false);
  const [twoStepVerification, setTwoStepVerification] = useState(true);
  
  // State for notification sound
  const [notificationSound, setNotificationSound] = useState('Beep');

  const handleAvatarClick = () => {
    // Handle avatar/camera click - could open file picker
    console.log('Avatar clicked - implement file picker');
  };

  const handleLogoutAllDevices = () => {
    // Handle logout all devices
    console.log('Logout all devices');
    // You could show a confirmation modal here
  };

  return (
    <>
      {/* App Header */}
      <div className="appHeader">
        <div className="left">
          <button 
            className="headerButton goBack"
            onClick={() => router.back()}
              style={{ fontSize: '30px' }}
          >
            <span>←</span>
          </button>
        </div>
        <div className="pageTitle">
          Settings
        </div>
        <div className="right">
          <a href="/notifications" className="headerButton">
            <span className="icon">🔔</span>
          </a>
        </div>
      </div>

      {/* App Capsule */}
      <div id="appCapsule">
        {/* Avatar Section */}
        <div className="section mt-3 text-center">
          <div className="avatar-section">
            <button onClick={handleAvatarClick} style={{ background: 'none', border: 'none' }}>
              <img 
                src="/assets/img/sample/avatar/avatar1.jpg" 
                alt="avatar" 
                className="imaged w100 rounded"
              />
              <span className="button">
                📷
              </span>
            </button>
          </div>
        </div>

        {/* Theme Section */}
        <div className="listview-title mt-1">Theme</div>
        <ul className="listview image-listview text inset no-line">
          <li>
            <div className="item">
              <div className="in">
                <div>Dark Mode</div>
                <div className="form-check form-switch ms-2">
                  <input 
                    className="form-check-input dark-mode-switch" 
                    type="checkbox" 
                    id="darkmodeSwitch"
                    checked={darkMode}
                    onChange={(e) => setDarkMode(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="darkmodeSwitch"></label>
                </div>
              </div>
            </div>
          </li>
        </ul>

        {/* Notifications Section */}
        <div className="listview-title mt-1">Notifications</div>
        <ul className="listview image-listview text inset">
          <li>
            <div className="item">
              <div className="in">
                <div>
                  Payment Alert
                  <div className="text-muted">
                    Send notification when new payment received
                  </div>
                </div>
                <div className="form-check form-switch ms-2">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="SwitchCheckDefault1"
                    checked={paymentAlert}
                    onChange={(e) => setPaymentAlert(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="SwitchCheckDefault1"></label>
                </div>
              </div>
            </div>
          </li>
          <li>
            <button className="item" onClick={() => {
              // Could open a modal or navigate to sound selection
              const sounds = ['Beep', 'Chime', 'Bell', 'Ding'];
              const currentIndex = sounds.indexOf(notificationSound);
              const nextIndex = (currentIndex + 1) % sounds.length;
              setNotificationSound(sounds[nextIndex]);
            }}>
              <div className="in">
                <div>Notification Sound</div>
                <span className="text-primary">{notificationSound}</span>
              </div>
            </button>
          </li>
        </ul>

        {/* Profile Settings Section */}
        <div className="listview-title mt-1">Profile Settings</div>
        <ul className="listview image-listview text inset">
          <li>
            <button className="item" onClick={() => console.log('Change username')}>
              <div className="in">
                <div>Change Username</div>
              </div>
            </button>
          </li>
          <li>
            <button className="item" onClick={() => console.log('Update email')}>
              <div className="in">
                <div>Update E-mail</div>
              </div>
            </button>
          </li>
          <li>
            <button className="item" onClick={() => console.log('Edit address')}>
              <div className="in">
                <div>Address</div>
                <span className="text-primary">Edit</span>
              </div>
            </button>
          </li>
          <li>
            <div className="item">
              <div className="in">
                <div>Private Profile</div>
                <div className="form-check form-switch ms-2">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="SwitchCheckDefault2"
                    checked={privateProfile}
                    onChange={(e) => setPrivateProfile(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="SwitchCheckDefault2"></label>
                </div>
              </div>
            </div>
          </li>
        </ul>

        {/* Security Section */}
        <div className="listview-title mt-1">Security</div>
        <ul className="listview image-listview text mb-2 inset">
          <li>
            <button className="item" onClick={() => console.log('Update password')}>
              <div className="in">
                <div>Update Password</div>
              </div>
            </button>
          </li>
          <li>
            <div className="item">
              <div className="in">
                <div>2 Step Verification</div>
                <div className="form-check form-switch ms-2">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="SwitchCheckDefault3" 
                    checked={twoStepVerification}
                    onChange={(e) => setTwoStepVerification(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="SwitchCheckDefault3"></label>
                </div>
              </div>
            </div>
          </li>
          <li>
            <button className="item" onClick={handleLogoutAllDevices}>
              <div className="in">
                <div>Log out all devices</div>
              </div>
            </button>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .item {
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
        }
        
        .item:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }
        
        .avatar-section button {
          position: relative;
          cursor: pointer;
        }
        
        .avatar-section .button {
          position: absolute;
          bottom: 0;
          right: 0;
          background: var(--primary-color, #007bff);
          color: white;
          border-radius: 50%;
          padding: 8px;
          font-size: 14px;
        }
        
        .badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background: #dc3545;
          color: white;
          border-radius: 50%;
          padding: 2px 6px;
          font-size: 10px;
          min-width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
