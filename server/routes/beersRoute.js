const express = require('express');
const router = express.Router();

let Beer = require('../models/beer_model.js');
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

/*Update */
router.put('/beer/:id', (req, res) => {
    Beer.findById(req.params.id, function (err, beer) {
        if(err) {
            res.json({
                info: 'error during updating beers',
                error: err
            })
        }
        if (beer) {
            _.merge(beer, req.body);
            beer.save(function(err) {
                if(err) {
                    res.json({info: 'error during cat update', error: err});
                }
                res.json({info: 'cat updated successfully'});
            });
        }
        else {
            res.json({info: 'cat not found'});
        }
        res.json({info: 'beer updated successfully'})
    })
});

router.delete('/:id', (req, res) => {
    Beer.findByIdAndRemove(req.params.id, function(err) {
        if(err) {
            res.json({info: 'error during remove cat', error: err});
        }
        res.json({info: 'cat removed successfully'});
    })
});

module.exports = router;
