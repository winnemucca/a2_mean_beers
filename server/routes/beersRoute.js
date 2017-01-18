const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

let Beer = require('./beer_model.js');
//beer add file todo
const _ = require('lodash');

/* GET beerApi listing. */

/*create */
router.post('/beer', (req, res) => {
    let newBeer = new Beer(req.body);
    newBeer.save(function(err) {
        if(err) {
            res.json({info: 'error during find beers', error: err});
        }
        res.json({info: 'beer created successfully'});
    });
});

router.get('/beer', (req, res) => {
    Beer.find(function(err, beers) {
        if(err) {
            res.json({info: 'error during find beers', error: err})
        };
        res.json({info: 'beers found successfully', data: beers})
    });
});

router.get('/beer/:id', (req, res) => {
    Beer.find(function(err, beers) {
        if(err) {
            res.json({
                info: 'error during find beers', 
                error: err
            });
        }
        if (beer) {
            res.json({info: 'beer found successfully', data: beer})
        }
        else {
            res.json({info: 'beer not found'})
        }
    });
});


router.put('/beer/:id', (req, res) => {
    Beer.findById(req.params.id, function (req, res) {
        if(err) {
            res.json({
                info: 'error during updating beers', 
                error: err
            })
        }
        res.json({info: 'beer updated successfully'})
    })
    res.json({info: 'beer updated successfully'});
});

router.delete('/:id', (req, res) => {
    _.remove(_beers, function(beer) {
        return beer.name === req.params.id;
    });
    res.json('cat removed successfully');
});

module.exports = router;
