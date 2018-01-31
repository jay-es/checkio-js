/* eslint-disable key-spacing */

module.exports = {
    // set
    bright:     '\x1b[1m', // #fff
    dim:        '\x1b[2m',
    underlined: '\x1b[4m',
    blink:      '\x1b[5m',
    reverse:    '\x1b[7m',
    hidden:     '\x1b[8m',

    // reset
    reset:           '\x1b[0m',
    resetBright:     '\x1b[21m',
    resetDim:        '\x1b[22m',
    resetUnderlined: '\x1b[23m',
    resetBlink:      '\x1b[24m',
    resetReverse:    '\x1b[25m',
    resetHidden:     '\x1b[26m',

    // FG
    default:      '\x1b[39m',
    black:        '\x1b[30m',
    red:          '\x1b[31m', // #800
    green:        '\x1b[32m', // #080
    yellow:       '\x1b[33m', // #880
    blue:         '\x1b[34m', // #008
    magenta:      '\x1b[35m', // #808
    cyan:         '\x1b[36m', // #088
    lightGlay:    '\x1b[37m', // #ccc
    darkGray:     '\x1b[90m', // #888
    lightRed:     '\x1b[91m', // #f00
    lightGreen:   '\x1b[92m', // #0f0
    lightYellow:  '\x1b[93m', // #ff0
    lightBlue:    '\x1b[94m', // #00f
    lightMagenta: '\x1b[95m', // #f0f
    lightCyan:    '\x1b[96m', // #0ff
    white:        '\x1b[97m', // #fff

    // BG
    bgDefault:      '\x1b[49m',
    bgBlack:        '\x1b[40m',
    bgRed:          '\x1b[41m',
    bgGreen:        '\x1b[42m',
    bgYellow:       '\x1b[43m',
    bgBlue:         '\x1b[44m',
    bgMagenta:      '\x1b[45m',
    bgCyan:         '\x1b[46m',
    bgLightGray:    '\x1b[47m',
    bgDarkGray:     '\x1b[100m',
    bgLightRed:     '\x1b[101m',
    bgLightGreen:   '\x1b[102m',
    bgLightYellow:  '\x1b[103m',
    bgLightBlue:    '\x1b[104m',
    bgLightMagenta: '\x1b[105m',
    bgLightCyan:    '\x1b[106m',
    bgWhite:        '\x1b[107m',
};
