const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    const dummyData = {
        // Org Information
        orgInfo: {
            name: 'Production Org',
            orgId: '00D8c0000008gEX',
            edition: 'Enterprise Edition',
            instance: 'NA135',
            environmentType: 'Production',
            loginUrl: 'https://login.salesforce.com',
            createdDate: '2020-03-15',
            lastModified: '2024-11-28'
        },

        // User Metrics
        users: {
            total: 145,
            active: 132,
            inactive: 8,
            frozen: 5,
            availableLicenses: 150
        },

        // Feature Licenses
        featureLicenses: {
            marketingCloud: { assigned: 25, total: 30 },
            salesCloud: { assigned: 120, total: 150 },
            serviceCloud: { assigned: 85, total: 100 },
            cpq: { assigned: 15, total: 20 },
            chatter: { assigned: 145, total: 150 },
            knowledge: { assigned: 50, total: 75 },
            communities: { assigned: 500, total: 1000 }
        },

        // Permission Sets & Profiles
        permissionSets: {
            total: 68,
            assigned: 245,
            customSets: 42,
            standardSets: 26
        },
        profiles: {
            total: 15,
            custom: 8,
            standard: 7,
            systemAdmin: 12,
            standardUser: 95,
            readOnly: 15,
            other: 23
        },

        // Sandboxes
        sandboxes: {
            developer: { available: 15, total: 25 },
            developerPro: { available: 3, total: 5 },
            partial: { available: 0, total: 1 },
            full: { available: 0, total: 1 }
        },

        // Connected Apps & Integrations
        connectedApps: {
            total: 18,
            oauth: 12,
            saml: 6,
            active: 15
        },
        namedCredentials: {
            total: 8,
            legacy: 3,
            external: 5
        },

        // Deployment Information
        deployment: {
            lastDeployment: '2024-11-25T14:30:00Z',
            pendingChanges: 23,
            status: 'Success',
            deployedBy: 'admin@company.com'
        },

        // Email Deliverability
        emailDeliverability: {
            accessLevel: 'All Email',
            bounceRate: 2.3,
            complianceStatus: 'Good',
            dailyLimit: 5000,
            dailySent: 1250
        },

        // Platform Cache
        platformCache: {
            orgCache: { allocated: 10, used: 6.5 },
            sessionCache: { allocated: 5, used: 2.8 }
        },

        // Sharing Settings
        sharingSettings: {
            account: { internal: 'Private', external: 'Private' },
            contact: { internal: 'Controlled by Parent', external: 'Private' },
            opportunity: { internal: 'Private', external: 'Private' },
            lead: { internal: 'Public Read/Write', external: 'Private' },
            case: { internal: 'Public Read/Write', external: 'Private' }
        },

        // Existing metrics
        flows: {
            total: 150,
            screen: 46,
            autoLaunched: 60,
            triggered: 44
        },
        apex: {
            total: 320,
            invocable: 50,
            controller: 120,
            test: 100,
            batch: 50
        },
        health: {
            codeCoverage: 85,
            governorLimits: {
                soql: 45,
                dml: 30
            },
            storage: 72
        },
        licenses: {
            salesforce: { used: 45, total: 50 },
            platform: { used: 80, total: 100 },
            integration: { used: 3, total: 5 }
        },
        apiUsage: {
            daily: 12500,
            limit: 50000
        },
        securityScore: 82,
        dataStorage: {
            dataUsed: 45,
            dataTotal: 100,
            fileUsed: 62,
            fileTotal: 100
        },
        automation: {
            workflows: 25,
            processBuilders: 18,
            flows: 35,
            triggers: 42
        },
        customMetadata: {
            customObjects: 85,
            customFields: 320,
            validationRules: 45,
            customSettings: 12
        }
    };
    res.render('dashboard', { title: 'Dashboard', data: dummyData });
});

app.get('/menu', (req, res) => {
    res.render('menu', { title: 'Menu' });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Us' });
});



// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
