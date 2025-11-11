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
                                      "text": "Send Storyclash influencer metrics to Segment CDP via secure API. Import calculated segments and audiences from Segment back to Storyclash for influencer scoring and segmentation."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "What Storyclash data syncs to Segment?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "All creator metrics including engagement, reach, conversions, ROI, campaign performance, and audience data. Data syncs to Segment with standardized schemas for consistency."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I activate Storyclash data across tools?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - use Segment to route Storyclash influencer data to analytics, CRM, email, and advertising platforms. Activate creator insights across your entire marketing stack."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Can I import Segment insights back to Storyclash?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes - export calculated segments and audiences from Segment back to Storyclash via API. Use them for influencer scoring, segmentation, and ongoing attribution."
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
