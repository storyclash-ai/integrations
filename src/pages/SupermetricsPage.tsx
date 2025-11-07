import Header from '../components/Header';
import SupermetricsHeroSection from '../components/supermetrics/SupermetricsHeroSection';
import SupermetricsBenefitsSection from '../components/supermetrics/SupermetricsBenefitsSection';
import SupermetricsHowItWorksSection from '../components/supermetrics/SupermetricsHowItWorksSection';
import SupermetricsUseCaseSection from '../components/supermetrics/SupermetricsUseCaseSection';
import SupermetricsFeaturesTable from '../components/supermetrics/SupermetricsFeaturesTable';
import SupermetricsWhyStoryclashSection from '../components/supermetrics/SupermetricsWhyStoryclashSection';
import SupermetricsFAQSection from '../components/supermetrics/SupermetricsFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function SupermetricsPage() {
  const title = "Supermetrics Influencer Marketing Integration | Storyclash";
  const description = "Connect Supermetrics with Storyclash's influencer marketing platform. Export creator data to your reporting tools, automate data transfers, and unify campaign metrics. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/supermetrics-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Supermetrics Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Supermetrics Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "What destinations does Supermetrics support?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Supermetrics connects to 50+ destinations including Google Sheets, Excel, BigQuery, Snowflake, Looker, Tableau, Power BI, Data Studio, and more. Transfer creator data to any platform Supermetrics supports."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How often does creator data refresh?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Configure custom refresh schedules for creator data - from hourly updates to weekly batches. Supermetrics automatically pulls the latest influencer metrics based on your schedule."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I combine creator data with other marketing channels?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - Supermetrics excels at data blending. Combine Storyclash creator metrics with Google Ads, Facebook Ads, Instagram, LinkedIn, and 150+ other marketing data sources in unified reports."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is historical creator data available?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - pull historical influencer performance for trend analysis and year-over-year comparisons. Access past creator metrics dating back to when your Storyclash account started tracking."
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
        openGraphImage="/og/integrations-supermetrics.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <SupermetricsHeroSection />
        <SupermetricsBenefitsSection />
        <SupermetricsHowItWorksSection />
        <SupermetricsUseCaseSection />
        <SupermetricsFeaturesTable />
        <SupermetricsWhyStoryclashSection />
        <SupermetricsFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
