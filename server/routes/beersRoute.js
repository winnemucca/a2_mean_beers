const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
//beer add file todo
const _ = require('lodash');

module.exports = function (app) {
    _beers = [];

    /*create */
    app.post('/beer', (req, res) => {
        _beers.push(req.body);
        res.json({info: 'beer created successfully'});
    });

    app.get('/beer/:id', (req, res) => {
        res.send(
            _.find(
                _beers,
                {
                    name: req.params.id
                }
            )
        )
    });


    app.put('/:id', (req, res) => {
        let index = _.findIndex(
            _cats,
            {
                name: req.params.id
            }
        );
        _.merge(_cats[index], req.body);
        res.json({info: 'beer updated successfully'});
    });

    app.delete('/:id', (req, res) => {
        _.remove(_beers, function(beer) {
            return beer.name === req.params.id;
        });
        res.json('cat removed successfully');
    });
}

