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
                              "name": "How does Storyclash export creator data to Supermetrics?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash connects to Supermetrics via a secure REST API. You add Storyclash as a data source in Supermetrics, authenticate once with your API key, and Supermetrics can then fetch creator metrics such as impressions, clicks, conversions and revenue for use in any supported destination."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How often can Storyclash creator data be refreshed in Supermetrics?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "You control the refresh schedule in Supermetrics – from hourly updates to daily or weekly batches. Supermetrics regularly pulls the latest Storyclash creator metrics via API so your reports and dashboards stay up to date automatically."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I blend Storyclash creator metrics with other marketing channels in Supermetrics?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. Supermetrics lets you combine Storyclash creator and influencer metrics with data from Google Ads, Meta Ads, TikTok, email platforms and 150+ other sources. You can build unified reports that show creator-driven performance alongside the rest of your marketing mix."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is historical Storyclash creator data available in Supermetrics?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. Supermetrics can query historical Storyclash data for trend analysis and year-over-year comparisons. You can access past creator metrics from the moment Storyclash started tracking your campaigns, subject to your account's data retention."
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
        keywords="Supermetrics influencer marketing integration, Supermetrics creator analytics, Supermetrics Storyclash API, Supermetrics influencer ROI, Supermetrics marketing data pipeline"
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
