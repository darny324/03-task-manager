const notFound = (req, res) => {
  res.status(404).send('Web page not found');
}

module.exports = notFound;