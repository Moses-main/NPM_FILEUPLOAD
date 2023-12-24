const filesPayloadExists = (req, res, next) => {
  if (!req.files)
    return res.status(404).json({ status: "error", message: "Missing files" });
  next();
};

module.exports = filesPayloadExists;
