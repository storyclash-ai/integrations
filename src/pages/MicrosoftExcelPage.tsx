import Header from '../components/Header';
import MicrosoftExcelHeroSection from '../components/microsoftexcel/MicrosoftExcelHeroSection';
import MicrosoftExcelBenefitsSection from '../components/microsoftexcel/MicrosoftExcelBenefitsSection';
import MicrosoftExcelHowItWorksSection from '../components/microsoftexcel/MicrosoftExcelHowItWorksSection';
import MicrosoftExcelUseCaseSection from '../components/microsoftexcel/MicrosoftExcelUseCaseSection';
import MicrosoftExcelFeaturesTable from '../components/microsoftexcel/MicrosoftExcelFeaturesTable';
import MicrosoftExcelWhyStoryclashSection from '../components/microsoftexcel/MicrosoftExcelWhyStoryclashSection';
import MicrosoftExcelFAQSection from '../components/microsoftexcel/MicrosoftExcelFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function MicrosoftExcelPage() {
  useDocumentTitle('Microsoft Excel Influencer Marketing Integration | Storyclash');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <MicrosoftExcelHeroSection />
        <MicrosoftExcelBenefitsSection />
        <MicrosoftExcelHowItWorksSection />
        <MicrosoftExcelUseCaseSection />
        <MicrosoftExcelFeaturesTable />
        <MicrosoftExcelWhyStoryclashSection />
        <MicrosoftExcelFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
