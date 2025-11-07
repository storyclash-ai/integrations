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
                              "name": "Does this work with any frontend framework?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - because commercetools is headless, our integration connects to the API layer. Track influencer performance from React, Vue, iOS, Android, or any other frontend without changes to our integration."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I use GraphQL or REST API?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Both are supported. We integrate with commercetools GraphQL and REST APIs, giving you flexibility to use whichever fits your architecture best."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How does this handle custom customer journeys?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Our attribution logic adapts to your unique commercetools setup. We map influencer touchpoints to your custom journey stages, not rigid predefined funnels."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What about real-time attribution?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "We support GraphQL subscriptions for real-time order events, enabling near-instant influencer attribution when orders complete in commercetools."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I add new channels without reintegration?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - because we connect at the API layer, you can launch new storefronts, mobile apps, or IoT experiences without touching the influencer integration."
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
