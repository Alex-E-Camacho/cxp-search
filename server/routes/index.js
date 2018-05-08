const searchController = require('../controllers').search;
const axios = require('axios');
const bingWebSearch = require('../helpers/bingWebSearh')

module.exports = (app) => {
    app.get('/search', (req, res) => 
      res.send('React front end goes here'));
    
    app.get('/search/results', (req, res) =>
      axios.all([
        bingWebSearch.bingWebSearch('how to restart an azure vm through powerscript')
      ])
      .then(axios.spread((bing) => {
        res.send(bing)
      }))
      .catch((error) => {
        console.log(error);
      }) 
    )
  };