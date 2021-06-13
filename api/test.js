'use strict';

module.exports = (req, res) => {
  console.log('this is the query', req.query);
  console.log('this is the body', req.body);
  res.status(200).send({ message: 'ok' });
};
