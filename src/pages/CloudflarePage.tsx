import Header from '../components/Header';
import Footer from '../components/Footer';
import CloudflareHeroSection from '../components/cloudflare/CloudflareHeroSection';
import CloudflareBenefitsSection from '../components/cloudflare/CloudflareBenefitsSection';
import CloudflareHowItWorksSection from '../components/cloudflare/CloudflareHowItWorksSection';
import CloudflareUseCaseSection from '../components/cloudflare/CloudflareUseCaseSection';
import CloudflareFeaturesTable from '../components/cloudflare/CloudflareFeaturesTable';
import CloudflareWhyStoryclashSection from '../components/cloudflare/CloudflareWhyStoryclashSection';
import CloudflareFAQSection from '../components/cloudflare/CloudflareFAQSection';
import CTASection from '../components/CTASection';
import { Seo } from '../components/Seo';

export default function CloudflarePage() {
  const title = "Cloudflare Influencer Marketing Integration | Storyclash";
  const description = "Connect Cloudflare with Storyclash's influencer marketing platform. Export creator data to your reporting tools, automate data transfers, and unify campaign metrics. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/Cloudflare-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Cloudflare Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Cloudflare Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How do I connect Storyclash with Cloudflare?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Use your Storyclash API key and connect via Cloudflare Web Connector or REST API."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which metrics are included?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Revenue, conversions, ROAS, EMV, engagement rate, impressions and more - all per creator and campaign."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How often is data updated?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Automatically synced in near real-time (depending on your Cloudflare refresh settings)."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Do I need a developer?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "No - business users can connect Storyclash to Cloudflare in minutes."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is the integration GDPR compliant?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - all data is securely stored in the EU and processed under GDPR compliance."
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
        openGraphImage="/og/integrations-cloudflare.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <CloudflareHeroSection />
        <CloudflareBenefitsSection />
        <CloudflareHowItWorksSection />
        <CloudflareUseCaseSection />
        <CloudflareFeaturesTable />
        <CloudflareWhyStoryclashSection />
        <CloudflareFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
