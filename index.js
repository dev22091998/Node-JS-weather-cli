import getArgs  from './helpers/args.js';
import { getWeather } from './services/api.services.js';
import { printError, printSucces, printHelp } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';
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

const startCli = () => {
    const args = getArgs(process.argv)
    // console.log(args)  
    if(args.h){
       printHelp()
    }
    if(args.s){
        // save 
    }
    if(args.t){
        return saveToken(args.t)
    }
    getWeather('uzbekistan')
}
startCli()