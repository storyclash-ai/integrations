import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CloudflareHeroSection from '../components/cloudflare/CloudflareHeroSection';
import CloudflareBenefitsSection from '../components/cloudflare/CloudflareBenefitsSection';
import CloudflareHowItWorksSection from '../components/cloudflare/CloudflareHowItWorksSection';
import CloudflareUseCaseSection from '../components/cloudflare/CloudflareUseCaseSection';
import CloudflareFeaturesTable from '../components/cloudflare/CloudflareFeaturesTable';
import CloudflareWhyStoryclashSection from '../components/cloudflare/CloudflareWhyStoryclashSection';
import CloudflareFAQSection from '../components/cloudflare/CloudflareFAQSection';
import CTASection from '../components/CTASection';

export default function CloudflarePage() {
  useDocumentTitle(
    'Cloudflare Influencer Marketing Integration | Storyclash',
    'Connect Cloudflare with Storyclash to track influencer performance, measure ROI, and visualize campaign impact. Secure delivery & analytics.'
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CloudflareHeroSection />
        <CloudflareBenefitsSection />
        <CloudflareHowItWorksSection />
        <CloudflareUseCaseSection />
        <CloudflareFeaturesTable />
        <CloudflareWhyStoryclashSection />
        <CloudflareFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
