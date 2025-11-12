const FlowIllustration = () => (
  <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
    <rect x="40" y="40" width="100" height="70" rx="8" stroke="#00A1E0" strokeWidth="2.5" fill="rgba(0, 161, 224, 0.06)" />
    <text x="90" y="72" fontSize="13" fontWeight="700" fill="#00A1E0" textAnchor="middle">Storyclash</text>
    <text x="90" y="88" fontSize="11" fontWeight="500" fill="#233C42" textAnchor="middle">Connect</text>
    <rect x="150" y="140" width="100" height="70" rx="8" stroke="#00A1E0" strokeWidth="2.5" fill="rgba(0, 161, 224, 0.06)" />
    <text x="200" y="172" fontSize="13" fontWeight="700" fill="#00A1E0" textAnchor="middle">Data Sync</text>
    <text x="200" y="188" fontSize="11" fontWeight="500" fill="#233C42" textAnchor="middle">Auto-update</text>
    <rect x="260" y="40" width="100" height="70" rx="8" stroke="#00A1E0" strokeWidth="2.5" fill="rgba(0, 161, 224, 0.06)" />
    <text x="310" y="72" fontSize="13" fontWeight="700" fill="#00A1E0" textAnchor="middle">Salesforce</text>
    <text x="310" y="88" fontSize="11" fontWeight="500" fill="#233C42" textAnchor="middle">CRM</text>
    <circle cx="90" cy="240" r="5" fill="#00A1E0"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" /></circle>
    <circle cx="200" cy="240" r="5" fill="#00A1E0"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="0.7s" repeatCount="indefinite" /></circle>
    <circle cx="310" cy="240" r="5" fill="#00A1E0"><animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1.4s" repeatCount="indefinite" /></circle>
  </svg>
);

export default function SalesforceHowItWorksSection() {
  const steps = [{number:'01',title:'Connect Salesforce API',description:'Secure OAuth authentication to sync creator data into Salesforce accounts, contacts, and custom objects.'},{number:'02',title:'Map data fields',description:'Configure which creator metrics sync to Salesforce custom fields, including audience size, engagement rates, and campaign KPIs.'},{number:'03',title:'Track revenue impact',description:'Link influencer campaigns to opportunities and closed deals for complete revenue attribution in Salesforce reports.'}];
  return (
    <section className="py-20 px-6" style={{backgroundColor:'#E5EAEC'}}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-center mb-16 tracking-tight" style={{color:'#233C42'}}>
          Track Influencer Impact on Enterprise Revenue
        </h2>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1" style={{animation:'slideInLeft 0.8s ease-out both'}}><div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm"><FlowIllustration/></div></div>
          <div className="order-1 lg:order-2 space-y-6" style={{animation:'slideInBottom 0.8s ease-out 0.2s both'}}>
            {steps.map((step,idx)=><div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300" style={{animation:`fadeInUp 0.6s ease-out ${0.3+idx*0.15}s both`}}><div className="flex gap-5"><div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center font-black text-lg text-white" style={{backgroundColor:'#00A1E0'}}>{step.number}</div><div><h3 className="text-lg font-bold mb-2 tracking-tight" style={{color:'#233C42'}}>{step.title}</h3><p className="text-gray-600 leading-relaxed text-[15px]">{step.description}</p></div></div></div>)}
          </div>
        </div>
      </div>
      <style>{`@keyframes slideInLeft{from{opacity:0;transform:translateX(-30px)}to{opacity:1;transform:translateX(0)}}@keyframes slideInBottom{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </section>
  );
}
