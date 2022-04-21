// TODO: Add code to generate markdown for README given a data object parameter containing the user input.
function generateMarkdown(data) {
  return `# ${data.title}
  
  ![badge](https://img.shields.io/badge/license-${data.license}-important)
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [License](#license)
  - [Testing](#testing)
  - [Contact](#contact)

  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
 
  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}
  
  ## License
  ${data.license}
  
   ## Testing
  ${data.testing}
  
  ## Contact:
  ${data.username} (https://github.com/${data.username})  
  ${data.email}`

;
}

module.exports = generateMarkdown;
