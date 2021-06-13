'use strict';

module.exports = (req, res) => {
  const challenge = req.body?.challenge || 'not provided';
  console.log({ challenge });
  res.status(200).send({ message: 'ok', challenge });
};
