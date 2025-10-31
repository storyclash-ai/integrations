import Header from '../components/Header';
import TripleWhaleHeroSection from '../components/triplewhale/TripleWhaleHeroSection';
import TripleWhaleBenefitsSection from '../components/triplewhale/TripleWhaleBenefitsSection';
import TripleWhaleHowItWorksSection from '../components/triplewhale/TripleWhaleHowItWorksSection';
import TripleWhaleUseCaseSection from '../components/triplewhale/TripleWhaleUseCaseSection';
import TripleWhaleFeaturesTable from '../components/triplewhale/TripleWhaleFeaturesTable';
import TripleWhaleWhyStoryclashSection from '../components/triplewhale/TripleWhaleWhyStoryclashSection';
import TripleWhaleFAQSection from '../components/triplewhale/TripleWhaleFAQSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function TripleWhalePage() {
  useDocumentTitle('Triple Whale Influencer Marketing Integration | Storyclash');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <TripleWhaleHeroSection />
        <TripleWhaleBenefitsSection />
        <TripleWhaleHowItWorksSection />
        <TripleWhaleUseCaseSection />
        <TripleWhaleFeaturesTable />
        <TripleWhaleWhyStoryclashSection />
        <TripleWhaleFAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
