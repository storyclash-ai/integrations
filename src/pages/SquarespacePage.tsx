import Header from '../components/Header';
import SquarespaceHeroSection from '../components/squarespace/SquarespaceHeroSection';
import SquarespaceBenefitsSection from '../components/squarespace/SquarespaceBenefitsSection';
import SquarespaceHowItWorksSection from '../components/squarespace/SquarespaceHowItWorksSection';
import SquarespaceUseCaseSection from '../components/squarespace/SquarespaceUseCaseSection';
import SquarespaceFeaturesTable from '../components/squarespace/SquarespaceFeaturesTable';
import SquarespaceWhyStoryclashSection from '../components/squarespace/SquarespaceWhyStoryclashSection';
import SquarespaceFAQSection from '../components/squarespace/SquarespaceFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { Seo } from '../components/Seo';

export default function SquarespacePage() {
  const title = "Squarespace Influencer Marketing Integration | Storyclash";
  const description = "Connect Squarespace with Storyclash's influencer marketing platform. Track creator performance, measure ROI, and sync campaign data to Squarespace. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/squarespace-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Squarespace Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Squarespace Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How do I connect Storyclash to Squarespace Commerce?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Use the Squarespace API key from your account settings. Our guided setup takes about 5 minutes with clear step-by-step instructions."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Does this work with Squarespace memberships and digital products?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - track creator performance for physical products, digital downloads, memberships, and courses sold through Squarespace."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which Squarespace data gets synced?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Order data, revenue, product SKUs, customer acquisition, and conversion events - all matched to specific influencer campaigns."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I track creators promoting my portfolio or services?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Absolutely. Whether you sell products, services, bookings, or digital goods on Squarespace, Storyclash tracks creator-driven conversions."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is this suitable for creative entrepreneurs and small businesses?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - designed specifically for creative professionals, photographers, designers, and small business owners using Squarespace."
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
        openGraphImage="/og/integrations-Squarespace.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <SquarespaceHeroSection />
        <SquarespaceBenefitsSection />
        <SquarespaceHowItWorksSection />
        <SquarespaceUseCaseSection />
        <SquarespaceFeaturesTable />
        <SquarespaceWhyStoryclashSection />
        <SquarespaceFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
