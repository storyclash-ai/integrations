import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Wie misst Storyclash den Influencer-ROI in Shopify?',
    answer: 'Storyclash verbindet sich über native API mit Shopify und verfolgt Umsatz, Konversionen und AOV durch Abgleich von UTM-Parametern und Rabattcodes mit Creator-Kampagnen. Die Ergebnisse erscheinen in Echtzeit-Dashboards, die ROI, ROAS, Kundenakquisitionskosten und Wiederholungskaufraten pro Influencer zeigen – mit der Möglichkeit, die Creator-Performance zu vergleichen und die Social-Commerce-Ausgaben direkt in Shopify Analytics zu optimieren.'
  },
  {
    question: 'Welche Influencer-Metriken kann ich in Shopify mit Storyclash verfolgen?',
    answer: 'Verfolgen Sie Umsatzattribution, Konversionsraten, durchschnittlichen Bestellwert (AOV), Customer Lifetime Value (LTV), Return on Ad Spend (ROAS), Earned Media Value (EMV), Engagement-Raten, Impressionen und Klickrate. Alle Metriken werden nach Creator, Kampagne, Produkt-SKU und Zeitraum segmentiert – für volle Transparenz darüber, welche Influencer profitable Verkäufe in Ihrem Shopify-Shop generieren.'
  },
  {
    question: 'Wie funktioniert Attribution bei Shopify Influencer-Kampagnen?',
    answer: 'Storyclash nutzt First-Party-Tracking über UTM-Parameter, eindeutige Rabattcodes und Referral-URLs, um Shopify-Bestellungen zu spezifischen Creatorn und Kampagnen zuzuordnen. Das System erfasst Kundenpfad-Daten vom initialen Klick bis zum Kauf und handhabt Multi-Touch-Attribution-Szenarien. Dies gewährleistet genaue ROI-Messung auch wenn Kunden mehrfach mit Influencer-Posts interagieren, bevor sie kaufen.'
  },
  {
    question: 'Kann ich Storyclash ohne Entwickler mit Shopify verbinden?',
    answer: 'Ja. Marketing- und eCommerce-Teams können Storyclash mit Shopify über die REST API mit API-Key-Authentifizierung verbinden. Unsere Dokumentation führt Sie durch den Setup-Prozess – generieren Sie einfach Ihren API-Schlüssel, konfigurieren Sie die Verbindung und Creator-Kampagnendaten synchronisieren sich automatisch mit Ihren Shopify-Analytics-Dashboards mit konfigurierbaren Aktualisierungsintervallen für nahezu Echtzeit-Reporting.'
  },
  {
    question: 'Ist die Shopify-Integration von Storyclash GDPR-konform?',
    answer: 'Ja. Alle Shopify-Kunden- und Bestelldaten werden bei Transit und in Ruhe verschlüsselt, in EU-basierten Rechenzentren gespeichert und unter GDPR-Compliance verarbeitet. Storyclash ist SOC 2 Type II zertifiziert und unterstützt Datenverarbeitungsvereinbarungen (DVA), rollenbasierte Zugriffskontrolle, Audit-Logging und Datenspeicherrichtlinien, die eCommerce-Sicherheits- und Datenschutzanforderungen erfüllen.'
  }
];

export default function ShopifyFAQSectionDE() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Häufig gestellte Fragen zur Shopify-Integration
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 overflow-hidden" style={{ borderColor: '#E5EAEC', borderRadius: '20px' }}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="pr-4" style={{ fontSize: '18px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: '#19B776' }}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
