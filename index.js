const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('client/build'));

  // Express will serve the index.html file
  // if it dosen't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 8080;

app.listen(PORT);

console.log('server running on port: ' + PORT + '\n environment = ' + process.env.NODE_ENV);