const validateToken = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ err: "TOKEN_IS_INVALID_OR_MISSED" });
  }

  next();
};

module.exports = validateToken;
