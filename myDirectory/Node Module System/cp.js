//Child process is a node module used to create sub process within a script
//One can perform different tasks with one's script by just using some methods
//define a variable and call a process
const cp = require('child_process')
//Opens the calculator on the screen
//cp.execSync('calc')
//Opens Chrome
cp.execSync('Start Chrome')