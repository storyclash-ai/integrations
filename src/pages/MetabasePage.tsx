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
  const description = "Connect Metabase with Storyclash's influencer marketing platform. Export creator and campaign data to Metabase via REST API, build interactive dashboards, and combine Storyclash influencer metrics with your business data. Book a demo.";
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
                              "name": "How does Storyclash export influencer and campaign data to Metabase?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash exports creator and campaign metrics to Metabase via a secure REST API. After authenticating with your API key, Storyclash becomes a live data source inside Metabase without manual file uploads."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which Storyclash metrics can I visualize in Metabase dashboards?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "You can visualize impressions, reach, engagement rate, EMV, conversions, revenue attribution, ROI, ROAS and other Storyclash creator metrics. Metabase lets you filter, aggregate and chart these metrics in fully customizable dashboards."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How often does Storyclash sync creator data with Metabase?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash syncs influencer performance data to Metabase in near real time or on scheduled refresh intervals, depending on your Metabase settings."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Do I need technical skills to connect Storyclash to Metabase?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes, you need some technical skills to set up the REST API connection with your Storyclash API key. However, once connected, marketing teams can build dashboards with drag-and-drop tools without additional technical expertise."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is the Storyclash → Metabase integration secure and GDPR-compliant?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. Storyclash uses encrypted REST API endpoints, secure token authentication and GDPR-compliant EU hosting. Access can be restricted using roles and auditing inside Metabase."
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
        keywords="Metabase influencer marketing integration, Metabase creator analytics, Metabase influencer dashboards, Storyclash Metabase API, Metabase campaign reporting"
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
