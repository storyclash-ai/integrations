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
  const description = "Connect Segment with Storyclash's influencer marketing platform. Export creator and campaign data from Storyclash to Segment CDP, enrich customer profiles with influencer insights, and activate creator metrics across all your connected tools. Book a demo.";
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
                              "name": "How does Storyclash send influencer and campaign data to Segment CDP?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Storyclash sends creator and campaign metrics to Segment CDP via a secure API integration. Influencer events and performance data are streamed from Storyclash into Segment, so they can be used in customer profiles, journeys and downstream tools."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Which Storyclash creator and campaign metrics can be synced to Segment?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Segment can receive Storyclash metrics such as impressions, reach, engagement rate, conversions, campaign IDs, creator identifiers and attributed revenue signals. These fields are mapped into Segment events and traits with standardized schemas."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "How can I activate Storyclash influencer data across tools with Segment?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Use Segment to route Storyclash influencer data to analytics, CRM, email, advertising and marketing automation tools. Creator insights from Storyclash become available across your entire stack for targeting, personalization, suppression and reporting."
                              }
                      },
                      {
                              "@type": "Question",
                              "name": "Is the Storyclash → Segment integration secure and GDPR-compliant?",
                              "acceptedAnswer": {
                                      "@type": "Answer",
                                      "text": "Yes. Storyclash uses encrypted API connections and secure authentication when sending data to Segment. Both platforms provide GDPR-compliant data processing and support consent-based tracking and audience management."
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
        keywords="Segment influencer marketing integration, Segment CDP creator data, Segment customer profiles, Storyclash Segment API, Segment downstream activation"
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
