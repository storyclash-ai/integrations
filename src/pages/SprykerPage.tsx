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
  const description = "Connect Spryker with Storyclash's influencer marketing platform. Export creator data to your reporting tools, automate data transfers, and unify campaign metrics. Book a demo.";
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
                              "name": "How does this integrate with Spryker Glue API?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "We use secure OAuth authentication to connect to Spryker Glue API, giving us flexible access to your commerce data while respecting your custom configurations and security policies."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I add new storefronts or markets without reintegration?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - our modular integration scales with your composable architecture. Add new Spryker storefronts, markets, or business units without rebuilding the influencer tracking."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What level of customization is possible?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Extensive. We can adapt attribution models to your unique customer journeys, product catalogs, and business rules. Spryker is flexible, and so is our integration."
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
