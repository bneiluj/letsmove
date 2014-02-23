var statik = require('statik');
console.log(process.env.PORT)
statik(process.env.PORT || 3000);