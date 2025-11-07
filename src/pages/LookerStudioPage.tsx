import Header from '../components/Header';
import Footer from '../components/Footer';
import LookerStudioHeroSection from '../components/lookerstudio/LookerStudioHeroSection';
import LookerStudioBenefitsSection from '../components/lookerstudio/LookerStudioBenefitsSection';
import LookerStudioHowItWorksSection from '../components/lookerstudio/LookerStudioHowItWorksSection';
import LookerStudioUseCaseSection from '../components/lookerstudio/LookerStudioUseCaseSection';
import LookerStudioFeaturesTable from '../components/lookerstudio/LookerStudioFeaturesTable';
import LookerStudioWhyStoryclashSection from '../components/lookerstudio/LookerStudioWhyStoryclashSection';
import LookerStudioFAQSection from '../components/lookerstudio/LookerStudioFAQSection';
import CTASection from '../components/CTASection';
import { Seo } from '../components/Seo';

export default function LookerStudioPage() {
  const title = "Looker Studio Influencer Marketing Integration | Storyclash";
  const description = "Connect Looker Studio with Storyclash's influencer marketing platform. Store creator campaign data in your data warehouse, analyze performance, and build custom models. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/looker-studio-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Looker Studio Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Looker Studio Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How does Storyclash integrate with Looker Studio?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Authenticate via your API key to connect Storyclash with Looker Studio through our REST API. The API data source appears in Looker Studio, allowing you to build dashboards with creator campaign data."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What influencer data can I visualize in Looker Studio?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "All key creator metrics including reach, engagement, EMV, conversions, campaign performance, and ROI - all available as dimensions and metrics in Looker Studio charts and tables."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I combine Storyclash data with other sources?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - blend Storyclash data with Google Analytics, Google Ads, BigQuery, and other Looker Studio data sources for comprehensive cross-channel analysis."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How often does data refresh in Looker Studio?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Dashboards refresh automatically based on your configured schedule, ensuring stakeholders always see the latest creator performance data."
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
        openGraphImage="/og/integrations-lookerstudio.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <LookerStudioHeroSection />
        <LookerStudioBenefitsSection />
        <LookerStudioHowItWorksSection />
        <LookerStudioUseCaseSection />
        <LookerStudioFeaturesTable />
        <LookerStudioWhyStoryclashSection />
        <LookerStudioFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
