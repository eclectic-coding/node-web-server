const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is snowing ... I wish.',
    location: 'Wilmington NC'
  });
});

app.listen(5000, () => {
  console.log('Server is up on port 5000.');
});
