import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MailchimpHeroSection from '../components/mailchimp/MailchimpHeroSection';
import MailchimpBenefitsSection from '../components/mailchimp/MailchimpBenefitsSection';
import MailchimpHowItWorksSection from '../components/mailchimp/MailchimpHowItWorksSection';
import MailchimpUseCaseSection from '../components/mailchimp/MailchimpUseCaseSection';
import MailchimpFeaturesTable from '../components/mailchimp/MailchimpFeaturesTable';
import MailchimpWhyStoryclashSection from '../components/mailchimp/MailchimpWhyStoryclashSection';
import MailchimpFAQSection from '../components/mailchimp/MailchimpFAQSection';
import CTASection from '../components/CTASection';

export default function MailchimpPage() {
  useDocumentTitle(
    'Mailchimp Influencer Marketing Integration | Storyclash',
    'Connect Mailchimp with Storyclash to sync creator audiences, build targeted campaigns with influencer insights, and track email performance.'
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <MailchimpHeroSection />
        <MailchimpBenefitsSection />
        <MailchimpHowItWorksSection />
        <MailchimpUseCaseSection />
        <MailchimpFeaturesTable />
        <MailchimpWhyStoryclashSection />
        <MailchimpFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
