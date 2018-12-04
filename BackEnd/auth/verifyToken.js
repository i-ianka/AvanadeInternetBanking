const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const token = req.headers.token;
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(401).send({ error: 'Invalid Token' });

        req.userId = decoded.id;
        return next();
    });
}

module.exports = verifyToken;