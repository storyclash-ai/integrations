import Header from '../components/Header';
import MatomoHeroSection from '../components/matomo/MatomoHeroSection';
import MatomoBenefitsSection from '../components/matomo/MatomoBenefitsSection';
import MatomoHowItWorksSection from '../components/matomo/MatomoHowItWorksSection';
import MatomoUseCaseSection from '../components/matomo/MatomoUseCaseSection';
import MatomoFeaturesTable from '../components/matomo/MatomoFeaturesTable';
import MatomoWhyStoryclashSection from '../components/matomo/MatomoWhyStoryclashSection';
import MatomoFAQSection from '../components/matomo/MatomoFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function MatomoPage() {
  useDocumentTitle('Matomo Influencer Marketing Integration | Storyclash');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <MatomoHeroSection />
        <MatomoBenefitsSection />
        <MatomoHowItWorksSection />
        <MatomoUseCaseSection />
        <MatomoFeaturesTable />
        <MatomoWhyStoryclashSection />
        <MatomoFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
