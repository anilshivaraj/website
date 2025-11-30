# Salesforce Health Dashboard

A comprehensive web application for monitoring Salesforce organization metrics, built with Express.js and EJS templating. The dashboard provides a complete System Overview similar to Salesforce Setup, along with detailed performance metrics, health monitoring, and analytics.

## 🚀 Features

### **System Overview**
The dashboard includes comprehensive org landscape metrics similar to Salesforce Setup > System Overview:

- **Organization Information**: Org details (Name, ID, Edition, Instance, Environment, Creation Date)
- **User Summary**: Active, inactive, and frozen user counts with license utilization
- **Sandbox Availability**: Available sandboxes by type (Developer, Developer Pro, Partial Copy, Full Copy)
- **Permission Sets & Profiles**: Total permission sets, assignments, and profile distribution
- **Deployment Status**: Last deployment information, deployed by, and pending changes
- **Feature Licenses**: Visual breakdown of assigned vs. available licenses for Marketing Cloud, Sales Cloud, Service Cloud, CPQ, Chatter, Knowledge, and Communities
- **Connected Apps & Integrations**: OAuth apps, SAML apps, and Named Credentials counts
- **Email Deliverability**: Access level, bounce rate, and daily email usage
- **Platform Cache**: Org cache and session cache allocation and usage
- **Sharing Settings**: Object-level internal and external access configuration

### **Performance Metrics**
Detailed technical and operational metrics:

- **Flow Analytics**: Screen Flows, Auto-launched Flows, Triggered Flows with visual charts
- **Apex Statistics**: Invocable classes, Controllers, Test classes, Batch/Queueable classes
- **Org Health Monitoring**: 
  - Code coverage percentage
  - SOQL and DML governor limit usage
  - Storage usage metrics
- **License Tracking**: Salesforce, Platform, and Integration license usage
- **API Usage**: Daily API calls vs. limit with visual indicators
- **Security Health Check**: Overall org security score with status badges
- **Storage Analytics**: Data storage and file storage usage with available capacity
- **Automation Components**: Count of Workflows, Process Builders, Flows, and Triggers
- **Custom Metadata**: Custom objects, fields, validation rules, and custom settings

### **Additional Features**
- **Contact Page**: Contact information and inquiry forms
- **Responsive Design**: Mobile-friendly interface with modern CSS and color-coded visualizations
- **Interactive Charts**: Powered by Chart.js for doughnut charts, bar charts, and progress indicators

## 🛠️ Technology Stack

- **Backend**: Node.js with Express.js
- **Template Engine**: EJS (Embedded JavaScript)
- **Styling**: Custom CSS with inline styles for System Overview components
- **Charts**: Chart.js for data visualization
- **Development Tool**: Nodemon for auto-reloading

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anilshivaraj/website.git
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🎯 Running the Application

### Production Mode
```bash
npm start
```

### Development Mode (with auto-reload)
```bash
npm run dev
```

The server will start on `http://localhost:3000` by default.

## 📁 Project Structure

```
website/
├── public/              # Static assets
│   ├── css/            # Stylesheets
│   │   └── style.css
│   └── js/             # Client-side JavaScript
│       └── main.js
├── views/              # EJS templates
│   ├── partials/       # Reusable components
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── dashboard.ejs   # Main dashboard page with System Overview
│   ├── menu.ejs        # Menu page
│   ├── contact.ejs     # Contact page
│   └── index.ejs       # Home page
├── server.js           # Express server configuration
├── package.json        # Project dependencies
└── README.md          # Project documentation
```

## 🌐 Available Routes

- **`/`** - Main dashboard with comprehensive Salesforce org metrics
- **`/menu`** - Additional menu/navigation page
- **`/contact`** - Contact information page

## 📊 Dashboard Sections

### System Overview Section
Provides a high-level view of the Salesforce org landscape:

1. **Organization Information** - Org metadata and environment details
2. **User Summary** - User license utilization and status breakdown
3. **Sandbox Availability** - Available sandboxes by type with visual progress bars
4. **Permission Sets & Profiles** - Security configuration overview
5. **Deployment Status** - Latest deployment information and pending changes
6. **Feature Licenses** - Stacked bar chart showing license utilization across features
7. **Connected Apps** - Integration points and OAuth/SAML app counts
8. **Email Deliverability** - Email configuration and usage metrics
9. **Platform Cache** - Cache allocation and utilization
10. **Sharing Settings** - Object-level sharing configuration table

### Performance Metrics Section
Technical metrics for org performance and health:

1. **Flows Overview** - Doughnut chart breakdown by flow type
2. **Apex Classes** - Doughnut chart breakdown by class type
3. **Org Health** - Code coverage and governor limit usage
4. **License Usage** - Stacked bar chart for user licenses
5. **API Usage** - Gauge chart showing daily API consumption
6. **Security Health Check** - Security score with status indicators
7. **Data Storage** - Stacked bar chart for data and file storage
8. **Automation Components** - Horizontal bar chart for automation tools
9. **Custom Metadata** - Grid view of custom metadata counts

## 🔍 Data Structure

The dashboard currently uses dummy data for demonstration purposes. The data structure in `server.js` includes:

- `orgInfo` - Organization metadata
- `users` - User counts and license info
- `featureLicenses` - Feature license allocation
- `permissionSets` - Permission set statistics
- `profiles` - Profile distribution
- `sandboxes` - Sandbox availability by type
- `connectedApps` - Connected app counts
- `namedCredentials` - Named credential counts
- `deployment` - Deployment status and history
- `emailDeliverability` - Email configuration and metrics
- `platformCache` - Cache usage statistics
- `sharingSettings` - Object-level sharing configuration
- `flows`, `apex`, `health`, `licenses`, `apiUsage`, `securityScore`, `dataStorage`, `automation`, `customMetadata` - Performance metrics

## 🔮 Future Enhancements

- **Salesforce API Integration**: Connect to real Salesforce API for live data retrieval
- **User Authentication**: Secure login and role-based access control
- **Data Filtering**: Implement date range selection and custom filters
- **Export Functionality**: Add PDF/Excel export for reports
- **Historical Tracking**: Store and display metric trends over time
- **Real-time Updates**: WebSocket integration for live data updates
- **Alerting System**: Configurable alerts for threshold breaches
- **Multi-org Support**: Switch between multiple Salesforce orgs
- **Custom Dashboards**: User-defined dashboard layouts and widgets
- **API Integration**: REST API endpoints for programmatic access

## 👨‍💻 Author

Anil Shivaraj

## 📝 License

ISC

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

For any questions or feedback, please use the contact page or reach out through GitHub.

---

**Note**: This dashboard currently uses dummy data for demonstration purposes. To connect to a real Salesforce org, you would need to integrate the Salesforce API using JSForce or similar libraries and implement OAuth authentication.
