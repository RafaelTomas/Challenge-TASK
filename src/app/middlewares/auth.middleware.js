const jwt = require('jsonwebtoken');
require('dotenv').config();

const SCHEME = /^Bearer\s\S+$/;

function unauthorize(res, message) {
  return res.status(401).send({ error: message });
}

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return unauthorize(res, 'No token provided');
  }

  if (!SCHEME.test(authHeader)) {
    return unauthorize(res, 'Token malformatted');
  }

  const [scheme, token] = authHeader.split(' ');

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return unauthorize(res, 'Token invalid');

    req.user = {
      id: decoded.id,
    };
    return next();
  });
};
