module.exports = templateData => {
  
    return `
# ${templateData.title}
![dump](https://img.shields.io/badge/License-${templateData.license}-green)

## Description 

${templateData.description}

## Table of Contents


* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)


## Installation

${templateData.installation}

## Usage 

${templateData.usage}

## Contributing

${templateData.contribution}

## Tests

${templateData.test}

## License

${templateData.license}

## Questions?
Github: [${templateData.github}](https://github.com/${templateData.github})
Feel free to email me with any questions at ${templateData.email}
    `;
  };