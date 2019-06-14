const fs = require("fs");
const path = require("path");

const Readme = function(markdownPath) {
  const resolvedPath = path.resolve(__dirname, markdownPath);
  return fs.readFileSync(resolvedPath, "utf-8");
};

exports.markdownFile = Readme;
