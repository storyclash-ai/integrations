import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PowerBIPage from './pages/PowerBIPage';
import CloudflarePage from './pages/CloudflarePage';
import ShopifyPage from './pages/ShopifyPage';
import ShopwarePage from './pages/ShopwarePage';
import WooCommercePage from './pages/WooCommercePage';
import BigCommercePage from './pages/BigCommercePage';
import MagentoPage from './pages/MagentoPage';
import TableauPage from './pages/TableauPage';
import GoogleAnalyticsPage from './pages/GoogleAnalyticsPage';
import LookerStudioPage from './pages/LookerStudioPage';
import SnowflakePage from './pages/SnowflakePage';
import HubSpotPage from './pages/HubSpotPage';
import BigQueryPage from './pages/BigQueryPage';
import SegmentPage from './pages/SegmentPage';
import SalesforcePage from './pages/SalesforcePage';
import KlaviyoPage from './pages/KlaviyoPage';
import MailchimpPage from './pages/MailchimpPage';
import GoogleAdsPage from './pages/GoogleAdsPage';
import IntegrationsPage from './pages/IntegrationsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PowerBIPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/integrations/power-bi-influencer-marketing" element={<PowerBIPage />} />
        <Route path="/integrations/cloudflare-influencer-marketing" element={<CloudflarePage />} />
        <Route path="/integrations/shopify-influencer-marketing" element={<ShopifyPage />} />
        <Route path="/integrations/shopware-influencer-marketing" element={<ShopwarePage />} />
        <Route path="/integrations/woocommerce-influencer-marketing" element={<WooCommercePage />} />
        <Route path="/integrations/bigcommerce-influencer-marketing" element={<BigCommercePage />} />
        <Route path="/integrations/magento-influencer-marketing" element={<MagentoPage />} />
        <Route path="/integrations/tableau-influencer-marketing" element={<TableauPage />} />
        <Route path="/integrations/google-analytics-influencer-marketing" element={<GoogleAnalyticsPage />} />
        <Route path="/integrations/looker-studio-influencer-marketing" element={<LookerStudioPage />} />
        <Route path="/integrations/snowflake-influencer-marketing" element={<SnowflakePage />} />
        <Route path="/integrations/hubspot-influencer-marketing" element={<HubSpotPage />} />
        <Route path="/integrations/bigquery-influencer-marketing" element={<BigQueryPage />} />
        <Route path="/integrations/segment-influencer-marketing" element={<SegmentPage />} />
        <Route path="/integrations/salesforce-influencer-marketing" element={<SalesforcePage />} />
        <Route path="/integrations/klaviyo-influencer-marketing" element={<KlaviyoPage />} />
        <Route path="/integrations/mailchimp-influencer-marketing" element={<MailchimpPage />} />
        <Route path="/integrations/google-ads-influencer-marketing" element={<GoogleAdsPage />} />
        <Route path="/cloudflare" element={<CloudflarePage />} />
        <Route path="/shopify" element={<ShopifyPage />} />
        <Route path="/shopware" element={<ShopwarePage />} />
        <Route path="/woocommerce" element={<WooCommercePage />} />
        <Route path="/bigcommerce" element={<BigCommercePage />} />
        <Route path="/magento" element={<MagentoPage />} />
        <Route path="/tableau" element={<TableauPage />} />
        <Route path="/google-analytics" element={<GoogleAnalyticsPage />} />
        <Route path="/looker-studio" element={<LookerStudioPage />} />
        <Route path="/snowflake" element={<SnowflakePage />} />
        <Route path="/hubspot" element={<HubSpotPage />} />
        <Route path="/bigquery" element={<BigQueryPage />} />
        <Route path="/segment" element={<SegmentPage />} />
        <Route path="/salesforce" element={<SalesforcePage />} />
        <Route path="/klaviyo" element={<KlaviyoPage />} />
        <Route path="/mailchimp" element={<MailchimpPage />} />
        <Route path="/google-ads" element={<GoogleAdsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
