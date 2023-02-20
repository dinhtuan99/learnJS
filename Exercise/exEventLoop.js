const fs = require('fs');

process.on('beforeExit', () => {
    console.log("Print Fifth");
});

setImmediate(()=> {
    console.log("Print Third");
})

setTimeout(() => {
    console.log('Print Second');
}, 0);

console.log('Print First');

fs.readFile(__filename, () => { 
    console.log("Print Forth");
})