#!/bin/bash

# Script to create remaining German DE integration pages
# This script creates the remaining 19 German DE page files

cd /Users/stefanmiron/Desktop/integrations/src/pages

# GoogleSheets DE Page
cat > GoogleSheetsDePage.tsx << 'EOF'
import Header from '../components/Header';
import GoogleSheetsHeroSectionDE from '../components/googlesheets/GoogleSheetsHeroSectionDE';
import GoogleSheetsBenefitsSectionDE from '../components/googlesheets/GoogleSheetsBenefitsSectionDE';
import GoogleSheetsHowItWorksSectionDE from '../components/googlesheets/GoogleSheetsHowItWorksSectionDE';
import GoogleSheetsUseCaseSectionDE from '../components/googlesheets/GoogleSheetsUseCaseSectionDE';
import GoogleSheetsFeaturesTableDE from '../components/googlesheets/GoogleSheetsFeaturesTableDE';
import GoogleSheetsWhyStoryclashSectionDE from '../components/googlesheets/GoogleSheetsWhyStoryclashSectionDE';
import GoogleSheetsFAQSectionDE from '../components/googlesheets/GoogleSheetsFAQSectionDE';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function GoogleSheetsDePage() {
  const title = "Google Sheets Influencer Marketing Integration | Storyclash";
  const description = "Verbinden Sie Google Sheets mit Storyclashs Influencer-Marketing-Plattform. Exportieren Sie Creator-Daten in Ihre Reporting-Tools, automatisieren Sie Datenübertragungen und vereinheitlichen Sie Kampagnenmetriken. Demo buchen.";
  const canonical = "https://www.storyclash.com/de/integrations/google-sheets-influencer-marketing";

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
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.storyclash.com/de/" },
          { "@type": "ListItem", "position": 2, "name": "Integrationen", "item": "https://www.storyclash.com/de/integrations" },
          { "@type": "ListItem", "position": 3, "name": "Google Sheets Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "Wie oft synchronisieren sich die Daten mit Google Sheets?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Sie können automatische Exporte so konfigurieren, dass sie täglich, wöchentlich oder in Echtzeit ausgeführt werden. Datenaktualisierungen erscheinen innerhalb von Minuten nach der geplanten Synchronisierung in Ihrem Google Sheet."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Kann ich auswählen, welche Metriken exportiert werden sollen?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Ja - wählen Sie genau die Creator-Metriken aus, die Sie benötigen: Engagement-Rate, Reichweite, Impressionen, Konversionen, Umsatz oder alle benutzerdefinierten Felder, die Sie in Storyclash verfolgen."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Gibt es ein Limit für die Anzahl der Personen, die auf das Sheet zugreifen können?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Nein - sobald Daten nach Google Sheets exportiert wurden, können Sie es mit unbegrenzten Teammitgliedern und Stakeholdern über Standard-Google Sheets-Berechtigungen teilen."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Kann ich historische Kampagnendaten exportieren?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Ja - exportieren Sie Influencer-Performance-Daten für jeden Zeitraum und ermöglichen Sie Jahresvergleiche und historische Trendanalysen in Sheets."
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
        <GoogleSheetsHeroSectionDE />
        <GoogleSheetsBenefitsSectionDE />
        <GoogleSheetsHowItWorksSectionDE />
        <GoogleSheetsUseCaseSectionDE />
        <GoogleSheetsFeaturesTableDE />
        <GoogleSheetsWhyStoryclashSectionDE />
        <GoogleSheetsFAQSectionDE />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
EOF

echo "Created GoogleSheetsDePage.tsx"

# MicrosoftExcel DE Page
cat > MicrosoftExcelDePage.tsx << 'EOF'
import Header from '../components/Header';
import MicrosoftExcelHeroSectionDE from '../components/microsoftexcel/MicrosoftExcelHeroSectionDE';
import MicrosoftExcelBenefitsSectionDE from '../components/microsoftexcel/MicrosoftExcelBenefitsSectionDE';
import MicrosoftExcelHowItWorksSectionDE from '../components/microsoftexcel/MicrosoftExcelHowItWorksSectionDE';
import MicrosoftExcelUseCaseSectionDE from '../components/microsoftexcel/MicrosoftExcelUseCaseSectionDE';
import MicrosoftExcelFeaturesTableDE from '../components/microsoftexcel/MicrosoftExcelFeaturesTableDE';
import MicrosoftExcelWhyStoryclashSectionDE from '../components/microsoftexcel/MicrosoftExcelWhyStoryclashSectionDE';
import MicrosoftExcelFAQSectionDE from '../components/microsoftexcel/MicrosoftExcelFAQSectionDE';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function MicrosoftExcelDePage() {
  const title = "Excel Influencer Marketing Integration | Storyclash";
  const description = "Verbinden Sie Excel mit Storyclashs Influencer-Marketing-Plattform. Exportieren Sie Creator-Daten, verfolgen Sie Kampagnenperformance und automatisieren Sie Reporting-Workflows. Demo buchen.";
  const canonical = "https://www.storyclash.com/de/integrations/excel-influencer-marketing";

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
          { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.storyclash.com/de/" },
          { "@type": "ListItem", "position": 2, "name": "Integrationen", "item": "https://www.storyclash.com/de/integrations" },
          { "@type": "ListItem", "position": 3, "name": "Microsoft Excel Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "Welche Dateiformate werden unterstützt?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Exportieren Sie Daten als XLSX (Excel-nativ) oder CSV (universelles Format) - beide kompatibel mit Microsoft Excel, Google Sheets und allen Tabellenkalkulationsanwendungen."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Kann ich anpassen, welche Daten exportiert werden sollen?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Ja - wählen Sie spezifische Metriken, Zeiträume und Creator-Segmente vor dem Export aus. Laden Sie nur die Daten herunter, die Sie für Ihre Analyse benötigen."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Sind historische Daten für den Export verfügbar?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Ja - exportieren Sie Influencer-Performance-Daten für jeden historischen Zeitraum und ermöglichen Sie Trendanalysen und Multi-Perioden-Vergleiche."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Kann ich meine bestehenden Excel-Vorlagen verwenden?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Ja - importieren Sie exportierte Daten in Ihre bestehenden Excel-Vorlagen. Das strukturierte Format funktioniert mit Ihren Formeln, Makros und Reporting-Logik."
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
        <MicrosoftExcelHeroSectionDE />
        <MicrosoftExcelBenefitsSectionDE />
        <MicrosoftExcelHowItWorksSectionDE />
        <MicrosoftExcelUseCaseSectionDE />
        <MicrosoftExcelFeaturesTableDE />
        <MicrosoftExcelWhyStoryclashSectionDE />
        <MicrosoftExcelFAQSectionDE />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
EOF

echo "Created MicrosoftExcelDePage.tsx"

echo "Script completed! Created 2 more German DE pages."
echo "Total DE pages should now be: 18"
