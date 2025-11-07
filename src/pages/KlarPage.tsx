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
  const description = "Connect Klar with Storyclash's influencer marketing platform. Store creator campaign data in your data warehouse, analyze performance, and build custom models. Book a demo.";
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
                              "name": "How does creator attribution work in Klar?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Klar uses UTM parameters, discount codes, and link tracking to attribute revenue to creators. When customers from influencer campaigns make purchases, Klar connects the sale back to the specific creator and campaign."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I compare creator LTV with other channels?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - Klar tracks customer lifetime value by acquisition channel. Compare LTV of customers acquired through creators versus paid ads, email, SEO, or direct traffic to understand true influencer value."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What attribution models does Klar support?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Klar offers multiple attribution models including first-click, last-click, and linear attribution. Choose the model that best reflects how creators contribute to your customer journeys and purchasing decisions."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How is creator ROAS calculated?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Klar calculates ROAS by dividing attributed revenue by creator costs. Track profitability of influencer campaigns with automatic cost tracking from Storyclash and revenue attribution from your e-commerce platform."
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
