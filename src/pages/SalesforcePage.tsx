import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SalesforceHeroSection from '../components/salesforce/SalesforceHeroSection';
import SalesforceBenefitsSection from '../components/salesforce/SalesforceBenefitsSection';
import SalesforceHowItWorksSection from '../components/salesforce/SalesforceHowItWorksSection';
import SalesforceUseCaseSection from '../components/salesforce/SalesforceUseCaseSection';
import SalesforceFeaturesTable from '../components/salesforce/SalesforceFeaturesTable';
import SalesforceWhyStoryclashSection from '../components/salesforce/SalesforceWhyStoryclashSection';
import SalesforceFAQSection from '../components/salesforce/SalesforceFAQSection';
import CTASection from '../components/CTASection';

export default function SalesforcePage() {
  useDocumentTitle(
    'Salesforce Influencer Marketing Integration | Storyclash',
    'Connect Salesforce with Storyclash to manage creators in your CRM, track campaigns in opportunity pipeline, and measure influencer revenue impact.'
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <SalesforceHeroSection />
        <SalesforceBenefitsSection />
        <SalesforceHowItWorksSection />
        <SalesforceUseCaseSection />
        <SalesforceFeaturesTable />
        <SalesforceWhyStoryclashSection />
        <SalesforceFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
