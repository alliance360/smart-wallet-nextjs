'use client';

import { useActiveAccount, useWalletBalance } from "thirdweb/react";
import { ethereum } from "thirdweb/chains";
import { client } from "../../client";

export default function WalletInfo() {
  const account = useActiveAccount();
  const { data: balance, isLoading } = useWalletBalance({
    client,
    chain: ethereum,
    address: account?.address,
  });

  if (!account) return null;

  return (
    <div className="wallet-info">
      <div className="wallet-address">
        <strong>Connected:</strong> {account.address.slice(0, 6)}...{account.address.slice(-4)}
      </div>
      <div className="wallet-balance">
        <strong>ETH Balance:</strong> {isLoading ? "Loading..." : `${balance?.displayValue} ${balance?.symbol}`}
      </div>
    </div>
  );
}