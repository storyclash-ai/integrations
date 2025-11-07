import Header from '../components/Header';
import Footer from '../components/Footer';
import SegmentHeroSection from '../components/segment/SegmentHeroSection';
import SegmentBenefitsSection from '../components/segment/SegmentBenefitsSection';
import SegmentHowItWorksSection from '../components/segment/SegmentHowItWorksSection';
import SegmentUseCaseSection from '../components/segment/SegmentUseCaseSection';
import SegmentFeaturesTable from '../components/segment/SegmentFeaturesTable';
import SegmentWhyStoryclashSection from '../components/segment/SegmentWhyStoryclashSection';
import SegmentFAQSection from '../components/segment/SegmentFAQSection';
import CTASection from '../components/CTASection';
import { Seo } from '../components/Seo';

export default function SegmentPage() {
  const title = "Segment Influencer Marketing Integration | Storyclash";
  const description = "Connect Segment with Storyclash's influencer marketing platform. Store creator campaign data in your data warehouse, analyze performance, and build custom models. Book a demo.";
  const canonical = "https://www.storyclash.com/integrations/segment-influencer-marketing";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Storyclash – Segment Influencer Marketing Integration",
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
          { "@type": "ListItem", "position": 3, "name": "Segment Influencer Marketing Integration", "item": canonical }
        ]
      },
      {
              "@type": "FAQPage",
              "mainEntity": [
                      {
                              "@type": "Question",
                              "name": "How does Storyclash integrate with Segment?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Configure Storyclash as a Segment source to send creator engagement events. Events flow into Segment with standard schemas and route to your configured destinations automatically."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How do I build segments with creator data?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Use Segment Personas to create customer segments based on creator interactions. Trigger campaigns when users engage with specific influencers or content types."
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
        openGraphImage="/og/integrations-Segment.png"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <SegmentHeroSection />
        <SegmentBenefitsSection />
        <SegmentHowItWorksSection />
        <SegmentUseCaseSection />
        <SegmentFeaturesTable />
        <SegmentWhyStoryclashSection />
        <SegmentFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
