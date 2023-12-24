const MB = 5; // 5 MB
const FILE_SIZE_LIMIT = 1024 * 1024 * MB;

const fileSizeLimiter = (req, res, next) => {
  const files = req.files;

  const filesOVerLimit = [];
  // which files are over the limit

  Object.keys(files).forEach((key) => {
    if (files[key].size > FILE_SIZE_LIMIT) {
      filesOVerLimit.push(files[key].name);
    }
  });

  if (filesOVerLimit.length) {
    const properVerb = filesOVerLimit.length > 1 ? "are" : "is";

    const sentence =
      `Upload failed. ${filesOVerLimit.toString()} ${properVerb} over the file size limit of ${MB} MB.`.replace(
        ",",
        ",  "
      );

    const message =
      filesOVerLimit.length < 3
        ? sentence.replace(",", " and")
        : sentence.replace(/,(?=[^,]*)$/, " and");

    return res.status(413).json({ status: "error", message });
  }

  next();
};

module.exports = fileSizeLimiter;
