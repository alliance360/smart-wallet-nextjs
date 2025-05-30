// app/components/PWA/InstallPrompt.tsx
'use client';

import { useEffect, useState } from 'react';

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  if (!showInstallPrompt) return null;

  return (
    <div className="install-prompt">
      <div className="install-card">
        <h3>Install Smart Wallet</h3>
        <p>Get quick access from your home screen</p>
        <button onClick={handleInstall} className="btn btn-primary">
          Install App
        </button>
        <button onClick={() => setShowInstallPrompt(false)} className="btn btn-secondary">
          Not now
        </button>
      </div>
    </div>
  );
}