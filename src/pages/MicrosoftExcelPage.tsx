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
                              "name": "What file formats are supported?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Export data as XLSX (Excel native) or CSV (universal format) - both compatible with Microsoft Excel, Google Sheets, and all spreadsheet applications."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I customize which data to export?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - select specific metrics, date ranges, and creator segments before export. Only download the data you need for your analysis."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is historical data available for export?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - export influencer performance data for any historical date range, enabling trend analysis and multi-period comparisons."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I use my existing Excel templates?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - import exported data into your existing Excel templates. The structured format works with your formulas, macros, and reporting logic."
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
