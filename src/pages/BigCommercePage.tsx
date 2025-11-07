import Header from '../components/Header';
import BigCommerceHeroSection from '../components/bigcommerce/BigCommerceHeroSection';
import BigCommerceBenefitsSection from '../components/bigcommerce/BigCommerceBenefitsSection';
import BigCommerceHowItWorksSection from '../components/bigcommerce/BigCommerceHowItWorksSection';
import BigCommerceUseCaseSection from '../components/bigcommerce/BigCommerceUseCaseSection';
import BigCommerceFeaturesTable from '../components/bigcommerce/BigCommerceFeaturesTable';
import BigCommerceWhyStoryclashSection from '../components/bigcommerce/BigCommerceWhyStoryclashSection';
import BigCommerceFAQSection from '../components/bigcommerce/BigCommerceFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function BigCommercePage() {
  const title = "BigCommerce Influencer Marketing Integration | Storyclash";
  const description = "Connect BigCommerce with Storyclash's influencer marketing platform. Track creator performance, measure ROI, and sync campaign data to BigCommerce. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/bigcommerce-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Big Commerce Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Big Commerce Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
{
                        "@type": "Question",
                        "name": "How does Storyclash measure influencer ROI in BigCommerce?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Storyclash connects to BigCommerce via OAuth API and tracks revenue, conversions, and AOV by matching UTM parameters, discount codes, and referral URLs to creator campaigns. The platform syncs BigCommerce order data in real-time, calculating ROI, ROAS, customer acquisition cost, and LTV per influencer. Dashboards show which creators drive sales across channels, product categories, and customer segments-optimizing social commerce spend for growing brands."
                        }
                },
{
                        "@type": "Question",
                        "name": "What influencer metrics can I track in BigCommerce with Storyclash?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Track revenue attribution by creator and campaign, conversion rates, average order value, customer lifetime value, return on ad spend, earned media value, product performance by SKU, cart metrics, checkout behavior, and multi-channel attribution. All data syncs from BigCommerce APIs and supports multi-store reporting, B2B wholesale tracking, and custom field mapping-giving ecommerce teams complete visibility into creator-driven sales performance."
                        }
                },
{
                        "@type": "Question",
                        "name": "How does Storyclash attribute BigCommerce sales to specific influencers?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Attribution uses UTM parameters, tracking pixels, unique promotional codes, and referral URLs to match BigCommerce orders to influencer content. The system captures the full customer journey from creator touchpoint through checkout, handling multi-touch scenarios where customers interact with multiple creators. First-click, last-click, and linear attribution models ensure accurate revenue tracking across complex BigCommerce sales funnels."
                        }
                },
{
                        "@type": "Question",
                        "name": "Can I track multiple BigCommerce stores with one Storyclash account?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. Connect multiple BigCommerce stores to a single Storyclash account for consolidated cross-store reporting and unified creator performance tracking. The platform supports multi-store setups including separate brands, regional stores, B2B wholesale portals, and test environments-with store-level segmentation in dashboards. Perfect for brands managing multiple BigCommerce storefronts or operating international ecommerce operations with centralized influencer marketing teams."
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
        <BigCommerceHeroSection />
        <BigCommerceBenefitsSection />
        <BigCommerceHowItWorksSection />
        <BigCommerceUseCaseSection />
        <BigCommerceFeaturesTable />
        <BigCommerceWhyStoryclashSection />
        <BigCommerceFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
