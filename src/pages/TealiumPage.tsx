import Header from '../components/Header';
import TealiumHeroSection from '../components/tealium/TealiumHeroSection';
import TealiumBenefitsSection from '../components/tealium/TealiumBenefitsSection';
import TealiumHowItWorksSection from '../components/tealium/TealiumHowItWorksSection';
import TealiumUseCaseSection from '../components/tealium/TealiumUseCaseSection';
import TealiumFeaturesTable from '../components/tealium/TealiumFeaturesTable';
import TealiumWhyStoryclashSection from '../components/tealium/TealiumWhyStoryclashSection';
import TealiumFAQSection from '../components/tealium/TealiumFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function TealiumPage() {
  useDocumentTitle('Tealium Influencer Marketing Integration | Storyclash');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <TealiumHeroSection />
        <TealiumBenefitsSection />
        <TealiumHowItWorksSection />
        <TealiumUseCaseSection />
        <TealiumFeaturesTable />
        <TealiumWhyStoryclashSection />
        <TealiumFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
