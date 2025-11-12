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
      <div id="hubspot-form-container" style={{ width: '100%' }}></div>
      <style>{`
        #hubspot-form-container .hs-form {
          width: 100%;
        }

        #hubspot-form-container .hs-form-field {
          margin-bottom: 16px;
        }

        #hubspot-form-container .hs-form-field input,
        #hubspot-form-container .hs-form-field textarea,
        #hubspot-form-container .hs-form-field select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 14px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        #hubspot-form-container .hs-form-field label {
          display: block;
          margin-bottom: 6px;
          font-size: 14px;
          font-weight: 600;
          color: #333333;
        }

        #hubspot-form-container .hs-button {
          background-color: #19B776;
          color: white;
          padding: 10px 24px;
          border-radius: 9999px;
          border: none;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }

        #hubspot-form-container .hs-button:hover {
          opacity: 0.95;
        }
      `}</style>
    </>
  );
}
