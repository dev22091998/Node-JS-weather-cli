import getArgs  from './helpers/args.js';
import { getWeather } from './services/api.services.js';
import { printError, printSucces, printHelp, printWeather } from './services/log.service.js';
import { getKeyValue, saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';
const saveToken = async token => {
    if(! token.length) {
        printError('Token doesn\'t exist')
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSucces('Token was saved succesfully')
    } catch (err) {
        printError(err.message)
    }
}
const saveCity = async city => {
    if(! city.length) {
        printError('City doesn\'t exist')
        return
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city)
        printSucces('City was saved succesfully')
    } catch (err) {
        printError(err.message)
    }
}
const getForcast = async () => {
    try {
        const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city))
        const response = await getWeather(city);
        printWeather(response)
    } catch (err) {
        if(err?.response?.status == 404) {
            printError('City not found ):')
        } else if(err?.response?.status == 401) {
            printError('Invalid token')
        } else {
            printError(err.message)
        }
    }
    
}
const startCli = () => {
    const args = getArgs(process.argv)
    // console.log(args) 
    // console.log(process.env) 
    if(args.h){
      return printHelp()
    }
    if(args.s){
       return saveCity(args.s)
    }
    if(args.t){
        return saveToken(args.t)
    }
    getForcast()
}
startCli()