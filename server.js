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
                soql: 45, // % usage
                dml: 30   // % usage
            },
            storage: 72 // % usage
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
