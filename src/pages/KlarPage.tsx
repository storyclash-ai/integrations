import Header from '../components/Header';
import KlarHeroSection from '../components/klar/KlarHeroSection';
import KlarBenefitsSection from '../components/klar/KlarBenefitsSection';
import KlarHowItWorksSection from '../components/klar/KlarHowItWorksSection';
import KlarUseCaseSection from '../components/klar/KlarUseCaseSection';
import KlarFeaturesTable from '../components/klar/KlarFeaturesTable';
import KlarWhyStoryclashSection from '../components/klar/KlarWhyStoryclashSection';
import KlarFAQSection from '../components/klar/KlarFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function KlarPage() {
  const title = "Klar Influencer Marketing Integration | Storyclash";
  const description = "Connect Klar with Storyclash's influencer marketing platform. Export influencer and campaign data from Storyclash to Klar, link creator activity to orders, revenue and customer lifetime value, and get precise attribution for your ecommerce business. Book a demo.";
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
                                      "text": "Storyclash exports influencer and campaign performance metrics to Klar via a secure API integration. Klar combines these creator signals with your ecommerce order data so you can see how influencer content impacts revenue, conversions and customer lifetime value."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can Klar compare creator customer lifetime value with other marketing channels?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. Klar tracks customer lifetime value by acquisition source and merges Storyclash creator data with your purchase behaviour. You can compare LTV of customers acquired through influencers against paid ads, email, SEO or direct traffic to understand the true long-term impact of creator campaigns."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which attribution models does Klar use for creator campaigns?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Klar supports creator-specific attribution including discount code tracking, UTM parameter mapping, and influencer link attribution. You can choose the method that best captures how each creator's content drives conversions and apply it to Storyclash campaign data for precise creator revenue attribution."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How does Klar calculate creator ROAS using Storyclash data?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Klar calculates creator ROAS by dividing revenue attributed to each creator by the corresponding creator costs from Storyclash or your finance systems. This lets you measure the profitability of influencer campaigns based on real orders, repeat purchases and long-term customer value."
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
