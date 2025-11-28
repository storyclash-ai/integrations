import Header from '../components/Header';
import Footer from '../components/Footer';
import PowerBIHeroSection from '../components/powerbi/PowerBIHeroSection';
import PowerBIBenefitsSection from '../components/powerbi/PowerBIBenefitsSection';
import PowerBIHowItWorksSection from '../components/powerbi/PowerBIHowItWorksSection';
import PowerBIUseCaseSection from '../components/powerbi/PowerBIUseCaseSection';
import PowerBIFeaturesTable from '../components/powerbi/PowerBIFeaturesTable';
import PowerBIWhyStoryclashSection from '../components/powerbi/PowerBIWhyStoryclashSection';
import PowerBIFAQSection from '../components/powerbi/PowerBIFAQSection';
import CTASection from '../components/CTASection';
import { Seo } from '../components/Seo';

export default function PowerBIPage() {
  const title = "Power BI Influencer Marketing Integration | Storyclash";
  const description = "Connect Power BI with Storyclash's influencer marketing platform. Export creator and campaign data via REST API to build interactive dashboards, visualize influencer ROI, and combine Storyclash metrics with your business data. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/power-bi-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Power BI Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Power BI Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How do I connect Storyclash influencer data to Power BI?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash exports data to Power BI via REST API. After authenticating with your API token, Storyclash sends creator metrics, campaign performance, and influencer ROI data directly to Power BI for custom dashboard creation."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which influencer marketing metrics can I analyze in Power BI?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "You can analyze comprehensive influencer metrics including impressions, reach, engagement, engagement rate, EMV (Earned Media Value), conversions, attributed revenue, ROI, ROAS, and creator-level KPIs. Power BI enables you to blend these with sales, CRM, or web analytics data for complete attribution analysis."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How often does Storyclash send influencer campaign data to Power BI?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash exports data to Power BI via REST API based on your configured schedule. Power BI can automatically refresh dashboards so your team always sees current influencer performance, campaign ROI, and creator analytics."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I combine Storyclash influencer data with other business data in Power BI?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. Power BI's data modeling lets you combine Storyclash creator metrics with CRM data, e-commerce sales, web analytics, and other business intelligence sources to build complete influencer attribution models and ROI dashboards."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is the Storyclash → Power BI integration secure and GDPR-compliant?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. Storyclash uses encrypted REST API endpoints, secure token-based authentication, and GDPR-compliant EU data hosting. Power BI integrations support enterprise security standards with role-based access control and audit logging."
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
        openGraphImage="/og/integrations-PowerBI.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <PowerBIHeroSection />
        <PowerBIBenefitsSection />
        <PowerBIHowItWorksSection />
        <PowerBIUseCaseSection />
        <PowerBIFeaturesTable />
        <PowerBIWhyStoryclashSection />
        <PowerBIFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
