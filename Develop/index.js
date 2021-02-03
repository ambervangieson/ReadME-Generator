const NumberPrompt = require("inquirer/lib/prompts/number");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    .prompt([
    What is your name?
    What is the name of your project?
    Please provide a description of the project? 
    What was your motivation behind the project?
    What code style did you use?
    Please provide any screenshots you have available
    ])
    .then(answers=> {
        // use user feedback to create ReadME
    })
    .catch(error=> {
        if (error.isTtyError) {
            //Prompt couldnt be rendered in the current enviroment
        } else {
            // Something else when wrong
        }
    })
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { fs.writefile ('.prompt', function(err) {
    if (err) {
        return console.error(err);
    }
})}

// TODO: Create a function to initialize app
function init(.prompt) {
    function readyFn ( ReadME) {
         // code to run when the document is ready
    }
  $ (document ) .ready ( readyFn );
  // or :
  $ ( window ) .on ( "load", readyFn)
}

// Function call to initialize app
init( const btn = document.querySelector ('writeToFile');
btn.onclick = displayMessage ('.prompt'));
