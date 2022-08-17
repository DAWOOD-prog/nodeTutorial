const os = require("os");

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
console.log(os.userInfo());
console.log(os.uptime());
