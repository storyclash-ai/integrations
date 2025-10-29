import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SegmentHeroSection from '../components/segment/SegmentHeroSection';
import SegmentBenefitsSection from '../components/segment/SegmentBenefitsSection';
import SegmentHowItWorksSection from '../components/segment/SegmentHowItWorksSection';
import SegmentUseCaseSection from '../components/segment/SegmentUseCaseSection';
import SegmentFeaturesTable from '../components/segment/SegmentFeaturesTable';
import SegmentWhyStoryclashSection from '../components/segment/SegmentWhyStoryclashSection';
import SegmentFAQSection from '../components/segment/SegmentFAQSection';
import CTASection from '../components/CTASection';

export default function SegmentPage() {
  useDocumentTitle(
    'Segment Influencer Marketing Integration | Storyclash',
    'Connect Segment with Storyclash to unify creator data across your tech stack, build comprehensive customer profiles, and power downstream tools.'
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <SegmentHeroSection />
        <SegmentBenefitsSection />
        <SegmentHowItWorksSection />
        <SegmentUseCaseSection />
        <SegmentFeaturesTable />
        <SegmentWhyStoryclashSection />
        <SegmentFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
