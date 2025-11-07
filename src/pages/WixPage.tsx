import Header from '../components/Header';
import WixHeroSection from '../components/wix/WixHeroSection';
import WixBenefitsSection from '../components/wix/WixBenefitsSection';
import WixHowItWorksSection from '../components/wix/WixHowItWorksSection';
import WixUseCaseSection from '../components/wix/WixUseCaseSection';
import WixFeaturesTable from '../components/wix/WixFeaturesTable';
import WixWhyStoryclashSection from '../components/wix/WixWhyStoryclashSection';
import WixFAQSection from '../components/wix/WixFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function WixPage() {
  const title = "Wix Influencer Marketing Integration | Storyclash";
  const description = "Connect Wix with Storyclash's influencer marketing platform. Track creator performance, measure ROI, and sync campaign data to Wix eCommerce. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/wix-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Wix Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Wix Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How do I connect Storyclash to my Wix store?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Authenticate via your API key to connect your Wix store through the Storyclash REST API. Our documentation guides you through the setup process."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Do I need coding skills to set this up?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Our REST API documentation makes it easy to connect. With your API key and our detailed integration guide, you can set up the connection without extensive technical knowledge."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which data gets synced from my Wix store?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Order data, revenue, product information, and customer acquisition metrics - all matched to specific influencer campaigns."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How do I track which creator drove which sale?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash uses UTM parameters, tracking pixels, and unique discount codes to match Wix orders to influencer content."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is my Wix store data secure?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - all data is encrypted, GDPR-compliant, and stored securely with enterprise-grade security measures."
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
        openGraphImage="/og/integrations-Wix.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <WixHeroSection />
        <WixBenefitsSection />
        <WixHowItWorksSection />
        <WixUseCaseSection />
        <WixFeaturesTable />
        <WixWhyStoryclashSection />
        <WixFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
