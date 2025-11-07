import { useEffect, useState } from 'react';

export default function Header() {
  const [path, setPath] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPath(window.location.pathname.toLowerCase());
    }
  }, []);

  const isOverview = /^\/integrations\/?$/.test(path);
  const isDetail = /^\/integrations\/[^/]+/.test(path);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200/60 z-50 overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-4 flex items-center justify-between gap-2 sm:gap-3 flex-nowrap">
        <a href="https://www.storyclash.com" className="flex items-center gap-2 flex-shrink-0">
          <img src="/logo-1.svg" alt="Storyclash" className="h-5 w-auto sm:h-7 md:h-8" />
        </a>
        <div className="flex items-center gap-2 sm:gap-3 flex-nowrap flex-shrink-0">
          {isDetail && (
            <a
              href="/integrations"
              aria-label="Explore more integrations"
              className="inline-flex items-center justify-center h-8 px-3 text-xs sm:h-10 sm:px-4 sm:text-sm rounded-full border border-gray-200 bg-white text-gray-900 font-semibold leading-none whitespace-nowrap text-center hover:bg-gray-50 transition"
            >
              <span className="sm:hidden">Integrations</span>
              <span className="hidden sm:inline">Explore more integrations</span>
            </a>
          )}
          <a
            href="https://www.storyclash.com/request-demo"
            className="inline-flex items-center justify-center h-8 px-3 text-xs sm:h-10 sm:px-5 sm:text-[15px] rounded-full bg-[#19B776] text-white font-semibold leading-none whitespace-nowrap text-center hover:opacity-95 transition"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </header>
  );
}
