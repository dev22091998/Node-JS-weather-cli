import chalk from "chalk";
import dedent from "dedent-js";

const printError = err => {
    console.log(chalk.bgRed(`Error ${err}`))
};
const printSucces = message => {
    console.log(chalk.bgGreen(`Succes ${message}`))
}
const printHelp = () => {
    console.log(dedent`
    ${chalk.bgCyan('HELP')}
    -s [CITY] for save city
    -h for help
    -t [API_KEY] for token
    `)
}
export {printError, printSucces, printHelp}



