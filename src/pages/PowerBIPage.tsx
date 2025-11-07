import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import UseCaseSection from '../components/UseCaseSection';
import FeaturesTable from '../components/FeaturesTable';
import WhyStoryclashSection from '../components/WhyStoryclashSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function PowerBIPage() {
  const title = "PowerBI Influencer Marketing Integration | Storyclash";
  const description = "Connect PowerBI with Storyclash's influencer marketing platform. Export creator data to your reporting tools, automate data transfers, and unify campaign metrics. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/power-bi-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – PowerBI Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "PowerBI Influencer Marketing Integration", "item": canonical }
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
        openGraphImage="/og/integrations-PowerBI.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <UseCaseSection />
        <FeaturesTable />
        <WhyStoryclashSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
