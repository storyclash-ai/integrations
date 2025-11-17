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
  const description = "Connect Klipfolio with Storyclash's influencer marketing platform. Export creator and campaign data to Klipfolio dashboards via REST API, monitor influencer performance in real time, and combine Storyclash metrics with your business KPIs. Book a demo.";
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
                  "description": "Connect Klipfolio with Storyclash's influencer marketing platform. Export creator and campaign data to Klipfolio dashboards via REST API, monitor influencer performance in real time, and combine Storyclash metrics with your business KPIs. Book a demo.",
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
                              "name": "How does Storyclash export influencer and campaign data to Klipfolio dashboards?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Storyclash exports creator and campaign metrics to Klipfolio via a secure REST API. After authenticating with your API key, Storyclash becomes a live data source for Klipfolio dashboards without any manual data uploads."
                              }
                        },
                        {
                              "@type": "Question",
                              "name": "Which Storyclash metrics can I visualize in Klipfolio?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "You can visualize impressions, reach, engagement rate, conversions, revenue attribution, EMV, ROI, ROAS and other Storyclash creator metrics inside Klipfolio. All metrics can be used in charts, tables, goals and KPI tiles."
                              }
                        },
                        {
                              "@type": "Question",
                              "name": "How often does Storyclash sync creator data with Klipfolio?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Storyclash syncs influencer performance data to Klipfolio in near real time or on scheduled intervals, depending on your dashboard refresh settings."
                              }
                        },
                        {
                              "@type": "Question",
                              "name": "Do I need technical skills to connect Storyclash to Klipfolio?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, you need some technical skills to set up the REST API connection with your Storyclash API key. However, once connected, marketing teams can build dashboards with drag-and-drop components without additional technical expertise."
                              }
                        },
                        {
                              "@type": "Question",
                              "name": "Is the Storyclash → Klipfolio integration secure and GDPR-compliant?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes. Storyclash uses encrypted REST API endpoints and token-based authentication, and processes influencer and campaign data on GDPR-compliant EU infrastructure."
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
        openGraphImage="/og/integrations-klipfolio.png"
        keywords="Klipfolio influencer marketing integration, Klipfolio creator analytics, Klipfolio influencer dashboards, Storyclash Klipfolio API, Klipfolio marketing reporting"
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
