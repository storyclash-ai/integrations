import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleAdsHeroSection from '../components/googleads/GoogleAdsHeroSection';
import GoogleAdsBenefitsSection from '../components/googleads/GoogleAdsBenefitsSection';
import GoogleAdsHowItWorksSection from '../components/googleads/GoogleAdsHowItWorksSection';
import GoogleAdsUseCaseSection from '../components/googleads/GoogleAdsUseCaseSection';
import GoogleAdsFeaturesTable from '../components/googleads/GoogleAdsFeaturesTable';
import GoogleAdsWhyStoryclashSection from '../components/googleads/GoogleAdsWhyStoryclashSection';
import GoogleAdsFAQSection from '../components/googleads/GoogleAdsFAQSection';
import CTASection from '../components/CTASection';
import { Seo } from '../components/Seo';

export default function GoogleAdsPage() {
  const title = "Google Ads Influencer Marketing Integration | Storyclash";
  const description = "Connect Google Ads with Storyclash's influencer marketing platform. Track creator performance, measure ROI, and sync campaign data to Google Ads. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/GoogleAds-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – GoogleAds Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "GoogleAds Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How does Storyclash integrate with Google Ads?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Connect via Google Ads API to sync conversion tracking, audience segments, and campaign performance data. Storyclash automatically tags influencer content with UTM parameters for attribution."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I track influencer conversions in Google Ads?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - Storyclash links creator content to Google Ads conversion pixels and UTM parameters. Track which influencers drive purchases, signups, and revenue directly in Google Ads dashboards."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How do I build audiences from creator data?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Export high-performing creator audience segments to Google Ads as customer match lists or lookalike audiences. Target users similar to engaged influencer followers for better conversion rates."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I optimize ad budgets based on creator performance?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - analyze creator campaign ROI in Google Ads and adjust budgets accordingly. Storyclash shows which influencers deliver the best ROAS so you can scale winning campaigns and pause underperformers."
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
        openGraphImage="/og/integrations-googlesds.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <GoogleAdsHeroSection />
        <GoogleAdsBenefitsSection />
        <GoogleAdsHowItWorksSection />
        <GoogleAdsUseCaseSection />
        <GoogleAdsFeaturesTable />
        <GoogleAdsWhyStoryclashSection />
        <GoogleAdsFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
