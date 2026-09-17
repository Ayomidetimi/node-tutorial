const os = require('os');

// info about the user 

const user = os.userInfo();
console.log(user)

// methods returns the system uptime in seconds

console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(currentOs);