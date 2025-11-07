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
                              "name": "Do I need SQL skills to use Metabase?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "No - Metabase provides a visual query builder for exploring creator data. Ask questions naturally and Metabase generates the queries automatically. SQL expertise is optional for advanced use cases."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I self-host Metabase?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - Metabase is open-source and can be self-hosted on your infrastructure. Alternatively, use Metabase Cloud for managed hosting. Both options connect to Storyclash data."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What creator metrics are available?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "All Storyclash metrics are available in Metabase including engagement rates, reach, conversions, ROI, and custom performance indicators. Build any analysis your team needs."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can multiple teams use Metabase?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - Metabase supports multi-user access with permission controls. Enable self-service analytics across your organization while maintaining appropriate data access boundaries."
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
