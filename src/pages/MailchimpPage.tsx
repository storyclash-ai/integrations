import Header from '../components/Header';
import Footer from '../components/Footer';
import MailchimpHeroSection from '../components/mailchimp/MailchimpHeroSection';
import MailchimpBenefitsSection from '../components/mailchimp/MailchimpBenefitsSection';
import MailchimpHowItWorksSection from '../components/mailchimp/MailchimpHowItWorksSection';
import MailchimpUseCaseSection from '../components/mailchimp/MailchimpUseCaseSection';
import MailchimpFeaturesTable from '../components/mailchimp/MailchimpFeaturesTable';
import MailchimpWhyStoryclashSection from '../components/mailchimp/MailchimpWhyStoryclashSection';
import MailchimpFAQSection from '../components/mailchimp/MailchimpFAQSection';
import CTASection from '../components/CTASection';
import { Seo } from '../components/Seo';

export default function MailchimpPage() {
  const title = "Mailchimp Influencer Marketing Integration | Storyclash";
  const description = "Connect Mailchimp with Storyclash to sync creator audiences, build targeted campaigns with influencer insights, and track email performance.";
  const canonical = "https://www.storyclash.com/integrations/mailchimp-influencer-marketing";
  
  const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
            {
                  "@type": "SoftwareApplication",
                  "name": "Storyclash \u2013 Mailchimp Influencer Marketing Integration",
                  "applicationCategory": "MarketingApplication",
                  "operatingSystem": "Web",
                  "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "EUR"
                  },
                  "description": "Connect Mailchimp with Storyclash to sync creator audiences, build targeted campaigns with influencer insights, and track email performance.",
                  "url": "https://www.storyclash.com/integrations/mailchimp-influencer-marketing",
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
                              "name": "Mailchimp Influencer Marketing Integration",
                              "item": "https://www.storyclash.com/integrations/mailchimp-influencer-marketing"
                        }
                  ]
            },
            {
                  "@type": "FAQPage",
                  "mainEntity": [
                        {
                              "@type": "Question",
                              "name": "How does Storyclash integrate with Mailchimp?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sync creator audience segments to Mailchimp lists via API. Subscribers are automatically tagged with creator source data for segmentation and personalized campaigns."
                              }
                        },
                        {
                              "@type": "Question",
                              "name": "Can I sync creator audiences to Mailchimp?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes - export influencer audience segments as Mailchimp lists or add them to existing lists with creator source tags for targeted email marketing."
                              }
                        },
                        {
                              "@type": "Question",
                              "name": "How do I segment by creator source?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Storyclash tags Mailchimp subscribers with creator ID, campaign name, and engagement level. Build segments in Mailchimp based on these tags for personalization."
                              }
                        },
                        {
                              "@type": "Question",
                              "name": "Can I track email performance by creator?",
                              "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes - use Mailchimp reports filtered by creator tags to see which influencers drive the highest email engagement, clicks, and conversions."
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
        <MailchimpHeroSection />
        <MailchimpBenefitsSection />
        <MailchimpHowItWorksSection />
        <MailchimpUseCaseSection />
        <MailchimpFeaturesTable />
        <MailchimpWhyStoryclashSection />
        <MailchimpFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
