const path = require('path');
const express = require('express');
const hbs = require('hbs')

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static assets
app.use(express.static(publicDirectoryPath))

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Chuck Smith'
  })
})

app.get('/about', (req, res) => {
  res.render('index', {
    title: 'About Me',
    name: 'Chuck Smith'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    helpText: 'This is some helpful text.',
    name: 'Chuck Smith'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is snowing ... I wish.',
    location: 'Wilmington NC'
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Andrew Mead',
    errorMessage: 'Help article not found.'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Andrew Mead',
    errorMessage: 'Page not found.'
  })
})

app.listen(5000, () => {
  console.log('Server is up on port 5000.');
});
