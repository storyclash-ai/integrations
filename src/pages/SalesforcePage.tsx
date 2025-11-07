import Header from '../components/Header';
import Footer from '../components/Footer';
import SalesforceHeroSection from '../components/salesforce/SalesforceHeroSection';
import SalesforceBenefitsSection from '../components/salesforce/SalesforceBenefitsSection';
import SalesforceHowItWorksSection from '../components/salesforce/SalesforceHowItWorksSection';
import SalesforceUseCaseSection from '../components/salesforce/SalesforceUseCaseSection';
import SalesforceFeaturesTable from '../components/salesforce/SalesforceFeaturesTable';
import SalesforceWhyStoryclashSection from '../components/salesforce/SalesforceWhyStoryclashSection';
import SalesforceFAQSection from '../components/salesforce/SalesforceFAQSection';
import CTASection from '../components/CTASection';
import { Seo } from '../components/Seo';

export default function SalesforcePage() {
  const title = "Salesforce Influencer Marketing Integration | Storyclash";
  const description = "Connect Salesforce with Storyclash to manage creators in your CRM, track campaigns in opportunity pipeline, and measure influencer revenue impact.";
  const canonical = "https://www.storyclash.com/integrations/salesforce-influencer-marketing";
  
  const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
            {
                  "@type": "SoftwareApplication",
                  "name": "Storyclash \u2013 Salesforce Influencer Marketing Integration",
                  "applicationCategory": "MarketingApplication",
                  "operatingSystem": "Web",
                  "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "EUR"
                  },
                  "description": "Connect Salesforce with Storyclash to manage creators in your CRM, track campaigns in opportunity pipeline, and measure influencer revenue impact.",
                  "url": "https://www.storyclash.com/integrations/salesforce-influencer-marketing",
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
                              "name": "Salesforce Influencer Marketing Integration",
                              "item": "https://www.storyclash.com/integrations/salesforce-influencer-marketing"
                        }
                  ]
            },
            {
                  "@type": "FAQPage",
                  "mainEntity": [
                        {
                              "@type": "Question",
                              "name": "How does Storyclash integrate with Salesforce?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Connect via OAuth to sync creator profiles as Salesforce accounts or contacts. Map influencer metrics to custom fields and track campaigns as opportunities."
                              }
                        },
                        {
                              "@type": "Question",
                              "name": "What creator data syncs to Salesforce?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Influencer profiles become accounts with custom fields including audience size, engagement rate, niche, and contact info. Campaign data syncs to opportunities and custom objects."
                              }
                        },
                        {
                              "@type": "Question",
                              "name": "Can I trigger Salesforce workflows?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes - set up Process Builder flows and workflows triggered by creator milestones, campaign completion, or performance thresholds reaching specific values."
                              }
                        },
                        {
                              "@type": "Question",
                              "name": "How do I track influencer ROI in Salesforce?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Link campaigns to opportunities with revenue attribution. Build Salesforce reports showing creator-driven pipeline, closed deals, and revenue contribution."
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
        <SalesforceHeroSection />
        <SalesforceBenefitsSection />
        <SalesforceHowItWorksSection />
        <SalesforceUseCaseSection />
        <SalesforceFeaturesTable />
        <SalesforceWhyStoryclashSection />
        <SalesforceFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
