var express = require('express');
var router = express.Router();
var apiCallController =require('./../controller/apiCallController');


/* GET home page. */
router.get('/', function(req, res, next) {
  apiCallController.getData().then((resp) => {
    res.render('index', { title: 'Paul Camper',data: resp.Data.Data  });

  }).catch((error)=>{
    console.log(error)
    res.render('index', { title: 'Something went worng'  });

  })

});

module.exports = router;
