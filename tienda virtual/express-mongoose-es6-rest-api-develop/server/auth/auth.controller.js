const jwt = require('jsonwebtoken');
const httpStatus = require('http-status');
const APIError = require('../helpers/APIError');
const config = require('../../config/config');
const User = require('./../user/user.model');


/**
 * Returns jwt token if valid username and password is provided
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function login(req, res, next) {
  User.findOne({
    username: req.body.username
  }, (err, usuario) => {
    if (!usuario) {
      return res.status(500).send({
        message: 'El usuario no existe'
      });
    }

    if (usuario) {
      // Comprobar que las password coincidan
      if (req.body.password === usuario.password) {
        const token = jwt.sign({
          username: usuario.username,
          role: usuario.role,
          email: usuario.email
        }, config.jwtSecret);
        return res.json({
          token,
          username: usuario.username,
          role: usuario.role,
          email: usuario.email
        });
      }

      const err2 = new APIError('Authentication error', httpStatus.UNAUTHORIZED, true);
      return next(err2);
    }
  });
}

/**
 * This is a protected route. Will return random number only if jwt token is provided in header.
 * @param req
 * @param res
 * @returns {*}
 */
function getRandomNumber(req, res) {
  // req.user is assigned by jwt middleware if valid token is provided
  return res.json({
    user: req.user,
    num: Math.random() * 100
  });
}

function getTokenData(req, res) {
  // req.user is assigned by jwt middleware if valid token is provided
  return res.json(req.user);
}

module.exports = { login, getRandomNumber, getTokenData };
