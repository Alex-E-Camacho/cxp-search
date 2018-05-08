const Search = require('../models').Search;

module.exports = {
    create(req, res) {
        return Search
        .create({
          text: req.body.search_text  
        })
        .then(search => res.status(201).send(search))
        .catch(error => res.status(400).send(error));
    }
};