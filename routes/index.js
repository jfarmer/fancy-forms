var express = require('express');
var router = express.Router();

let fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    embedPartial: {
      partialName: 'ingredientFields',
      partialBody: fs.readFileSync('./views/partials/ingredientFields.hbs'),
    }
  });
});

router.post('/recipes', function(req, res) {
  let recipe = req.body;

  res.send(recipe);
});

module.exports = router;
