import WalletCard from './components/Home/WalletCard';
import StatsSection from './components/Home/StatsSection';
import TransactionsSection from './components/Home/TransactionsSection';
import MyCardsSection from './components/Home/MyCardsSection';
import SendMoneySection from './components/Home/SendMoneySection';
import MonthlyBillsSection from './components/Home/MonthlyBillsSection';
import SavingGoalsSection from './components/Home/SavingGoalsSection';
import NewsSection from './components/Home/NewsSection';
import AppFooter from './components/Layout/AppFooter';

export default function HomePage() {
  return (
    <>
      <WalletCard />
      <StatsSection />
      <TransactionsSection />
{/* 
  <MyCardsSection />
  <SendMoneySection />
  <MonthlyBillsSection />
*/}
      <SavingGoalsSection />
      {/* <NewsSection /> */}
      <AppFooter />
    </>
  );
}
