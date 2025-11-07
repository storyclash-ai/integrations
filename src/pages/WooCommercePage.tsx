import Header from '../components/Header';
import Footer from '../components/Footer';
import WooCommerceHeroSection from '../components/woocommerce/WooCommerceHeroSection';
import WooCommerceBenefitsSection from '../components/woocommerce/WooCommerceBenefitsSection';
import WooCommerceHowItWorksSection from '../components/woocommerce/WooCommerceHowItWorksSection';
import WooCommerceUseCaseSection from '../components/woocommerce/WooCommerceUseCaseSection';
import WooCommerceFeaturesTable from '../components/woocommerce/WooCommerceFeaturesTable';
import WooCommerceWhyStoryclashSection from '../components/woocommerce/WooCommerceWhyStoryclashSection';
import WooCommerceFAQSection from '../components/woocommerce/WooCommerceFAQSection';
import CTASection from '../components/CTASection';
import { Seo } from '../components/Seo';

export default function WooCommercePage() {
  const title = "WooCommerce Influencer Marketing Integration | Storyclash";
  const description = "Connect WooCommerce with Storyclash's influencer marketing platform. Track creator performance, measure ROI, and sync campaign data to WooCommerce. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/woocommerce-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – WooCommerce Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "WooCommerce Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
{
                        "@type": "Question",
                        "name": "How does Storyclash measure influencer ROI in WooCommerce?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Storyclash connects to WooCommerce via REST API and attributes revenue, conversions, and AOV to influencers using discount code tracking, UTM parameters, and referral URLs. The platform combines WooCommerce order data with campaign metrics to calculate ROI, ROAS, and customer acquisition cost per creator-showing which influencers drive profitable sales and repeat purchases in your WordPress store."
                        }
                },
{
                        "@type": "Question",
                        "name": "What influencer data can I sync from WooCommerce to Storyclash?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Sync order revenue, product SKUs, conversion events, customer segments, discount code usage, cart values, refund rates, and purchase timestamps from WooCommerce. Storyclash matches this data to creator campaigns, providing metrics like revenue attribution, AOV, LTV, ROAS, EMV, engagement rates, and traffic sources-all segmented by influencer, campaign, and product category for actionable WordPress ecommerce insights."
                        }
                },
{
                        "@type": "Question",
                        "name": "How does Storyclash attribute WooCommerce sales to specific influencers?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Attribution uses unique discount codes, UTM parameters in referral URLs, and tracking pixels to match WooCommerce orders to creator content. The system captures the customer journey from influencer post click to checkout, handling multi-touch scenarios where customers engage with multiple creators. This ensures accurate revenue attribution even in complex WordPress sales funnels."
                        }
                },
{
                        "@type": "Question",
                        "name": "Can I connect Storyclash to WooCommerce without developer help?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. Marketing teams can connect Storyclash to WooCommerce using the REST API with API key authentication through your WordPress admin panel. Our documentation guides you through the setup-simply enter your API credentials in WooCommerce settings, and creator campaign data syncs automatically. The integration works with any WooCommerce setup, including multi-site WordPress installations and custom themes."
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
        <WooCommerceHeroSection />
        <WooCommerceBenefitsSection />
        <WooCommerceHowItWorksSection />
        <WooCommerceUseCaseSection />
        <WooCommerceFeaturesTable />
        <WooCommerceWhyStoryclashSection />
        <WooCommerceFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
