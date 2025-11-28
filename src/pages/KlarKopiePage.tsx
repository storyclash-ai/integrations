import Header from '../components/Header';
import KlarHeroSection from '../components/klar_kopie/KlarHeroSection';
import KlarBenefitsSection from '../components/klar_kopie/KlarBenefitsSection';
import KlarHowItWorksSection from '../components/klar_kopie/KlarHowItWorksSection';
import KlarUseCaseSection from '../components/klar_kopie/KlarUseCaseSection';
import KlarFeaturesTable from '../components/klar_kopie/KlarFeaturesTable';
import KlarWhyStoryclashSection from '../components/klar_kopie/KlarWhyStoryclashSection';
import KlarFAQSection from '../components/klar_kopie/KlarFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function KlarKopiePage() {
  const title = "Klar Influencer Marketing Integration | Storyclash";
  const description = "Storyclash exports creator and campaign data to Klar via REST API. Link influencer activity to sales, revenue and lifetime value for precise ecommerce attribution.";
  const canonical = "https://www.storyclash.com/integrations/klar-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Klar Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Klar Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How does Storyclash send influencer and campaign data to Klar?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash exports creator and campaign metrics to Klar via secure API. Klar merges these signals with your shop data so you can see how influencer activity drives revenue and customer value."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which attribution models does Klar use for creator campaigns?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Klar uses code-based attribution. Discount codes assigned to creators in Storyclash map orders to campaigns, giving you clear, deterministic attribution without relying on click or UTM tracking."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can Klar compare creator customer lifetime value with other marketing channels?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Klar measures customer lifetime value by source and enriches it with Storyclash creator data so you can compare LTV from influencers with all other channels."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How does Klar calculate creator ROAS using Storyclash data?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Klar calculates creator ROAS by matching attributed revenue with your creator spend, giving you a clear view of influencer profitability and long-term value."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I attribute historical sales to creators retroactively in Klar?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Once connected, Klar links historical discount code usage from your shop to Storyclash creator assignments, enabling retroactive revenue attribution for past campaigns."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Does Klar support multi-store or multi-region setups for creator data?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash exports creator data to Klar, where it can be analyzed alongside your commerce data across different business setups."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How does Storyclash handle data privacy and GDPR compliance when sending data to Klar?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash exports only approved creator and campaign identifiers. All data is encrypted, processed under GDPR standards and combined with your shop data directly inside Klar."
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
        openGraphImage="/og/integrations-klar.png"
        keywords="Klar influencer marketing integration, Klar creator attribution, Klar LTV analytics, Storyclash Klar API, ecommerce creator revenue tracking"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <KlarHeroSection />
        <KlarBenefitsSection />
        <KlarHowItWorksSection />
        <KlarUseCaseSection />
        <KlarFeaturesTable />
        <KlarWhyStoryclashSection />
        <KlarFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
