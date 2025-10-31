import Header from '../components/Header';
import MetabaseHeroSection from '../components/metabase/MetabaseHeroSection';
import MetabaseBenefitsSection from '../components/metabase/MetabaseBenefitsSection';
import MetabaseHowItWorksSection from '../components/metabase/MetabaseHowItWorksSection';
import MetabaseUseCaseSection from '../components/metabase/MetabaseUseCaseSection';
import MetabaseFeaturesTable from '../components/metabase/MetabaseFeaturesTable';
import MetabaseWhyStoryclashSection from '../components/metabase/MetabaseWhyStoryclashSection';
import MetabaseFAQSection from '../components/metabase/MetabaseFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function MetabasePage() {
  useDocumentTitle('Metabase Influencer Marketing Integration | Storyclash');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <MetabaseHeroSection />
        <MetabaseBenefitsSection />
        <MetabaseHowItWorksSection />
        <MetabaseUseCaseSection />
        <MetabaseFeaturesTable />
        <MetabaseWhyStoryclashSection />
        <MetabaseFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
