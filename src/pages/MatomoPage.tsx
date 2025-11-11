import Header from '../components/Header';
import MatomoHeroSection from '../components/matomo/MatomoHeroSection';
import MatomoBenefitsSection from '../components/matomo/MatomoBenefitsSection';
import MatomoHowItWorksSection from '../components/matomo/MatomoHowItWorksSection';
import MatomoUseCaseSection from '../components/matomo/MatomoUseCaseSection';
import MatomoFeaturesTable from '../components/matomo/MatomoFeaturesTable';
import MatomoWhyStoryclashSection from '../components/matomo/MatomoWhyStoryclashSection';
import MatomoFAQSection from '../components/matomo/MatomoFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function MatomoPage() {
  const title = "Matomo Influencer Marketing Integration | Storyclash";
  const description = "Connect Matomo with Storyclash's influencer marketing platform. Export creator data to your reporting tools, automate data transfers, and unify campaign metrics. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/matomo-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Matomo Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Matomo Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "Is Matomo integration GDPR compliant?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - Matomo is privacy-focused and supports GDPR compliance. The integration tracks creator traffic and stores data on your infrastructure. Note: In the EU, consent banners are still required for analytics tracking to comply with GDPR and ePrivacy regulations."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I use self-hosted Matomo?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - connect both self-hosted and cloud Matomo instances. Storyclash syncs creator attribution data to your infrastructure via secure API authentication."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How does creator attribution work?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash automatically adds UTM parameters to influencer links. Matomo tracks these parameters to attribute traffic, conversions, and revenue to specific creators and campaigns."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What metrics are tracked?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Track creator-driven page views, session duration, bounce rates, goal completions, and e-commerce conversions. All standard Matomo metrics work with influencer attribution."
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
        openGraphImage="/og/integrations-matomo.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <MatomoHeroSection />
        <MatomoBenefitsSection />
        <MatomoHowItWorksSection />
        <MatomoUseCaseSection />
        <MatomoFeaturesTable />
        <MatomoWhyStoryclashSection />
        <MatomoFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
