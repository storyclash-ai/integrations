import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LookerStudioHeroSection from '../components/lookerstudio/LookerStudioHeroSection';
import LookerStudioBenefitsSection from '../components/lookerstudio/LookerStudioBenefitsSection';
import LookerStudioHowItWorksSection from '../components/lookerstudio/LookerStudioHowItWorksSection';
import LookerStudioUseCaseSection from '../components/lookerstudio/LookerStudioUseCaseSection';
import LookerStudioFeaturesTable from '../components/lookerstudio/LookerStudioFeaturesTable';
import LookerStudioWhyStoryclashSection from '../components/lookerstudio/LookerStudioWhyStoryclashSection';
import LookerStudioFAQSection from '../components/lookerstudio/LookerStudioFAQSection';
import CTASection from '../components/CTASection';

export default function LookerStudioPage() {
  useDocumentTitle(
    'Looker Studio Influencer Marketing Integration | Storyclash',
    'Connect Looker Studio with Storyclash to visualize influencer performance, create interactive dashboards, and measure creator campaign ROI with real-time data analytics.'
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <LookerStudioHeroSection />
        <LookerStudioBenefitsSection />
        <LookerStudioHowItWorksSection />
        <LookerStudioUseCaseSection />
        <LookerStudioFeaturesTable />
        <LookerStudioWhyStoryclashSection />
        <LookerStudioFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
