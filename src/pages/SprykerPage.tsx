import Header from '../components/Header';
import SprykerHeroSection from '../components/spryker/SprykerHeroSection';
import SprykerBenefitsSection from '../components/spryker/SprykerBenefitsSection';
import SprykerHowItWorksSection from '../components/spryker/SprykerHowItWorksSection';
import SprykerUseCaseSection from '../components/spryker/SprykerUseCaseSection';
import SprykerFeaturesTable from '../components/spryker/SprykerFeaturesTable';
import SprykerWhyStoryclashSection from '../components/spryker/SprykerWhyStoryclashSection';
import SprykerFAQSection from '../components/spryker/SprykerFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function SprykerPage() {
  const title = "Spryker Influencer Marketing Integration | Storyclash";
  const description = "Connect Spryker Commerce OS with Storyclash's influencer marketing platform. Track creator performance, measure ROI, and sync Spryker order and revenue data into Storyclash for analysis. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/spryker-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Spryker Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Spryker Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "Does this work with custom Spryker data models?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - the integration is built to adapt to your custom Spryker data structures. We map influencer attribution to your specific business logic and commerce entities."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I track both B2B and B2C influencer campaigns?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Absolutely. The integration works across both B2B marketplaces and B2C storefronts, with unified reporting that shows creator performance for each customer type."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How does Storyclash connect to Spryker Commerce?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Our Spryker connector securely links Storyclash to your Spryker Commerce OS instance, automatically receiving orders, revenue, and customer data. Your data stays in your control while Storyclash provides the influencer attribution and ROI insights you need."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How does Storyclash handle B2B and B2C attribution in Spryker?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "We accurately attribute influencer-driven sales to both B2B and B2C customers. The integration tracks orders from both customer types and provides clear ROI metrics per influencer across your Spryker store."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I track influencers across multiple Spryker environments?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Each Storyclash workspace connects to one Spryker storefront. For multiple stores, you can create separate workspaces - each tracking creator performance independently with its own attribution data and reporting."
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
        openGraphImage="/og/integrations-Spryker.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <SprykerHeroSection />
        <SprykerBenefitsSection />
        <SprykerHowItWorksSection />
        <SprykerUseCaseSection />
        <SprykerFeaturesTable />
        <SprykerWhyStoryclashSection />
        <SprykerFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
