export default function MatomoWhyStoryclashSection() {
  return (
    <section className="py-20 px-6 border-t border-b" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5EAEC' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="mb-16 text-center" style={{ fontSize: '36px', lineHeight: '1', fontWeight: '600', color: '#19B776', fontFamily: 'Roboto, sans-serif' }}>
          Why Storyclash for Matomo?
        </h2>
        <p className="text-center max-w-3xl mx-auto" style={{ fontSize: '16px', lineHeight: '1.3', fontWeight: '400', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
          Storyclash automatically tags creator campaigns with UTM parameters and syncs influencer attribution data to your Matomo instance. Track which creators drive traffic and conversions while maintaining complete data ownership and GDPR compliance through self-hosted analytics.
        </p>
      </div>
    </section>
  );
}
