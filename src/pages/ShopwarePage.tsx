import Header from '../components/Header';
import Footer from '../components/Footer';
import ShopwareHeroSection from '../components/shopware/ShopwareHeroSection';
import ShopwareBenefitsSection from '../components/shopware/ShopwareBenefitsSection';
import ShopwareHowItWorksSection from '../components/shopware/ShopwareHowItWorksSection';
import ShopwareUseCaseSection from '../components/shopware/ShopwareUseCaseSection';
import ShopwareFeaturesTable from '../components/shopware/ShopwareFeaturesTable';
import ShopwareWhyStoryclashSection from '../components/shopware/ShopwareWhyStoryclashSection';
import ShopwareFAQSection from '../components/shopware/ShopwareFAQSection';
import CTASection from '../components/CTASection';
import { Seo } from '../components/Seo';

export default function ShopwarePage() {
  const title = "Shopware Influencer Marketing Integration | Storyclash";
  const description = "Connect Shopware with Storyclash's influencer marketing platform. Track creator performance, measure ROI, and sync campaign data to Shopware. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/shopware-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Shopware Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Shopware Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
{
                        "@type": "Question",
                        "name": "How does Storyclash measure influencer ROI in Shopware?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Storyclash connects to Shopware via REST API and attributes revenue, conversions, and AOV to creators using UTM parameters, discount codes, and referral tracking. The platform combines Shopware order data with campaign metrics to calculate ROI, ROAS, and customer acquisition cost per influencer-showing which creators drive profitable sales across sales channels, storefronts, and customer segments in your German or European ecommerce operations."
                        }
                },
{
                        "@type": "Question",
                        "name": "What influencer data can I sync from Shopware to Storyclash?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Sync order revenue, product SKUs, conversion events, shopping experiences data, customer segments, promotional code usage, cart values, and sales channel performance from Shopware. Storyclash maps this to creator campaigns, providing revenue attribution, AOV, LTV, ROAS, EMV, engagement rates, and traffic sources-all segmented by influencer, campaign, storefront, and product line for actionable insights tailored to European ecommerce teams."
                        }
                },
{
                        "@type": "Question",
                        "name": "How does Storyclash attribute Shopware sales to specific creators?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Attribution uses unique discount codes, UTM parameters in referral URLs, and tracking pixels to match Shopware orders to influencer content. The system captures customer journeys from creator post to checkout across multiple storefronts and sales channels, handling multi-touch attribution scenarios. This ensures accurate revenue tracking even when customers browse multiple Shopware Shopping Experiences before purchasing."
                        }
                },
{
                        "@type": "Question",
                        "name": "Can I connect Storyclash to Shopware without developer help?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. Marketing and ecommerce teams can connect Storyclash to Shopware via the REST API using API key authentication through your Shopware admin panel. Our documentation guides you through the setup-simply generate your API keys, configure the connection in Shopware settings, and creator campaign data syncs automatically. The integration works with Shopware 6, supports multi-storefront setups, and respects custom sales channel configurations for German and European market requirements."
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
        openGraphImage="/og/integrations-wooCommerce.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <ShopwareHeroSection />
        <ShopwareBenefitsSection />
        <ShopwareHowItWorksSection />
        <ShopwareUseCaseSection />
        <ShopwareFeaturesTable />
        <ShopwareWhyStoryclashSection />
        <ShopwareFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
