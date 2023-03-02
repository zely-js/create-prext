function get(req, res) {
  // edit "/middlewares/message.ts".
  res.json({ message: req.message });
}

module.exports.get = get;
