import { useState, useEffect } from 'react';
import IntegrationsHeader from '../components/integrations/IntegrationsHeader';
import Footer from '../components/Footer';
import IntegrationsHero from '../components/integrations/IntegrationsHero';
import IntegrationsGrid from '../components/integrations/IntegrationsGrid';
import IntegrationsCTA from '../components/integrations/IntegrationsCTA';
import CategoryChips from '../components/integrations/CategoryChips';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export default function IntegrationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, []);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);

    const params = new URLSearchParams(window.location.search);
    if (category === 'All') {
      params.delete('category');
    } else {
      params.set('category', category);
    }

    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;

    window.history.replaceState({}, '', newUrl);
  };

  useDocumentTitle(
    'Storyclash Integrations | Connect Your Marketing & Data Stack',
    'Explore 50+ Storyclash integrations and connect creator performance with your tools. Dashboards, ROI & automation.'
  );

  return (
    <div className="min-h-screen bg-white">
      <IntegrationsHeader />
      <main>
        <IntegrationsHero onSearch={setSearchQuery} />
        <CategoryChips
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <IntegrationsGrid
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
        />
        <IntegrationsCTA />
      </main>
      <Footer />
    </div>
  );
}
