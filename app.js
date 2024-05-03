'use strict'

const Controller = require('./controllers/controller')
const [command] = process.argv.slice(2)

switch (command) {
    case 'read':
        Controller.read()
        break;

    default:
        break;
}