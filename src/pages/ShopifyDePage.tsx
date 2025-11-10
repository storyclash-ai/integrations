import Header from '../components/Header';
import Footer from '../components/Footer';
import ShopifyHeroSectionDE from '../components/shopify/ShopifyHeroSectionDE';
import ShopifyBenefitsSectionDE from '../components/shopify/ShopifyBenefitsSectionDE';
import ShopifyHowItWorksSectionDE from '../components/shopify/ShopifyHowItWorksSectionDE';
import ShopifyUseCaseSectionDE from '../components/shopify/ShopifyUseCaseSectionDE';
import ShopifyFeaturesTableDE from '../components/shopify/ShopifyFeaturesTableDE';
import ShopifyWhyStoryclashSectionDE from '../components/shopify/ShopifyWhyStoryclashSectionDE';
import ShopifyFAQSectionDE from '../components/shopify/ShopifyFAQSectionDE';
import CTASection from '../components/CTASection';
import { Seo } from '../components/Seo';

export default function ShopifyDePage() {
  const title = "Shopify Influencer Marketing Integration | Storyclash";
  const description = "Verbinden Sie Shopify mit Storyclash's Influencer-Marketing-Plattform. Verfolgen Sie Creator-Verkäufe, messen Sie ROI und synchronisieren Sie Umsatzdaten mit Ihrem Shop. Native Integration verfügbar. Demo buchen.";
  const canonical = "https://www.storyclash.com/de/integrations/shopify-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Shopify Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Shopify Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
{
                        "@type": "Question",
                        "name": "Wie misst Storyclash den Influencer-ROI in Shopify?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Storyclash verbindet sich über native API mit Shopify und verfolgt Umsatz, Konversionen und AOV durch Abgleich von UTM-Parametern und Rabattcodes mit Creator-Kampagnen. Die Ergebnisse erscheinen in Echtzeit-Dashboards, die ROI, ROAS, Kundenakquisitionskosten und Wiederholungskaufraten pro Influencer zeigen – mit der Möglichkeit, die Creator-Performance zu vergleichen und die Social-Commerce-Ausgaben direkt in Shopify Analytics zu optimieren."
                        }
                },
{
                        "@type": "Question",
                        "name": "Welche Influencer-Metriken kann ich in Shopify mit Storyclash verfolgen?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Verfolgen Sie Umsatzattribution, Konversionsraten, durchschnittlichen Bestellwert (AOV), Customer Lifetime Value (LTV), Return on Ad Spend (ROAS), Earned Media Value (EMV), Engagement-Raten, Impressionen und Klickrate. Alle Metriken werden nach Creator, Kampagne, Produkt-SKU und Zeitraum segmentiert – für volle Transparenz darüber, welche Influencer profitable Verkäufe in Ihrem Shopify-Shop generieren."
                        }
                },
{
                        "@type": "Question",
                        "name": "Wie funktioniert Attribution bei Shopify Influencer-Kampagnen?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Storyclash nutzt First-Party-Tracking über UTM-Parameter, eindeutige Rabattcodes und Referral-URLs, um Shopify-Bestellungen zu spezifischen Creatorn und Kampagnen zuzuordnen. Das System erfasst Kundenpfad-Daten vom initialen Klick bis zum Kauf und handhabt Multi-Touch-Attribution-Szenarien. Dies gewährleistet genaue ROI-Messung auch wenn Kunden mehrfach mit Influencer-Posts interagieren, bevor sie kaufen."
                        }
                },
{
                        "@type": "Question",
                        "name": "Kann ich Storyclash ohne Entwickler mit Shopify verbinden?",
                        "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Ja. Marketing- und eCommerce-Teams können Storyclash mit Shopify über die REST API mit API-Key-Authentifizierung verbinden. Unsere Dokumentation führt Sie durch den Setup-Prozess – generieren Sie einfach Ihren API-Schlüssel, konfigurieren Sie die Verbindung und Creator-Kampagnendaten synchronisieren sich automatisch mit Ihren Shopify-Analytics-Dashboards mit konfigurierbaren Aktualisierungsintervallen für nahezu Echtzeit-Reporting."
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
        openGraphImage="/og/integrations-shopify.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <ShopifyHeroSectionDE />
        <ShopifyBenefitsSectionDE />
        <ShopifyHowItWorksSectionDE />
        <ShopifyUseCaseSectionDE />
        <ShopifyFeaturesTableDE />
        <ShopifyWhyStoryclashSectionDE />
        <ShopifyFAQSectionDE />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
