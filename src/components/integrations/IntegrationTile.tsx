import { ArrowRight, Box } from 'lucide-react';
import { Integration } from '../../data/integrations';
import { useRef } from 'react';

interface IntegrationTileProps {
  integration: Integration;
}

export default function IntegrationTile({ integration }: IntegrationTileProps) {
  const logoRef = useRef<HTMLImageElement>(null);

  return (
    <a
      href={integration.slug}
      className="block"
      style={{
        padding: '24px',
        border: '1px solid #E5EAEC',
        borderRadius: '16px',
        backgroundColor: '#FFFFFF',
        textDecoration: 'none',
        transition: 'all 0.25s ease-out',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(35, 60, 66, 0.3)';
        e.currentTarget.style.transform = 'translateY(-3px)';
        if (logoRef.current) {
          logoRef.current.style.filter = 'brightness(1.1)';
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#E5EAEC';
        e.currentTarget.style.transform = 'translateY(0)';
        if (logoRef.current) {
          logoRef.current.style.filter = 'brightness(1)';
        }
      }}
      onFocus={(e) => {
        e.currentTarget.style.borderColor = 'rgba(35, 60, 66, 0.3)';
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.outline = '2px solid #19B776';
        e.currentTarget.style.outlineOffset = '2px';
        if (logoRef.current) {
          logoRef.current.style.filter = 'brightness(1.1)';
        }
      }}
      onBlur={(e) => {
        e.currentTarget.style.borderColor = '#E5EAEC';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.outline = 'none';
        if (logoRef.current) {
          logoRef.current.style.filter = 'brightness(1)';
        }
      }}
      aria-label={`View integration: ${integration.name}`}
    >
      <div className="text-center mb-4">
        <div
          className="flex items-center justify-center mx-auto"
          style={{
            height: '48px',
            width: '100%',
            marginBottom: '16px'
          }}
        >
          {integration.logo ? (
            <img
              ref={logoRef}
              src={integration.logo}
              alt={`${integration.name} logo`}
              style={{
                maxHeight: '48px',
                maxWidth: '120px',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                transition: 'filter 0.25s ease-out'
              }}
            />
          ) : (
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '6px',
                backgroundColor: '#FAFAFA',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px'
              }}
            >
              <Box size={32} style={{ color: '#999999' }} />
            </div>
          )}
        </div>

        <h3
          className="font-bold mb-2"
          style={{
            fontSize: '18px',
            color: '#233C42',
            lineHeight: '1.3'
          }}
        >
          {integration.name}
        </h3>

        <p
          className="mb-4"
          style={{
            fontSize: '14px',
            color: '#233C42',
            opacity: 0.7,
            lineHeight: '1.5'
          }}
        >
          {integration.description}
        </p>

        <span
          className="inline-flex items-center gap-1"
          style={{
            fontSize: '14px',
            color: '#19B776',
            fontWeight: '600',
            transition: 'all 0.25s ease-out'
          }}
        >
          Learn more
          <ArrowRight size={14} />
        </span>
      </div>
    </a>
  );
}
