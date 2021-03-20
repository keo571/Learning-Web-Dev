const figlet = require("figlet");
const colors = require("colors");
const sentence = process.argv[2]

figlet(sentence, function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.america)
});