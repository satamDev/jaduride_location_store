const winston = require('winston');

const logConfiguration = {
    'transports': [
        new winston.transports.File({            
            filename: 'logs/allLogs.log'
        })
    ],
    format: winston.format.combine(    
       winston.format.timestamp({
           format: 'MMM-DD-YYYY HH:mm:ss.SSS'
       }),    
       winston.format.printf(info => `[${info.level}]: ${[info.timestamp]}: ${JSON.stringify(info.message)}`),
    )
};

const logger = winston.createLogger(logConfiguration);

module.exports = logger;