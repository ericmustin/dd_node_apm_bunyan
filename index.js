const tracer = require('dd-trace').init({
  logInjection: true
});
const axios = require('axios');
const express = require('express');
const winston = require('winston');
const log = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'example-service' },
  transports: [
    new winston.transports.File({ filename: 'logs.json' })
  ]
});



// const bunyan = require('bunyan'); 
// const log = bunyan.createLogger({ 
//   name: 'general-display-web',
//   streams: [
//     {
//       level: 'info',
//       path: 'logs.json'
//     }
//   ] 
// });

// Comment out this section to see via terminal instead

// const log = bunyan.createLogger({ 
//   name: 'general-display-web', 
// });

const example = async (req,res) => {
  for (let i = 0; i < 3; i++) {
  	let response = await axios.get('https://www.example.com')
  	log.info(`response status ${i} ${response.statusText}`)
  }

  res.send('ok')
}

let app = express();
app.get('*', example)
app.set('port', (process.env.PORT || 3000) );
app.listen(app.get('port'))