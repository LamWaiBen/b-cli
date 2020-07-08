#!/usr/bin/env node
const program = require('commander');
const chalk = require("chalk");
const version = require('../package.json').version;

program
.version(version)
.command('init', 'init a template')
.command('help', 'help description')
.parse(process.argv)




program.on("--help", () => {
    console.log("test");
    console.log("");
    console.log(chalk.gray("# create a docker template"));
    console.log(chalk.green("$ bcli init docker-compose my-project"));
    console.log("");
});
