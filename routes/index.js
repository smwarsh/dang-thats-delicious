const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // res.send('Hey! It works!');
  const steph = { name: 'Steph', age: 2, cool: true };
  // res.json(steph);
  res.render('hello', {
    name: 'steph',
    cat: req.query.cat
  });
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
