const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const customFormat = printf(({ level, message, timestamp }) => {
  return `${formatDate(timestamp)} => ${level}: ${message}`;
});

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" }
  return new Date(dateString).toLocaleDateString('en-US', options)
}

const logger = createLogger({
    format: combine( timestamp(), customFormat ),
    transports: [
      new transports.File({ filename: './logs/error.log', level: 'error' }),
      new transports.File({ filename: './logs/warn.log', level: 'warn' }),
      new transports.File({ filename: './logs/info.log', level: 'info' })
    ]
});

module.exports = logger;