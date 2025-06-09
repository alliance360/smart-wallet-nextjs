// app/transactions/layout.tsx
import MobileLayout from '../components/Layout/MobileLayout';

export default function TransactionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MobileLayout>{children}</MobileLayout>;
}
