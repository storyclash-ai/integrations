import Header from '../components/Header';
import TealiumHeroSection from '../components/tealium/TealiumHeroSection';
import TealiumBenefitsSection from '../components/tealium/TealiumBenefitsSection';
import TealiumHowItWorksSection from '../components/tealium/TealiumHowItWorksSection';
import TealiumUseCaseSection from '../components/tealium/TealiumUseCaseSection';
import TealiumFeaturesTable from '../components/tealium/TealiumFeaturesTable';
import TealiumWhyStoryclashSection from '../components/tealium/TealiumWhyStoryclashSection';
import TealiumFAQSection from '../components/tealium/TealiumFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function TealiumPage() {
  const title = "Tealium Influencer Marketing Integration | Storyclash";
  const description = "Connect Tealium with Storyclash's influencer marketing platform. Send creator and campaign data from Storyclash to Tealium CDP, enrich customer profiles with influencer insights, and activate creator metrics across analytics, CRM, and marketing tools. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/tealium-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Tealium Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Tealium Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How does Storyclash send influencer and campaign data to Tealium CDP?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash sends creator and campaign metrics to Tealium CDP via a secure REST API integration. Influencer events and performance data are streamed from Storyclash into Tealium so they can be used in customer profiles, journeys and downstream tools."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What Storyclash creator and campaign data syncs to Tealium?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Tealium can receive Storyclash metrics such as impressions, reach, engagement rate, conversions, campaign identifiers, creator IDs and attributed revenue signals. These fields are mapped into Tealium events and attributes for unified customer profiles."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How can I activate Storyclash influencer data across platforms with Tealium?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Use Tealium to route Storyclash influencer data to analytics, CRM, marketing automation and advertising platforms. Creator insights from Storyclash become available across your entire stack for targeting, personalization, suppression and reporting."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is the Storyclash → Tealium integration secure and GDPR-compliant?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. Storyclash uses encrypted REST API connections and secure authentication when sending data to Tealium. Both platforms support GDPR-compliant data processing, consent-based tracking and enterprise-grade governance controls."
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
        openGraphImage="/og/integrations-Tealium.png"
        keywords="Tealium influencer marketing integration, Tealium CDP creator data, Tealium customer data platform, Storyclash Tealium API, Tealium audience activation"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <TealiumHeroSection />
        <TealiumBenefitsSection />
        <TealiumHowItWorksSection />
        <TealiumUseCaseSection />
        <TealiumFeaturesTable />
        <TealiumWhyStoryclashSection />
        <TealiumFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
