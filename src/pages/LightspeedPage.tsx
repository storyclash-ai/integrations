import Header from '../components/Header';
import LightspeedHeroSection from '../components/lightspeed/LightspeedHeroSection';
import LightspeedBenefitsSection from '../components/lightspeed/LightspeedBenefitsSection';
import LightspeedHowItWorksSection from '../components/lightspeed/LightspeedHowItWorksSection';
import LightspeedUseCaseSection from '../components/lightspeed/LightspeedUseCaseSection';
import LightspeedFeaturesTable from '../components/lightspeed/LightspeedFeaturesTable';
import LightspeedWhyStoryclashSection from '../components/lightspeed/LightspeedWhyStoryclashSection';
import LightspeedFAQSection from '../components/lightspeed/LightspeedFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function LightspeedPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <LightspeedHeroSection />
        <LightspeedBenefitsSection />
        <LightspeedHowItWorksSection />
        <LightspeedUseCaseSection />
        <LightspeedFeaturesTable />
        <LightspeedWhyStoryclashSection />
        <LightspeedFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
