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
                              "name": "Can I track both Lightspeed Retail and eCom with one integration?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - the integration supports both platforms. Track influencer impact across in-store POS sales and online orders with unified reporting."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How does in-store attribution work?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "We use unique promo codes, QR codes, and tracking pixels to match social media traffic to POS transactions at your retail locations."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Do I need multiple stores to use this?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "No - this works for single-location retailers and multi-store chains. The value is tracking both retail and online channels together."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which Lightspeed versions are supported?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "We support Lightspeed Retail (POS) and Lightspeed eCom (formerly SEOshop). Contact us for specific version compatibility."
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
