export type Integration = {
  name: string;
  category: string;
  description: string;
  logo: string;
};

export const INTEGRATION_CATEGORIES = [
  "Accounting",
  "ERP",
  "Cloud Storage",
  "Ticketing",
  "Communication",
  "Workforce & Time Tracking",
  "Analytics & BI",
  "Productivity",
  "IoT & Sensors",
  "Developer & Custom",
] as const;

export const INTEGRATIONS: Integration[] = [
  // Accounting
  {
    name: "QuickBooks",
    category: "Accounting",
    description: "Sync invoices, payments, and customer data directly with QuickBooks Online and Desktop.",
    logo: "/images/integrations/quickbooks.svg",
  },
  {
    name: "Sage",
    category: "Accounting",
    description: "Two-way integration with Sage 50, Sage 300, and Sage Intacct for seamless revenue recognition.",
    logo: "/images/integrations/sage.svg",
  },
  {
    name: "Xero",
    category: "Accounting",
    description: "Automated invoice sync and payment tracking with Xero cloud accounting.",
    logo: "/images/integrations/xero.svg",
  },
  {
    name: "NetSuite",
    category: "Accounting",
    description: "Centralize financials, inventory, and operations with NetSuite's powerful ERP capabilities tailored for oilfield businesses.",
    logo: "/images/integrations/netsuite.svg",
  },

  // ERP
  {
    name: "SAP",
    category: "ERP",
    description: "Enterprise integration with SAP S/4HANA for asset management, procurement, and financial consolidation.",
    logo: "/images/integrations/sap.svg",
  },
  {
    name: "Oracle",
    category: "ERP",
    description: "Connect OpsFlo with Oracle ERP Cloud and JD Edwards for unified operations and finance.",
    logo: "/images/integrations/oracle.svg",
  },
  {
    name: "Microsoft Dynamics 365",
    category: "ERP",
    description: "Bi-directional sync with Dynamics 365 Finance, Supply Chain, and Field Service modules.",
    logo: "/images/integrations/dynamics365.svg",
  },
  {
    name: "Salesforce",
    category: "ERP",
    description: "Sync customer data, opportunities, and service records with Salesforce CRM.",
    logo: "/images/integrations/salesforce.svg",
  },

  // Cloud Storage
  {
    name: "AWS S3",
    category: "Cloud Storage",
    description: "Efficient data storage and retrieval. Store, access, and manage large volumes of oilfield data securely with AWS S3 integration.",
    logo: "/images/integrations/awss3.svg",
  },
  {
    name: "Azure Blob Storage",
    category: "Cloud Storage",
    description: "Scalable cloud storage. Leverage Azure for flexible and reliable storage, ensuring your critical operational data is always accessible.",
    logo: "/images/integrations/azureblobstorage.svg",
  },
  {
    name: "Box",
    category: "Cloud Storage",
    description: "Simplified document collaboration. Integrate Box to organize, share, and manage essential oilfield records with secure cloud storage.",
    logo: "/images/integrations/box.svg",
  },
  {
    name: "Dropbox",
    category: "Cloud Storage",
    description: "Centralized file management. Easily sync and access project files from anywhere, keeping your teams connected and organized.",
    logo: "/images/integrations/dropbox.svg",
  },
  {
    name: "Egnyte",
    category: "Cloud Storage",
    description: "Scalable, enterprise-level document management and collaboration with Egnyte's powerful cloud-based solutions.",
    logo: "/images/integrations/egnyte.svg",
  },
  {
    name: "FTP/SFTP",
    category: "Cloud Storage",
    description: "Reliable file transfers. Integrate FTP/SFTP for secure, automated data transfers between systems to maintain data accuracy.",
    logo: "/images/integrations/ftpsftp.svg",
  },

  // Ticketing
  {
    name: "OpenInvoice",
    category: "Ticketing",
    description: "Submit and track field tickets through the OpenInvoice network used by major operators.",
    logo: "/images/integrations/openinvoice.svg",
  },
  {
    name: "OpenTicket",
    category: "Ticketing",
    description: "Digital field ticket submission and approval through the OpenTicket platform.",
    logo: "/images/integrations/openticket.svg",
  },
  {
    name: "GeoOp",
    category: "Ticketing",
    description: "Simplified job management. Enhance field work efficiency with GeoOp's job scheduling, task assignment, and tracking capabilities.",
    logo: "/images/integrations/geoop.svg",
  },

  // Communication
  {
    name: "Microsoft Teams",
    category: "Communication",
    description: "Automated notifications, alerts, and status updates delivered to Teams channels.",
    logo: "/images/integrations/microsoftteams.svg",
  },
  {
    name: "Slack",
    category: "Communication",
    description: "Real-time operational alerts and escalation notifications in Slack channels.",
    logo: "/images/integrations/slack.svg",
  },
  {
    name: "Twilio",
    category: "Communication",
    description: "Enhanced communication tools. Automate and personalize communication workflows with Twilio's messaging and call services.",
    logo: "/images/integrations/twilio.svg",
  },

  // Workforce & Time Tracking
  {
    name: "EasyClocking",
    category: "Workforce & Time Tracking",
    description: "Accurate time tracking. Streamline workforce time and attendance tracking with EasyClocking integration for precise job costing.",
    logo: "/images/integrations/easyclocking.svg",
  },
  {
    name: "Paycom",
    category: "Workforce & Time Tracking",
    description: "Comprehensive payroll solutions. Simplify payroll and workforce management with Paycom's robust and user-friendly features.",
    logo: "/images/integrations/paycom.svg",
  },

  // Analytics & BI
  {
    name: "Power BI",
    category: "Analytics & BI",
    description: "Data-driven insights. Visualize and analyze your data with Power BI's interactive dashboards for smarter business decisions.",
    logo: "/images/integrations/powerbi.svg",
  },
  {
    name: "Google BigQuery",
    category: "Analytics & BI",
    description: "Advanced data analytics. Analyze massive datasets with Google BigQuery to discover actionable insights to improve operations.",
    logo: "/images/integrations/googlebigquery.svg",
  },
  {
    name: "SQL Server",
    category: "Analytics & BI",
    description: "Robust database management. Ensure reliable and scalable database performance with SQL Server integration.",
    logo: "/images/integrations/sqlserver.svg",
  },

  // Productivity
  {
    name: "Google Workspace",
    category: "Productivity",
    description: "Connected team collaboration. Enable seamless communication and productivity with Google Workspace's suite of tools.",
    logo: "/images/integrations/googleworkspace.svg",
  },
  {
    name: "Microsoft 365",
    category: "Productivity",
    description: "Enhanced productivity tools. Streamline workflows with Microsoft 365's powerful suite of applications.",
    logo: "/images/integrations/microsoft365.svg",
  },
  {
    name: "Monday.com",
    category: "Productivity",
    description: "Dynamic work management. Optimize task planning and project management with Monday.com's intuitive dashboards.",
    logo: "/images/integrations/mondaycom.svg",
  },

  // IoT & Sensors
  {
    name: "SCADA Systems",
    category: "IoT & Sensors",
    description: "Ingest sensor data from SCADA and IoT platforms to power predictive maintenance models.",
    logo: "/images/integrations/scada.svg",
  },
  {
    name: "Samsara",
    category: "IoT & Sensors",
    description: "Advanced fleet management. Monitor and optimize fleet performance in real-time tracking and insights with Samsara's IoT-driven solutions.",
    logo: "/images/integrations/samsara.svg",
  },

  // Developer & Custom
  {
    name: "REST APIs",
    category: "Developer & Custom",
    description: "Customizable connectivity. Leverage REST APIs to integrate OpsFlo with any third-party application.",
    logo: "/images/integrations/restapis.svg",
  },
  {
    name: "Custom",
    category: "Developer & Custom",
    description: "Connect OpsFlo with your specialized tools and systems, ensuring a seamless exchange of data and workflows.",
    logo: "/images/integrations/custom.svg",
  },
];

