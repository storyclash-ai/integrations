import Header from '../components/Header';
import Footer from '../components/Footer';
import GoogleAnalyticsHeroSection from '../components/googleanalytics/GoogleAnalyticsHeroSection';
import GoogleAnalyticsBenefitsSection from '../components/googleanalytics/GoogleAnalyticsBenefitsSection';
import GoogleAnalyticsHowItWorksSection from '../components/googleanalytics/GoogleAnalyticsHowItWorksSection';
import GoogleAnalyticsUseCaseSection from '../components/googleanalytics/GoogleAnalyticsUseCaseSection';
import GoogleAnalyticsFeaturesTable from '../components/googleanalytics/GoogleAnalyticsFeaturesTable';
import GoogleAnalyticsWhyStoryclashSection from '../components/googleanalytics/GoogleAnalyticsWhyStoryclashSection';
import GoogleAnalyticsFAQSection from '../components/googleanalytics/GoogleAnalyticsFAQSection';
import CTASection from '../components/CTASection';
import { Seo } from '../components/Seo';

export default function GoogleAnalyticsPage() {
  const title = "Google Analytics Influencer Marketing Integration | Storyclash";
  const description = "Connect Google Analytics with Storyclash's influencer marketing platform. Store creator campaign data in your data warehouse, analyze performance, and build custom models. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/google-analytics-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Google Analytics Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Google Analytics Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How does Storyclash integrate with Google Analytics?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Use your Storyclash API credentials to connect with Google Analytics 4 via custom dimensions, UTM parameters, and the Measurement Protocol. The integration syncs creator campaign data directly with your GA4 property."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What creator data can I track in Google Analytics?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Traffic attribution, conversion paths, engagement metrics, campaign performance, UTM-tagged sessions, and custom events - all segmented by creator and campaign. Track which influencers drive the most valuable website visitors."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How often does data sync with Google Analytics?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Data syncs in near real-time, keeping your Google Analytics dashboards updated with the latest creator performance and attribution data."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Do I need technical expertise to set this up?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "No - marketing teams can connect Storyclash to Google Analytics in minutes without developer support or complex configurations."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is the integration compliant with privacy regulations?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - all data is processed in compliance with GDPR and Google Analytics privacy standards, respecting user consent and data protection requirements."
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
        openGraphImage="/og/integrations-googleanalytics.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <GoogleAnalyticsHeroSection />
        <GoogleAnalyticsBenefitsSection />
        <GoogleAnalyticsHowItWorksSection />
        <GoogleAnalyticsUseCaseSection />
        <GoogleAnalyticsFeaturesTable />
        <GoogleAnalyticsWhyStoryclashSection />
        <GoogleAnalyticsFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
