const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require('jsonwebtoken');
let User = require('../../models/user');


router.post('/', function(req, res, next) {
    let user = new User(
        firstName = req.body.firstName,
        lastName  = req.body.lastName,
        password = bcrypt.hashSync(req.body.password, 10), // user ssl to encript 
        email = req.body.email
    );

    user.save(function(err, result){
        if(err) {
            return res.status(500).json({
                title:'an error occured',
                error: err
            })
        }
        res.status(201).json({
            message: 'user created',
            obj: result
        })
    });
});

router.post('/signin', function (req, res, next) {
    User.findOne({email: req.body.email}, function (err) {
        if(err) {
            return res.status(500).json({
                title:'an error occured',
                error: err
            })
        }
        if (!user) {
            return res.status(401).json({
                title: 'login failed',
                error: {message: 'invalid login credentials'}
            })
        }

        if(bcrypt.compareSync(req.body.password, user.password) ) {
            return res.status(401).json({
                title: 'login failed',
                error: {message: 'invalid login credentials'}
            })
        }

        let token = jwt.sign({user: user }, 'secret', {expiresIn: 7200});
        res.status(200).json({
            message: 'success fully logged in',
            token: token,
            userId: user._id
        })
    })
});

module.exports = router;