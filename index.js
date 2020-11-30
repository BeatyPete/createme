const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./src/readme-template');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter the name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project. (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter your description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide an installation process for the project. (Required)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please enter the installation process');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Tell the user how to use your project. (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter usage instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Tell the user how they can contribute to this project. (Required)',
        validate: contributionInput => {
          if (contributionInput) {
            return true;
          } else {
            console.log('Please inform the user how they cn contribute!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'test',
        message: 'Provide test instructions. (Required)',
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Please provide test instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your github username. (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter the link!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Provide an email that you can be contacted at for questions. (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter an email!');
            return false;
          }
        }
      },
      {
        type: 'list',
        name: 'license',
        message: 'Select a license.',
        choices: ['MIT', 'Apache License 2.0', 'GNU GPL v3', 'ISC',]
      }
];

// function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/readme.md', data, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
};

// function to initialize program
const init = () => {
    console.log(`
  =================
   Create a readme
  =================
  `);
    return inquirer.prompt(questions)
  };

// function call to initialize program
init()
    .then(generateReadme)
    .then(readme => {
        return writeToFile(readme);
    })
