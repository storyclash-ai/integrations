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
  const description = "Connect BigQuery with Storyclash's influencer marketing platform. Store creator campaign data in your data warehouse, analyze performance, and build custom models. Book a demo.";
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
                              "name": "How does Storyclash integrate with BigQuery?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Extract creator data via Storyclash API and load it into BigQuery tables using Cloud Functions, scheduled queries, or ETL tools like Dataflow. Data is structured for optimal query performance."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What creator data can I analyze in BigQuery?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "All influencer metrics including reach, engagement, conversions, content performance, and campaign ROI - structured as BigQuery tables ready for SQL analysis."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What are the costs for storing creator data?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "BigQuery charges separately for storage (very affordable) and queries. Creator data typically costs pennies per GB monthly, with query costs based on data processed."
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
