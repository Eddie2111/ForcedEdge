
// modules playground, use to test modules
const bcrypt = require('bcrypt');
const test = "A5-S071";

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';     
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(myPlaintextPassword, salt);

// console.log(hash);
