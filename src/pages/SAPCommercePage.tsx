import Header from '../components/Header';
import SAPCommerceHeroSection from '../components/sapcommerce/SAPCommerceHeroSection';
import SAPCommerceBenefitsSection from '../components/sapcommerce/SAPCommerceBenefitsSection';
import SAPCommerceHowItWorksSection from '../components/sapcommerce/SAPCommerceHowItWorksSection';
import SAPCommerceUseCaseSection from '../components/sapcommerce/SAPCommerceUseCaseSection';
import SAPCommerceFeaturesTable from '../components/sapcommerce/SAPCommerceFeaturesTable';
import SAPCommerceWhyStoryclashSection from '../components/sapcommerce/SAPCommerceWhyStoryclashSection';
import SAPCommerceFAQSection from '../components/sapcommerce/SAPCommerceFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function SAPCommercePage() {
  const title = "SAP Commerce Cloud Influencer Marketing Integration | Storyclash";
  const description = "Connect SAP Commerce Cloud with Storyclash's influencer marketing platform. Track creator performance, measure ROI, and sync SAP Commerce Cloud order and revenue data into Storyclash for analysis. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/sap-commerce-cloud-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – SAP Commerce Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "SAP Commerce Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "Which versions of SAP Commerce Cloud are supported?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "We support SAP Commerce Cloud 2.x and newer versions. Our SAP Commerce Cloud connector works with both cloud-hosted and on-premise deployments."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How does the integration handle multi-country operations?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "The integration natively supports multiple storefronts, currencies, and languages. You can track creator performance per market or view unified global reporting."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is this integration compliant with enterprise security standards?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - we use OAuth 2.0 authentication, encrypt all data in transit and at rest, and maintain GDPR compliance with data processing agreements (DPAs). Full audit logs are available."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can we segment reporting by business unit or brand?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Absolutely. You can create separate views for different brands, regions, or business units while maintaining centralized governance and data consistency."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How does the SAP Commerce Cloud integration work with Storyclash?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash connects to SAP Commerce Cloud via a secure, pre-built connector that uses enterprise authentication. SAP Commerce Cloud sends order, revenue and customer data into Storyclash, where it is combined with creator content and campaign tracking to deliver revenue attribution and customer journey insights. Your IT team controls permissions and security, while marketing teams work directly in Storyclash without managing APIs."
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
        openGraphImage="/og/integrations-SAP-Commercel.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <SAPCommerceHeroSection />
        <SAPCommerceBenefitsSection />
        <SAPCommerceHowItWorksSection />
        <SAPCommerceUseCaseSection />
        <SAPCommerceFeaturesTable />
        <SAPCommerceWhyStoryclashSection />
        <SAPCommerceFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
