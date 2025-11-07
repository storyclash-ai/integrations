import Header from '../components/Header';
import Footer from '../components/Footer';
import HubSpotHeroSection from '../components/hubspot/HubSpotHeroSection';
import HubSpotBenefitsSection from '../components/hubspot/HubSpotBenefitsSection';
import HubSpotHowItWorksSection from '../components/hubspot/HubSpotHowItWorksSection';
import HubSpotUseCaseSection from '../components/hubspot/HubSpotUseCaseSection';
import HubSpotFeaturesTable from '../components/hubspot/HubSpotFeaturesTable';
import HubSpotWhyStoryclashSection from '../components/hubspot/HubSpotWhyStoryclashSection';
import HubSpotFAQSection from '../components/hubspot/HubSpotFAQSection';
import CTASection from '../components/CTASection';
import { Seo } from '../components/Seo';

export default function HubSpotPage() {
  const title = "HubSpot Influencer Marketing Integration | Storyclash";
  const description = "Connect HubSpot with Storyclash to sync creator contacts, track influencer campaigns in your CRM, and measure creator impact on pipeline and revenue.";
  const canonical = "https://www.storyclash.com/integrations/hubspot-influencer-marketing";
  
  const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
            {
                  "@type": "SoftwareApplication",
                  "name": "Storyclash \u2013 HubSpot Influencer Marketing Integration",
                  "applicationCategory": "MarketingApplication",
                  "operatingSystem": "Web",
                  "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "EUR"
                  },
                  "description": "Connect HubSpot with Storyclash to sync creator contacts, track influencer campaigns in your CRM, and measure creator impact on pipeline and revenue.",
                  "url": "https://www.storyclash.com/integrations/hubspot-influencer-marketing",
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
                              "name": "HubSpot Influencer Marketing Integration",
                              "item": "https://www.storyclash.com/integrations/hubspot-influencer-marketing"
                        }
                  ]
            },
            {
                  "@type": "FAQPage",
                  "mainEntity": [
                        {
                              "@type": "Question",
                              "name": "How does Storyclash integrate with HubSpot?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Connect via OAuth authentication to automatically sync creator profiles as HubSpot contacts, link campaigns to deals, and map influencer metrics to custom CRM properties."
                              }
                        },
                        {
                              "@type": "Question",
                              "name": "What creator data syncs to HubSpot?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Influencer profiles become contacts with properties including follower count, engagement rate, niche, contact info, and campaign history. Campaign metrics sync to deal properties and custom fields."
                              }
                        },
                        {
                              "@type": "Question",
                              "name": "Can I trigger HubSpot workflows with creator actions?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes - set up workflows triggered by creator milestones like campaign completion, performance thresholds reached, or content published. Automate follow-ups and reporting."
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
        <HubSpotHeroSection />
        <HubSpotBenefitsSection />
        <HubSpotHowItWorksSection />
        <HubSpotUseCaseSection />
        <HubSpotFeaturesTable />
        <HubSpotWhyStoryclashSection />
        <HubSpotFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
