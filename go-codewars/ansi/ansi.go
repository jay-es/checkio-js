package ansi

// set
const Bright = "\x1b[1m" // #fff
const Dim = "\x1b[2m"
const Underlined = "\x1b[4m"
const Blink = "\x1b[5m"
const Reverse = "\x1b[7m"
const Hidden = "\x1b[8m"

// reset
const Reset = "\x1b[0m"
const ResetBright = "\x1b[21m"
const ResetDim = "\x1b[22m"
const ResetUnderlined = "\x1b[23m"
const ResetBlink = "\x1b[24m"
const ResetReverse = "\x1b[25m"
const ResetHidden = "\x1b[26m"

// FG
const Default = "\x1b[39m"
const Black = "\x1b[30m"        // #000
const Red = "\x1b[31m"          // #800
const Green = "\x1b[32m"        // #080
const Yellow = "\x1b[33m"       // #880
const Blue = "\x1b[34m"         // #008
const Magenta = "\x1b[35m"      // #808
const Cyan = "\x1b[36m"         // #088
const LightGlay = "\x1b[37m"    // #ccc
const DarkGray = "\x1b[90m"     // #888
const LightRed = "\x1b[91m"     // #f00
const LightGreen = "\x1b[92m"   // #0f0
const LightYellow = "\x1b[93m"  // #ff0
const LightBlue = "\x1b[94m"    // #00f
const LightMagenta = "\x1b[95m" // #f0f
const LightCyan = "\x1b[96m"    // #0ff
const White = "\x1b[97m"        // #fff

// BG
const BgDefault = "\x1b[49m"
const BgBlack = "\x1b[40m"
const BgRed = "\x1b[41m"
const BgGreen = "\x1b[42m"
const BgYellow = "\x1b[43m"
const BgBlue = "\x1b[44m"
const BgMagenta = "\x1b[45m"
const BgCyan = "\x1b[46m"
const BgLightGray = "\x1b[47m"
const BgDarkGray = "\x1b[100m"
const BgLightRed = "\x1b[101m"
const BgLightGreen = "\x1b[102m"
const BgLightYellow = "\x1b[103m"
const BgLightBlue = "\x1b[104m"
const BgLightMagenta = "\x1b[105m"
const BgLightCyan = "\x1b[106m"
const BgWhite = "\x1b[107m"
