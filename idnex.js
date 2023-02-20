// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(2);
// console.log(months);
// create conditions for exit code options
// example: 0 typically implies without errors, 1 with.
process.exitCode = 1;
process.on('beforeExit', () => {
    console.log('beforeExit event');
});
console.log('aaaaaaaaaaaa');
process.on('exit', (code) => {
  console.log(`exit event with code: ${code}`);
});
//node js module
//module
//timer, console
//process, path, file system, http/https, url, tls/ssl
//Node.js uses the Common JS
