const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const logsDir = 'logs';
const logFile = path.join(logsDir, 'access.log');

// Ensure logs directory exists
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

app.get('/', (req, res) => {
    const logMessage = `${new Date().toISOString()} - ${req.ip} accessed ${req.originalUrl}\n`;

    // Append the log message to the access.log file
    fs.appendFile(logFile, logMessage, (err) => {
        if (err) {
            console.error(`Failed to write to log file: ${err}`);
        }
    });

    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
