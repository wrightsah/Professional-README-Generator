// Require file structure

const fs = require("fs");

// Require inquirer package

const inquirer = require("inquirer");

// Questions

inquirer.prompt([
  {
    type: "input",
    name: "username",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "emailAddress",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "descripton",
    message: "How would you describe your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What is necessary for installation?",
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies?",
  },
  {
    type: "checkbox",
    name: "licenseInput",
    message: "What type of license would you like to use?",
    choices: [],
  },
  {
    type: "input",
    name: "contributing",
    message: "How to contribute to the project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
  },
  {},
]);

// README Contents

// Description

// Table of Contents

// Installation

// Usage

// License

// Contributing

// Tests

// Questions
