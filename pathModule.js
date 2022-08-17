const filepath = require("path");
console.log(filepath.sep);
console.log(filepath.join("/content", "subfolder", "test.txt"));
console.log(filepath.basename("/content/subfolder"));
console.log(filepath.resolve(__dirname, "content", "subfolder", "test.txt"));
