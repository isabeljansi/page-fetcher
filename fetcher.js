const fs = require("fs");
const args = process.argv;

const request = require('request');
request(args[2] , (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the example.edu homepage.

console.log('BEFORE writeFile call');

fs.writeFile(args[3], body, (error) => {
  if (error) {
    // Handle error
    console.log("Failed to write to file");
    return;
  }
  // Success!

  console.log("Successfully wrote to file");

  fs.stat(args[3], (err, stats) => {
    const size = stats.size
    if (err) {
        console.log(`File doesn't exist.`);
    } else {
        console.log(`Downloaded and saved ${size} bytes to ${args[3]}`)
    }
});

});


console.log('AFTER writeFile call');
});

