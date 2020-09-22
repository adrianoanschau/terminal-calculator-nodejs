const inquirer = require('inquirer');

module.exports = function (name, message) {
    return inquirer.prompt([{
        type: 'input', name, message,
    }]);
};