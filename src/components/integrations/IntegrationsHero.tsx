import { Search, X } from 'lucide-react';
import { useState } from 'react';

interface IntegrationsHeroProps {
  onSearch?: (query: string) => void;
}

const DecorativePattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#19B776' }}></div>
    <div className="absolute bottom-10 left-20 w-40 h-40 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#19B776' }}></div>

    <svg className="absolute top-0 left-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="integration-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#19B776" />
          <circle cx="30" cy="30" r="1.5" fill="#19B776" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#integration-grid)" />
    </svg>

    <div className="absolute top-1/4 right-1/4 w-12 h-12 opacity-10">
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="8" width="12" height="12" rx="2" stroke="#19B776" strokeWidth="2" />
        <rect x="28" y="8" width="12" height="12" rx="2" stroke="#19B776" strokeWidth="2" />
        <rect x="8" y="28" width="12" height="12" rx="2" stroke="#19B776" strokeWidth="2" />
        <rect x="28" y="28" width="12" height="12" rx="2" stroke="#19B776" strokeWidth="2" />
        <path d="M20 14H28" stroke="#19B776" strokeWidth="2" />
        <path d="M20 34H28" stroke="#19B776" strokeWidth="2" />
        <path d="M14 20V28" stroke="#19B776" strokeWidth="2" />
        <path d="M34 20V28" stroke="#19B776" strokeWidth="2" />
      </svg>
    </div>

    <div className="absolute bottom-1/3 left-1/3 w-16 h-16 opacity-10">
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="20" stroke="#19B776" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="32" cy="32" r="12" stroke="#19B776" strokeWidth="2" />
        <circle cx="32" cy="32" r="4" fill="#19B776" />
      </svg>
    </div>
  </div>
);

export default function IntegrationsHero({ onSearch }: IntegrationsHeroProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onSearch?.(value);
  };

  const handleClearSearch = () => {
    setSearchValue('');
    onSearch?.('');
  };

  return (
    <section
      className="px-6 relative overflow-hidden"
      style={{
        background: '#FAFAFA',
        paddingTop: '156px',
        paddingBottom: '60px'
      }}
    >
      <DecorativePattern />

      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-[3000ms] pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(25, 183, 118, 0.03) 0%, rgba(25, 183, 118, 0) 50%, rgba(25, 183, 118, 0.03) 100%)',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 8s ease infinite',
        }}
      ></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          style={{
            animation: 'fadeInUp 0.8s ease-out both',
          }}
        >
          <h1
            className="mb-6"
            style={{
              fontSize: '56px',
              lineHeight: '1',
              fontWeight: '600',
              color: '#333333',
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            Storyclash Integrations
          </h1>
          <p
            className="mb-8 mx-auto"
            style={{
              fontSize: '16px',
              lineHeight: '1.3',
              fontWeight: '400',
              color: '#333333',
              maxWidth: '640px',
              fontFamily: 'Roboto, sans-serif'
            }}
          >
            Connect Storyclash with your stack. Explore 50+ ready-to-use integrations.
          </p>
        </div>

        <div
          className="max-w-2xl mx-auto relative"
          style={{
            animation: 'fadeInUp 0.8s ease-out 0.2s both',
          }}
        >
          <div className="relative group">
            <Search
              className="absolute left-5 top-1/2 transform -translate-y-1/2 transition-colors duration-200 pointer-events-none"
              size={22}
              style={{ color: '#9CA3AF' }}
            />
            <input
              type="text"
              placeholder="Search integrations..."
              value={searchValue}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-14 pr-14 py-4 text-base rounded-2xl border-2 transition-all duration-300"
              style={{
                borderColor: '#E5E7EB',
                backgroundColor: '#FFFFFF',
                color: '#1A1A1A',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#19B776';
                e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(25, 183, 118, 0.1), 0 10px 10px -5px rgba(25, 183, 118, 0.04)';
                e.currentTarget.style.outline = 'none';
                const icon = e.currentTarget.previousElementSibling as HTMLElement;
                if (icon) icon.style.color = '#19B776';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)';
                const icon = e.currentTarget.previousElementSibling as HTMLElement;
                if (icon) icon.style.color = '#9CA3AF';
              }}
            />
            {searchValue && (
              <button
                onClick={handleClearSearch}
                className="absolute right-5 top-1/2 transform -translate-y-1/2 transition-colors duration-200"
                style={{ color: '#9CA3AF', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#19B776';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#9CA3AF';
                }}
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        input::placeholder {
          color: #9CA3AF;
          font-weight: 400;
        }
      `}</style>
    </section>
  );
}
