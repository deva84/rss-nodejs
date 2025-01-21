import fs from "fs";
import path from "path";

const renameFiles = (directory) => {
  fs.readdirSync(directory).forEach((file) => {
    const fullPath = path.join(directory, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory() && file === "node_modules") {
      return;
    }

    if (stats.isDirectory()) {
      renameFiles(fullPath);
    } else if (stats.isFile()) {
      if (file.endsWith(".js")) {
        fs.renameSync(fullPath, fullPath.replace(/\.js$/, ".ts"));
      } else if (file.endsWith(".jsx")) {
        fs.renameSync(fullPath, fullPath.replace(/\.jsx$/, ".tsx"));
      }
    }
  });
};

renameFiles("./src");
