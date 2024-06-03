var express = require('express'),
    Sentiment = require('sentiment');

var router = express.Router(),
    sentiment = new Sentiment();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sentiment Analyzer' });
});

router.get('/get-data', function(req,res,next) {
  console.log(req.query);

  var result = sentiment.analyze(req.query.phrase);
  console.log(result);

  var sentimentResult = result.score > 0 ? "positive" : "negative";
  res.render('index', { title: 'Sentiment Analyzer ', sentiment: sentimentResult }) 
});

module.exports = router;
