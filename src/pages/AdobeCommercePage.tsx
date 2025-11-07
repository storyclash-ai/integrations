import Header from '../components/Header';
import Footer from '../components/Footer';
import AdobeCommerceHeroSection from '../components/adobecommerce/AdobeCommerceHeroSection';
import AdobeCommerceBenefitsSection from '../components/adobecommerce/AdobeCommerceBenefitsSection';
import AdobeCommerceHowItWorksSection from '../components/adobecommerce/AdobeCommerceHowItWorksSection';
import AdobeCommerceUseCaseSection from '../components/adobecommerce/AdobeCommerceUseCaseSection';
import AdobeCommerceFeaturesTable from '../components/adobecommerce/AdobeCommerceFeaturesTable';
import AdobeCommerceWhyStoryclashSection from '../components/adobecommerce/AdobeCommerceWhyStoryclashSection';
import AdobeCommerceFAQSection from '../components/adobecommerce/AdobeCommerceFAQSection';
import CTASection from '../components/CTASection';
import { Seo } from '../components/Seo';

export default function AdobeCommercePage() {
  const title = "Adobe Commerce Influencer Marketing Integration | Storyclash";
  const description = "Connect Adobe Commerce Cloud with Storyclash's influencer marketing platform. Track creator performance, measure ROI, and sync campaign data to Adobe Commerce. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/Adobe-Commerce-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Adobe Commerce Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Adobe Commerce Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
{
                        "@type": "Question",
                        "name": "How does Storyclash measure influencer ROI in Adobe Commerce?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Storyclash connects to Adobe Commerce (Magento) via REST API with OAuth 2.0 authentication, syncing order data, revenue, and customer segments. The platform attributes sales to creators using UTM tracking, discount codes, and multi-touch attribution models-calculating ROI, ROAS, AOV, and LTV per influencer. Enterprise dashboards show which creators drive revenue across multiple store views, regions, and customer segments with full Adobe Analytics integration."
                        }
                },
{
                        "@type": "Question",
                        "name": "What influencer metrics can I track in Adobe Commerce with Storyclash?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Track revenue attribution by creator and campaign, conversion rates, average order value, customer lifetime value, return on ad spend, earned media value, product performance by SKU, cart abandonment rates, cross-sell impact, and customer segment behavior. All metrics sync to Adobe Commerce data models and support multi-store reporting, B2B account analysis, and custom attribute mapping for enterprise merchandising and marketing teams."
                        }
                },
{
                        "@type": "Question",
                        "name": "How does Storyclash attribute Adobe Commerce sales to influencers?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Attribution combines first-party tracking pixels, UTM parameters, unique promotional codes, and referral URLs to match Adobe Commerce orders to creator campaigns. The system supports multi-touch attribution across customer segments, store views, and sales channels-handling complex B2B scenarios, account-based purchases, and cross-border transactions. Integration with Adobe Analytics provides unified customer journey visibility from influencer touchpoint to purchase."
                        }
                },
{
                        "@type": "Question",
                        "name": "Can I connect Storyclash to Adobe Commerce without a developer?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Adobe Commerce integrations typically require IT involvement for initial API authentication, OAuth configuration, and security policy setup. However, once connected, marketing teams manage creator tracking, campaign attribution, and reporting independently through the Storyclash dashboard. Enterprise customers receive dedicated onboarding support including API configuration, custom attribute mapping, and multi-store setup assistance for complex Adobe Commerce deployments."
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
        openGraphImage="/og/integrations-adobe-commerce.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <AdobeCommerceHeroSection />
        <AdobeCommerceBenefitsSection />
        <AdobeCommerceHowItWorksSection />
        <AdobeCommerceUseCaseSection />
        <AdobeCommerceFeaturesTable />
        <AdobeCommerceWhyStoryclashSection />
        <AdobeCommerceFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
