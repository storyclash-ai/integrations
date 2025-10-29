import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SnowflakeHeroSection from '../components/snowflake/SnowflakeHeroSection';
import SnowflakeBenefitsSection from '../components/snowflake/SnowflakeBenefitsSection';
import SnowflakeHowItWorksSection from '../components/snowflake/SnowflakeHowItWorksSection';
import SnowflakeUseCaseSection from '../components/snowflake/SnowflakeUseCaseSection';
import SnowflakeFeaturesTable from '../components/snowflake/SnowflakeFeaturesTable';
import SnowflakeWhyStoryclashSection from '../components/snowflake/SnowflakeWhyStoryclashSection';
import SnowflakeFAQSection from '../components/snowflake/SnowflakeFAQSection';
import CTASection from '../components/CTASection';

export default function SnowflakePage() {
  useDocumentTitle(
    'Snowflake Influencer Marketing Integration | Storyclash',
    'Connect Snowflake with Storyclash to store influencer data in your data warehouse, build enterprise analytics, and power ML models with creator performance metrics.'
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <SnowflakeHeroSection />
        <SnowflakeBenefitsSection />
        <SnowflakeHowItWorksSection />
        <SnowflakeUseCaseSection />
        <SnowflakeFeaturesTable />
        <SnowflakeWhyStoryclashSection />
        <SnowflakeFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
