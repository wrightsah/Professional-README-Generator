// Require file structure

const fs = require("fs");

// Require inquirer package

const inquirer = require("inquirer");

// Questions

inquirer
  .prompt([
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
      type: "list",
      name: "license",
      message: "What type of license would you like to use?",
      choices: [
        "Apache License 2.0",
        "GNU General Public License",
        "MIT License",
      ],
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
  ])
  .then((data) =>
    // console.log(response)
    fs.appendFile(
      "README.md",

      // README Contents

      `# ${data.title}

      ## Description ${data.descripton}
      
      ## Table of Contents
      * [Installation](#Installation)
      * [Usage](#Usage)
      * [License](#License)
      * [Contributing](#Contributing)
      * [Tests](#Tests)
      * [Questions](#Questions)
      
      ## Installation
      Run the following command to install dependecies:
      \`\`\`
      ${data.installation}
      \`\`\`

      ## Usage
      ${data.usage}

      ## License
      This project uses the following license: ${data.license}

      ## Contributing
      ${data.contributing}
      
      ## Tests
      Run the following command to run tests: 
      \`\`\`
      ${data.tests}
      \`\`\`
      
      ## Questions
      If you have any questions, you may contace me at ${data.email}. 
    
      `,

      (error) => {
        error ? console.log(error) : console.log("README creation successful!");
      }
    )
  );
