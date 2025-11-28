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
  const description = "Connect Adobe Commerce Cloud with Storyclash's influencer marketing platform. Track creator performance, measure ROI, and sync Adobe Commerce order and revenue data into Storyclash for analysis. Book a demo.";
  const keywords = "Adobe Commerce influencer marketing integration, Adobe Commerce creator analytics, Adobe Commerce influencer ROI, Adobe Commerce revenue attribution, Adobe Commerce Storyclash connector";
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
                        "name": "How does Storyclash receive Adobe Commerce orders, revenue and customer data?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Storyclash connects to Adobe Commerce via a secure connector or extension and automatically receives orders, revenue, line items, refunds and customer segments from your stores. This Adobe Commerce data is combined with creator content and campaign tracking in Storyclash, so you can measure influencer-driven revenue based on real purchases across all markets and store views."
                        }
                },
{
                        "@type": "Question",
                        "name": "Which Adobe Commerce metrics can be imported into Storyclash for influencer revenue reporting?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Storyclash can ingest Adobe Commerce metrics such as orders, revenue, net sales, products sold, discount code usage, average order value, refunds, conversions, new vs. returning customers, customer acquisition cost (CAC), and return on ad spend (ROAS). These metrics are mapped into Storyclash and used to power creator revenue dashboards, cohort analysis and multi-store reporting."
                        }
                },
{
                        "@type": "Question",
                        "name": "How does Storyclash attribute Adobe Commerce orders to specific creators and campaigns?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Storyclash uses unique discount codes to connect Adobe Commerce orders to specific creators and campaigns. When a customer uses a creator's discount code at checkout, the sale is automatically attributed to that influencer, enabling accurate ROI measurement and performance tracking across all store views and regions."
                        }
                },
{
                        "@type": "Question",
                        "name": "Do I need a developer to connect Adobe Commerce with Storyclash?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "No. Marketing teams can connect Adobe Commerce with Storyclash using the connector. Simply activate the Adobe Commerce connector in Storyclash, install the extension or tracking snippet in your Adobe Commerce environment, and e-commerce data will start flowing into Storyclash automatically. Your IT team can still review and approve the setup, but day-to-day management stays with marketing."
                        }
                },
{
                        "@type": "Question",
                        "name": "Is the Adobe Commerce → Storyclash connector enterprise-secure and GDPR-compliant?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes. The Adobe Commerce → Storyclash connector is fully GDPR-compliant, hosted in the EU and encrypted to enterprise standards. Storyclash offers role-based access control, SSO and secure data handling for all Adobe Commerce and creator metrics, aligned with the security requirements of enterprise commerce teams."
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
