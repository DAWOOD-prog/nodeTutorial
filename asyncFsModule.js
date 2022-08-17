const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  } else {
    const first = data;
    readFile("./content/second.txt", "utf-8", (error, result) => {
      if (error) {
        console.log(error);
        return;
      } else {
        const second = result;
        writeFile(
          "./content/newlyCreatedFileByAsync.txt",
          `here is the data of both files ${first} , ${second}`,
          (err, result) => {
            if (error) {
              console.log(error);
              return;
            } else {
              readFile(
                "./content/newlyCreatedFileByAsync.txt",
                "utf-8",
                (error, data) => {
                  if (error) {
                    console.log(error);
                    return;
                  } else {
                    console.log(data);
                  }
                }
              );
            }
          }
        );
      }
    });
  }
});
