import Header from '../components/Header';
import Footer from '../components/Footer';
import KlaviyoHeroSection from '../components/klaviyo/KlaviyoHeroSection';
import KlaviyoBenefitsSection from '../components/klaviyo/KlaviyoBenefitsSection';
import KlaviyoHowItWorksSection from '../components/klaviyo/KlaviyoHowItWorksSection';
import KlaviyoUseCaseSection from '../components/klaviyo/KlaviyoUseCaseSection';
import KlaviyoFeaturesTable from '../components/klaviyo/KlaviyoFeaturesTable';
import KlaviyoWhyStoryclashSection from '../components/klaviyo/KlaviyoWhyStoryclashSection';
import KlaviyoFAQSection from '../components/klaviyo/KlaviyoFAQSection';
import CTASection from '../components/CTASection';
import { Seo } from '../components/Seo';

export default function KlaviyoPage() {
  const title = "Klaviyo Influencer Marketing Integration | Storyclash";
  const description = "Connect Klaviyo with Storyclash to segment audiences by creator engagement, personalize emails with influencer content, and track campaign conversions.";
  const canonical = "https://www.storyclash.com/integrations/klaviyo-influencer-marketing";
  
  const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
            {
                  "@type": "SoftwareApplication",
                  "name": "Storyclash \u2013 Klaviyo Influencer Marketing Integration",
                  "applicationCategory": "MarketingApplication",
                  "operatingSystem": "Web",
                  "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "EUR"
                  },
                  "description": "Connect Klaviyo with Storyclash to segment audiences by creator engagement, personalize emails with influencer content, and track campaign conversions.",
                  "url": "https://www.storyclash.com/integrations/klaviyo-influencer-marketing",
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
                              "name": "Klaviyo Influencer Marketing Integration",
                              "item": "https://www.storyclash.com/integrations/klaviyo-influencer-marketing"
                        }
                  ]
            },
            {
                  "@type": "FAQPage",
                  "mainEntity": [
                        {
                              "@type": "Question",
                              "name": "How does Storyclash integrate with Klaviyo?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sync creator engagement data to Klaviyo as custom profile properties and events. Build segments based on influencer interactions for targeted email campaigns."
                              }
                        },
                        {
                              "@type": "Question",
                              "name": "Can I segment audiences by creator engagement?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes - creator interaction data syncs to Klaviyo profiles. Build segments of users who engaged with specific influencers, content types, or campaigns."
                              }
                        },
                        {
                              "@type": "Question",
                              "name": "How do I use creator content in emails?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Storyclash provides influencer UGC and assets that integrate into Klaviyo templates. Include creator testimonials, product demos, and recommendations in email flows."
                              }
                        },
                        {
                              "@type": "Question",
                              "name": "Can I track influencer ROI in Klaviyo?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes - use custom profile properties showing creator source in Klaviyo revenue attribution reports. Track which influencers drive email conversions and revenue."
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
        <KlaviyoHeroSection />
        <KlaviyoBenefitsSection />
        <KlaviyoHowItWorksSection />
        <KlaviyoUseCaseSection />
        <KlaviyoFeaturesTable />
        <KlaviyoWhyStoryclashSection />
        <KlaviyoFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
