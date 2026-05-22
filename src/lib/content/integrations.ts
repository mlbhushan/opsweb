export type Integration = {
  name: string;
  category: string;
  description: string;
  logo: string;
};

export const INTEGRATION_CATEGORIES = [
  "Accounting",
  "ERP",
  "Communication & Notifications",
  "Cloud Storage & Document Management",
  "Productivity & Collaboration",
  "Data Analytics & Business Intelligence",
  "IoT & Fleet",
  "Workforce & HR",
  "Developer & Custom",
] as const;

// Sorted A-Z by tool name
export const INTEGRATIONS: Integration[] = [
  {
    name: "Acumatica",
    category: "ERP",
    description: "Cloud ERP integration for seamless financials, inventory, and operations management.",
    logo: "/images/integrations/acumatica.png",
  },
  {
    name: "AWS S3",
    category: "Cloud Storage & Document Management",
    description: "Store, access, and manage large volumes of operational data securely with AWS S3.",
    logo: "/images/integrations/awss3.png",
  },
  {
    name: "Azure Blob Storage",
    category: "Cloud Storage & Document Management",
    description: "Leverage Azure for flexible and reliable cloud storage of critical operational data.",
    logo: "/images/integrations/azurestorage.png",
  },
  {
    name: "Box",
    category: "Cloud Storage & Document Management",
    description: "Organize, share, and manage essential records with Box's secure cloud storage.",
    logo: "/images/integrations/box.png",
  },

  {
    name: "Dropbox",
    category: "Cloud Storage & Document Management",
    description: "Easily sync and access project files from anywhere, keeping your teams organized.",
    logo: "/images/integrations/dropbox.png",
  },
  {
    name: "EasyClocking",
    category: "Workforce & HR",
    description: "Streamline workforce time and attendance tracking for precise job costing.",
    logo: "/images/integrations/easyclocking.png",
  },
  {
    name: "Egnyte",
    category: "Cloud Storage & Document Management",
    description: "Enterprise-level document management and collaboration with Egnyte's cloud solutions.",
    logo: "/images/integrations/egnyte.png",
  },
  {
    name: "FTP / SFTP",
    category: "Cloud Storage & Document Management",
    description: "Secure, automated data transfers between systems to maintain data accuracy.",
    logo: "/images/integrations/ftp.png",
  },
  {
    name: "GeoOp",
    category: "Productivity & Collaboration",
    description: "Enhance field work efficiency with GeoOp's job scheduling and task tracking capabilities.",
    logo: "/images/integrations/geoop.png",
  },
  {
    name: "Google BigQuery",
    category: "Data Analytics & Business Intelligence",
    description: "Analyze massive datasets with Google BigQuery to discover actionable insights.",
    logo: "/images/integrations/googlebigquery.png",
  },
  {
    name: "Google Workspace",
    category: "Productivity & Collaboration",
    description: "Enable seamless communication and productivity with Google Workspace's suite of tools.",
    logo: "/images/integrations/googleworkspace.png",
  },
  {
    name: "Microsoft 365",
    category: "Productivity & Collaboration",
    description: "Streamline workflows with Microsoft 365's powerful suite of applications.",
    logo: "/images/integrations/microsoft365.png",
  },
  {
    name: "Monday.com",
    category: "Productivity & Collaboration",
    description: "Optimize task planning and project management with Monday.com's intuitive dashboards.",
    logo: "/images/integrations/mondaycom.svg",
  },
  {
    name: "NetSuite",
    category: "ERP",
    description: "Centralize financials, inventory, and operations with NetSuite's powerful ERP capabilities.",
    logo: "/images/integrations/netsuite.svg",
  },
  {
    name: "Paycom",
    category: "Workforce & HR",
    description: "Simplify payroll and workforce management with Paycom's robust features.",
    logo: "/images/integrations/paycom.png",
  },
  {
    name: "Power BI",
    category: "Data Analytics & Business Intelligence",
    description: "Visualize and analyze your data with Power BI's interactive dashboards.",
    logo: "/images/integrations/powerbi.png",
  },
  {
    name: "QuickBooks",
    category: "Accounting",
    description: "Sync invoices, payments, and customer data directly with QuickBooks Online and Desktop.",
    logo: "/images/integrations/quickbooks.png",
  },
  {
    name: "REST APIs",
    category: "Developer & Custom",
    description: "Leverage REST APIs to integrate OpsFlo with any third-party application.",
    logo: "/images/integrations/restapi.png",
  },
  {
    name: "Samsara",
    category: "IoT & Fleet",
    description: "Monitor and optimize fleet performance in real-time with Samsara's IoT-driven solutions.",
    logo: "/images/integrations/samsara.png",
  },
  {
    name: "SendGrid",
    category: "Communication & Notifications",
    description: "Automated email delivery for notifications, alerts, and customer communications.",
    logo: "/images/integrations/sendgrid.png",
  },
  {
    name: "SQL Server",
    category: "Data Analytics & Business Intelligence",
    description: "Ensure reliable and scalable database performance with SQL Server integration.",
    logo: "/images/integrations/sqlserver.png",
  },
  {
    name: "Twilio",
    category: "Communication & Notifications",
    description: "Automate and personalize communication workflows with Twilio's messaging and call services.",
    logo: "/images/integrations/twilio.png",
  },
  {
    name: "Webhooks",
    category: "Developer & Custom",
    description: "Trigger real-time events and automate workflows between OpsFlo and external platforms.",
    logo: "/images/integrations/webhooks.png",
  },
  {
    name: "Zoho Analytics BI",
    category: "Data Analytics & Business Intelligence",
    description: "Visualize and analyze operational data with Zoho Analytics for smarter business decisions.",
    logo: "/images/integrations/zoho.png",
  },
  {
    name: "Custom Integrations",
    category: "Developer & Custom",
    description: "Connect OpsFlo with your specialized tools and systems for seamless data exchange.",
    logo: "/images/integrations/custom.png",
  },
];
