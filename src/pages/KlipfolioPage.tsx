import Header from '../components/Header';
import KlipfolioHeroSection from '../components/klipfolio/KlipfolioHeroSection';
import KlipfolioBenefitsSection from '../components/klipfolio/KlipfolioBenefitsSection';
import KlipfolioHowItWorksSection from '../components/klipfolio/KlipfolioHowItWorksSection';
import KlipfolioUseCaseSection from '../components/klipfolio/KlipfolioUseCaseSection';
import KlipfolioFeaturesTable from '../components/klipfolio/KlipfolioFeaturesTable';
import KlipfolioWhyStoryclashSection from '../components/klipfolio/KlipfolioWhyStoryclashSection';
import KlipfolioFAQSection from '../components/klipfolio/KlipfolioFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function KlipfolioPage() {
  const title = "Klipfolio Influencer Marketing Integration | Storyclash";
  const description = "";
  const canonical = "https://www.storyclash.com/integrations/klipfolio-influencer-marketing";
  
  const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
            {
                  "@type": "SoftwareApplication",
                  "name": "Storyclash \u2013 Klipfolio Influencer Marketing Integration",
                  "applicationCategory": "MarketingApplication",
                  "operatingSystem": "Web",
                  "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "EUR"
                  },
                  "description": "",
                  "url": "https://www.storyclash.com/integrations/klipfolio-influencer-marketing",
                  "brand": {
                        "@type": "Brand",
                        "name": "Storyclash"
                  }
            },
            {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                        {
                              "@type": "ListItem",
                              "position": 1,
                              "name": "Home",
                              "item": "https://www.storyclash.com/"
                        },
                        {
                              "@type": "ListItem",
                              "position": 2,
                              "name": "Integrations",
                              "item": "https://www.storyclash.com/integrations"
                        },
                        {
                              "@type": "ListItem",
                              "position": 3,
                              "name": "Klipfolio Influencer Marketing Integration",
                              "item": "https://www.storyclash.com/integrations/klipfolio-influencer-marketing"
                        }
                  ]
            },
            {
                  "@type": "FAQPage",
                  "mainEntity": [
                        {
                              "@type": "Question",
                              "name": "How often does creator data update in Klipfolio?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Storyclash syncs influencer data to Klipfolio in real-time via API. Your dashboards update automatically as new creator performance metrics become available."
                              }
                        },
                        {
                              "@type": "Question",
                              "name": "Can I combine Storyclash data with other sources?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes - Klipfolio allows multi-source dashboards. Combine creator metrics from Storyclash with sales data, ad spend, or other marketing channels for comprehensive analysis."
                              }
                        },
                        {
                              "@type": "Question",
                              "name": "What creator metrics are available?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Access all Storyclash metrics including engagement rates, reach, impressions, conversions, ROI, and custom performance indicators. Build any KPI your team needs."
                              }
                        },
                        {
                              "@type": "Question",
                              "name": "Can I share dashboards with my team?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes - publish dashboards via shareable URLs, embed in websites, or schedule automated email reports. Control access permissions for different stakeholders."
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
        jsonLd={jsonLd}
      />

      <Header />
      <main>
        <KlipfolioHeroSection />
        <KlipfolioBenefitsSection />
        <KlipfolioHowItWorksSection />
        <KlipfolioUseCaseSection />
        <KlipfolioFeaturesTable />
        <KlipfolioWhyStoryclashSection />
        <KlipfolioFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
