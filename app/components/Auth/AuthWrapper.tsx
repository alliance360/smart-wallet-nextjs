'use client';

import { useState, useEffect } from 'react';
import { useActiveAccount } from "thirdweb/react";
import LoginScreen from './LoginScreen';
import ResponsiveLayout from '../Layout/ResponsiveLayout';

interface AuthWrapperProps {
  children: React.ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const account = useActiveAccount();

  useEffect(() => {
    // Check if user is connected
    if (account) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  }, [account]);

  // Loading state
  if (isLoading) {
    return (
      <div className="loading-screen">
        <img src="/assets/img/loading-icon.png" alt="Loading" className="loading-icon" />
        <p>Loading Smart Wallet...</p>
      </div>
    );
  }

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return (
      <LoginScreen onLoginSuccess={() => setIsAuthenticated(true)} />
    );
  }

  // Show main app if authenticated
  return (
    <ResponsiveLayout>{children}</ResponsiveLayout>
  );
}
