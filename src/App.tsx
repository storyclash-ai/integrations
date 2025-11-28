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
import KlarKopiePage from './pages/KlarKopiePage';
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
        <Route path="/" element={<IntegrationsPage />} />
        <Route path="/power-bi" element={<PowerBIPage />} />
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
        <Route path="/klarkopie" element={<KlarKopiePage />} />
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
