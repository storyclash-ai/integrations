import Header from '../components/Header';
import CommercetoolsHeroSection from '../components/commercetools/CommercetoolsHeroSection';
import CommercetoolsBenefitsSection from '../components/commercetools/CommercetoolsBenefitsSection';
import CommercetoolsHowItWorksSection from '../components/commercetools/CommercetoolsHowItWorksSection';
import CommercetoolsUseCaseSection from '../components/commercetools/CommercetoolsUseCaseSection';
import CommercetoolsFeaturesTable from '../components/commercetools/CommercetoolsFeaturesTable';
import CommercetoolsWhyStoryclashSection from '../components/commercetools/CommercetoolsWhyStoryclashSection';
import CommercetoolsFAQSection from '../components/commercetools/CommercetoolsFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

export default function CommercetoolsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <CommercetoolsHeroSection />
        <CommercetoolsBenefitsSection />
        <CommercetoolsHowItWorksSection />
        <CommercetoolsUseCaseSection />
        <CommercetoolsFeaturesTable />
        <CommercetoolsWhyStoryclashSection />
        <CommercetoolsFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
