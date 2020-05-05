const fs = require("fs");

/** Creating a new folder or directory */
makeDirectory = (dirName) => {
  fs.mkdir(dirName, (error) => {
    error
      ? console.log(error)
      : console.log(`Directory Created Successfully with name ${dirName}`);
  });
};

/** Deleting a directory */
removeDirectory = (dirName) => {
  fs.rmdir(dirName, (error) => {
    error
      ? console.log(error)
      : console.log(`Directory Deleted Successfully : ${dirName}`);
  });
};

/** Creating a file inside a folder */
fileInsideFolder = (dirName, fileName, data) => {
  makeDirectory(dirName);
  fs.writeFile(`./${dirName}/${fileName}`, data, (error) => {
    error
      ? console.log(error)
      : console.log(`${fileName} created successfully inside ${dirName}`);
  });
};

/** Force Delete a non-empty directory [experimental feature] */
forceDeleteDirectory = (dirName) => {
  fs.rmdir(
    dirName,
    {
      recursive: true,
    },
    (error) => {
      error ? console.log(error) : console.log(`${dirName} deleted !`);
    }
  );
};

/** Read all files from a folder */
readAllFiles = (dirName) => {
  fs.readdir(dirName, (error, files) => {
    error ? console.log(error) : console.log(files);
  });
};

// makeDirectory("random-folder-name");
// removeDirectory("random-folder-name");
// fileInsideFolder("new-folder", "new-file", "new-data");
// forceDeleteDirectory("new-folder");
// readAllFiles('new-folder');
