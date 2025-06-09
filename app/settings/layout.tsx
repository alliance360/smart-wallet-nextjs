// app/settings/layout.tsx
import MobileLayout from '../components/Layout/MobileLayout';

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MobileLayout>{children}</MobileLayout>;
}
