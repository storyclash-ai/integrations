import Header from '../components/Header';
import CommercetoolsHeroSection from '../components/commercetools/CommercetoolsHeroSection';
import CommercetoolsBenefitsSection from '../components/commercetools/CommercetoolsBenefitsSection';
import CommercetoolsHowItWorksSection from '../components/commercetools/CommercetoolsHowItWorksSection';
import CommercetoolsUseCaseSection from '../components/commercetools/CommercetoolsUseCaseSection';
import CommercetoolsFeaturesTable from '../components/commercetools/CommercetoolsFeaturesTable';
import CommercetoolsWhyStoryclashSection from '../components/commercetools/CommercetoolsWhyStoryclashSection';
import CommercetoolsFAQSection from '../components/commercetools/CommercetoolsFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function CommercetoolsPage() {
  const title = "Commercetools Influencer Marketing Integration | Storyclash";
  const description = "Connect Commercetools with Storyclash's influencer marketing platform. Store creator campaign data in your data warehouse, analyze performance, and build custom models. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/commercetools-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Commercetools Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Commercetools Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How does Storyclash integrate with commercetools?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash connects to commercetools via secure API authentication, syncing order data, customer information, and product details. We track which influencers drive actual sales with accurate attribution and ROI measurement."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I track both B2B and B2C sales attribution?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - the integration works for both B2B and B2C storefronts. You get separate ROI reporting for each customer type so you can see which creators drive value in each segment."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How does influencer attribution work?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "We match influencer campaigns to commercetools orders using UTM parameters, unique discount codes, and referral URLs. This gives you clear attribution showing which creators drive conversions and revenue."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I see real-time influencer performance?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - influencer metrics update automatically as orders complete in commercetools. See live performance data on revenue, conversions, AOV, and ROI per creator without delays."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I track multiple commercetools storefronts?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Each Storyclash workspace connects to one commercetools instance. For multiple stores, you can create separate workspaces to track each storefront's creator performance independently."
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
        openGraphImage="/og/integrations-commercetools.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <CommercetoolsHeroSection />
        <CommercetoolsBenefitsSection />
        <CommercetoolsHowItWorksSection />
        <CommercetoolsUseCaseSection />
        <CommercetoolsFeaturesTable />
        <CommercetoolsWhyStoryclashSection />
        <CommercetoolsFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
