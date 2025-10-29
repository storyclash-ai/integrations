export default function IntegrationsHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200/60 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="https://www.storyclash.com" className="flex items-center gap-2">
          <img src="/logo-1.svg" alt="Storyclash" className="h-8" />
        </a>
        <div className="flex items-center gap-x-3">
          <a
            href="https://www.storyclash.com/request-demo"
            className="group relative px-5 py-2.5 rounded-full text-white font-semibold text-[15px] tracking-tight transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
            style={{ backgroundColor: '#19B776' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#159963';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#19B776';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span className="relative z-10">Book a Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </header>
  );
}
