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
                              "name": "How does Storyclash integrate creator campaigns with Triple Whale?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Attribution works through unique discount codes or UTM parameters assigned to each creator campaign. When customers use these codes at checkout, Triple Whale captures the attribution. Storyclash provides campaign context (creator names, content, spend) which appears in your Triple Whale dashboard as a channel alongside paid ads and email, so you can track influencer revenue, orders, CAC and ROAS in the same unified view."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can Triple Whale track creator touchpoints with code-based attribution from influencer campaigns?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. When customers use creator-specific discount codes or UTM-tracked links, Triple Whale captures these attribution points and combines them with creator campaign data from Storyclash. This enables accurate attribution that shows how creators contribute to revenue alongside other marketing channels."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How do I compare creator CAC from Storyclash with other channels in Triple Whale?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Triple Whale calculates customer acquisition cost for creators alongside all other channels. By combining Storyclash creator spend and Triple Whale revenue data, you can compare influencer CAC with Facebook Ads, Google Ads, email and organic to optimize budget allocation."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I get automated creator performance reports in Triple Whale?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. You can configure automated daily or weekly reports in Triple Whale that include creator metrics sourced from Storyclash. Receive Slack notifications or email reports with influencer performance alongside other channel metrics without manual reporting work."
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
        keywords="Triple Whale influencer marketing integration, Triple Whale creator analytics, Triple Whale attribution for creators, Storyclash Triple Whale API, DTC ecommerce influencer ROI"
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
