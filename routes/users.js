var express = require('express');
var router = express.Router();
const { User } = require('../models');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const users = await User.findAll(); 
    res.render('users', { users }); 
  } catch (error) {
    next(error); 
  }
});

module.exports = router;
