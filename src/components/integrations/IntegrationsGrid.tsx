import { integrations } from '../../data/integrations';
import IntegrationTile from './IntegrationTile';

interface IntegrationsGridProps {
  searchQuery?: string;
  selectedCategory?: string;
}

export default function IntegrationsGrid({ searchQuery = '', selectedCategory = 'All' }: IntegrationsGridProps) {
  const filteredIntegrations = integrations.filter((integration) => {
    const matchesSearch =
      integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || integration.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section
      className="px-6"
      style={{
        paddingTop: 'clamp(60px, 10vw, 80px)',
        paddingBottom: 'clamp(60px, 10vw, 80px)',
        backgroundColor: '#FFFFFF'
      }}
    >
      <div className="max-w-7xl mx-auto">
        {filteredIntegrations.length > 0 ? (
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
            }}
          >
            {filteredIntegrations.map((integration) => (
              <IntegrationTile key={integration.id} integration={integration} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p
              style={{
                fontSize: '18px',
                color: '#233C42',
                opacity: 0.6
              }}
            >
              No integrations found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
