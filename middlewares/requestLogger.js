const fs = require('fs');
const path = require('path');

function logRequests(req, res, next) {
    const { method, originalUrl } = req;
    const date = new Date().toISOString();
    const logMessage = `${date} [${method} ${originalUrl}]\n`;

    const logFilePath = path.join(__dirname, '../logs/request.log');

    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error('Error al escribir en el archivo de registro:', err);
        }
    });

    next();
}

module.exports = logRequests;
