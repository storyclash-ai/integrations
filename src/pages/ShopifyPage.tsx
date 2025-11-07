import Header from '../components/Header';
import Footer from '../components/Footer';
import ShopifyHeroSection from '../components/shopify/ShopifyHeroSection';
import ShopifyBenefitsSection from '../components/shopify/ShopifyBenefitsSection';
import ShopifyHowItWorksSection from '../components/shopify/ShopifyHowItWorksSection';
import ShopifyUseCaseSection from '../components/shopify/ShopifyUseCaseSection';
import ShopifyFeaturesTable from '../components/shopify/ShopifyFeaturesTable';
import ShopifyWhyStoryclashSection from '../components/shopify/ShopifyWhyStoryclashSection';
import ShopifyFAQSection from '../components/shopify/ShopifyFAQSection';
import CTASection from '../components/CTASection';
import { Seo } from '../components/Seo';

export default function ShopifyPage() {
  const title = "Shopify Influencer Marketing Integration | Storyclash";
  const description = "Connect Shopify with Storyclash's influencer marketing platform. Track creator sales, measure ROI, and sync revenue data to your store. Native integration available. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/shopify-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Shopify Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Shopify Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
{
                        "@type": "Question",
                        "name": "How does Storyclash measure influencer ROI in Shopify?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Storyclash connects to Shopify via native API and tracks revenue, conversions, and AOV by matching UTM parameters and discount codes to creator campaigns. Results appear in real-time dashboards showing ROI, ROAS, customer acquisition cost, and repeat purchase rates per influencer-enabling teams to compare creator performance and optimize social commerce spend directly within Shopify analytics."
                        }
                },
{
                        "@type": "Question",
                        "name": "What influencer metrics can I track in Shopify with Storyclash?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Track revenue attribution, conversion rates, average order value (AOV), customer lifetime value (LTV), return on ad spend (ROAS), earned media value (EMV), engagement rates, impressions, and click-through rates. All metrics are segmented by creator, campaign, product SKU, and time period-giving you complete visibility into which influencers drive profitable sales in your Shopify store."
                        }
                },
{
                        "@type": "Question",
                        "name": "How does attribution work for Shopify influencer campaigns?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Storyclash uses first-party tracking via UTM parameters, unique discount codes, and referral URLs to attribute Shopify orders to specific creators and campaigns. The system captures customer journey data from initial click through purchase, handling multi-touch attribution scenarios. This ensures accurate ROI measurement even when customers interact with multiple influencer posts before buying."
                        }
                },
{
                        "@type": "Question",
                        "name": "Can I connect Storyclash to Shopify without a developer?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. Marketing and ecommerce teams can connect Storyclash to Shopify using the REST API with API key authentication. Our documentation guides you through the setup process-simply generate your API key, configure the connection, and creator campaign data syncs automatically to your Shopify analytics dashboards with configurable refresh intervals for near real-time reporting."
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
        openGraphImage="/og/integrations-shopify.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <ShopifyHeroSection />
        <ShopifyBenefitsSection />
        <ShopifyHowItWorksSection />
        <ShopifyUseCaseSection />
        <ShopifyFeaturesTable />
        <ShopifyWhyStoryclashSection />
        <ShopifyFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
