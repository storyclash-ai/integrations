import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HubSpotHeroSection from '../components/hubspot/HubSpotHeroSection';
import HubSpotBenefitsSection from '../components/hubspot/HubSpotBenefitsSection';
import HubSpotHowItWorksSection from '../components/hubspot/HubSpotHowItWorksSection';
import HubSpotUseCaseSection from '../components/hubspot/HubSpotUseCaseSection';
import HubSpotFeaturesTable from '../components/hubspot/HubSpotFeaturesTable';
import HubSpotWhyStoryclashSection from '../components/hubspot/HubSpotWhyStoryclashSection';
import HubSpotFAQSection from '../components/hubspot/HubSpotFAQSection';
import CTASection from '../components/CTASection';

export default function HubSpotPage() {
  useDocumentTitle(
    'HubSpot Influencer Marketing Integration | Storyclash',
    'Connect HubSpot with Storyclash to sync creator contacts, track influencer campaigns in your CRM, and measure creator impact on pipeline and revenue.'
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HubSpotHeroSection />
        <HubSpotBenefitsSection />
        <HubSpotHowItWorksSection />
        <HubSpotUseCaseSection />
        <HubSpotFeaturesTable />
        <HubSpotWhyStoryclashSection />
        <HubSpotFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
