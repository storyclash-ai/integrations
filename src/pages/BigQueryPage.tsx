import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BigQueryHeroSection from '../components/bigquery/BigQueryHeroSection';
import BigQueryBenefitsSection from '../components/bigquery/BigQueryBenefitsSection';
import BigQueryHowItWorksSection from '../components/bigquery/BigQueryHowItWorksSection';
import BigQueryUseCaseSection from '../components/bigquery/BigQueryUseCaseSection';
import BigQueryFeaturesTable from '../components/bigquery/BigQueryFeaturesTable';
import BigQueryWhyStoryclashSection from '../components/bigquery/BigQueryWhyStoryclashSection';
import BigQueryFAQSection from '../components/bigquery/BigQueryFAQSection';
import CTASection from '../components/CTASection';

export default function BigQueryPage() {
  useDocumentTitle(
    'BigQuery Influencer Marketing Integration | Storyclash',
    'Connect BigQuery with Storyclash for SQL analytics on creator data, build custom reports, and combine influencer metrics with enterprise datasets.'
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <BigQueryHeroSection />
        <BigQueryBenefitsSection />
        <BigQueryHowItWorksSection />
        <BigQueryUseCaseSection />
        <BigQueryFeaturesTable />
        <BigQueryWhyStoryclashSection />
        <BigQueryFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
