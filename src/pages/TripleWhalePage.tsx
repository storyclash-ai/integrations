import Header from '../components/Header';
import TripleWhaleHeroSection from '../components/triplewhale/TripleWhaleHeroSection';
import TripleWhaleBenefitsSection from '../components/triplewhale/TripleWhaleBenefitsSection';
import TripleWhaleHowItWorksSection from '../components/triplewhale/TripleWhaleHowItWorksSection';
import TripleWhaleUseCaseSection from '../components/triplewhale/TripleWhaleUseCaseSection';
import TripleWhaleFeaturesTable from '../components/triplewhale/TripleWhaleFeaturesTable';
import TripleWhaleWhyStoryclashSection from '../components/triplewhale/TripleWhaleWhyStoryclashSection';
import TripleWhaleFAQSection from '../components/triplewhale/TripleWhaleFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function TripleWhalePage() {
  const title = "Triple Whale Influencer Marketing Integration | Storyclash";
  const description = "Connect Triple Whale with Storyclash's influencer marketing platform. Attribute creator revenue accurately, measure true influencer ROI, and optimize eCommerce marketing. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/triple-whale-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – TripleWhale Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "TripleWhale Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How does creator data appear in Triple Whale?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Creator metrics appear in your main Triple Whale dashboard as a channel alongside paid ads, email, and organic traffic. View influencer revenue, orders, CAC, and ROAS in the same unified view you use for all marketing channels."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Does the Triple Whale pixel track creator touchpoints?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - the Triple Whale pixel captures influencer interactions across devices and sessions. This enables accurate multi-touch attribution showing how creators contribute to customer journeys alongside other marketing touchpoints."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I compare creator CAC with other channels?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Absolutely - Triple Whale calculates customer acquisition cost for creators alongside all other channels. Compare influencer CAC with Facebook Ads, Google Ads, email, and organic to optimize marketing spend allocation."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Are automated creator reports available?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - configure automated daily or weekly reports that include creator metrics. Receive Slack notifications or email reports with influencer performance alongside other channel metrics automatically."
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
        openGraphImage="/og/integrations-TripleWhale.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <TripleWhaleHeroSection />
        <TripleWhaleBenefitsSection />
        <TripleWhaleHowItWorksSection />
        <TripleWhaleUseCaseSection />
        <TripleWhaleFeaturesTable />
        <TripleWhaleWhyStoryclashSection />
        <TripleWhaleFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
