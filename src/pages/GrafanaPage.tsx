import Header from '../components/Header';
import GrafanaHeroSection from '../components/grafana/GrafanaHeroSection';
import GrafanaBenefitsSection from '../components/grafana/GrafanaBenefitsSection';
import GrafanaHowItWorksSection from '../components/grafana/GrafanaHowItWorksSection';
import GrafanaUseCaseSection from '../components/grafana/GrafanaUseCaseSection';
import GrafanaFeaturesTable from '../components/grafana/GrafanaFeaturesTable';
import GrafanaWhyStoryclashSection from '../components/grafana/GrafanaWhyStoryclashSection';
import GrafanaFAQSection from '../components/grafana/GrafanaFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function GrafanaPage() {
  const title = "Grafana Influencer Marketing Integration | Storyclash";
  const description = "Connect Grafana with Storyclash's influencer marketing platform. Store creator campaign data in your data warehouse, analyze performance, and build custom models. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/grafana-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Grafana Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Grafana Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How does real-time monitoring work?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash streams creator metrics to Grafana as data becomes available. Your dashboards update automatically with the latest influencer performance data without manual refreshes."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What alerts can I set up?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Configure alerts for any creator metric - engagement rate drops, viral content detection, conversion spikes, or custom thresholds. Receive notifications via Slack, email, PagerDuty, or webhook."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I combine multiple data sources?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - Grafana supports multi-source dashboards. Correlate creator metrics from Storyclash with sales data, ad spend, website traffic, or any other data source your team monitors."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is Grafana suitable for non-technical users?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Grafana is designed for technical teams familiar with observability tools. For self-service analytics without technical expertise, consider Metabase or Looker Studio instead."
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
        openGraphImage="/og/integrations-grafana.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <GrafanaHeroSection />
        <GrafanaBenefitsSection />
        <GrafanaHowItWorksSection />
        <GrafanaUseCaseSection />
        <GrafanaFeaturesTable />
        <GrafanaWhyStoryclashSection />
        <GrafanaFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
