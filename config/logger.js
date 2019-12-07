const {
    createLogger,
    transports,
    format
} = require('winston');
require('winston-mongodb');
const logger = createLogger({
    transports: [
        new transports.File({
            filename: 'info.log',
            level: 'info',
            format: format.combine(format.timestamp(), format.json())
        }),
        new transports.MongoDB({
            level: 'error',
            db: process.env.MONGODB,
            options: {
                useUnifiedTopology: true
            },
            collection: 'babaji',
            format: format.combine(format.timestamp(), format.json())
        })
    ]
})

module.exports = logger;