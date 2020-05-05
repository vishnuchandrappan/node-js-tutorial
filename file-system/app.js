const fs = require("fs");

/** creating a file */
createFile = () => {
  fs.writeFile(
    "lorem.txt",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, molestiae. Eveniet laudantium rem enim illum voluptatum blanditiis exercitationem, aliquid ipsa. Architecto eligendi molestias quas dolor quae similique aut delectus ducimus",
    (error) => {
      error ? console.log(error) : console.log("File Created Successfully !");
    }
  );
};

/** reading a file */
readFile = () => {
  fs.readFile("lorem.txt", "utf8", (error, file) => {
    error ? console.log(error) : console.log(file);
  });
};

/** renaming a file */
renameFile = (currentName, newName) => {
  fs.rename(currentName, newName, (error) => {
    error
      ? console.log(e)
      : console.log(`File renamed from ${currentName} to ${newName} !`);
  });
};

/** Append data to file */
appendDataToFile = (fileName, data) => {
  fs.appendFile(fileName, data, (error) => {
    error ? console.log(error) : console.log("Data Appended");
  });
};

deleteFile = (fileName) => {
  fs.unlink(fileName, (error) => {
    error ? console.log(error) : console.log(`File Deleted : ${fileName}`);
  });
};

/**
 * Function calls to above functions
 */

// createFile();
// readFile();
// renameFile("lorem.txt", "ipsum.txt");
// appendDataToFile('ipsum.txt','some random text');
// deleteFile('ipsum.txt');



/**
 *
 * Read More about file systems : https://nodejs.org/api/fs.html
 *
 */
