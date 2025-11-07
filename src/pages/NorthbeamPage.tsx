import Header from '../components/Header';
import NorthbeamHeroSection from '../components/northbeam/NorthbeamHeroSection';
import NorthbeamBenefitsSection from '../components/northbeam/NorthbeamBenefitsSection';
import NorthbeamHowItWorksSection from '../components/northbeam/NorthbeamHowItWorksSection';
import NorthbeamUseCaseSection from '../components/northbeam/NorthbeamUseCaseSection';
import NorthbeamFeaturesTable from '../components/northbeam/NorthbeamFeaturesTable';
import NorthbeamWhyStoryclashSection from '../components/northbeam/NorthbeamWhyStoryclashSection';
import NorthbeamFAQSection from '../components/northbeam/NorthbeamFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function NorthbeamPage() {
  const title = "Northbeam Influencer Marketing Integration | Storyclash";
  const description = "Connect Northbeamwith Storyclash's influencer marketing platform. Store creator campaign data in your data warehouse, analyze performance, and build custom models. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/northbeam-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Northbeam Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Northbeam Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "What is incrementality testing for influencers?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Incrementality testing measures true creator impact by comparing revenue from audiences exposed to influencer campaigns versus control groups. This reveals actual lift attributable to creators beyond what would have happened anyway."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I compare creator performance with paid ads?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - Northbeam shows creator metrics alongside Facebook Ads, Google Ads, TikTok Ads, and other channels in unified dashboards. Compare ROAS, CAC, and contribution across all marketing channels holistically."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How accurate is creator attribution in Northbeam?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Northbeam uses machine learning models trained on billions of conversions for precise attribution. The platform tracks touchpoints across devices and channels, providing more accurate creator measurement than last-click or platform-reported metrics."
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
        openGraphImage="/og/integrations-northbeam.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <NorthbeamHeroSection />
        <NorthbeamBenefitsSection />
        <NorthbeamHowItWorksSection />
        <NorthbeamUseCaseSection />
        <NorthbeamFeaturesTable />
        <NorthbeamWhyStoryclashSection />
        <NorthbeamFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
