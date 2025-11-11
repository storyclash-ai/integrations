import Header from '../components/Header';
import MetabaseHeroSection from '../components/metabase/MetabaseHeroSection';
import MetabaseBenefitsSection from '../components/metabase/MetabaseBenefitsSection';
import MetabaseHowItWorksSection from '../components/metabase/MetabaseHowItWorksSection';
import MetabaseUseCaseSection from '../components/metabase/MetabaseUseCaseSection';
import MetabaseFeaturesTable from '../components/metabase/MetabaseFeaturesTable';
import MetabaseWhyStoryclashSection from '../components/metabase/MetabaseWhyStoryclashSection';
import MetabaseFAQSection from '../components/metabase/MetabaseFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function MetabasePage() {
  const title = "Metabase Influencer Marketing Integration | Storyclash";
  const description = "Connect Metabase with Storyclash's influencer marketing platform. Store creator campaign data in your data warehouse, analyze performance, and build custom models. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/metabase-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Metabase Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Metabase Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How does the Storyclash + Metabase integration work?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash exports creator performance data to Metabase via API. You build custom dashboards and analyses in Metabase. Insights and calculated metrics sync back to Storyclash for complete influencer attribution and ROI tracking."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I blend Storyclash creator data with other business data in Metabase?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - in Metabase you can join Storyclash creator metrics with your sales, marketing, CRM, and financial data. Build unified dashboards showing influencer ROI alongside total business metrics."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What metrics can I export from Storyclash to Metabase?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "All Storyclash metrics: engagement rates, reach, impressions, conversions, revenue attribution, AOV, ROI, ROAS, and custom KPIs. Analyze, transform, and blend them with other data sources."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can insights from Metabase sync back to Storyclash?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - calculated metrics, segments, and insights from Metabase can be exported back to Storyclash. This creates a bi-directional workflow where both platforms enhance each other."
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
        openGraphImage="/og/integrations-metabase.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <MetabaseHeroSection />
        <MetabaseBenefitsSection />
        <MetabaseHowItWorksSection />
        <MetabaseUseCaseSection />
        <MetabaseFeaturesTable />
        <MetabaseWhyStoryclashSection />
        <MetabaseFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
