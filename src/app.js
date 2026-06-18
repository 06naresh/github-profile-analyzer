const express = require('express');

const app = express();

// Middleware
app.use(express.json());

// Root test route
app.get('/', (req, res) => {
    res.json({ message: 'GitHub Profile Analyzer API' });
});

module.exports = app;
