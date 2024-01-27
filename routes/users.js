var express = require('express');
var router = express.Router();


const fetch = require('node-fetch');
const Users = require('../models/users');
const {checkBody} = require('../modules/checkBody')

// INSCRIPTION 

router.post('/signup', (req, res) => {
    if(!checkBody(req.body, ["name","password","email"])){
        res.json({ result:   false, error: 'Missing or empty fields' })
        return;
    }
    Users.findOne({email : req.body.email}).then(data =>{
        if (data){
            res.json({ result: false, error: 'User already exists' } )
        }else{
            
            const newUser = new Users({
                name : req.body.name,
                email: req.body.email,
                password: req.body.password
            })

            newUser.save().then(data => {
                console.log(data)
                res.json({result: true})    
            })
                     
        }
    })
});

   
router.post('/signin', (req, res) => {

    if(!checkBody(req.body, ["password","email"])){
        res.json({ result:   false, error: 'Missing or empty fields' })
        return;
    }
    Users.findOne({email : req.body.email}).then(data => {
    if(!data){
        res.json({ result: false, error: 'User not found' })
    }else{
        res.json({result: true})
    }
    })
});

module.exports = router;