// a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Testing](#testing)
  - [Additional Info](#additional-info)
  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## Contributors:
  ${data.contributors}
  ## Testing:
  ${data.testing}
  ## Additional Info:
  - Github: [${data.github}](https://github.com/${data.github})
  ## Questions and Contribution instructions: 
  Please contact this email address with any questions about the project or if you'd like to contribute!
  - Email: ${data.email} 
  ## Licensing:
  ![license](https://img.shields.io/badge/license-${data.licensing}-blue)
`;
}

module.exports = generateMarkdown;
