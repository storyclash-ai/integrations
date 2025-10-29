import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  { question: 'How does Storyclash integrate with Segment?', answer: 'Configure Storyclash as a Segment source to send creator engagement events. Events flow into Segment with standard schemas and route to your configured destinations automatically.' },
  { question: 'What creator data syncs to Segment?', answer: 'Influencer engagement events including content views, clicks, conversions, and campaign interactions. Data follows Segment\'s event schema standards for consistency.' },
  { question: 'Can I route creator data to multiple tools?', answer: 'Yes - that\'s Segment\'s core value. Route Storyclash data to analytics, CRM, email, advertising, and 300+ other tools from one integration.' },
  { question: 'How do I build segments with creator data?', answer: 'Use Segment Personas to create customer segments based on creator interactions. Trigger campaigns when users engage with specific influencers or content types.' }
];

export default function SegmentFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 text-center mb-16">Segment Integration FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 rounded-2xl overflow-hidden" style={{ borderColor: '#E5EAEC' }}>
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200">
                <h3 className="text-lg font-black text-gray-900 pr-4">{faq.question}</h3>
                <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} style={{ color: '#52BD94' }} />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
