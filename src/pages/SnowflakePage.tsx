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
                              "name": "How does Storyclash export influencer and campaign data to Snowflake?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash exports creator, content and campaign metrics to Snowflake using secure REST API authentication. Your Snowflake tables are updated automatically without manual pipelines or scheduled CSV uploads."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which Storyclash creator and campaign metrics are available in Snowflake?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Snowflake receives impressions, reach, engagement rate, conversions, attributed revenue, EMV, creator identifiers, content performance and all campaign-level KPIs. Every metric is available for SQL queries, joins and modeling."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What are the benefits of using Snowflake as a warehouse for Storyclash data?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Snowflake enables large-scale analytics, automated pipelines, cross-channel attribution, data modeling, AI workloads and joins with CRM, e-commerce, marketing spend and analytics datasets. Storyclash becomes a unified data source inside your modern marketing warehouse."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How secure and compliant is the Storyclash → Snowflake integration?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash uses encrypted REST API endpoints, secure token authentication and GDPR-compliant EU hosting. Snowflake offers fine-grained access control, role-based permissions and enterprise-grade data governance."
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
