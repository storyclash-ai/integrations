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
  const description = "Connect WooCommerce with Storyclash's influencer marketing platform. Track creator performance, measure ROI, and sync WooCommerce order and revenue data into Storyclash for analysis. Book a demo.";
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
                        "name": "How does Storyclash receive WooCommerce orders, revenue and discount code data?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Storyclash connects to WooCommerce via a secure connector and automatically receives orders, revenue, discount code usage and customer events from your shop. These e-commerce signals are matched with creator content to measure real sales impact and calculate influencer ROI inside Storyclash."
                        }
                },
{
                        "@type": "Question",
                        "name": "Which WooCommerce metrics can be imported into Storyclash for influencer revenue attribution?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Storyclash imports WooCommerce metrics such as orders, revenue, products sold, discount code usage, cart values, refunds, first-time vs. returning customers and timestamps. These shop metrics are combined with creator engagement data to deliver accurate revenue attribution for every influencer campaign."
                        }
                },
{
                        "@type": "Question",
                        "name": "How does Storyclash attribute WooCommerce orders to specific creators and campaigns?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Storyclash uses discount codes, UTM parameters, referral URLs and cross-platform tracking to connect WooCommerce orders to creator activity. Multi-touch journeys are supported, ensuring every sale is attributed to the correct influencer even when customers interact with multiple posts."
                        }
                },
{
                        "@type": "Question",
                        "name": "Do I need a developer to integrate WooCommerce with Storyclash?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "No. WooCommerce can be connected to Storyclash without any developer support. Simply activate the connector in Storyclash, add the tracking snippet or plugin to your WordPress/WooCommerce store and e-commerce data starts flowing into Storyclash automatically."
                        }
                },
{
                        "@type": "Question",
                        "name": "Is the WooCommerce → Storyclash connector GDPR-compliant and secure?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. The WooCommerce connector is fully GDPR-compliant, EU-hosted and encrypted to enterprise standards. Storyclash offers role-based access, SSO and secure data handling for all e-commerce and creator metrics."
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
