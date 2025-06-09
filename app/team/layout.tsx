// app/team/layout.tsx
import MobileLayout from '../components/Layout/MobileLayout';

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MobileLayout>{children}</MobileLayout>;
}
