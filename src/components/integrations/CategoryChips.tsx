import { useEffect, useRef } from 'react';

interface CategoryChipsProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const PRIMARY_CATEGORIES = [
  'All',
  'E-Commerce',
  'Visualization & Analytics',
  'Data Infrastructure',
  'Attribution & Marketing',
];

export default function CategoryChips({ selectedCategory, onCategoryChange }: CategoryChipsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollTo({ left: 0 });
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current?.contains(document.activeElement)) return;

      const buttons = Array.from(containerRef.current.querySelectorAll('button[role="tab"]'));
      const currentIndex = buttons.indexOf(document.activeElement as HTMLButtonElement);

      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        e.preventDefault();
        (buttons[currentIndex - 1] as HTMLButtonElement).focus();
      } else if (e.key === 'ArrowRight' && currentIndex < buttons.length - 1) {
        e.preventDefault();
        (buttons[currentIndex + 1] as HTMLButtonElement).focus();
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        (document.activeElement as HTMLButtonElement).click();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCategorySelect = (category: string) => {
    onCategoryChange(category);
  };

  return (
    <div className="mt-6 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={containerRef} className="relative">
          <div className="hidden md:flex flex-wrap justify-center gap-2 sm:gap-3">
            {PRIMARY_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-pressed={isActive}
                  aria-label={`Filter by ${category}`}
                  onClick={() => handleCategorySelect(category)}
                  className={`
                    whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium
                    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
                    ${
                      isActive
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-700 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:shadow'
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="md:hidden">
            <div className="relative -mx-6">
              <div
                ref={scrollerRef}
                className="overflow-x-auto no-scrollbar px-6 touch-pan-x"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch',
                  scrollbarGutter: 'stable both-edges',
                }}
              >
                <div className="flex items-center gap-2 pb-2">
                  {PRIMARY_CATEGORIES.map((category) => {
                    const isActive = selectedCategory === category;
                    return (
                      <button
                        key={category}
                        role="tab"
                        aria-pressed={isActive}
                        aria-label={`Filter by ${category}`}
                        onClick={() => handleCategorySelect(category)}
                        className={`
                          whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium
                          transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 flex-shrink-0
                          ${
                            isActive
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-700 shadow-sm'
                              : 'bg-white border-slate-200 text-slate-700 hover:shadow'
                          }
                        `}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white to-transparent"
                style={{ zIndex: 1 }}
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white to-transparent"
                style={{ zIndex: 1 }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
