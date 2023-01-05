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
const printWeather = (response) => {
    console.log(dedent`
    ${chalk.yellowBright('WEATHER')} City weather ${response.name}
    Description: ${response.weather[0].description}
    Temperature: ${response.main.temp} (feel like ${response.main.feels_like})
    Humidity: ${response.main.humidity}%
    Wind speed: ${response.wind.speed}
    `)
}
export {printError, printSucces, printHelp, printWeather}



