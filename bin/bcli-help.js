const { program } = require("commander");
const chalk = require("chalk");

program.on("--help", () => {
    console.log("test");
    console.log("");
    console.log(chalk.gray("# create a docker template"));
    console.log(chalk.green("$ bcli init docker-compose my-project"));
    console.log("");
});
