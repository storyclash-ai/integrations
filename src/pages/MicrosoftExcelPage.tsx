import Header from '../components/Header';
import MicrosoftExcelHeroSection from '../components/microsoftexcel/MicrosoftExcelHeroSection';
import MicrosoftExcelBenefitsSection from '../components/microsoftexcel/MicrosoftExcelBenefitsSection';
import MicrosoftExcelHowItWorksSection from '../components/microsoftexcel/MicrosoftExcelHowItWorksSection';
import MicrosoftExcelUseCaseSection from '../components/microsoftexcel/MicrosoftExcelUseCaseSection';
import MicrosoftExcelFeaturesTable from '../components/microsoftexcel/MicrosoftExcelFeaturesTable';
import MicrosoftExcelWhyStoryclashSection from '../components/microsoftexcel/MicrosoftExcelWhyStoryclashSection';
import MicrosoftExcelFAQSection from '../components/microsoftexcel/MicrosoftExcelFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function MicrosoftExcelPage() {
  const title = "Excel Influencer Marketing Integration | Storyclash";
  const description = "Connect Excel with Storyclash's influencer marketing platform. Export creator data, track campaign performance, and automate reporting workflows. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/excel-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Microsoft Excel Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Microsoft Excel Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "What file formats does the Storyclash Excel export support?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash exports influencer and creator data as XLSX or CSV (universal format). Both export types are fully compatible with Microsoft Excel, Google Sheets and other spreadsheet tools."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I customize which Storyclash creator and campaign data is exported to Excel?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. You can choose exactly which Storyclash metrics to export to Excel – for example engagement, reach, impressions, clicks, conversions, revenue, discount code usage or custom fields. Filter by date range, campaign or creator segments and only download the influencer data you need."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is historical influencer performance data available when exporting from Storyclash to Excel?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. Storyclash lets you export historical influencer performance data for any date range into Excel. This makes it easy to run trend analyses, compare campaign periods and build year-over-year reports in your spreadsheets."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I use my existing Excel templates and dashboards with Storyclash exports?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. Storyclash exports come in a structured, tabular format that works seamlessly with your existing Excel templates, formulas, pivot tables and dashboards. Simply connect the exported data to your current models and reporting logic."
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
        openGraphImage="/og/integrations-Microsoft-Excel.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <MicrosoftExcelHeroSection />
        <MicrosoftExcelBenefitsSection />
        <MicrosoftExcelHowItWorksSection />
        <MicrosoftExcelUseCaseSection />
        <MicrosoftExcelFeaturesTable />
        <MicrosoftExcelWhyStoryclashSection />
        <MicrosoftExcelFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
