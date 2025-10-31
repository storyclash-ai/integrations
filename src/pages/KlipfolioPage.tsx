import Header from '../components/Header';
import KlipfolioHeroSection from '../components/klipfolio/KlipfolioHeroSection';
import KlipfolioBenefitsSection from '../components/klipfolio/KlipfolioBenefitsSection';
import KlipfolioHowItWorksSection from '../components/klipfolio/KlipfolioHowItWorksSection';
import KlipfolioUseCaseSection from '../components/klipfolio/KlipfolioUseCaseSection';
import KlipfolioFeaturesTable from '../components/klipfolio/KlipfolioFeaturesTable';
import KlipfolioWhyStoryclashSection from '../components/klipfolio/KlipfolioWhyStoryclashSection';
import KlipfolioFAQSection from '../components/klipfolio/KlipfolioFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function KlipfolioPage() {
  useDocumentTitle('Klipfolio Influencer Marketing Integration | Storyclash');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <KlipfolioHeroSection />
        <KlipfolioBenefitsSection />
        <KlipfolioHowItWorksSection />
        <KlipfolioUseCaseSection />
        <KlipfolioFeaturesTable />
        <KlipfolioWhyStoryclashSection />
        <KlipfolioFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
