import { useEffect } from 'react';

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region: string;
}

export default function HubSpotForm({ portalId, formId, region }: HubSpotFormProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.defer = true;
    script.charset = 'utf-8';

    script.onload = () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          portalId: portalId,
          formId: formId,
          region: region,
          target: '#hubspot-form-container'
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [portalId, formId, region]);

  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#333333', marginBottom: '8px', fontFamily: 'Roboto, sans-serif' }}>
          Book your 1:1 Demo
        </h3>
        <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#666666', fontFamily: 'Roboto, sans-serif' }}>
          Ready to get to know Storyclash a little better? Book a call with our sales team now to see firsthand how our platform can supercharge your influencer campaigns and drive real results.
        </p>
      </div>
      <div id="hubspot-form-container" style={{ width: '100%' }}></div>
      <style>{`
        #hubspot-form-container .hs-form {
          width: 100%;
        }

        #hubspot-form-container .hs-form-field {
          margin-bottom: 12px;
          display: inline-block;
          width: 48%;
          margin-right: 2%;
          vertical-align: top;
        }

        #hubspot-form-container .hs-form-field:nth-child(odd):not(:nth-child(7)) {
          margin-right: 2%;
        }

        #hubspot-form-container .hs-form-field:nth-child(even):not(:nth-child(7)) {
          margin-right: 0;
        }

        #hubspot-form-container .hs-form-field:nth-child(7) {
          width: 100%;
          display: block;
          margin-right: 0;
        }

        #hubspot-form-container .hs-form-field input,
        #hubspot-form-container .hs-form-field textarea,
        #hubspot-form-container .hs-form-field select {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          font-size: 13px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          box-sizing: border-box;
        }

        #hubspot-form-container .hs-form-field label {
          display: block;
          margin-bottom: 4px;
          font-size: 12px;
          font-weight: 600;
          color: #666666;
        }

        #hubspot-form-container .hs-button {
          background-color: #19B776;
          color: white;
          padding: 8px 20px;
          border-radius: 9999px;
          border: none;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          transition: opacity 0.3s ease;
          width: 100%;
          box-sizing: border-box;
        }

        #hubspot-form-container .hs-button:hover {
          opacity: 0.95;
        }
      `}</style>
    </>
  );
}
