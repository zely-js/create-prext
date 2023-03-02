const users = {
  1: { name: 'anonymous #1', about: 'I love cat.' },
  2: { name: 'anonymous #2', about: 'Hello.' },
  3: { name: 'anonymous #3', about: 'Awesome.' },
};

function get(req, res) {
  res.json(users[req.params.id]);
}

module.exports.get = get;
