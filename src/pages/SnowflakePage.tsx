import Header from '../components/Header';
import Footer from '../components/Footer';
import SnowflakeHeroSection from '../components/snowflake/SnowflakeHeroSection';
import SnowflakeBenefitsSection from '../components/snowflake/SnowflakeBenefitsSection';
import SnowflakeHowItWorksSection from '../components/snowflake/SnowflakeHowItWorksSection';
import SnowflakeUseCaseSection from '../components/snowflake/SnowflakeUseCaseSection';
import SnowflakeFeaturesTable from '../components/snowflake/SnowflakeFeaturesTable';
import SnowflakeWhyStoryclashSection from '../components/snowflake/SnowflakeWhyStoryclashSection';
import SnowflakeFAQSection from '../components/snowflake/SnowflakeFAQSection';
import CTASection from '../components/CTASection';
import { Seo } from '../components/Seo';

export default function SnowflakePage() {
  const title = "Snowflake Influencer Marketing Integration | Storyclash";
  const description = "Connect Snowflake with Storyclash's influencer marketing platform. Store creator campaign data in your data warehouse, analyze performance, and build custom models. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/snowflake-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Snowflake Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Snowflake Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How does Storyclash integrate with Snowflake?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Use Storyclash API to extract creator data and load it into Snowflake via Snowpipe, Python connectors, or your preferred ETL tool. The API provides structured JSON data that maps cleanly to Snowflake tables."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What influencer data can I store in Snowflake?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "All creator metrics including reach, engagement, conversions, campaign performance, content analytics, and ROI - stored as structured tables ready for SQL queries and joins with other datasets."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How do I keep the data updated?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Set up automated ETL pipelines using tools like Airflow, Fivetran, or custom Python scripts that regularly pull fresh data from Storyclash API into your Snowflake tables."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What are the performance considerations?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Snowflake handles large-scale influencer datasets efficiently. Storyclash provides clean, structured data optimized for warehouse performance. Use appropriate clustering and partitioning for optimal query speed."
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
        openGraphImage="/og/integrations-Snowflake.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <SnowflakeHeroSection />
        <SnowflakeBenefitsSection />
        <SnowflakeHowItWorksSection />
        <SnowflakeUseCaseSection />
        <SnowflakeFeaturesTable />
        <SnowflakeWhyStoryclashSection />
        <SnowflakeFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
