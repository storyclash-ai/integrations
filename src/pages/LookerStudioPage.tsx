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
  const description = "Connect Looker Studio with Storyclash's influencer marketing platform. Export creator and campaign data via REST API, build interactive dashboards, and combine influencer metrics with other marketing sources. Book a demo.";
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
                              "name": "How does Storyclash export influencer data to Looker Studio via REST API?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash connects to Looker Studio as a custom REST API data source. After authenticating with your API key, Storyclash exports creator and campaign metrics directly into Looker Studio so you can build live influencer performance dashboards without manual CSV uploads."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What creator and campaign metrics can I visualize in Looker Studio dashboards?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "You can visualize Storyclash metrics such as reach, impressions, engagement, EMV, clicks, conversions, revenue attribution, ROI, ROAS, and campaign-level KPIs. All metrics are exposed as dimensions and measures in Looker Studio charts, tables, and scorecards."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I combine Storyclash influencer data in Looker Studio with other marketing sources?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. In Looker Studio you can blend Storyclash creator data with other marketing data sources like Google Analytics, Google Ads, or your CRM for comprehensive cross-channel analysis."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Do I need technical skills to connect Storyclash to Looker Studio and build dashboards?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes, you need some technical skills to set up the REST API connection with your API key. However, once connected, marketing teams can build dashboards using Looker Studio's drag-and-drop interface without coding."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How often does Storyclash data refresh in Looker Studio dashboards?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Data refresh depends on your Looker Studio configuration. Storyclash exposes up-to-date creator metrics via the API, and Looker Studio pulls fresh data on your chosen schedule so stakeholders always see current influencer performance without manual updates."
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
