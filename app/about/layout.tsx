// app/about/layout.tsx
import MobileLayout from '../components/Layout/MobileLayout';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MobileLayout>{children}</MobileLayout>;
}