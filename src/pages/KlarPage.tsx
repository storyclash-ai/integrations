import Header from '../components/Header';
import KlarHeroSection from '../components/klar/KlarHeroSection';
import KlarBenefitsSection from '../components/klar/KlarBenefitsSection';
import KlarHowItWorksSection from '../components/klar/KlarHowItWorksSection';
import KlarUseCaseSection from '../components/klar/KlarUseCaseSection';
import KlarFeaturesTable from '../components/klar/KlarFeaturesTable';
import KlarWhyStoryclashSection from '../components/klar/KlarWhyStoryclashSection';
import KlarFAQSection from '../components/klar/KlarFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function KlarPage() {
  useDocumentTitle('Klar Influencer Marketing Integration | Storyclash');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <KlarHeroSection />
        <KlarBenefitsSection />
        <KlarHowItWorksSection />
        <KlarUseCaseSection />
        <KlarFeaturesTable />
        <KlarWhyStoryclashSection />
        <KlarFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
