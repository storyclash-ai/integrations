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
import { Seo } from '../components/Seo';

export default function BigQueryPage() {
  const title = "BigQuery Influencer Marketing Integration | Storyclash";
  const description = "Connect BigQuery with Storyclash's influencer marketing platform. Export creator, content and campaign data directly into BigQuery, power advanced SQL analysis, and join Storyclash metrics with your business and e-commerce datasets. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/bigquery-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – BigQuery Influencer Marketing Integration",
        "applicationCategory": "MarketingApplication",
        "operatingSystem": "Web",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
        "description": description,
        "url": canonical,
        "brand": { "@type": "Brand", "name": "Storyclash" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.storyclash.com/" },
          { "@type": "ListItem", "position": 2, "name": "Integrations", "item": "https://www.storyclash.com/integrations" },
          { "@type": "ListItem", "position": 3, "name": "BigQuery Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How does Storyclash export influencer and campaign data to BigQuery?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash exports creator, content and campaign metrics to BigQuery via a secure REST API. After authentication with your API key, Storyclash populates your BigQuery tables automatically without manual ETL work or scheduled file uploads."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which Storyclash creator and campaign metrics are available in BigQuery?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "BigQuery receives impressions, reach, engagement, conversions, EMV, creator identifiers, content performance, attributed revenue, ROI, ROAS and campaign-level KPIs. All Storyclash metrics are available for SQL queries and joins."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What are the benefits of using BigQuery as a warehouse for Storyclash data?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "BigQuery enables large-scale analysis, automated pipelines, advanced attribution models, AI workloads and joins with sales, CRM, e-commerce and advertising datasets. Storyclash becomes a unified data source inside your marketing warehouse."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I build custom models and SQL analyses in BigQuery using Storyclash data?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. You can build custom SQL models, predictive scoring, LTV analysis, cross-channel attribution and machine-learning models using Storyclash creator data stored in BigQuery."
                              }
                      }
              ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Seo
        title={title}
        description={description}
        canonical={canonical}
        openGraphImage="/og/integrations-bigquery.png"
        keywords="BigQuery influencer marketing integration, BigQuery creator analytics, BigQuery campaign warehouse, Storyclash BigQuery export, influencer SQL analytics"
        jsonLd={jsonLd}
      />
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
