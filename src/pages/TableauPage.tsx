import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TableauHeroSection from '../components/tableau/TableauHeroSection';
import TableauBenefitsSection from '../components/tableau/TableauBenefitsSection';
import TableauHowItWorksSection from '../components/tableau/TableauHowItWorksSection';
import TableauUseCaseSection from '../components/tableau/TableauUseCaseSection';
import TableauFeaturesTable from '../components/tableau/TableauFeaturesTable';
import TableauWhyStoryclashSection from '../components/tableau/TableauWhyStoryclashSection';
import TableauFAQSection from '../components/tableau/TableauFAQSection';
import CTASection from '../components/CTASection';

export default function TableauPage() {
  useDocumentTitle(
    'Tableau Influencer Marketing Integration | Storyclash',
    'Visualize creator campaign performance in Tableau. Connect Storyclash data to build interactive dashboards that showcase influencer ROI and engagement metrics.'
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <TableauHeroSection />
        <TableauBenefitsSection />
        <TableauHowItWorksSection />
        <TableauUseCaseSection />
        <TableauFeaturesTable />
        <TableauWhyStoryclashSection />
        <TableauFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
