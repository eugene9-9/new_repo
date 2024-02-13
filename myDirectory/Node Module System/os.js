//mostly used in gaming to satisfy the conditions that will suitable
const os = require('os')
//OS architecture (64 or 32)
console.log(os.arch())
//confirm the OS platform (win32)
console.log(os.platform())
//network interfaces information
console.log(os.networkInterfaces())
//CPU information
console.log(os.cpus())
//memory of the system
console.log(os.totalmem())
//check free system memory
console.log(os.freemem())