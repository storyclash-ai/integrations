import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import KlaviyoHeroSection from '../components/klaviyo/KlaviyoHeroSection';
import KlaviyoBenefitsSection from '../components/klaviyo/KlaviyoBenefitsSection';
import KlaviyoHowItWorksSection from '../components/klaviyo/KlaviyoHowItWorksSection';
import KlaviyoUseCaseSection from '../components/klaviyo/KlaviyoUseCaseSection';
import KlaviyoFeaturesTable from '../components/klaviyo/KlaviyoFeaturesTable';
import KlaviyoWhyStoryclashSection from '../components/klaviyo/KlaviyoWhyStoryclashSection';
import KlaviyoFAQSection from '../components/klaviyo/KlaviyoFAQSection';
import CTASection from '../components/CTASection';

export default function KlaviyoPage() {
  useDocumentTitle(
    'Klaviyo Influencer Marketing Integration | Storyclash',
    'Connect Klaviyo with Storyclash to segment audiences by creator engagement, personalize emails with influencer content, and track campaign conversions.'
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <KlaviyoHeroSection />
        <KlaviyoBenefitsSection />
        <KlaviyoHowItWorksSection />
        <KlaviyoUseCaseSection />
        <KlaviyoFeaturesTable />
        <KlaviyoWhyStoryclashSection />
        <KlaviyoFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
