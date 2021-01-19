const colors = require('colors/safe')
// import {message} from './logger.js'
// const message = require('./logger.js')
// console.log('Starting initializing...')
// setInterval(() => {console.log('.'), 200})
// clearInterval()
// setTimeout(() => {console.log('Starting initializing...')},3000)

// setInterval(() => {functionLogger()}, 200)
// setTimeout(() => {stopCounting()},3000)

var counter = 1

// function functionLogger() {
//     counter++

//     console.log(counter)
// }

// function stopCounting() {
//     clearInterval(settedInterval)
//     console.log('Programm started correctly...')
// }


const configColor = {
    Reset : '\x1b[0m',
    Bright : '\x1b[1m',
    Dim : '\x1b[2m',
    Underscore : '\x1b[4m',
    Blink : '\x1b[5m',
    Reverse : '\x1b[7m',
    Hidden : '\x1b[8m',
    FgBlack : '\x1b[30m',
    FgRed : '\x1b[31m',
    FgGreen : '\x1b[32m',
    FgYellow : '\x1b[33m',
    FgBlue : '\x1b[34m',
    FgMagenta : '\x1b[35m',
    FgCyan : '\x1b[36m',
    FgWhite : '\x1b[37m',
    BgBlack : '\x1b[40m',
    BgRed : '\x1b[41m',
    BgGreen : '\x1b[42m',
    BgYellow : '\x1b[43m',
    BgBlue : '\x1b[44m',
    BgMagenta : '\x1b[45m',
    BgCyan : '\x1b[46m',
    BgWhite : '\x1b[47m',
}

const message = {
    1: '[COMMAND] Running: ' + configColor.BgWhite + configColor.FgBlack + 'sudo npm init -y' + configColor.Reset ,
    2: 'password:',
    3: 'Wake up Giovanni...',
    4: '[COMMAND] Running: ' + configColor.BgWhite + configColor.FgBlack + 'sudo wake up' + configColor.Reset,
    5: 'password:',
    6: configColor.FgYellow + 'WARNING: Grab googles' + configColor.Reset,
    7: configColor.FgGreen + 'Push ups time' + configColor.Reset,
    8: 'Pushing ' + configColor.BgWhite + configColor.FgBlack + '...13% ' + configColor.Reset,
    9: configColor.BgWhite + configColor.FgBlack + '...37% ' + configColor.Reset,
    10: configColor.BgWhite + configColor.FgBlack + '...52% ' + configColor.Reset,
    11: configColor.BgWhite + configColor.FgBlack + '...96% ' + configColor.Reset,
    12: configColor.BgWhite + configColor.FgBlack + '...100% ' + configColor.Reset,
    13: '[COMMAND] Running: ' + configColor.BgWhite + configColor.FgBlack + 'cd ./kitchen' + configColor.Reset,
    14: '[COMMAND] Running: ' + configColor.BgWhite + configColor.FgBlack + 'node ./breakfast.js ' + configColor.Reset,
    15: 'Drinking smoothie while waiting for coffee ' + configColor.BgWhite + configColor.FgBlack + '...42% ' + configColor.Reset,
    16: configColor.BgWhite + configColor.FgBlack + '...67% ' + configColor.Reset,
    17: configColor.BgWhite + configColor.FgBlack + '...100% ' + configColor.Reset,
    18: 'Process Complete',
    19: '[COMMAND] Running: ' + configColor.BgWhite + configColor.FgBlack + 'cd ./working-place' + configColor.Reset,
    20: configColor.FgRed + '[ERROR] Resource not found' + configColor.Reset,
    21: '[COMMAND] Running: ' + configColor.BgWhite + configColor.FgBlack + 'sudo cd ./working-place' + configColor.Reset,
    22: 'password:',
    23: '[COMMAND] Running: ' + configColor.BgWhite + configColor.FgBlack + 'node ./work.js' + configColor.Reset,
    24: 'Init config' + configColor.BgWhite + configColor.FgBlack + '...7% ' + configColor.Reset,
    25: 'Fetching night changes' + configColor.BgWhite + configColor.FgBlack + '...14% ' + configColor.Reset,
    26: 'Changes retrieved' + configColor.BgWhite + configColor.FgBlack + '...17% ' + configColor.Reset,
    27: 'You got 42 emails and the first call starts in 2 minutes',
    28: '[COMMAND] Running: ' + configColor.BgWhite + configColor.FgBlack + 'node ./call.js ' + configColor.Reset,
    29: 'Configuring Interface' + configColor.BgWhite + configColor.FgBlack + '...18% ' + configColor.Reset,
    30: 'Do you want to search for camera?',
    31: '[COMMAND] Running: ' + configColor.BgWhite + configColor.FgBlack + 'n ' + configColor.Reset,
    32: configColor.FgYellow + 'WARNING: Camera not Found.' + configColor.Reset,
    33: 'Do you want to search for microphone?',
    34: '[COMMAND] Running: ' + configColor.BgWhite + configColor.FgBlack + 'y --mute ' + configColor.Reset,
    35: configColor.FgGreen + 'Microphone Found.' + configColor.Reset + configColor.FgYellow + ' ALLERT:You\'re now on mute.' + configColor.Reset,
    36: 'Wainting for Others' + configColor.BgWhite + configColor.FgBlack + '...21% ' + configColor.Reset,
    37: 'Call started' + configColor.BgWhite + configColor.FgBlack + '...87% ' + configColor.Reset,
    40: '... 93%',
    41: '... 96%',
    42: '... 99%',
    43: '... 99.6%',
    44: '... 99.7%',
    45: '... 99.71%',
    46: '... 99.73%',
    47: '... 99.734%',
    48: '... 99.735%',
    49: '... 99.7359%',
    50: '... 99.8146%',
    51: '... 99.8276%',
    52: '... 99.8334%',
    53: '... 99.9%',
    54: 'You can do it!... 99.9189%',
    55: 'What is going on?... 53%',
    56: 'Almost there... 99.9956%',
    57: 'Done everyting... 100%'
}

async function handleLogger() {
    console.log('Starting initializing...')
    let delay = Math.random() * 2000
    console.time('Initialization timer')
    handleTimeOut(message[counter], delay)
}

async function handleTimeOut(msg, delay) {
    return new Promise(() => {
        setTimeout(() => {
            // console.log('ElapsedTime: ', get)
            // console.log('delay: ', delay)
            console.log(msg) //set red color
            delay = Math.random() * 2000
            counter++
            if(message[counter]) {
                handleTimeOut(message[counter], delay) 
            } else {
                console.timeEnd('Initialization timer')
                console.log('Programm started correctly...') //reset color after this console
                console.log('Programm started correctly...', configColor.Reset)
                console.log('Programm started correctly...')
                console.log('Programm started correctly...')
            }
        }, delay)
    })
}

handleLogger()
