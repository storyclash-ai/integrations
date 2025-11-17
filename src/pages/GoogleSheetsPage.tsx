import Header from '../components/Header';
import GoogleSheetsHeroSection from '../components/googlesheets/GoogleSheetsHeroSection';
import GoogleSheetsBenefitsSection from '../components/googlesheets/GoogleSheetsBenefitsSection';
import GoogleSheetsHowItWorksSection from '../components/googlesheets/GoogleSheetsHowItWorksSection';
import GoogleSheetsUseCaseSection from '../components/googlesheets/GoogleSheetsUseCaseSection';
import GoogleSheetsFeaturesTable from '../components/googlesheets/GoogleSheetsFeaturesTable';
import GoogleSheetsWhyStoryclashSection from '../components/googlesheets/GoogleSheetsWhyStoryclashSection';
import GoogleSheetsFAQSection from '../components/googlesheets/GoogleSheetsFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function GoogleSheetsPage() {
  const title = "Google Sheets Influencer Marketing Integration | Storyclash";
  const description = "Connect Google Sheets with Storyclash's influencer marketing platform. Export creator and campaign data into Google Sheets via API to build live dashboards, automate reporting and blend influencer metrics with your business data. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/google-sheets-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Google Sheets Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Google Sheets Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How does Storyclash export influencer and campaign data to Google Sheets?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash exports creator and campaign metrics to Google Sheets via a secure REST API. After authenticating with your API key, your Sheets document will receive live influencer data from Storyclash without manual exports."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which Storyclash metrics can I use inside Google Sheets dashboards?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "You can sync impressions, reach, engagement, engagement rate, conversions, revenue attribution, EMV, ROI, ROAS and creator-level KPIs directly into Google Sheets. All Storyclash metrics can be used in formulas, pivot tables and charts."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How often does Storyclash sync creator data with Google Sheets?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash can sync influencer data to Google Sheets in near real time or on scheduled intervals. Your spreadsheets always stay updated without manual imports or copy-paste work."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Do I need technical skills to connect Storyclash to Google Sheets?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes, you need some technical skills to set up the API connection with your Storyclash API key. However, once connected, marketing teams can use Google Sheets built-in formulas and charts without additional technical expertise."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is the Storyclash → Google Sheets integration secure and GDPR-compliant?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. The Storyclash → Google Sheets integration uses secure, encrypted API endpoints and token-based authentication. Storyclash is fully GDPR-compliant and processes influencer and campaign data on EU-hosted infrastructure."
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
        openGraphImage="/og/integrations-googleSheets.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <GoogleSheetsHeroSection />
        <GoogleSheetsBenefitsSection />
        <GoogleSheetsHowItWorksSection />
        <GoogleSheetsUseCaseSection />
        <GoogleSheetsFeaturesTable />
        <GoogleSheetsWhyStoryclashSection />
        <GoogleSheetsFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
