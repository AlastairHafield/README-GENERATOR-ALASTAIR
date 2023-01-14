// a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Info](#additional-info)
  ## Description:
  ${data.description}
  ## Installation:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## Contribution:
  ${data.contribution}
  ## Testing:
  ${data.testing}
  ## Additional Info:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email} 
  ## Licensing:
  [![license](https://img.shields.io/badge/license-${data.licensing}-blue)]
`;
}

module.exports = generateMarkdown;
