const {createLogger,transports,format} = require('winston');


// Set up our options.
const opts = {
    level: 'info',
    tableName: 'logs',
    meta:true
  };

const logger = createLogger({
    transports: [
        new transports.File({
            filename: 'info.log',
            level:'info',
            format: format.combine(format.timestamp(),format.json(),format.prettyPrint())
        })
    ]
});



module.exports = pglogger;