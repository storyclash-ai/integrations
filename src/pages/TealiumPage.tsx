import Header from '../components/Header';
import TealiumHeroSection from '../components/tealium/TealiumHeroSection';
import TealiumBenefitsSection from '../components/tealium/TealiumBenefitsSection';
import TealiumHowItWorksSection from '../components/tealium/TealiumHowItWorksSection';
import TealiumUseCaseSection from '../components/tealium/TealiumUseCaseSection';
import TealiumFeaturesTable from '../components/tealium/TealiumFeaturesTable';
import TealiumWhyStoryclashSection from '../components/tealium/TealiumWhyStoryclashSection';
import TealiumFAQSection from '../components/tealium/TealiumFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function TealiumPage() {
  const title = "Tealium Influencer Marketing Integration | Storyclash";
  const description = "Connect Tealium with Storyclash's influencer marketing platform. Store creator campaign data in your data warehouse, analyze performance, and build custom models. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/tealium-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Tealium Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Tealium Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How does creator data flow to Tealium?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash sends influencer interaction events to Tealium EventStream in real-time. These events are processed alongside all other customer touchpoints for unified attribution."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I enrich customer profiles with creator data?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - use AudienceStream to add creator attribution attributes to customer profiles. Track which influencers drove acquisition, build segments based on creator exposure, and personalize experiences."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What destinations can receive creator data?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "All 1300+ Tealium connectors support creator data. Send influencer insights to Google Analytics, advertising platforms, personalization engines, data warehouses, or any connected tool."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How does privacy compliance work?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Tealium handles consent management and privacy controls automatically. Creator attribution data respects existing privacy settings and compliance rules configured in your Tealium implementation."
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
        openGraphImage="/og/integrations-Tealium.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <TealiumHeroSection />
        <TealiumBenefitsSection />
        <TealiumHowItWorksSection />
        <TealiumUseCaseSection />
        <TealiumFeaturesTable />
        <TealiumWhyStoryclashSection />
        <TealiumFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
