import { useEffect } from 'react';
import { ArrowRight, LineChart, Check, Shield, TrendingUp, Zap, BarChart3, Users, Database } from 'lucide-react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BigCommerceIcon = ({ height = 30 }: { height?: number }) => (
  <svg height={height} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 'auto' }}>
    <rect width="40" height="40" rx="8" fill="#121118"/>
    <path d="M20 10L12 15V25L20 30L28 25V15L20 10Z" fill="#FFFFFF"/>
    <path d="M20 17L16 19.5V24.5L20 27L24 24.5V19.5L20 17Z" fill="#121118"/>
  </svg>
);

export default function BigCommercePage() {
  useDocumentTitle('BigCommerce Influencer Marketing Integration | Storyclash');

  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Integrations',
              'item': 'https://www.storyclash.com/integrations'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'BigCommerce Marketing Integration'
            }
          ]
        },
        {
          '@type': 'SoftwareApplication',
          'name': 'Storyclash BigCommerce Integration',
          'applicationCategory': 'BusinessApplication',
          'description': 'Bring creator performance and ROI insights directly into your BigCommerce dashboards.',
          'offers': {
            '@type': 'Offer',
            'price': '0',
            'priceCurrency': 'USD'
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Connect Storyclash with BigCommerce to track influencer performance, measure ROI, and visualize creator impact directly in your e-commerce analytics.');
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://www.storyclash.com/integrations/BigCommerce');
    }

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="px-6" style={{ backgroundColor: '#FAFAFA', paddingTop: '156px', paddingBottom: '80px' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <div className="text-sm text-gray-500">
                <a href="/integrations" className="hover:text-gray-700 transition-colors">
                  Integrations
                </a>
                <span className="mx-2">/</span>
                <span className="font-semibold">BigCommerce Marketing Integration</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up">
                <h1 className="leading-tight mb-6" style={{ fontSize: '56px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                  BigCommerce + Influencer Marketing Integration
                </h1>
                <p className="mb-8" style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                  Bring creator performance and ROI insights directly into your BigCommerce dashboards.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.storyclash.com/request-demo#request-demo"
                    className="inline-flex items-center justify-center gap-2 text-white transition-all duration-300 whitespace-nowrap"
                    style={{
                      backgroundColor: '#19B776',
                      borderRadius: '9999px',
                      padding: '10px 20px',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#FFFFFF'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#159963';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#19B776';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Book a Demo
                  </a>
                  <a
                    href="/integrations"
                    className="inline-flex items-center justify-center gap-2 transition-all duration-300 whitespace-nowrap"
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: '9999px',
                      padding: '10px 20px',
                      fontSize: '15px',
                      fontWeight: '600',
                      color: '#333333',
                      border: '1px solid #19B776'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#F9F9F9';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Explore all integrations
                  </a>
                </div>
              </div>
              <div className="animate-fade-in">
                <div className="relative">
                  <div className="absolute inset-0 opacity-20 blur-3xl" style={{ backgroundColor: '#19B776', borderRadius: '20px' }}></div>
                  <div className="relative bg-white p-8 border border-gray-100" style={{ borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    <LineChart className="w-full h-64 text-gray-300" strokeWidth={1} />
                    <div className="absolute top-12 left-12 right-12 flex justify-between items-start">
                      <div className="bg-white px-4 py-3 border border-gray-100" style={{ borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                        <div className="text-xs mb-1" style={{ color: '#333333', fontFamily: 'Roboto, sans-serif' }}>EMV</div>
                        <div className="text-xl font-black" style={{ color: '#19B776', fontFamily: 'Roboto, sans-serif' }}>$124K</div>
                      </div>
                      <div className="bg-white px-4 py-3 border border-gray-100" style={{ borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                        <div className="text-xs mb-1" style={{ color: '#333333', fontFamily: 'Roboto, sans-serif' }}>ROAS</div>
                        <div className="text-xl font-black" style={{ color: '#F49D3B', fontFamily: 'Roboto, sans-serif' }}>4.8x</div>
                      </div>
                    </div>
                    <div
                      className="absolute bottom-8 left-8 opacity-0 transition-opacity duration-300"
                      style={{ animation: 'logoFadeIn 0.6s ease-out 0.6s forwards' }}
                    >
                      <BigCommerceIcon height={30} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <style>{`
            @keyframes logoFadeIn {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
          `}</style>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
              Why Connect Storyclash with BigCommerce?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Zap, color: '#19B776', title: 'Effortless Integration', desc: 'Connect Storyclash to BigCommerce in minutes and start tracking influencer-driven sales automatically.' },
                { icon: TrendingUp, color: '#D1215D', title: 'Visualize ROI & Impact', desc: 'See how creator content drives conversions, revenue, and customer acquisition in your store analytics.' },
                { icon: BarChart3, color: '#F49D3B', title: 'Automated Dashboards', desc: 'Build executive-ready reports that combine e-commerce metrics with influencer performance data.' }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-white p-8 transition-all duration-300 hover:shadow-lg" style={{ borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                    <div className="w-14 h-14 flex items-center justify-center mb-6" style={{ backgroundColor: `${benefit.color}15`, borderRadius: '12px' }}>
                      <Icon className="w-7 h-7" style={{ color: benefit.color }} />
                    </div>
                    <h3 className="mb-3" style={{ fontSize: '20px', lineHeight: '1.1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                      {benefit.title}
                    </h3>
                    <p style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                      {benefit.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 px-6" style={{ backgroundColor: '#FAFAFA' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
              From Social Data to E-Commerce Insights
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '1', icon: Users, title: 'Track Creator Performance', desc: 'Storyclash monitors influencer content, engagement, and audience metrics across social platforms.' },
                { step: '2', icon: Database, title: 'Sync with BigCommerce', desc: 'Performance data flows automatically into your BigCommerce analytics and reporting tools.' },
                { step: '3', icon: BarChart3, title: 'Measure Sales Impact', desc: 'Connect creator campaigns to actual revenue, conversions, and customer lifetime value.' }
              ].map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    <div className="bg-white p-8" style={{ borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                      <div className="absolute -top-4 -left-4 w-12 h-12 flex items-center justify-center text-white font-bold text-xl" style={{ backgroundColor: '#19B776', borderRadius: '50%' }}>
                        {step.step}
                      </div>
                      <div className="w-14 h-14 flex items-center justify-center mb-6 mx-auto" style={{ backgroundColor: '#19B77615', borderRadius: '12px' }}>
                        <Icon className="w-7 h-7" style={{ color: '#19B776' }} />
                      </div>
                      <h3 className="mb-3 text-center" style={{ fontSize: '20px', lineHeight: '1.1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                        {step.title}
                      </h3>
                      <p className="text-center" style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
              Built for E-Commerce Marketing Teams
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="mb-6" style={{ fontSize: '24px', lineHeight: '1.1', fontWeight: '600', color: '#19B776', fontFamily: 'Roboto, sans-serif' }}>
                  Key Use Cases
                </h3>
                <div className="space-y-4">
                  {[
                    'Measure influencer campaign ROI alongside paid ads and organic channels',
                    'Track which creators drive the most revenue and customer acquisition',
                    'Build custom dashboards combining sales data with creator performance',
                    'Automate monthly reports for executives and stakeholders'
                  ].map((useCase, index) => (
                    <div key={index} className="flex gap-3">
                      <Check className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#19B776' }} />
                      <p style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                        {useCase}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8" style={{ borderRadius: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4" style={{ backgroundColor: '#FAFAFA', borderRadius: '12px' }}>
                    <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: '#19B77615', borderRadius: '50%' }}>
                      <TrendingUp className="w-6 h-6" style={{ color: '#19B776' }} />
                    </div>
                    <div>
                      <div className="text-sm" style={{ color: '#666666', fontFamily: 'Roboto, sans-serif' }}>Influencer Revenue</div>
                      <div className="text-2xl font-bold" style={{ color: '#19B776', fontFamily: 'Roboto, sans-serif' }}>$248K</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4" style={{ backgroundColor: '#FAFAFA', borderRadius: '12px' }}>
                    <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: '#F49D3B15', borderRadius: '50%' }}>
                      <Users className="w-6 h-6" style={{ color: '#F49D3B' }} />
                    </div>
                    <div>
                      <div className="text-sm" style={{ color: '#666666', fontFamily: 'Roboto, sans-serif' }}>New Customers</div>
                      <div className="text-2xl font-bold" style={{ color: '#F49D3B', fontFamily: 'Roboto, sans-serif' }}>1,847</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4" style={{ backgroundColor: '#FAFAFA', borderRadius: '12px' }}>
                    <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: '#D1215D15', borderRadius: '50%' }}>
                      <BarChart3 className="w-6 h-6" style={{ color: '#D1215D' }} />
                    </div>
                    <div>
                      <div className="text-sm" style={{ color: '#666666', fontFamily: 'Roboto, sans-serif' }}>Campaign ROAS</div>
                      <div className="text-2xl font-bold" style={{ color: '#D1215D', fontFamily: 'Roboto, sans-serif' }}>5.2x</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Table */}
        <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
              Enterprise-Grade Features
            </h2>
            <div className="bg-white border-2 overflow-hidden" style={{ borderRadius: '20px', borderColor: '#E5EAEC', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
              <div className="divide-y divide-gray-200">
                {[
                  { name: 'Real-Time Sync', desc: 'Automatic data synchronization between Storyclash and BigCommerce every hour.' },
                  { name: 'Custom Metrics', desc: 'Define and track custom KPIs that matter most to your e-commerce business.' },
                  { name: 'Multi-Store Support', desc: 'Connect multiple BigCommerce stores to a single Storyclash account.' },
                  { name: 'Historical Data', desc: 'Access up to 24 months of historical influencer and sales performance data.' }
                ].map((feature, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#E5EAEC', borderRadius: '20px' }}>
                        <Check className="w-5 h-5" style={{ color: '#19B776' }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2" style={{ fontSize: '18px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                          {feature.name}
                        </h3>
                        <p style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Storyclash */}
        <section className="py-20 px-6 border-t border-b" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5EAEC' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="mb-16 text-center" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#19B776', fontFamily: 'Roboto, sans-serif' }}>
              Why Storyclash for BigCommerce?
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                {[
                  { icon: Shield, title: 'Enterprise Security', desc: 'Bank-level encryption, SOC 2 compliance, and secure API authentication for all data transfers.' },
                  { icon: Zap, title: 'Lightning Fast', desc: 'Real-time data processing and instant dashboard updates as creator campaigns perform.' },
                  { icon: Users, title: 'Expert Support', desc: 'Dedicated customer success team to help you maximize ROI from influencer marketing.' }
                ].map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex gap-5">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg" style={{ color: '#19B776' }}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="mb-2" style={{ fontSize: '20px', lineHeight: '1.1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                          {benefit.title}
                        </h3>
                        <p style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="bg-gradient-to-br from-green-50/50 to-transparent p-8 lg:p-12 flex items-center justify-center" style={{ borderRadius: '20px' }}>
                <BigCommerceIcon height={120} />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-16" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                { q: 'How long does setup take?', a: 'Most customers complete the BigCommerce integration in under 15 minutes. Our setup wizard guides you through API authentication and data mapping.' },
                { q: 'What data syncs to BigCommerce?', a: 'Creator performance metrics, campaign ROI, engagement data, and attributed revenue flow into your BigCommerce analytics automatically.' },
                { q: 'Can I track multiple campaigns?', a: 'Yes! Storyclash supports unlimited campaigns, creators, and content pieces with full historical tracking and reporting.' },
                { q: 'Is technical knowledge required?', a: 'No coding required. Our visual interface and pre-built templates make it easy for any marketer to set up and use the integration.' }
              ].map((faq, index) => (
                <div key={index} className="border-2 p-6" style={{ borderColor: '#E5EAEC', borderRadius: '20px' }}>
                  <h3 className="mb-3" style={{ fontSize: '18px', lineHeight: '1', fontWeight: '600', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                    {faq.q}
                  </h3>
                  <p style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6" style={{ backgroundColor: '#0F262C' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#FFFFFF', fontFamily: 'Roboto, sans-serif' }}>
              Bring Influencer Insights into BigCommerce
            </h2>
            <p className="mb-8" style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#FFFFFF', fontFamily: 'Roboto, sans-serif' }}>
              Start tracking creator ROI and sales impact in your e-commerce analytics today.
            </p>
            <a
              href="https://www.storyclash.com/request-demo#request-demo"
              className="inline-flex items-center justify-center gap-2 transition-all duration-300 whitespace-nowrap"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '9999px',
                padding: '12px 24px',
                fontSize: '15px',
                fontWeight: '600',
                color: '#0F262C',
                border: '1px solid #E5E7EB'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F9F9F9';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
