import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleAdsHeroSection from '../components/googleads/GoogleAdsHeroSection';
import GoogleAdsBenefitsSection from '../components/googleads/GoogleAdsBenefitsSection';
import GoogleAdsHowItWorksSection from '../components/googleads/GoogleAdsHowItWorksSection';
import GoogleAdsUseCaseSection from '../components/googleads/GoogleAdsUseCaseSection';
import GoogleAdsFeaturesTable from '../components/googleads/GoogleAdsFeaturesTable';
import GoogleAdsWhyStoryclashSection from '../components/googleads/GoogleAdsWhyStoryclashSection';
import GoogleAdsFAQSection from '../components/googleads/GoogleAdsFAQSection';
import CTASection from '../components/CTASection';

export default function GoogleAdsPage() {
  useDocumentTitle(
    'Google Ads Influencer Marketing Integration | Storyclash',
    'Connect Google Ads with Storyclash to optimize creator campaigns, track influencer conversions, and measure paid social ROI with precision.'
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <GoogleAdsHeroSection />
        <GoogleAdsBenefitsSection />
        <GoogleAdsHowItWorksSection />
        <GoogleAdsUseCaseSection />
        <GoogleAdsFeaturesTable />
        <GoogleAdsWhyStoryclashSection />
        <GoogleAdsFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
