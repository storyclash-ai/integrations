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
  const description = "Connect Shopify with Storyclash's influencer marketing platform. Track creator sales, measure ROI, and sync Shopify order and revenue data into Storyclash for analysis. Native connector available. Book a demo.";
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
                        "name": "How does Storyclash receive Shopify orders, revenue and discount code data?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Storyclash connects to Shopify via a secure connector and automatically receives orders, revenue, discount code usage and customer events from your store. These e-commerce signals are matched with creator content to measure real sales impact and calculate influencer ROI inside Storyclash."
                        }
                },
{
                        "@type": "Question",
                        "name": "Which Shopify metrics can be imported into Storyclash for influencer revenue attribution?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Storyclash imports Shopify metrics such as orders, revenue, net sales, products sold, discount code usage, cart values, refunds, conversions, first-time vs. returning customers, customer acquisition cost (CAC), and return on ad spend (ROAS). These shop metrics are combined with creator engagement data to deliver accurate revenue attribution for every influencer campaign."
                        }
                },
{
                        "@type": "Question",
                        "name": "How does Storyclash attribute Shopify orders to specific creators and campaigns?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Storyclash uses discount codes, UTM parameters, referral URLs and cross-platform tracking to connect Shopify orders to creator activity. Multi-touch journeys are supported, ensuring every sale is attributed to the correct influencer even when customers interact with multiple posts."
                        }
                },
{
                        "@type": "Question",
                        "name": "Do I need a developer to integrate Shopify with Storyclash?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "No. Shopify can be connected to Storyclash without any developer support. Simply activate the connector in Storyclash, add the tracking snippet or app to your Shopify store and e-commerce data starts flowing into Storyclash automatically."
                        }
                },
{
                        "@type": "Question",
                        "name": "Is the Shopify → Storyclash connector GDPR-compliant and secure?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. The Shopify connector is fully GDPR-compliant, EU-hosted and encrypted to enterprise standards. Storyclash offers role-based access, SSO and secure data handling for all e-commerce and creator metrics."
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
