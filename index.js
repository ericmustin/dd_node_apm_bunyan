const tracer = require('dd-trace').init({
  logInjection: false //enable by setting to true to demonstrate 
});

const tracer = require('dd-trace').init({
  logInjection: true //
});

const express = require('express');
const winston = require('winston');
const log = winston.createLogger({
  level: 'error',
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.metadata(),
    winston.format.json(),
  ),  
  defaultMeta: { service: 'example-service' },
  transports: [
    new winston.transports.File({ filename: 'logs.json' })
  ]
});


class ExampleCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "ExampleCustomError";
  }
}

const example = (req,res) => { 
  try {
    throw new ExampleCustomError('ok this is a message of a custom error')
    res.send('ok pass')
  } catch (e) {
    log.error(e)
    res.send('ok fail')
  }
}

let app = express();
app.get('*', example)
app.set('port', (process.env.PORT || 3000) );
app.listen(app.get('port'))