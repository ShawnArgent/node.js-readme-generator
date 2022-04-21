// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");


// TODO: import the generateMarkdown function from utils/generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Write code to get user input, generate markdown, and save it to a file.


const questions = [
      
    {
        type: "input",
        name: "title",
        message: "Enter project title?"
    },

    {
        type: "input",
        name: "description",
        message: "Enter a brief description of your application."
    },

    {
        type: "input",
        name: "username",
        message: "Enter your Github username."
    },

    {
        type: "input",
        name: "repo",
        message: "Enter the Github repository name"
    },

    
    
    {
        type: "input",
        name: "installation",
        message: "Enter any installation requirements."
    },
    
    {
        type: "input",
        name: "usage",
        message: "Enter a brief description how the application is used."
    },
    
    {
        type: "input",
        name: "contributors",
        message: "List any other contributors to your project."
    },

    {
        type: "list",
        message: "What license are you using? ",
        name: "license",
        choices: ["Apache", "GNU", "MIT", "ISC", "None"]     
    },
     
    {
        type: "input",
        name: "testing",
        message: "Is there a test method for this application?"
    },
    
    {
        type: "input",
        name: "email",
        message: "Enter your email address."
    }
        
    ];
// end array 

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions).then(function(userInput) {
        
        const markdownString = generateMarkdown(userInput)

        // TODO: Create a function to write README file
        fs.writeFile('README.md', markdownString, function(err) {
            if(err) {
                console.log(err)
            }
            else {
                console.log('Your Professional README is ready.')
            }
        })
    },

    )}
    //called when
init();