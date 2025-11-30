# Spice of India - Restaurant Website

A responsive web application for an Indian restaurant, built with Express.js and EJS templating. The application includes a comprehensive Salesforce organization metrics dashboard for monitoring system health, automation, and resource usage.

## 🚀 Features

- **Interactive Dashboard**: Real-time visualization of Salesforce org metrics
  - Flow analytics (Screen Flows, Auto-launched, Triggered)
  - Apex class statistics (Controllers, Test classes, Batch classes)
  - Health monitoring (Code coverage, Governor limits, Storage)
  - License tracking (Salesforce, Platform, Integration)
  - API usage monitoring
  - Security score reporting
  - Data and file storage metrics
  - Automation overview (Workflows, Process Builders, Flows, Triggers)
  - Custom metadata statistics

- **Menu Page**: Restaurant menu display
- **Contact Page**: Customer contact information and forms
- **Responsive Design**: Mobile-friendly interface with modern CSS

## 🛠️ Technology Stack

- **Backend**: Node.js with Express.js
- **Template Engine**: EJS (Embedded JavaScript)
- **Styling**: Custom CSS
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
│   ├── dashboard.ejs   # Main dashboard page
│   ├── menu.ejs        # Menu page
│   ├── contact.ejs     # Contact page
│   └── index.ejs       # Home page
├── server.js           # Express server configuration
├── package.json        # Project dependencies
└── README.md          # Project documentation
```

## 🌐 Available Routes

- **`/`** - Main dashboard with Salesforce org metrics
- **`/menu`** - Restaurant menu page
- **`/contact`** - Contact information page

## 📊 Dashboard Metrics

The dashboard currently displays dummy data for demonstration purposes. It includes:

- **Flow Analysis**: Total flows, screen flows, auto-launched, and triggered flows
- **Apex Statistics**: Total classes, invocable methods, controllers, test classes, batch classes
- **Health Metrics**: Code coverage percentage, SOQL/DML governor limit usage, storage usage
- **License Information**: Salesforce, Platform, and Integration license usage
- **API Usage**: Daily API calls vs. limit
- **Security Score**: Overall org security rating
- **Storage Metrics**: Data and file storage usage
- **Automation Tools**: Count of workflows, process builders, flows, and triggers
- **Custom Metadata**: Custom objects, fields, validation rules, and settings

## 🔮 Future Enhancements

- Connect to real Salesforce API for live data
- Add user authentication
- Implement data filtering and date range selection
- Add export functionality for reports
- Enhanced visualizations with charts and graphs
- Real-time data updates using WebSockets

## 👨‍💻 Author

Anil Shivaraj

## 📝 License

ISC

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

For any questions or feedback, please use the contact page on the website.
