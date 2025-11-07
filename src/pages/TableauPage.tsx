import Header from '../components/Header';
import Footer from '../components/Footer';
import TableauHeroSection from '../components/tableau/TableauHeroSection';
import TableauBenefitsSection from '../components/tableau/TableauBenefitsSection';
import TableauHowItWorksSection from '../components/tableau/TableauHowItWorksSection';
import TableauUseCaseSection from '../components/tableau/TableauUseCaseSection';
import TableauFeaturesTable from '../components/tableau/TableauFeaturesTable';
import TableauWhyStoryclashSection from '../components/tableau/TableauWhyStoryclashSection';
import TableauFAQSection from '../components/tableau/TableauFAQSection';
import CTASection from '../components/CTASection';
import { Seo } from '../components/Seo';

export default function TableauPage() {
  const title = "Tableau Influencer Marketing Integration | Storyclash";
  const description = "Connect Tableau with Storyclash's influencer marketing platform. Store creator campaign data in your data warehouse, analyze performance, and build custom models. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/tableau-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Tableau Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Tableau Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How does Storyclash integrate with Tableau?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Authenticate via your API key and connect through the Storyclash REST API. The integration provides a live data source that you can drag directly into your Tableau workbooks."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What creator metrics are available in Tableau?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "All core influencer KPIs including engagement rate, reach, impressions, EMV, conversions, audience demographics, sentiment analysis, and campaign performance-organized by creator, platform, and time period."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I combine Storyclash data with other data sources in Tableau?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Absolutely. Blend Storyclash creator metrics with your CRM, ad spend, sales, or web analytics data to build comprehensive marketing performance dashboards."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How often does the data refresh?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Data syncs automatically based on your Tableau refresh schedule. You can configure real-time updates or scheduled refreshes (hourly, daily, weekly)."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Do I need technical expertise to set this up?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "No coding required. If you can use Tableau, you can connect Storyclash. Setup takes less than 10 minutes with our step-by-step guide."
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
        openGraphImage="/og/integrations-Tableau.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <TableauHeroSection />
        <TableauBenefitsSection />
        <TableauHowItWorksSection />
        <TableauUseCaseSection />
        <TableauFeaturesTable />
        <TableauWhyStoryclashSection />
        <TableauFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
