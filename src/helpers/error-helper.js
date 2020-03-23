const errorProtocol = (error, res) => {
  if (error.statusCode) {
    return res.status(error.statusCode).send({ err: `${error.message}` });
  }
  return res.send({ err: `${error.message}` });
};

module.exports = {
  errorProtocol: errorProtocol
};
