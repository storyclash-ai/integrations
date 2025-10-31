import Header from '../components/Header';
import GoogleSheetsHeroSection from '../components/googlesheets/GoogleSheetsHeroSection';
import GoogleSheetsBenefitsSection from '../components/googlesheets/GoogleSheetsBenefitsSection';
import GoogleSheetsHowItWorksSection from '../components/googlesheets/GoogleSheetsHowItWorksSection';
import GoogleSheetsUseCaseSection from '../components/googlesheets/GoogleSheetsUseCaseSection';
import GoogleSheetsFeaturesTable from '../components/googlesheets/GoogleSheetsFeaturesTable';
import GoogleSheetsWhyStoryclashSection from '../components/googlesheets/GoogleSheetsWhyStoryclashSection';
import GoogleSheetsFAQSection from '../components/googlesheets/GoogleSheetsFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function GoogleSheetsPage() {
  useDocumentTitle('Google Sheets Influencer Marketing Integration | Storyclash');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <GoogleSheetsHeroSection />
        <GoogleSheetsBenefitsSection />
        <GoogleSheetsHowItWorksSection />
        <GoogleSheetsUseCaseSection />
        <GoogleSheetsFeaturesTable />
        <GoogleSheetsWhyStoryclashSection />
        <GoogleSheetsFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
