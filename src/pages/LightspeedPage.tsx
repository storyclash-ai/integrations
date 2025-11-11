import Header from '../components/Header';
import LightspeedHeroSection from '../components/lightspeed/LightspeedHeroSection';
import LightspeedBenefitsSection from '../components/lightspeed/LightspeedBenefitsSection';
import LightspeedHowItWorksSection from '../components/lightspeed/LightspeedHowItWorksSection';
import LightspeedUseCaseSection from '../components/lightspeed/LightspeedUseCaseSection';
import LightspeedFeaturesTable from '../components/lightspeed/LightspeedFeaturesTable';
import LightspeedWhyStoryclashSection from '../components/lightspeed/LightspeedWhyStoryclashSection';
import LightspeedFAQSection from '../components/lightspeed/LightspeedFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function LightspeedPage() {
  const title = "Lightspeed Influencer Marketing Integration | Storyclash";
  const description = "Connect Lightspeed with Storyclash's influencer marketing platform. Store creator campaign data in your data warehouse, analyze performance, and build custom models. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/lightspeed-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Lightspeed Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Lightspeed Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How does Storyclash integrate with Lightspeed eCom?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash connects to your Lightspeed eCom store via REST API, syncing order data, revenue, and customer information. We track which influencers drive actual sales with accurate attribution and ROI measurement."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How does Storyclash attribute Lightspeed eCom sales to influencers?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "We match influencer campaigns to Lightspeed eCom orders using UTM parameters, unique discount codes, and referral URLs to track which creators drive actual sales."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I track multiple Lightspeed eCom stores?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - Storyclash supports tracking creator performance across multiple Lightspeed eCom stores with unified or separate reporting per store."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which Lightspeed eCom versions are supported?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "We support Lightspeed eCom (including formerly SEOshop). Contact us for specific version compatibility and setup assistance."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I see which products influencers promote most effectively?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Absolutely. Product-level attribution shows which SKUs move fastest with each creator - perfect for inventory planning."
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
        openGraphImage="/og/integrations-lightspeed.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <LightspeedHeroSection />
        <LightspeedBenefitsSection />
        <LightspeedHowItWorksSection />
        <LightspeedUseCaseSection />
        <LightspeedFeaturesTable />
        <LightspeedWhyStoryclashSection />
        <LightspeedFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
