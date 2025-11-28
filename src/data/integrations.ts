export interface Integration {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  logo?: string;
}

export const integrations: Integration[] = [
  {id:'1',name:'Shopify',slug:'/shopify',category:'E-Commerce',description:'Connect creator campaigns to Shopify sales data for complete revenue attribution and product performance tracking.',logo:'/logos/Shopify.svg'},
  {id:'2',name:'WooCommerce',slug:'/woocommerce',category:'E-Commerce',description:'Track influencer-driven conversions and revenue directly within your WooCommerce store analytics.',logo:'/logos/WooCommerce.svg'},
  {id:'3',name:'Adobe Commerce',slug:'/adobe-commerce',category:'E-Commerce',description:'Integrate creator performance metrics with Adobe Commerce for enterprise-grade attribution reporting.',logo:'/logos/Adobe_Corporate_logo.svg'},
  {id:'4',name:'Shopware',slug:'/shopware',category:'E-Commerce',description:'Sync influencer campaign data with Shopware to measure creator impact on product sales and customer acquisition.',logo:'/logos/shopware.png'},
  {id:'5',name:'BigCommerce',slug:'/bigcommerce',category:'E-Commerce',description:'Measure creator-driven revenue and conversions with native BigCommerce integration for performance analytics.',logo:'/logos/BigCommerce.svg'},
  {id:'6',name:'Magento',slug:'/magento',category:'E-Commerce',description:'Connect influencer marketing campaigns to Magento sales data for accurate attribution and ROI tracking.',logo:'/logos/Magento.svg'},
  {id:'7',name:'Wix eCommerce',slug:'/wix',category:'E-Commerce',description:'Track creator performance and product sales directly within your Wix eCommerce dashboard.',logo:'/logos/Wix.png'},
  {id:'8',name:'Squarespace Commerce',slug:'/squarespace',category:'E-Commerce',description:'Integrate creator campaigns with Squarespace Commerce to measure influencer impact on online sales.',logo:'/logos/Squarespace.svg'},
  {id:'9',name:'PrestaShop',slug:'/prestashop',category:'E-Commerce',description:'Sync influencer data with PrestaShop to track creator-driven conversions and revenue attribution.',logo:'/logos/PrestaShop.svg.png'},
  {id:'10',name:'Lightspeed eCom',slug:'/lightspeed',category:'E-Commerce',description:'Track influencer-driven sales in Lightspeed eCom with accurate revenue attribution and ROI metrics.',logo:'/logos/Lightspeed.svg'},
  {id:'11',name:'SAP Commerce Cloud',slug:'/sap-commerce',category:'E-Commerce',description:'Enterprise-grade integration for global brands tracking creator ROI across SAP Commerce platforms.',logo:'/logos/SAP.png'},
  {id:'12',name:'Spryker',slug:'/spryker',category:'E-Commerce',description:'Composable commerce integration with flexible influencer attribution for B2B and B2C Spryker platforms.',logo:'/logos/Spryker.svg'},
  {id:'13',name:'commercetools',slug:'/commercetools',category:'E-Commerce',description:'Headless commerce integration with API-first influencer attribution across any frontend experience.',logo:'/logos/commercetools.svg'},
  {id:'14',name:'Power BI',slug:'/power-bi',category:'Visualization & Analytics',description:'Build custom creator performance dashboards in Power BI with automated data sync and refresh.',logo:'/logos/Power_BI.svg'},
  {id:'15',name:'Looker Studio',slug:'/looker-studio',category:'Visualization & Analytics',description:'Visualize influencer campaign metrics in Looker Studio with real-time data connectors.',logo:'/logos/Looker_Logo.svg'},
  {id:'16',name:'Tableau',slug:'/tableau',category:'Visualization & Analytics',description:'Connect creator data to Tableau for advanced analytics and interactive performance dashboards.',logo:'/logos/Tableau.png'},
  {id:'17',name:'Google Analytics',slug:'/google-analytics',category:'Visualization & Analytics',description:'Track influencer traffic, conversions, and user behavior with native Google Analytics integration.',logo:'/logos/Google_Analytics.svg'},
  // {id:'18',name:'Google Sheets',slug:'/google-sheets',category:'Visualization & Analytics',description:'Export creator data to Google Sheets for flexible reporting, team collaboration, and custom analysis.',logo:'/logos/Google_Sheets.svg.png'},
  // {id:'19',name:'Microsoft Excel',slug:'/excel',category:'Visualization & Analytics',description:'Export creator data to Excel for offline analysis, advanced modeling, and financial reporting.',logo:'/logos/Microsoft_Excel.svg.png'},
  {id:'20',name:'Matomo',slug:'/matomo',category:'Visualization & Analytics',description:'Privacy-focused analytics integration for tracking creator-driven website traffic and conversions.',logo:'/logos/Matomo.svg.png'},
  {id:'21',name:'Klipfolio',slug:'/klipfolio',category:'Visualization & Analytics',description:'Build real-time creator performance dashboards with Klipfolio for executive reporting.',logo:'/logos/Klipfolio.svg'},
  {id:'22',name:'Metabase',slug:'/metabase',category:'Visualization & Analytics',description:'Open-source analytics platform integration for self-service creator data exploration.',logo:'/logos/Metabase.svg'},
  // {id:'23',name:'Grafana',slug:'/grafana',category:'Visualization & Analytics',description:'Monitor creator campaign metrics in real-time with Grafana observability dashboards.',logo:'/logos/Grafana.svg.png'},
  {id:'24',name:'BigQuery',slug:'/bigquery',category:'Data Infrastructure',description:'Warehouse creator data in Google BigQuery for SQL-based analytics and ML model training.',logo:'/logos/BigQuery.png'},
  {id:'25',name:'Snowflake',slug:'/snowflake',category:'Data Infrastructure',description:'Sync standardized creator data to Snowflake for enterprise data modeling and governance.',logo:'/logos/Snowflake.svg'},
  // {id:'26',name:'Segment',slug:'/segment',category:'Data Infrastructure',description:'Send creator engagement events to Segment CDP for unified customer data pipelines.',logo:'/logos/Segment.svg'},
  // {id:'27',name:'Tealium',slug:'/tealium',category:'Data Infrastructure',description:'Route influencer campaign data through Tealium for tag management and audience orchestration.',logo:'/logos/Tealium.svg.png'},
  {id:'28',name:'Supermetrics',slug:'/supermetrics',category:'Data Infrastructure',description:'Combine creator metrics with other marketing data using Supermetrics data integration platform.',logo:'/logos/Supermetrics.svg'},
  {id:'29',name:'Klar',slug:'/klar',category:'Attribution & Marketing',description:'Unified marketing measurement platform connecting creator performance to full-funnel attribution.',logo:'/logos/Klar.svg'},
  {id:'30',name:'Triple Whale',slug:'/triple-whale',category:'Attribution & Marketing',description:'E-commerce attribution tool integrating influencer campaigns with multi-touch attribution models.',logo:'/logos/TripleWhale.svg'},
  {id:'31',name:'Northbeam',slug:'/northbeam',category:'Attribution & Marketing',description:'Advanced attribution platform for measuring creator impact across paid and organic channels.',logo:'/logos/Northbeam.svg'},
  // Temporarily hidden - not part of current launch scope
  // {id:'32',name:'HubSpot',slug:'/integrations/hubspot-influencer-marketing',category:'Attribution & Marketing',description:'Sync creator campaign data with HubSpot CRM workflows for lead nurturing and attribution.',logo:'/logos/HubSpot.svg'},
  // {id:'33',name:'Salesforce',slug:'/integrations/salesforce-influencer-marketing',category:'Attribution & Marketing',description:'Enterprise CRM integration connecting influencer campaigns to sales pipeline and revenue.',logo:'/logos/Salesforce.svg'},
  // {id:'34',name:'Klaviyo',slug:'/integrations/klaviyo-influencer-marketing',category:'Attribution & Marketing',description:'Connect creator engagement data to Klaviyo for personalized email campaigns and segmentation.',logo:'/logos/Klaviyo.svg'},
  // {id:'35',name:'Mailchimp',slug:'/integrations/mailchimp-influencer-marketing',category:'Attribution & Marketing',description:'Sync influencer audience data with Mailchimp for targeted email marketing campaigns.',logo:'/logos/Mailchimp.svg'},
  // {id:'36',name:'Google Ads',slug:'/integrations/google-ads-influencer-marketing',category:'Attribution & Marketing',description:'Attribute creator performance to Google Ads conversions for unified paid media optimization.',logo:'/logos/Google_Ads.svg'},
  // {id:'37',name:'Meta Ads',slug:'/integrations/meta-ads-influencer-marketing',category:'Attribution & Marketing',description:'Connect influencer campaigns to Facebook and Instagram Ads for cross-channel attribution.',logo:'/logos/Instagram.svg'},
  // {id:'38',name:'Cloudflare',slug:'/integrations/cloudflare-influencer-marketing',category:'Data Infrastructure',description:'Secure and accelerate creator campaign delivery with Cloudflare edge network integration.',logo:'/logos/cloudflare.svg'},
  // {id:'39',name:'TikTok',slug:'/integrations/tiktok-influencer-marketing',category:'Attribution & Marketing',description:'Native TikTok integration for tracking creator content performance and audience engagement.',logo:'/logos/TikTok.svg'},
  // {id:'40',name:'Instagram',slug:'/integrations/instagram-influencer-marketing',category:'Attribution & Marketing',description:'Direct Instagram API integration for monitoring creator posts, stories, and engagement metrics.',logo:'/logos/Instagram.svg'},
  // {id:'41',name:'YouTube',slug:'/integrations/youtube-influencer-marketing',category:'Attribution & Marketing',description:'Track YouTube creator video performance, views, and audience demographics automatically.',logo:'/logos/YouTube.svg'},
  // {id:'42',name:'Snapchat',slug:'/integrations/snapchat-influencer-marketing',category:'Attribution & Marketing',description:'Monitor Snapchat creator stories and audience reach with native API integration.',logo:'/logos/Snapchat.svg'},
  // {id:'43',name:'Microsoft 365',slug:'/integrations/microsoft-365-influencer-marketing',category:'Data Infrastructure',description:'Export creator reports to Microsoft 365 apps for team collaboration and workflow automation.',logo:'/logos/Microsoft365.svg'},
  // {id:'44',name:'Gmail',slug:'/integrations/gmail-influencer-marketing',category:'Data Infrastructure',description:'Send automated creator performance reports via Gmail for stakeholder communication.',logo:'/logos/Gmail.svg'},
  // {id:'45',name:'Slack',slug:'/integrations/slack-influencer-marketing',category:'Data Infrastructure',description:'Receive real-time creator performance alerts and campaign updates in Slack channels.',logo:'/logos/Slack.svg'},
  // {id:'46',name:'Notion',slug:'/integrations/notion-influencer-marketing',category:'Data Infrastructure',description:'Sync creator campaign documentation and performance data with Notion workspaces.',logo:'/logos/Notion.svg'},
  // {id:'47',name:'Zapier',slug:'/integrations/zapier-influencer-marketing',category:'Data Infrastructure',description:'Connect Storyclash to 5000+ apps with no-code Zapier automation workflows.',logo:'/logos/Zapier.svg'},
  // {id:'48',name:'Webhooks',slug:'/integrations/webhooks',category:'Data Infrastructure',description:'Real-time event streaming for custom workflows using webhook endpoints.',logo:'/logos/webhooks.svg'},
  // {id:'49',name:'Storyclash API',slug:'/integrations/api-integration',category:'Data Infrastructure',description:'Full programmatic access to creator data with RESTful API endpoints.',logo:'/logos/storyclash.svg'},
  // {id:'50',name:'Custom Integration',slug:'/integrations/custom',category:'Data Infrastructure',description:'Build your own custom integration with dedicated engineering support.'}
];
