const express = require('express')
const router = express.Router()


router.get('/', function(req, res){

    const query = req.query
	res.send({
        status: 0,
        msg: 'message',
        data: query
    })
})

router.get('/get', function(req, res){
	res.send("hello get")
})

router.get('/post', function(req, res){
    const body = req.body
	res.send({
        status: 0,
        msg: 'message',
        data: body
    })
})


module.exports = router