// TODO: Include packages needed for this application
import fs from 'fs/promises';

import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose your license.',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC', 'None'],
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    try {
    await fs.writeFile(fileName, data);
        console.log('README.md has been created!');
    } catch (error) {
        console.error('Error writing README.md: ', error);
    }
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        console.log(answers);
        writeToFile('test.md', generateMarkdown(answers));
    } catch (error) {
        console.error(error);
    }
}

// Function call to initialize app
init();