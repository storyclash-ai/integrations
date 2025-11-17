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
  const description = "Connect BigCommerce with Storyclash's influencer marketing platform. Track creator performance, measure ROI, and sync BigCommerce order and revenue data into Storyclash for analysis. Book a demo.";
  const keywords = "BigCommerce influencer marketing integration, BigCommerce creator analytics, BigCommerce influencer ROI, BigCommerce revenue attribution, BigCommerce Storyclash connector";
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
                        "name": "How does Storyclash receive BigCommerce orders, revenue and customer data?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Storyclash connects to BigCommerce via a secure connector and automatically receives orders, revenue, line items, refunds and customer segments. This BigCommerce data is combined with creator content and campaign tracking to measure influencer-driven revenue based on real purchases."
                        }
                },
{
                        "@type": "Question",
                        "name": "Which BigCommerce metrics can be imported into Storyclash for influencer revenue attribution?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Storyclash ingests BigCommerce metrics such as orders, revenue, products sold, discount code usage, average order value, refunds, customer segments and timestamps for accurate revenue attribution and ecommerce reporting."
                        }
                },
{
                        "@type": "Question",
                        "name": "How does Storyclash attribute BigCommerce orders to specific creators and campaigns?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Storyclash attributes BigCommerce orders to creators using discount codes, UTM parameters, referral URLs and first-party tracking. Multi-touch journeys are supported for accurate attribution across channels."
                        }
                },
{
                        "@type": "Question",
                        "name": "Do I need a developer to connect BigCommerce with Storyclash?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "No. BigCommerce can be connected to Storyclash without building a custom API integration. Activate the BigCommerce connector in Storyclash, add the tracking snippet to your store, and ecommerce data will start flowing automatically."
                        }
                },
{
                        "@type": "Question",
                        "name": "Is the BigCommerce → Storyclash connector GDPR-compliant and secure?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. The BigCommerce → Storyclash connector is fully GDPR-compliant, EU-hosted and encrypted to enterprise standards. Storyclash offers SSO, role-based access and secure data handling for all ecommerce and creator metrics."
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
        keywords={keywords}
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
