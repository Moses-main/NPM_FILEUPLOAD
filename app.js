const express = require("express");
const app = express();
const PORT = 3500;
const path = require("path");
const fileUpload = require("express-fileupload");

const filesPayloadExists = require("./middlewares/filePayloadExists");
const fileExtLimiter = require("./middlewares/fileExtLimiter");
const fileSizeLimiter = require("./middlewares/fileSizeLimiter");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post(
  "/upload",
  fileUpload({ createParentPath: true }),
  filesPayloadExists,
  fileExtLimiter([".png", ".jpg", ".jpeg"]),
  fileSizeLimiter,
  (req, res) => {
    const files = req.files;
    console.log(files);
    Object.keys(files).forEach((key) => {
      const filepath = path.join(__dirname, "files", files[key].name);
      files[key].mv(filepath, (err) => {
        if (err) return res.status(500).json({ status: "error", message: err });
      });
    });
    return res.json({
      status: "success",
      message: Object.keys(files).toString(),
    });
  }
);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
