const { Robot, Constants, Interfaces } = require('ftl-robot-host');
const winston = require('winston');
const commandLineArgs = require('command-line-args');

const tsFormat = () => (new Date()).toLocaleTimeString();
const logger = new (winston.Logger)({
    filters: [
        (level, msg, meta) => {
            return '[ftl-lab-robot] ' + msg;
        }
    ],
    transports: [
        // colorize the output to the console
        new (winston.transports.Console)({
        timestamp: tsFormat,
        colorize: true,
        })
    ]
});