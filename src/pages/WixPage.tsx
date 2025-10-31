import Header from '../components/Header';
import WixHeroSection from '../components/wix/WixHeroSection';
import WixBenefitsSection from '../components/wix/WixBenefitsSection';
import WixHowItWorksSection from '../components/wix/WixHowItWorksSection';
import WixUseCaseSection from '../components/wix/WixUseCaseSection';
import WixFeaturesTable from '../components/wix/WixFeaturesTable';
import WixWhyStoryclashSection from '../components/wix/WixWhyStoryclashSection';
import WixFAQSection from '../components/wix/WixFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function WixPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <WixHeroSection />
        <WixBenefitsSection />
        <WixHowItWorksSection />
        <WixUseCaseSection />
        <WixFeaturesTable />
        <WixWhyStoryclashSection />
        <WixFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
