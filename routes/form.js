const express = require('express');
const { messages } = require('./index');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('form', { title: 'New Message' });
});

router.post('/', (req, res, next) => {
  const message = {
    text: req.body.text,
    user: req.body.name,
    added: new Date(),
  };
  messages.push(message);
  res.redirect('/');
});

module.exports = router;
