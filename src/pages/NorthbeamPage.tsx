import Header from '../components/Header';
import NorthbeamHeroSection from '../components/northbeam/NorthbeamHeroSection';
import NorthbeamBenefitsSection from '../components/northbeam/NorthbeamBenefitsSection';
import NorthbeamHowItWorksSection from '../components/northbeam/NorthbeamHowItWorksSection';
import NorthbeamUseCaseSection from '../components/northbeam/NorthbeamUseCaseSection';
import NorthbeamFeaturesTable from '../components/northbeam/NorthbeamFeaturesTable';
import NorthbeamWhyStoryclashSection from '../components/northbeam/NorthbeamWhyStoryclashSection';
import NorthbeamFAQSection from '../components/northbeam/NorthbeamFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function NorthbeamPage() {
  const title = "Northbeam Influencer Marketing Integration | Storyclash";
  const description = "Connect Northbeam with Storyclash's influencer marketing platform. Send creator performance and revenue data from Storyclash to Northbeam via REST API to power multi-touch attribution, incrementality testing, and true influencer ROI measurement. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/northbeam-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Northbeam Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Northbeam Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How does Storyclash integrate creator data with Northbeam for multi-touch attribution?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Attribution works through Northbeam's tracking pixel on your website. When influencer traffic arrives via creator links, Northbeam captures these touchpoints and attributes conversions. Storyclash provides campaign context (creator names, content types, spend) which enriches Northbeam's attribution model so you understand how influencer campaigns contribute across the full customer journey."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which creator metrics can I analyze in Northbeam with Storyclash?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "You can analyze creator performance metrics like clicks, engagement, reach, and EMV from Storyclash. Attribution for conversions and revenue happens through Northbeam's pixel tracking. Together, this provides complete influencer funnel visibility from awareness (Storyclash) to conversion (Northbeam's tracking)."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How does Northbeam measure incrementality and true influencer ROI with Storyclash data?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Northbeam uses Storyclash creator data together with conversion events to run incrementality tests and advanced attribution models. By comparing exposed versus control audiences, you can quantify true incremental revenue, ROI and customer acquisition driven by influencer campaigns."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I compare creator performance and CAC against other channels in Northbeam?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. In Northbeam, creators appear as a measurable channel next to paid social, search, email and other sources. With Storyclash data, you can compare creator CAC, ROAS and contribution to revenue against all other marketing channels to optimize budget allocation."
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
        openGraphImage="/og/integrations-northbeam.png"
        keywords="Northbeam influencer marketing integration, Northbeam creator attribution, Northbeam influencer ROI, Northbeam incrementality testing, Northbeam multi-touch attribution, Storyclash Northbeam API, creator revenue tracking in Northbeam"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <NorthbeamHeroSection />
        <NorthbeamBenefitsSection />
        <NorthbeamHowItWorksSection />
        <NorthbeamUseCaseSection />
        <NorthbeamFeaturesTable />
        <NorthbeamWhyStoryclashSection />
        <NorthbeamFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
