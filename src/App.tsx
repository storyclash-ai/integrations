import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PowerBIPage from './pages/PowerBIPage';
import CloudflarePage from './pages/CloudflarePage';
import ShopifyPage from './pages/ShopifyPage';
import ShopwarePage from './pages/ShopwarePage';
import WooCommercePage from './pages/WooCommercePage';
import AdobeCommercePage from './pages/AdobeCommercePage';
import BigCommercePage from './pages/BigCommercePage';
import MagentoPage from './pages/MagentoPage';
import WixPage from './pages/WixPage';
import SquarespacePage from './pages/SquarespacePage';
import PrestaShopPage from './pages/PrestaShopPage';
import LightspeedPage from './pages/LightspeedPage';
import SAPCommercePage from './pages/SAPCommercePage';
import SprykerPage from './pages/SprykerPage';
import CommercetoolsPage from './pages/CommercetoolsPage';
import TableauPage from './pages/TableauPage';
import GoogleAnalyticsPage from './pages/GoogleAnalyticsPage';
import GoogleSheetsPage from './pages/GoogleSheetsPage';
import MicrosoftExcelPage from './pages/MicrosoftExcelPage';
import MatomoPage from './pages/MatomoPage';
import KlipfolioPage from './pages/KlipfolioPage';
import MetabasePage from './pages/MetabasePage';
import GrafanaPage from './pages/GrafanaPage';
import LookerStudioPage from './pages/LookerStudioPage';
import SnowflakePage from './pages/SnowflakePage';
import HubSpotPage from './pages/HubSpotPage';
import BigQueryPage from './pages/BigQueryPage';
import TealiumPage from './pages/TealiumPage';
import SegmentPage from './pages/SegmentPage';
import SupermetricsPage from './pages/SupermetricsPage';
import KlarPage from './pages/KlarPage';
import TripleWhalePage from './pages/TripleWhalePage';
import NorthbeamPage from './pages/NorthbeamPage';
import SalesforcePage from './pages/SalesforcePage';
import KlaviyoPage from './pages/KlaviyoPage';
import MailchimpPage from './pages/MailchimpPage';
import GoogleAdsPage from './pages/GoogleAdsPage';
import IntegrationsPage from './pages/IntegrationsPage';
import TestPage from './pages/TestPage';
import TestPage2 from './pages/TestPage2';

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
        <Route path="/integrations/Adobe-Commerce-influencer-marketing" element={<AdobeCommercePage />} />
        <Route path="/integrations/bigcommerce-influencer-marketing" element={<BigCommercePage />} />
        <Route path="/integrations/magento-influencer-marketing" element={<MagentoPage />} />
        <Route path="/integrations/wix-ecommerce-influencer-marketing" element={<WixPage />} />
        <Route path="/integrations/squarespace-commerce-influencer-marketing" element={<SquarespacePage />} />
        <Route path="/integrations/prestashop-influencer-marketing" element={<PrestaShopPage />} />
        <Route path="/integrations/lightspeed-influencer-marketing" element={<LightspeedPage />} />
        <Route path="/integrations/sap-commerce-cloud-influencer-marketing" element={<SAPCommercePage />} />
        <Route path="/integrations/spryker-influencer-marketing" element={<SprykerPage />} />
        <Route path="/integrations/commercetools-influencer-marketing" element={<CommercetoolsPage />} />
        <Route path="/integrations/tableau-influencer-marketing" element={<TableauPage />} />
        <Route path="/integrations/google-analytics-influencer-marketing" element={<GoogleAnalyticsPage />} />
        <Route path="/integrations/google-sheets-influencer-marketing" element={<GoogleSheetsPage />} />
        <Route path="/integrations/excel-influencer-marketing" element={<MicrosoftExcelPage />} />
        <Route path="/integrations/matomo-influencer-marketing" element={<MatomoPage />} />
        <Route path="/integrations/klipfolio-influencer-marketing" element={<KlipfolioPage />} />
        <Route path="/integrations/metabase-influencer-marketing" element={<MetabasePage />} />
        <Route path="/integrations/grafana-influencer-marketing" element={<GrafanaPage />} />
        <Route path="/integrations/looker-studio-influencer-marketing" element={<LookerStudioPage />} />
        <Route path="/integrations/snowflake-influencer-marketing" element={<SnowflakePage />} />
        <Route path="/integrations/hubspot-influencer-marketing" element={<HubSpotPage />} />
        <Route path="/integrations/bigquery-influencer-marketing" element={<BigQueryPage />} />
        <Route path="/integrations/tealium-influencer-marketing" element={<TealiumPage />} />
        <Route path="/integrations/segment-influencer-marketing" element={<SegmentPage />} />
        <Route path="/integrations/supermetrics-influencer-marketing" element={<SupermetricsPage />} />
        <Route path="/integrations/klar-influencer-marketing" element={<KlarPage />} />
        <Route path="/integrations/triple-whale-influencer-marketing" element={<TripleWhalePage />} />
        <Route path="/integrations/northbeam-influencer-marketing" element={<NorthbeamPage />} />
        <Route path="/integrations/salesforce-influencer-marketing" element={<SalesforcePage />} />
        <Route path="/integrations/klaviyo-influencer-marketing" element={<KlaviyoPage />} />
        <Route path="/integrations/mailchimp-influencer-marketing" element={<MailchimpPage />} />
        <Route path="/integrations/google-ads-influencer-marketing" element={<GoogleAdsPage />} />
        <Route path="/cloudflare" element={<CloudflarePage />} />
        <Route path="/shopify" element={<ShopifyPage />} />
        <Route path="/shopware" element={<ShopwarePage />} />
        <Route path="/woocommerce" element={<WooCommercePage />} />
        <Route path="/adobe-commerce" element={<AdobeCommercePage />} />
        <Route path="/bigcommerce" element={<BigCommercePage />} />
        <Route path="/magento" element={<MagentoPage />} />
        <Route path="/wix" element={<WixPage />} />
        <Route path="/squarespace" element={<SquarespacePage />} />
        <Route path="/prestashop" element={<PrestaShopPage />} />
        <Route path="/lightspeed" element={<LightspeedPage />} />
        <Route path="/sap-commerce" element={<SAPCommercePage />} />
        <Route path="/spryker" element={<SprykerPage />} />
        <Route path="/commercetools" element={<CommercetoolsPage />} />
        <Route path="/tableau" element={<TableauPage />} />
        <Route path="/google-analytics" element={<GoogleAnalyticsPage />} />
        <Route path="/google-sheets" element={<GoogleSheetsPage />} />
        <Route path="/excel" element={<MicrosoftExcelPage />} />
        <Route path="/matomo" element={<MatomoPage />} />
        <Route path="/klipfolio" element={<KlipfolioPage />} />
        <Route path="/metabase" element={<MetabasePage />} />
        <Route path="/grafana" element={<GrafanaPage />} />
        <Route path="/looker-studio" element={<LookerStudioPage />} />
        <Route path="/snowflake" element={<SnowflakePage />} />
        <Route path="/hubspot" element={<HubSpotPage />} />
        <Route path="/bigquery" element={<BigQueryPage />} />
        <Route path="/tealium" element={<TealiumPage />} />
        <Route path="/segment" element={<SegmentPage />} />
        <Route path="/supermetrics" element={<SupermetricsPage />} />
        <Route path="/klar" element={<KlarPage />} />
        <Route path="/triple-whale" element={<TripleWhalePage />} />
        <Route path="/northbeam" element={<NorthbeamPage />} />
        <Route path="/salesforce" element={<SalesforcePage />} />
        <Route path="/klaviyo" element={<KlaviyoPage />} />
        <Route path="/mailchimp" element={<MailchimpPage />} />
        <Route path="/google-ads" element={<GoogleAdsPage />} />
        <Route path="/integrations/test" element={<TestPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/integrations/test2" element={<TestPage2 />} />
        <Route path="/test2" element={<TestPage2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
