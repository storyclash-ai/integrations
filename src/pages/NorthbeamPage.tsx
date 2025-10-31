import Header from '../components/Header';
import NorthbeamHeroSection from '../components/northbeam/NorthbeamHeroSection';
import NorthbeamBenefitsSection from '../components/northbeam/NorthbeamBenefitsSection';
import NorthbeamHowItWorksSection from '../components/northbeam/NorthbeamHowItWorksSection';
import NorthbeamUseCaseSection from '../components/northbeam/NorthbeamUseCaseSection';
import NorthbeamFeaturesTable from '../components/northbeam/NorthbeamFeaturesTable';
import NorthbeamWhyStoryclashSection from '../components/northbeam/NorthbeamWhyStoryclashSection';
import NorthbeamFAQSection from '../components/northbeam/NorthbeamFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function NorthbeamPage() {
  useDocumentTitle('Northbeam Influencer Marketing Integration | Storyclash');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <NorthbeamHeroSection />
        <NorthbeamBenefitsSection />
        <NorthbeamHowItWorksSection />
        <NorthbeamUseCaseSection />
        <NorthbeamFeaturesTable />
        <NorthbeamWhyStoryclashSection />
        <NorthbeamFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
