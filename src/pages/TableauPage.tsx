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
  const description = "Connect Tableau with Storyclash's influencer marketing platform. Export creator and campaign data via REST API to build interactive dashboards, visualize influencer ROI, and combine Storyclash metrics with your business data. Book a demo.";
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
                              "name": "How do I connect Storyclash influencer data to Tableau via REST API?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash connects to Tableau as a REST API data source. After authenticating with your API token, Storyclash exports creator and campaign metrics directly to Tableau so you can build interactive influencer dashboards without manual file uploads."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which Storyclash metrics can I visualize in Tableau dashboards?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "You can visualize Storyclash metrics such as impressions, reach, engagement, engagement rate, EMV, conversions, attributed revenue, ROI, ROAS and creator-level KPIs. Tableau can blend these metrics with your BI or sales data."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How often does Storyclash sync creator and campaign data to Tableau?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash updates data via API on the schedule you configure. Tableau refreshes your dashboards automatically so stakeholders always see up-to-date influencer performance."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Do I need technical skills to connect Storyclash to Tableau?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes, you need some technical skills to set up the REST API connection with your API key. However, once connected, any Tableau user can build dashboards without additional technical expertise."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is the Storyclash → Tableau integration secure and GDPR-compliant?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. Storyclash uses encrypted REST API endpoints, secure token-based authentication, and GDPR-compliant EU hosting. Access can be restricted via roles and audit logs."
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

