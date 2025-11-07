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
  const description = "Connect Google Sheets with Storyclash's influencer marketing platform. Export creator data to your reporting tools, automate data transfers, and unify campaign metrics. Book a demo.";
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
                              "name": "How often does data sync to Google Sheets?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "You can configure automatic exports to run daily, weekly, or in real-time. Data updates appear in your Google Sheet within minutes of the scheduled sync."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I choose which metrics to export?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - select exactly which creator metrics you need: engagement rate, reach, impressions, conversions, revenue, or any custom fields you track in Storyclash."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is there a limit to how many people can access the Sheet?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "No - once data is exported to Google Sheets, you can share it with unlimited team members and stakeholders using standard Google Sheets permissions."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I export historical campaign data?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - export influencer performance data for any date range, enabling year-over-year comparisons and historical trend analysis in Sheets."
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
