import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleAnalyticsHeroSection from '../components/googleanalytics/GoogleAnalyticsHeroSection';
import GoogleAnalyticsBenefitsSection from '../components/googleanalytics/GoogleAnalyticsBenefitsSection';
import GoogleAnalyticsHowItWorksSection from '../components/googleanalytics/GoogleAnalyticsHowItWorksSection';
import GoogleAnalyticsUseCaseSection from '../components/googleanalytics/GoogleAnalyticsUseCaseSection';
import GoogleAnalyticsFeaturesTable from '../components/googleanalytics/GoogleAnalyticsFeaturesTable';
import GoogleAnalyticsWhyStoryclashSection from '../components/googleanalytics/GoogleAnalyticsWhyStoryclashSection';
import GoogleAnalyticsFAQSection from '../components/googleanalytics/GoogleAnalyticsFAQSection';
import CTASection from '../components/CTASection';

export default function GoogleAnalyticsPage() {
  useDocumentTitle(
    'Google Analytics Influencer Marketing Integration | Storyclash',
    'Connect Google Analytics with Storyclash to track influencer-driven traffic, measure campaign attribution, and analyze creator content performance across your web analytics.'
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <GoogleAnalyticsHeroSection />
        <GoogleAnalyticsBenefitsSection />
        <GoogleAnalyticsHowItWorksSection />
        <GoogleAnalyticsUseCaseSection />
        <GoogleAnalyticsFeaturesTable />
        <GoogleAnalyticsWhyStoryclashSection />
        <GoogleAnalyticsFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
