const searchController = require('../controllers').search;

module.exports = (app) => {
    app.get('/search', (req, res) => 
      res.send('React front end goes here'))
};