const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // res.send('Hey! It works!');
  const steph = { name: 'Steph', age: 2, cool: true };
  res.json(steph);
});

module.exports = router;
