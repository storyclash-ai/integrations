import Header from '../components/Header';
import SprykerHeroSection from '../components/spryker/SprykerHeroSection';
import SprykerBenefitsSection from '../components/spryker/SprykerBenefitsSection';
import SprykerHowItWorksSection from '../components/spryker/SprykerHowItWorksSection';
import SprykerUseCaseSection from '../components/spryker/SprykerUseCaseSection';
import SprykerFeaturesTable from '../components/spryker/SprykerFeaturesTable';
import SprykerWhyStoryclashSection from '../components/spryker/SprykerWhyStoryclashSection';
import SprykerFAQSection from '../components/spryker/SprykerFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function SprykerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <SprykerHeroSection />
        <SprykerBenefitsSection />
        <SprykerHowItWorksSection />
        <SprykerUseCaseSection />
        <SprykerFeaturesTable />
        <SprykerWhyStoryclashSection />
        <SprykerFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
