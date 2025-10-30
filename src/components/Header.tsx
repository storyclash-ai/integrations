import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const path = location?.pathname ?? window.location.pathname;
  const isIntegrationsOverview = path === "/integrations";
  const isIntegrationDetail = path.startsWith("/integrations/") && !isIntegrationsOverview;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200/60 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        <a href="https://www.storyclash.com" className="flex items-center gap-2">
          <img src="/logo-1.svg" alt="Storyclash" className="h-6 w-auto sm:h-8" />
        </a>
        <div className="flex items-center gap-2 sm:gap-3 flex-nowrap">
          {isIntegrationDetail && (
            <a
              href="/integrations"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 font-semibold h-9 sm:h-10 px-3 sm:px-4 text-sm sm:text-[15px] leading-none whitespace-nowrap text-center hover:bg-gray-50 transition"
            >
              <span className="sm:hidden">Integrations</span>
              <span className="hidden sm:inline">Explore more integrations</span>
            </a>
          )}
          <a
            href="https://www.storyclash.com/request-demo"
            className="inline-flex items-center justify-center rounded-full bg-[#19B776] text-white font-semibold h-9 sm:h-10 px-4 sm:px-5 text-sm sm:text-[15px] leading-none whitespace-nowrap text-center hover:opacity-95 transition"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </header>
  );
}
