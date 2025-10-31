import Header from '../components/Header';
import SupermetricsHeroSection from '../components/supermetrics/SupermetricsHeroSection';
import SupermetricsBenefitsSection from '../components/supermetrics/SupermetricsBenefitsSection';
import SupermetricsHowItWorksSection from '../components/supermetrics/SupermetricsHowItWorksSection';
import SupermetricsUseCaseSection from '../components/supermetrics/SupermetricsUseCaseSection';
import SupermetricsFeaturesTable from '../components/supermetrics/SupermetricsFeaturesTable';
import SupermetricsWhyStoryclashSection from '../components/supermetrics/SupermetricsWhyStoryclashSection';
import SupermetricsFAQSection from '../components/supermetrics/SupermetricsFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function SupermetricsPage() {
  useDocumentTitle('Supermetrics Influencer Marketing Integration | Storyclash');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <SupermetricsHeroSection />
        <SupermetricsBenefitsSection />
        <SupermetricsHowItWorksSection />
        <SupermetricsUseCaseSection />
        <SupermetricsFeaturesTable />
        <SupermetricsWhyStoryclashSection />
        <SupermetricsFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
