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
  const description = "Connect Google Analytics with Storyclash's influencer marketing platform. Send creator and campaign data into your GA4 property, measure influencer-driven traffic and conversions, and build attribution-ready reports. Book a demo.";
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
                              "name": "How does Storyclash send influencer and campaign data to Google Analytics 4?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash uses its API and the Google Analytics 4 Measurement Protocol to send creator and campaign events into your GA4 property. UTM parameters, custom dimensions and event parameters ensure that every click, session and conversion is tied back to the right creator and campaign in Google Analytics."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which influencer metrics can I see in Google Analytics with Storyclash?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "With Storyclash you can see sessions, engagement metrics, conversions, revenue, new vs. returning users, assisted conversions and other GA4 metrics segmented by creator and campaign. Creator IDs and campaign tags are passed as custom dimensions so you can build detailed influencer reports directly in Google Analytics."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How often does Storyclash sync creator data with Google Analytics dashboards?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash syncs influencer events with Google Analytics in near real time. As soon as creator traffic and conversions are tracked in Storyclash, corresponding GA4 events are triggered so your dashboards always reflect the latest campaign performance."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Do I need developers to connect Storyclash and Google Analytics 4?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes, you need some technical skills to set up the API connection with your Storyclash credentials. However, once connected, marketing teams can use Google Analytics dashboards and reports without additional technical expertise."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is the Google Analytics 4 influencer integration with Storyclash GDPR-compliant?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. The Google Analytics 4 integration with Storyclash is fully GDPR-compliant. Events are sent in line with consent settings, IP addresses are not stored by Storyclash, and all creator and campaign data is processed according to EU data protection standards."
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
