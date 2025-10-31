import Header from '../components/Header';
import GrafanaHeroSection from '../components/grafana/GrafanaHeroSection';
import GrafanaBenefitsSection from '../components/grafana/GrafanaBenefitsSection';
import GrafanaHowItWorksSection from '../components/grafana/GrafanaHowItWorksSection';
import GrafanaUseCaseSection from '../components/grafana/GrafanaUseCaseSection';
import GrafanaFeaturesTable from '../components/grafana/GrafanaFeaturesTable';
import GrafanaWhyStoryclashSection from '../components/grafana/GrafanaWhyStoryclashSection';
import GrafanaFAQSection from '../components/grafana/GrafanaFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function GrafanaPage() {
  useDocumentTitle('Grafana Influencer Marketing Integration | Storyclash');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <GrafanaHeroSection />
        <GrafanaBenefitsSection />
        <GrafanaHowItWorksSection />
        <GrafanaUseCaseSection />
        <GrafanaFeaturesTable />
        <GrafanaWhyStoryclashSection />
        <GrafanaFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
