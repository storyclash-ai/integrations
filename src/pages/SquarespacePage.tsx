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

export default function SquarespacePage() {
  return (
    <div className="min-h-screen bg-white">
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
