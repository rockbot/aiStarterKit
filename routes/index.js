import express from 'express';
import { HfInference } from '@huggingface/inference';
import "dotenv/config";

const router = express.Router(),
      hf = new HfInference(process.env.HF_ACCESS);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sentiment Analyzer' });
});

router.get('/get-data', function(req,res,next) {
  const phrase = req.query.phrase;

  hf.textClassification({
    model: "distilbert-base-uncased-finetuned-sst-2-english",
    inputs: phrase
  }).then(result => {
    res.render('index', { 
      title: 'Sentiment Analyzer ', 
      phrase: phrase, 
      sentiment: result[0].label 
    })
  }).catch(err => {
    console.error(err)
  })
});

// module.exports = router;
export default router;
