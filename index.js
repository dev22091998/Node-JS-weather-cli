import getArgs  from './helpers/args.js';
import { printError, printSucces, printHelp } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';
const saveToken = async token => {
    try {
        await saveKeyValue('token', token)
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
    
}
startCli()